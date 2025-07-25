document.addEventListener('DOMContentLoaded', function() {
  var folder = "docs/";
  var personalinfos = 
  {
    "introduction": "<div><p>I have a strong background in mathematics, software engineering and software development.</p><p>I love working in a high international and vivid environment, socializing with new people of different cultures, backgrounds and countries. I also love travelling, composing music, watching movies, and coding frameworks and intelligent apps. </p><p>I am particularly interested in a research job position in Computer Vision and/or Natural Language Processing, that would hopefully give birth to new algorithms in the field.</p></div>",
    "mainskills": ["<div class='single_progress'> <div class='label d-flex justify-content-between'> <span>Programming</span> <span>97%</span> "+
                    "</div> <div class='progress'> <div class='progress-bar' role='progressbar' style='width: 97%' aria-valuenow='25' aria-valuemin='0' aria-valuemax=\"100\"></div></div></div>",
				"<div class='single_progress'> <div class='label d-flex justify-content-between'> <span>Machine Learning</span> <span>90%</span> "+
                    "</div> <div class='progress'> <div class='progress-bar' role='progressbar' style='width: 90%' aria-valuenow='25' aria-valuemin='0' aria-valuemax=\"100\"></div></div></div>",
				"<div class='single_progress'> <div class='label d-flex justify-content-between'> <span>Deep Learning</span> <span>93%</span> "+
                    "</div> <div class='progress'> <div class='progress-bar' role='progressbar' style='width: 93%' aria-valuenow='25' aria-valuemin='0' aria-valuemax=\"100\"></div></div></div>"
				],
	"degrees":["<div class=\"col-lg-4 col-md-6\"><div class=\"single_service text-center\"> <div class=\"icon\"> <img src=\"img/polytechnique.png\" alt=\"\"></div>"+
                    "<h3> MScT in Artificial Intelligence &amp; Advanced Visual Computing </h3><h4>2020 - 2021</h4><a href=\"education.html\" class=\"boxed-btn3-line\">Read details</a></div></div>",
					"<div class=\"col-lg-4 col-md-6\"><div class=\"single_service text-center\"> <div class=\"icon\"> <img src=\"img/unipd.png\" alt=\"\"></div>"+
                    "<h3> BSc in Computer Science </h3><h4>2014 - 2017</h4> <a href=\"education.html\" class=\"boxed-btn3-line\">Read details</a></div></div>",
					"<div class=\"col-lg-4 col-md-6\"><div class=\"single_service text-center\"> <div class=\"icon\"> <img src=\"img/ricc.png\" alt=\"\"></div>"+
                    "<h3> Professional High School Degree in Economics and Finance </h3><h4>2010-2013</h4><a href=\"education.html\" class=\"boxed-btn3-line\">Read details</a></div></div>"
					],
	"projects": ['<div class="single_gallery"> <div class="thumb"><img src="img/proj_logos/ag2r.png" alt=""></div><div class="gallery_heading"> <span>Job Experience, Software Development, Web development, Python, Java</span><h4><a href="works.html">IT Consultant at AG2R la Mondiale</a></h4></div></div>',
	             '<div class="single_gallery"> <div class="thumb"><img src="https://www.tourmag.com/photo/art/grande/8334013-13054962.jpg?v=1444214835" alt=""></div><div class="gallery_heading"> <span>Job Experience, Machine Learning, Deep Learning, Python</span><h4><a href="works.html">CLTV Estimation Project</a></h4></div></div>',
				 '<div class="single_gallery"> <div class="thumb"><img src="https://www.cs.cmu.edu/~kmcrane/Projects/HeatMethod/teaser.png" alt=""></div><div class="gallery_heading"> <span>Digital Representation &amp; Analysis of Shape Project, C++</span><h4><a href="works.html">Geodesic In Heat</a></h4></div></div>',
	          ],
	"progress_template": {
							"head_no_margin": '<div class="col-lg-5 col-md-6"></div>',
							"head_margin": '<div class="col-lg-5 offset-lg-1 col-md-6"></div>',
							"container_progress": '<div class="progress_skills"></div>',
							"single_progress": '<div class="single_progress">'+
													'<div class="label d-flex justify-content-between">'+
														'<span><name></span>'+
														'<span><num>%</span>'+
													'</div>'+
													'<div class="progress">'+
														'<div class="progress-bar " role="progressbar" style="width: <num>%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'+
													'</div>'+
												  '</div>'
		
				},
	"programming_skills":[{'name':'Software Development', 'num': 95},{'name':'Software Engineering', 'num': 90},{'name':'Web Development', 'num': 97},
						{'name':'C++', 'num': 94},{'name':'Python', 'num': 83},{'name':'C', 'num': 80},
						{'name':'Java', 'num': 86},{'name':'JavaScript', 'num': 94},{'name':'SQLite', 'num': 95},{'name':'MySQL', 'num': 91},{'name':'MongoDB', 'num': 90},
						{'name':'PostgreSQL', 'num': 87},{'name':'Qt', 'num': 95},{'name':'QtQuick', 'num': 95},{'name':'QML', 'num': 95},{'name':'PHP', 'num': 94}, {'name':'HTML5', 'num': 96},
						{'name':'XHTML', 'num': 90}, {'name':'CSS', 'num': 93}, {'name':'Node.js', 'num': 90},{'name':'React.js', 'num': 83}, 
						{'name':'Angular', 'num': 88},{'name':'TypeScript', 'num': 97},{'name':'JQuery', 'num': 96},{'name':'PlayFramework', 'num': 84}],
	"datascience_skills":[{'name':'Machine Learning', 'num': 90},{'name':'Deep Learning', 'num': 93},
						{'name':'Statistics', 'num': 85},{'name':'Reinforcement Learning', 'num': 89},{'name':'Computer Vision', 'num': 90},
						{'name':'Natural Language Processing', 'num': 75},{'name':'Scikit-Learn', 'num': 98},{'name':'Tensorflow', 'num': 80},
						{'name':'Pytorch', 'num': 69},{'name':'R', 'num': 65},{'name':'AMPL', 'num': 70}, {'name':'Matlab', 'num': 60}]
  };
	//FUNCTIONS DEFINITION
	function loadIntroduction(){
		var div = $("#perso_intro");
	    div.prepend(personalinfos['introduction']);
	    div = $("#mainskils");
		personalinfos['mainskills'].forEach(el => div.append(el));
	    div = $("#degrees");
		personalinfos['degrees'].forEach(el => div.append(el));
    }
	function loadProjects(){
		var first = '<div class="col-xl-6 col-lg-6 col-md-6">';
		var end = '</div>';
		var div = $("#projects");
		var i; html = ''+first;
		data = personalinfos['projects'];
		var count = 2;
        for (i = 0; i < data.length; i++) {
			if(count == 0){
				html = html + end;
		        div.append(html);
				count=2;
				html = ''+first;
			}
            html += data[i];
			count--;
        }
		html = html + end;
		div.append(html);
    }
	
	function loadSkills(name,id){
		var s = '';
		data = personalinfos[name];
		if(data.length == 0)
			return;
		var div = $(id);
		var head = $(personalinfos['progress_template']['head_no_margin']);
		var container =  $(personalinfos['progress_template']['container_progress']);
		var cols = 1;
		var count = 0;
        for(i = 0; i < data.length; i++) {
			s2 = personalinfos['progress_template']['single_progress'].replace('<name>',data[i]['name']);
			s2 = s2.replace('<num>',data[i]['num']);
			s2 = s2.replace('<num>%',''+data[i]['num']+'%');
			s = s + s2;
			count++;
			if (count%3==0 || i == data.length -1){
				container.append(s);
				head.append(container);
				div.append(head);
				cols++;
				if(cols % 2 == 0){
					head = $(personalinfos['progress_template']['head_margin']);
					
				} else{
					head = $(personalinfos['progress_template']['head_no_margin']);
				}
				container =  $(personalinfos['progress_template']['container_progress']);
				s = '';
			}
        }
    }
	
	
	//RUN FUNCTIONS
    loadIntroduction();
	loadProjects();
	loadSkills('programming_skills','#programming_skills');
	loadSkills('datascience_skills','#datascience_skills');
});


