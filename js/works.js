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
  {	 "work27":{
		  "title": "Full-stack Web Engineer at iKe Tech",
		  "subtitle": "Job Projects, Web development, HTML, Javascript, Python",
		  "image": "img/proj_logos/ike.png",
		  "year": "February 2023 - September 2023",
		   "imagedesc": "logo of iKe Tech",
		  "description":  "<p>In the role of a Python Full-stack engineer, I have designed and built from scratch, the database, the back-end micro-services app and a front-end app.</p>",
		  'categories': ['Software Engineering','Web development' ],
		  'topics':['Job Projects', 'Entrepreneurship']
	  },
	  "work26":{
		  "title": "Software Engineer at imagino",
		  "subtitle": "Job Projects, Software Engineering, Python",
		  "image": "img/proj_logos/imagino.jpg",
		  "year": "March 2022 - June 2022",
		   "imagedesc": "logo of imagino",
		  "description":  "<p>In the role of a Back-end Developer, my tasks are to implement new features, or extends currents, of the backend applications of the data-driven SaaS of the company </p>",
		  'categories': ['Software Engineering','Web development', 'Software Engineering', 'Data Engineering' ],
		  'topics':['Job Projects']
	  },
	"work25":{
		  "title": "AI Engineer at Tech2Heal",
		  "subtitle": "Job Projects, Web development, HTML, Javascript, Python",
		  "image": "img/proj_logos/tech2heal.jpg",
		  "year": "March 2022 - June 2022",
		   "imagedesc": "logo of tech2heal",
		  "description":  "<p>In the role of a Python Full-stack engineer, I have designed and built from scratch, the database, the back-end micro-services app and a front-end app.</p>",
		  'categories': ['Software Engineering','Web development', 'Machine Learning', 'Data Science' ],
		  'topics':['Job Projects']
	  },
		"work24":{
		  "title": "Sondaggio.com",
		  "subtitle": "Personal Project, Web development, React, Node.js",
		  "image": "img/proj_logos/sondaggio.png",
		  "year": "February 2022 - March 2022",
		   "imagedesc": "the index page",
		  "description": "<a href=\"https://github.com/chrissbill23/Sondaggio.com\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>",
		  'categories': ['Software Engineering','Web development' ],
		  'topics':['Personal Project']
	  },
		"work23":{
		  "title": "Flask Server Caching",
		  "subtitle": "Personal Project, Software Engineering, HTML, Javascript, Python",
		  "image": "img/proj_logos/flask.png",
		  "year": "February 2022",
		   "imagedesc": "the searh page",
		  "description": "<p>An example of caching method on a Flask data server using GraphQL. The data server retrieves universities' infos from and serve the client's search request after saving the results in a local cache, for future requests of the same type.</p>"+
		  "<a href=\"https://github.com/chrissbill23/Flask-Server-Caching\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>",
		  'categories': ['Software Engineering','Web development' ],
		  'topics':['Personal Project', 'Data Structures', 'Algorithms']
	  },
		"work22":{
		  "title": "Data Structures and Algorithms",
		  "subtitle": "Personal Project, Software Dev, Machine Learning, Deep Learning, Python",
		  "image": "img/proj_logos/ds.png",
		  "year": "January 2022 - current",
		   "imagedesc": "Data Structures image",
		  "description": '<p>My implementations in Python of some Data Structures and Algorithms.</p>'+
		  "<a href=\"https://github.com/chrissbill23/Data-Structures-and-Algorithms\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>",
		  'categories': ['Software Engineering','Artificial Intelligence' ],
		  'topics':['Machine Learning', 'Deep Learning', 'Personal Project', 'Data Structures', 'Algorithms']
	  },
		"work21":{
		  "title": "Data Mining for Neural Networks Debugging",
		  "subtitle": "Internship Project, Machine Learning, Deep Learning, Python",
		  "image": "img/proj_logos/inria.png",
		  "year": "April 2021 - current",
		   "imagedesc": "INRIA logo",
		  "description": '<p>This internship is funded in the context of the HyAIAI \"Hybrid Approaches for Interpretable AI\" INRIA project lab (https://www.inria.fr/en/research/research-teams/inria-project-labs). With this position, we would like to go beyond the current common visualization techniques that help to understand what an individual neuron or a layer of neurons is computing, by focusing on groups of neurons  that  are  commonly  highly  activated  when  a  network  is  making  wrong  predictions  on  a  set  of examples. Tools such as activation maximization can be used to identify such neurons. We propose to use discriminative pattern mining, and, to begin with, the DiffNorm algorithm in conjunction with the  LCM  one to  identify  the  discriminative  activation  patterns among  the  identified  neurons. Identifying \"faulty\" groups of neurons could lead to the decomposition of the DL network into “blocks” encompassing several layers. \"Faulty\" blocks may be the first to be modified in the search for a better design.</p>',
		  'categories': ['Artificial Intelligence', 'Data Science'],
		  'topics':['Machine Learning', 'Deep Learning', 'Internship Project','Job Projects']
	  },	
	   "work19":{
		  "title": "Adversarial Robustness",
		  "subtitle": "Deep Learning, Python",
		  "image": "img/proj_logos/enedis.png",
		  "year": "November 2020 - March 2021",
		   "imagedesc": "Enedis logo",
		  "description": '<p>This work done for Enedis aimed to find a robust Deap Learning classifier of High voltage and Low Voltage units. More precisely, we were asked to find a robust model against small and large perturbations that could induct a misclassification of the units.</p>',
		  'categories': ['Artificial Intelligence', 'Data Science'],
		  'topics':['Machine Learning', 'Deep Learning', 'School Project']
		},
		"work17":{
		  "title": "The Plant Watering Problem",
		  "subtitle": "Reinforcement Learning, Python",
		  "image": "img/proj_logos/plants.jfif",
		  "year": "March 2021",
		   "imagedesc": "Picture of growing plants",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Reinforcement Learning', 'School Project', 'Personal Project'],
		  "description": "<p>With this reinforcement learning project, I try to solve the watering problem of a set of plants in a garden</p><a href=\"https://github.com/chrissbill23/The-Plant-Watering-Problem\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work16":{
		  "title": "Advanced 3D Graphics",
		  "subtitle": "Visual Computing, Computer Animation, C#",
		  "image": "img/proj_logos/1.PNG",
		  "year": "November 2020",
		   "imagedesc": "A screenshot of this project",
		  'categories': ['Visual Computing'],
		  'topics':['Computer Animation','Computer Graphics', 'School Project', 'Personal Project'],
		  "description": "<p>With this course project, I was asked to create 3D world by creating some Unity tools and scripts to allow the creations, the interactions among animals and humans, and the evolution of these.</p><a href=\"https://github.com/chrissbill23/Advanced-3D-Graphics-Project\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },"work20":{
		  "title": "NFL 1st and Future Impact Detection (Kaggle Challenge)",
		  "subtitle": "Computer Vision, Python",
		  "image": "img/proj_logos/helmets.jpg",
		  "year": "November 2020",
		   "imagedesc": "A screenshot of this project",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Computer Vision','Deep Learning', 'School Project'],
		  "description": "<p>For this project we decided to participate in a computer vision Kaggle challange, the National Football League (NFL) along with Amazon Web Services (AWS) are trying to develop the \"Digital Athlete\" a virtual representation of a composite NFL player that the NFL can use to model game scenarios to try to better predict and prevent player injuries. For this, The NFL is actively addressing the need for a computer vision system to detect on-field helmet impacts as part of the \"Digital Athlete\" platform.</p>"+
		  "<p>The objective is to develop a computer vision model that automatically detects helmet impacts that occur on the field by using labeled video from the sidelines and end zones, and player tracking data. This information is sourced from the NFL's Next Gen Stats (NGS) system, which documents the position, speed, acceleration, and orientation for every player on the field during NFL games.</p>"+
		  "<a href=\"https://github.com/chrissbill23/Kaggle-Challenge-NFL-1st-and-Future-Impact-Detection\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },"work18":{
		  "title": "Epanechnikov Mean Shift",
		  "subtitle": "Visual Computing, Computer Animation, Computer Vision, Python",
		  "image": "img/proj_logos/epanechnikov.PNG",
		  "year": "October 2020",
		   "imagedesc": "A screenshot of this project",
		  'categories': ['Data Science','Artificial Intelligence'],
		  'topics':['Computer Vision','Computer Graphics', 'School Project', 'Data Analysis'],
		  "description": "<p>I implement Epanechnikov Mean Shift Algorithm, which can be used for image segmentation, and compare results with the Mean Shift using a Gaussian Kernel.</p><a href=\"https://github.com/chrissbill23/Epanechnikov-Mean-Shift\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work1":{
		  "title": "CLTV Forecasting",
		  "subtitle": "Internship Project, Machine Learning, Deep Learning, Python",
		  "image": "https://www.tourmag.com/photo/art/grande/8334013-13054962.jpg?v=1444214835",
		  "year": "April 2020 - August 2020",
		   "imagedesc": "Amadeus company logo",
		  "description": '<p>This work done for Amadeus S.A.S during my internship was addressing the challenge of finding the potential big travelers of an airline company, using machine learning and deep learning to predict the Customer Lifetime Value (CLV or LTV or CLTV) of the current passengers at a future point parameter of the model.</P>',
		  'categories': ['Artificial Intelligence', 'Data Science'],
		  'topics':['Machine Learning', 'Deep Learning', 'Internship Project','Job Projects']
	  },
	  "work2":{
		  "title": "American Sign Language Recognition",
		  "subtitle": "Computer Vision, Python",
		  "image": "https://camo.githubusercontent.com/e66312310514b1385ef4e976d5cf34d161e190e4/68747470733a2f2f642e6e6577737765656b2e636f6d2f656e2f66756c6c2f313339343638362f61736c2d67657474792d696d616765732e6a7067",
		  "year": "December 2019 - January 2020",
		   "imagedesc": "American Sign Language letters",
		  "description": "<p>In this project, I coded a real-time translator of the American Sign Letters from a webcam input. This desktop application has a classifier that I have trained to do such task with a F1-score 0.93/1.0 </p><a href=\"https://github.com/marcogma/SignLanguageProject\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>",
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
		  "description": "<p>In this project I worked on the practical implementation of using heat method for computing geodesic distances for meshes and point clouds based on the research paper Geodesics in Heat: A New Approach to Computing Distance Based on Heat Flow by Keenan Crane [2013]. I have modified the equations for the gradient normalization and added two boundary conditions. </p><a href=\"https://github.com/chrissbill23/GeodesicInHeat\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },

	  "work4":{
		  "title": "Bipedal Walker",
		  "subtitle": "Reinforcement Learning Project, Python",
		  "image": "https://camo.githubusercontent.com/42944516445d4abecb36a309b1e0005bccb3369261662504562c837120baadaf/68747470733a2f2f6472336e676c3739377a3534762e636c6f756466726f6e742e6e65742f6269706564616c2d77616c6b65722d737563636573732e676966",
		  "year": "February 2020 - March 2020",
		   "imagedesc": "The Bipedal walker",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Reinforcement Learning', 'School Project', 'Personal Project'],
		  "description": "<p>With our project we try to analyze two environments of two different complexities and action space in order to catch up the parametrization of the training needed for an overall good result, by doing extensive parameter tunning and generating empirical simulations. The two environments are: Cart Pole and Bipedal Walker."+
		  " The Cart Pole was analyzed using DQN and DQN-Experience Replay while the BipedalWalker was analyzed with the DDPG algorithm using an Actor-Critic agent and then using Augmented Random Search. For the first, We have found that parametrized implementations of these agents surpass their naive implementations. While for the Bipedal Walker, "+
		  "we found out that more tunnings are needed for the DDPG to achieve a certain amount of steps of the Bipedal, but with the Augmented Random Search achieve much better results are obtained in less time.</p>"+
		  "<p>For our experiments, we found on the internet the implementation of each agent algorithm analyzed in this project. We also extended these implementations to make them more suitable to our way of working, computational resources and goals. Thus, our project does not aim to implement those algorithms from scratch, but to analyze their training parameters on the Cart Pole and BipedalWalker, for future experiments on equal or similar environments.</p>"+
		  "<a href=\"https://github.com/chrissbill23/INF585-Reinforcement-Learning\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work5":{
		  "title": "Link Prediction",
		  "subtitle": "Machine Learning, Deep Learning, Python",
		  "image": "https://cdn2.hubspot.net/hub/19230/file-13381774-jpg/images/link_building.jpg",
		  "year": "December 2020 - January 2020",
		   "imagedesc": "Graph of links between websites",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Machine Learning', 'Deep Learning', 'School Project'],
		  "description": "<p>In this project, we aim to find a predictor of an anchor link between two web pages by looking at their contents and train the model on a graph data as ground truth.</p><a href=\"https://github.com/marcogma/LinkPredictionOfFrenchWebGraph\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work6":{
		  "title": "Boid Fishes",
		  "subtitle": "Visual Computing, Computer Animation, C++",
		  "image": "https://gupett.github.io/CG-Project/Images/500_boids.png?raw=true",
		  "year": "February 2020 - April 2020",
		   "imagedesc": "Boid Fishes",
		  'categories': ['Visual Computing'],
		  'topics':['Computer Animation','Computer Graphics', 'School Project', 'Personal Project'],
		  "description": "<p>The purpose of this project is to show the acquired knowledge from the Computer Animation class by doing a Boid fish simulation. I simulate the behavior of fishes under the ocean by applying the basic flocking model proposed by Creig Reynolds that consists of three simple steering forces based on the positions and velocities from its nearby flock mates. As well I implemented the environment and the skinning of the fishes to make it look like a real underwater simulation.</p><a href=\"https://github.com/chrissbill23/BoidsFishes\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work7":{
		  "title": "The Simpsons Classifier",
		  "subtitle": "Machine Learning, Deep Learning, Python",
		  "image": "img/proj_logos/simpson.png",
		  "year": "June 2018 - August 2018",
		   "imagedesc": "The Simpsons detector",
		  'categories': ['Artificial Intelligence'],
		  'topics':['Machine Learning', 'Deep Learning', 'Computer Vision', 'School Project', 'Personal Project'],
		  "description": "<p>This is my first Machine Learning and Deep Learning project, in which I tried different techniques to learn a classifier of the Simpsons characters. The best model turned out to be a CNN classifier.</p><a href=\"https://github.com/chrissbill23/The-Simpsons-Classifier\" target=\"_blank\" class=\"boxed-btn3-line\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work8":{
		  "title": "Maxi pizza",
		  "subtitle": "Operational Research, Optimization, Ampl",
		  "image": "https://media-cdn.tripadvisor.com/media/photo-s/07/06/fb/3a/pizza-parma.jpg",
		  "year": "June 2017 - August 2017",
		   "imagedesc": "The Simpsons detector",
		  'categories': ['Operational Research'],
		  'topics':['Linear Programming','School Project', 'Personal Project'],
		  "description": "<p>This was an optimizzation problem for which I was asked to find the best cost management possible using linear programming to maximize the revenue of a small local pizzeria, under different constraints.</p><a href=\"https://github.com/chrissbill23/Maxi-pizza\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work9":{
		  "title": "Felicità regression",
		  "subtitle": "Data Mining, R",
		  "image": "https://ymcaexchanges.files.wordpress.com/2014/06/happy.jpeg",
		  "year": "June 2017 - June 2017",
		   "imagedesc": "happy face",
		  'categories': ['Data Science'],
		  'topics':['Regression', 'Statistics', 'School Project'],
		  "description": "<p>This was my first data science project. The goal was to use regression methods to find the characteristics of life that make peole happy.</p><a href=\"https://github.com/chrissbill23/Data-Mining-Project-Felicita-Dataset-using-R\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work10":{
		  "title": "Application for Production management",
		  "subtitle": "Software Engineering, Internship Project, C++, Qt, PostgreSQL, Fast Fashion industry",
		  "image": "https://www.just-iou.fr/wp-content/uploads/2020/03/webdesk_adv_1_1-3.jpg",
		  "year": "July 2018 - September 2018",
		   "imagedesc": "Imperial logo",
		  "description": '<p>This work done for SOGEA S.R.L (visit https://www.sogeasoft.com/) during my internship was to develop an efficient desktop and tablet application for Imperial Fashion to manage their clothes production.</P>',
		  'categories': ['Software Engineering', 'Database management'],
		  'topics':['Internship Project','Job Projects']
	  },
	  "work11":{
		  "title": "Software Developer at SOGEA S.R.L",
		  "subtitle": "Software Engineering, Job Experience, C++, Qt, PostgreSQL",
		  "image": "https://www.sogeasoft.com/img/logo.png",
		  "year": "September 2018 - September 2019",
		   "imagedesc": "Sogeasoft logo",
		  "description": '<p>Permanent job I had at SOGEA S.R.L (visit https://www.sogeasoft.com/) but quit to persue my MScT studies. During this job experience my main tasks were to develop efficient desktop applications and build management systems for customers of different industries.</P>',
		  'categories': ['Software Engineering', 'Database management'],
		  'topics':['Job Projects']
	  },
	  "work12":{
		  "title": "Liceo Scientifico Richard Feynman (School IT System)",
		  "subtitle": "Software Engineering, C++, Qt, XML",
		  "image": "https://github.com/chrissbill23/Liceo-scientifico-Richard-Feynman/blob/master/screenshot/Login.png?raw=true",
		  "year": "May 2017 - July 2017",
		   "imagedesc": "Application logo",
		  'categories': ['Software Engineering', 'Database management'],
		  'topics':['School Project', 'Personal Project'],
		  "description": "<p>This was one of my Bachelor's programming project. I implemented an IT system for a high school with specific functionalities like moodle, the students and professors management, etc.</p><a href=\"https://github.com/chrissbill23/Liceo-scientifico-Richard-Feynman\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work13":{
		  "title": "VGoose",
		  "subtitle": "Web development, Mongoose, Node.js, TypeScript",
		  "image": "img/proj_logos/vgoose.png",
		  "year": "September 2018 - ongoing",
		   "imagedesc": "vgoose logo",
		  'categories': ['Web development', 'Database management'],
		  'topics':['Framework', 'Personal Project'],
		  "description": "<p>I started this project with the intent to create a framework to abstract Mongoose with a more OOP codes in a TypeScript script.</p><a href=\"https://github.com/chrissbill23/VGoose\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work14":{
		  "title": "My Eventi (accessible website)",
		  "subtitle": "Web development, PHP, HTML, Javascript, CSS, SQL",
		  "image": "img/proj_logos/myeventi.png",
		  "year": "June 2017 - September 2017",
		   "imagedesc": "my eventi logo",
		  'categories': ['Web development', 'Database management'],
		  'topics':['School Project', 'Personal Project'],
		  "description": "<p>This was my first website project during my Bachelor. I developped this website with the functionalities of events managements and booking.</p><a href=\"https://github.com/chrissbill23/My-Eventi-simple-accessible-web-site-\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  },
	  "work15":{
		  "title": "ImgUtils",
		  "subtitle": "Deep Learning, Framework, Python",
		  "image": "img/proj_logos/imgutils.png",
		  "year": "April 2020 - current",
		   "imagedesc": "img utils logo",
		  'categories': ['Artificial Intelligence', 'Data Science'],
		  'topics':['Framework','Computer Vision','Deep Learning', 'Personal Project'],
		  "description": "<p>I started this project with the intent to create a framework to have a faster pipeline in images classifying task, by offering functionalities of loading and preprocessing.</p><a href=\"https://github.com/chrissbill23/ImgUtils\" class=\"boxed-btn3-line\" target=\"_blank\">View Project <i class=\"fa fa-github\"></i></a>"
	  }
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


