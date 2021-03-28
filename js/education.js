document.addEventListener('DOMContentLoaded', function() {
  var folder = "docs/";
  var tags = 
  {
	"container": '<div class="container"><data></div>',  
	"datatag": '<div class="service_wrap">'+
                '<div class="row align-items-center">'+
                    '<div class="col-md-6 col-lg-5">'+
                        '<div class="thumb">'+
                            '<img src="<image>" alt="<imagedesc>">'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-lg-6 col-md-6">'+
                        '<div class="service_text padding_left">'+
                            '<h3><title></h3>'+
							'<h4><subtitle></h4>'+
                            '<description>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>',
	"datatag2": '<div class="service_wrap">'+
                '<div class="row align-items-center">'+
				    '<div class="col-lg-6 col-md-6">'+
                        '<div class="service_text padding_left">'+
                            '<h3><title></h3>'+
							'<h4><subtitle></h4>'+
                            '<description>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-md-6 col-lg-6">'+
                        '<div class="thumb">'+
                            '<img src="<image>" alt="<imagedesc>">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>', 
  };
  var data = 
  {
	  "education1":{
		  "title": "MScT in Artificial Intelligence &amp; Advanced Visual Computing",
		  "subtitle": "École Polytechnique (2019-2021)",
		  "image": "img/logopoly.png",
		   "imagedesc": "École Polytechnique logo",
		  "description": '<p>The École Polytechnique Master of Science and Technology in Artificial Intelligence and Advanced Visual Computing is a two-year program, entirely taught in English and designed for highly qualified and internationally oriented students. It provides you with an in-depth understanding of the most recent techniques in artificial intelligence and teaches you to implement them efficiently. </p>'+
                            '<p>This research-oriented program is at the heart of digital science and its latest, most promising applications. Its curriculum comprises two branches, namely Artificial Intelligence and Visual Computing. The first branch takes into account statistical learning and its applications in data science, while the second looks at 3D computer graphics, virtual and augmented reality, multimodal interaction, computer vision, robotics, and 3D manufacturing.</p>'
	  },
	  "education2":{
		  "title": "BSc in Computer Science",
		  "subtitle": "Università degli Studi di Padova (2014-2017)",
		  "image": "img/unipd2.png",
		   "imagedesc": "Università degli Studi di Padova logo",
		  "description": "<p>The Bachelor in computer science provides theoretical, methodological, experimental and application skills in the fundamental areas of computer science which constitute the conceptual and technological basis for the IT approach to the study of problems and for the design, production and use of the variety of applications required to organize , manage and access information and knowledge. The graduate in this class is therefore able to contribute to the planning, design, development, works management, estimation, testing and management of systems and systems for the generation, transmission and processing of information, with the use of standardized methodologies.</p>"
	  },
	  "education3":{
		  "title": "High School Diploma in Economics and Finance",
		  "subtitle": "Istituto tecnico-economico Riccati-Luzzatti (2010-2013)",
		  "image": "img/ricc2.png",
		   "imagedesc": "École Polytechnique logo",
		  "description": '<p>The Technical Economic Institute prepares a professional capable of operating competently within the world of production and trade, banks, insurance companies, public administration.</p>'+
                          '<p>The common denominator of its preparation is a solid, varied basic culture, with communicative, technical and managerial skills.</p>'
	  },
  };
  
	//FUNCTIONS DEFINITION
	function loadEducation(){
		var div = $("#educations");
	    var l = Object.keys(data);
		var span = $("#tot_found");
		span.append(''+l.length+' found');
		var alldats = '';
		l.forEach(function (item, index) {
			var dat =  index % 2 == 0 ? tags["datatag"] : tags["datatag2"];
			dat = dat.replace('<title>',data[item]['title']);
			dat = dat.replace('<subtitle>',data[item]['subtitle']);
			dat = dat.replace('<description>',data[item]['description']);
			dat = dat.replace('<image>',data[item]['image']);
			dat = dat.replace('<imagedesc>',data[item]['imagedesc']);
			alldats += dat;
			if(index%2 == 1){
				div.append(tags['container'].replace('<data>',alldats));
				alldats = '';
			}
        });
		if(alldats != ''){
			div.append(tags['container'].replace('<data>',alldats));
		}
    }
	
	
	//RUN FUNCTIONS
    loadEducation();
});


