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
							'<h4 class="works_h4"><subtitle></h4>'+
							'<h5><year></h5>'+
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
							'<h4 class="works_h4"><subtitle></h4>'+
							'<h5><year></h5>'+
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
	  "work1":{
		  "title": "CLTV Forecasting",
		  "subtitle": "Internship Project, Machine Learning, Deep Learning, Python",
		  "image": "https://www.tourmag.com/photo/art/grande/8334013-13054962.jpg?v=1444214835",
		  "year": "April 2020 - August 2020",
		   "imagedesc": "Amadeus company logo",
		  "description": '<p>This work done for Amadeus S.A.S during my internship was addressing the challenge of finding the potential big travelers of an airline company, using machine learning and deep learning to predict the Customer Lifetime Value (CLV or LTV or CLTV) of the current passengers at a future point in time given as a parameter to the model.</P>',
		  'categories': ['Artificial Intelligence', 'Data Science'],
		  'topics':['Machine Learning', 'Deep Learning', 'Internship Project','Job Projects']
	  },
	  "work2":{
		  "title": "American Sign Language Recognition",
		  "subtitle": "Deep Learning, Python",
		  "image": "https://camo.githubusercontent.com/e66312310514b1385ef4e976d5cf34d161e190e4/68747470733a2f2f642e6e6577737765656b2e636f6d2f656e2f66756c6c2f313339343638362f61736c2d67657474792d696d616765732e6a7067",
		  "year": "December 2019 - January 2020",
		   "imagedesc": "American Sign Language letters",
		  "description": "<a href=\"https://github.com/marcogma/SignLanguageProject\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Deep Learning', 'Computer Vision','School Project', 'Personal Project']
	  },
	  "work3":{
		  "title": "Geodesic In Heat",
		  "subtitle": "Digital Representation &amp; Analysis of Shape Project, C++",
		  "image": "https://www.cs.cmu.edu/~kmcrane/Projects/HeatMethod/teaser.png",
		  "year": "November 2019 - December 2020",
		   "imagedesc": "Geodesic In Heat on a bunny",
		  'categories': ['Visual Computing'],
		  'topics':['Computer Graphics', 'School Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/GeodesicInHeat\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work4":{
		  "title": "Bipedal Walker",
		  "subtitle": "Reinforcement Learning Project, Python",
		  "image": "https://gym.openai.com/videos/2019-10-21--mqt8Qj1mwo/BipedalWalkerHardcore-v2/poster.jpg",
		  "year": "February 2020 - March 2020",
		   "imagedesc": "The Bipedal walker",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Reinforcement Learning', 'School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/INF585-Reinforcement-Learning\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work5":{
		  "title": "Link Prediction",
		  "subtitle": "Machine Learning, Deep Learning, Python",
		  "image": "https://cdn2.hubspot.net/hub/19230/file-13381774-jpg/images/link_building.jpg",
		  "year": "December 2020 - January 2020",
		   "imagedesc": "Graph of links between websites",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Machine Learning', 'Deep Learning', 'School Project'],
		  "description": "<a href=\"https://github.com/marcogma/LinkPredictionOfFrenchWebGraph\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work6":{
		  "title": "Boid Fishes",
		  "subtitle": "Visual Computing, C++",
		  "image": "https://gupett.github.io/CG-Project/Images/500_boids.png?raw=true",
		  "year": "February 2020 - April 2020",
		   "imagedesc": "Boid Fishes",
		  'categories': ['Visual Computing'],
		  'topics':['Computer Animation', 'School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/BoidsFishes\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work7":{
		  "title": "The Simpsons Classifier",
		  "subtitle": "Machine Learning, Deep Learning, Python",
		  "image": "http://zachmoshe.com/images/articles/simpsons-detector/generated-images.png",
		  "year": "June 2018 - August 2018",
		   "imagedesc": "The Simpsons detector",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Machine Learning', 'Deep Learning', 'School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/The-Simpsons-Classifier\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work8":{
		  "title": "Maxi pizza",
		  "subtitle": "Operational Research, Optimization, Ampl",
		  "image": "https://media-cdn.tripadvisor.com/media/photo-s/07/06/fb/3a/pizza-parma.jpg",
		  "year": "June 2017 - August 2017",
		   "imagedesc": "The Simpsons detector",
		  'categories': ['Operational Research'],
		  'topics':['Linear Programming','School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/Maxi-pizza\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work9":{
		  "title": "Felicità regression",
		  "subtitle": "Data Mining, R",
		  "image": "https://ymcaexchanges.files.wordpress.com/2014/06/happy.jpeg",
		  "year": "June 2017 - June 2017",
		   "imagedesc": "happy face",
		  'categories': ['Data Science'],
		  'topics':['Regression', 'Statistics', 'School Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/Data-Mining-Project-Felicita-Dataset-using-R\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work10":{
		  "title": "Application for Production management",
		  "subtitle": "Software development, Internship Project, C++, Qt, PostgreSQL, Fast Fashion industry",
		  "image": "https://www.just-iou.fr/wp-content/uploads/2020/03/webdesk_adv_1_1-3.jpg",
		  "year": "July 2018 - September 2018",
		   "imagedesc": "Imperial logo",
		  "description": '<p>This work done for SOGEA S.R.L (visit https://www.sogeasoft.com/) during my internship was to develop an efficient desktop and tablet application for Imperial Fashion to manage their clothes production.</P>',
		  'categories': ['Software development', 'Database management'],
		  'topics':['Internship Project','Job Projects']
	  },
	  "work11":{
		  "title": "Software Developer at SOGEA S.R.L",
		  "subtitle": "Software development, Job Experience, C++, Qt, PostgreSQL",
		  "image": "https://www.sogeasoft.com/img/logo.png",
		  "year": "September 2018 - September 2019",
		   "imagedesc": "Sogeasoft logo",
		  "description": '<p>Permanent job I had at SOGEA S.R.L (visit https://www.sogeasoft.com/) but quit to persue my MScT studies. During this job experience my main tasks were to develop efficient desktop applications and build management systems for customers of different industries.</P>',
		  'categories': ['Software development', 'Database management'],
		  'topics':['Job Projects']
	  },
	  "work12":{
		  "title": "Liceo Scientifico Richard Feynman (School IT System)",
		  "subtitle": "Software development, C++, Qt, XML",
		  "image": "https://github.com/chrissbill23/Liceo-scientifico-Richard-Feynman/blob/master/screenshot/Login.png?raw=true",
		  "year": "May 2017 - July 2017",
		   "imagedesc": "Application logo",
		  'categories': ['Software development', 'Database management'],
		  'topics':['School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/Liceo-scientifico-Richard-Feynman\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work13":{
		  "title": "VGoose",
		  "subtitle": "Web development, Mongoose, Node.js, TypeScript",
		  "image": "img/proj_logos/vgoose.png",
		  "year": "September 2018 - ongoing",
		   "imagedesc": "vgoose logo",
		  'categories': ['Web development', 'Database management'],
		  'topics':['Framework', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/VGoose\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work14":{
		  "title": "My Eventi (accessible website)",
		  "subtitle": "Web development, PHP, HTML, Javascript, CSS, SQL",
		  "image": "img/proj_logos/myeventi.png",
		  "year": "June 2017 - September 2017",
		   "imagedesc": "my eventi logo",
		  'categories': ['Web development', 'Database management'],
		  'topics':['School Project', 'Personal Project'],
		  "description": "<a href=\"https://github.com/chrissbill23/My-Eventi-simple-accessible-web-site-\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
  };
  
	//FUNCTIONS DEFINITION
	function loadWorks( data){
		var div = $("#works");
		div.empty();
	    var l = Object.keys(data);
		var span = $("#tot_found");
		var span2 = $("#result-count-num");
		span.text('');
		span.text(''+l.length+' found');
		span2.text('');
		span2.text(l.length);
		var alldats = '';
		l.forEach(function (item, index) {
			var dat =  index % 2 == 1 ? tags["datatag"] : tags["datatag2"];
			dat = dat.replace('<title>',data[item]['title']);
			dat = dat.replace('<subtitle>',data[item]['subtitle']);
			dat = dat.replace('<description>',data[item]['description']);
			dat = dat.replace('<year>',data[item]['year']);
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
	
	function search(_all = false){
		if(_all == true){
			loadWorks(data);	
			return;
		}
		var curr_cat = $('#categories_select .nice-select .current').text();
		var all_cat = $('#categories_select select option[value=""]').text();
		var curr_topic = $('#topics_select .nice-select .current').text();
		var all_tops = $('#topics_select select option[value=""]').text();
		var l = Object.keys(data);
		s_data = {};
		l.forEach(function (item, index) {
			
			add1 = false;
			if (curr_cat !== all_cat){
				data[item]['categories'].forEach(function (value){
					if(value == curr_cat){
						add1 = true;
					}
				});
			} else{
				add1 = true;
			}
			add2 = false;
			if (curr_topic !== all_tops){
				data[item]['topics'].forEach(function (value){
					if(value == curr_topic){
						add2 = true;
					}
				});
				
			}else{
				add2 = true;
			}
			if(add1 && add2){
				s_data[item] = data[item];
			}
		});
		loadWorks(s_data);
	}
	
	function worksCatsTopics(){
	    var l = Object.keys(data);
		var cats = {};
		var topics = {};
		l.forEach(function (item, index) {
			data[item]['categories'].forEach(function (value){
				cats[value] = 1;
			});
			data[item]['topics'].forEach(function (value){
				topics[value] = 1;
			});
        });
		var categs = $("#categories_select select");
		categs.change(search);
		var categsul = $("#categories_select .nice-select ul");		
	    l = Object.keys(cats);
		l.forEach(function(item,index){
			categs.append($('<option>', {
				value: item,
				text: item
			}));
			categsul.append('<li data-value class="option selected focus">'+item+'</li>');
		});
		
		var tops = $("#topics_select select");
		tops.change(search);
		var topsul = $("#topics_select .nice-select ul");		
	    l = Object.keys(topics);
		l.forEach(function(item,index){
			tops.append($('<option>', {
				value: item,
				text: item
			}));
			topsul.append('<li data-value class="option selected focus">'+item+'</li>');
		});
		search(true);
		
	}
	
	
	//RUN FUNCTIONS
    loadWorks(data);
	worksCatsTopics();
});


