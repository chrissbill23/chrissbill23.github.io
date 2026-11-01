/* ------------------------------------------------------------------
   fx.js — the animated "neural field" behind the home hero.
   A direct WebGL port of neural.glsl from the Pencil design.
   Falls back to the plain background when WebGL is unavailable,
   and renders a single still frame for prefers-reduced-motion.
   ------------------------------------------------------------------ */
(function () {
  'use strict';
  var canvas = document.querySelector('canvas[data-neural]');
  if (!canvas) return;

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'low-power' })
        || canvas.getContext('experimental-webgl');
  if (!gl) { canvas.remove(); return; }

  var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var FS = [
    'precision mediump float;',
    'uniform vec2 u_resolution;uniform float u_time;uniform float u_cell;',
    'uniform vec3 u_node;uniform vec3 u_pulse;uniform vec3 u_bg;uniform float u_intensity;',
    'vec2 h2(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return fract(sin(p)*43758.5453);}',
    'vec2 pt(vec2 c){vec2 r=h2(c);return c+0.5+0.36*vec2(sin(u_time*0.5+6.2831*r.x),cos(u_time*0.43+6.2831*r.y));}',
    'float seg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);return length(pa-ba*h);}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/u_cell;vec2 id=floor(uv);',
    ' float lines=0.0;float nodes=0.0;float pulse=0.0;',
    ' for(int i=0;i<9;i++){',
    '  vec2 ci=id+vec2(mod(float(i),3.0)-1.0,floor(float(i)/3.0)-1.0);',
    '  vec2 a=pt(ci);float d=length(uv-a);',
    '  float act=0.5+0.5*sin(u_time*1.3+h2(ci).x*20.0);',
    '  nodes=max(nodes,smoothstep(0.075,0.0,d)*(0.5+0.5*act)+0.012/(d*d+0.03)*act*0.25);',
    '  for(int j=0;j<9;j++){',
    '   if(j<=i)continue;',
    '   vec2 cj=id+vec2(mod(float(j),3.0)-1.0,floor(float(j)/3.0)-1.0);',
    '   vec2 b=pt(cj);float L=length(a-b);',
    '   if(L>1.5)continue;',
    '   float w=1.0-L/1.5;float s=seg(uv,a,b);',
    '   lines=max(lines,smoothstep(0.02,0.0,s)*w);',
    '   float t=fract(u_time*0.3+h2(ci+cj*7.0).x);',
    '   pulse=max(pulse,smoothstep(0.07,0.0,length(uv-mix(a,b,t)))*w);',
    '  }',
    ' }',
    ' vec3 col=u_bg+u_intensity*(u_node*lines*0.28+u_node*nodes*0.9+u_pulse*pulse);',
    ' gl_FragColor=vec4(col,1.0);',
    '}'
  ].join('\n');

  function sh(type, src) {
    var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { throw new Error(gl.getShaderInfoLog(s)); }
    return s;
  }
  var prog;
  try {
    prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  } catch (e) { canvas.remove(); return; }
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  var U = {};
  ['u_resolution', 'u_time', 'u_cell', 'u_node', 'u_pulse', 'u_bg', 'u_intensity'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
  function hex(h) { return [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255]; }
  var node = hex(canvas.getAttribute('data-node') || '#3DFFA2');
  var pulse = hex(canvas.getAttribute('data-pulse') || '#5CE1E6');
  var bg = hex(canvas.getAttribute('data-bg') || '#07090C');
  gl.uniform3fv(U.u_node, node); gl.uniform3fv(U.u_pulse, pulse); gl.uniform3fv(U.u_bg, bg);
  gl.uniform1f(U.u_intensity, parseFloat(canvas.getAttribute('data-intensity') || '0.9'));

  /* render at reduced internal resolution: the field is soft anyway */
  var SCALE = 0.6, CELL = 96;
  function resize() {
    var w = Math.max(1, Math.round(canvas.clientWidth * SCALE));
    var h = Math.max(1, Math.round(canvas.clientHeight * SCALE));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(U.u_resolution, w, h);
      gl.uniform1f(U.u_cell, CELL * SCALE);
    }
  }
  var start = performance.now();
  function draw(now) {
    resize();
    gl.uniform1f(U.u_time, (now - start) / 1000);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  if (reduced) { requestAnimationFrame(function (t) { draw(t); }); return; }

  var running = false, visible = true, raf = 0;
  function loop(t) { if (!running) return; draw(t); raf = requestAnimationFrame(loop); }
  function setRunning(on) {
    if (on && !running) { running = true; raf = requestAnimationFrame(loop); }
    if (!on && running) { running = false; cancelAnimationFrame(raf); }
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; setRunning(visible && !document.hidden); }, { threshold: 0 }).observe(canvas);
  }
  document.addEventListener('visibilitychange', function () { setRunning(visible && !document.hidden); });
  window.addEventListener('resize', resize);
  setRunning(true);
})();
