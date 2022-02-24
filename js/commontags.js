
  var folder = "docs/";
  var tags = 
  {
	"header":'<div class="header-area ">'+
            '<div id="sticky-header" class="main-header-area">'+
                '<div class="container-fluid ">'+
                    '<div class="header_bottom_border">'+
                        '<div class="row align-items-center">'+
                            '<div class="col-xl-3 col-lg-2">'+
                                '<div class="logo">'+
                                    '<a href="index.html"> <img src="img/logo.png" alt=""></a>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-xl-6 col-lg-7">'+
                                '<div class="main-menu  d-none d-lg-block">'+
                                    '<nav>'+
                                        '<ul id="navigation">'+
                                            '<li id="index_page"><a href="index.html">home</a></li>'+
                                            '<li id="works_page"><a href="works.html">Works</a></li>'+
                                            '<li id="education_page"><a href="education.html">Education</a></li>'+
                                            '<li id="about_page"><a href="about.html">about</a></li>'+
                                        '</ul>'+
                                    '</nav>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-xl-3 col-lg-3 d-none d-lg-block">'+
                                '<div class="Appointment">'+
                                    '<div class="book_btn d-none d-lg-block">'+
                                        '<a href="#footer">Let’s Talk</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col-12">'+
								'<div class="mobile_menu d-block d-lg-none">'+
								'</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>',
    "footer": '<div class="footer_top">'+
            '<div class="container">'+
                '<div class="row">'+
                    '<div class="col-lg-8">'+
                        '<div class="lets_talk">'+
                            '<h3>Do you have any Project or Job Offer? <a href="#">Let’s Talk</a> </h3>'+
                            '<p>I am available for any Machine Learning or Deep Learning project research job offer, full-time or (preferably) part-time.</p>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="row">'+
					'<a href="https://www.linkedin.com/in/christian-prince-bile/" class="col-md-3 single_links d-flex justify-content-between align-items-center" target="_blank"> <span>Linkedin</span><i class="fa fa-linkedin"></i> </a>'+
					'<a href="mailto:christian2tv@gmail.com" class="col-md-3 single_links d-flex justify-content-between align-items-center"> <span>Gmail</span><i class="fa fa-google"></i> </a>'+
					'<a href="https://www.facebook.com/bile.carlos/" class="col-md-3 single_links d-flex justify-content-between align-items-center" target="_blank"> <span>Facebook</span><i class="fa fa-facebook"></i> </a>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="copy-right_text">'+
            '<div class="container">'+
                '<div class="footer_border"></div>'+
                '<div class="row">'+
                    '<div class="col-xl-12">'+
                        '<p class="copy_right text-center">Copyright &copy;<span id="datecopyright"></span> All rights reserved | Bile Ezanin Christian Prince Carlos personal website</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
  };
	//FUNCTIONS DEFINITION
	function loadHeaderFooter(){
		var div = $("#header");
	    div.append(tags['header']);
		div = $("#datecopyright");
		div = $("#footer");
	    div.append(tags['footer']);
		div = $("#datecopyright");
	    //div.text(new Date().getFullYear());
		div.text("2020");
		
		currpage = $("span#getPage").attr( "data-content" );
		$('#'+currpage+' a').attr('class','current_page');
		
		
    }
	
	
	//RUN FUNCTIONS
    loadHeaderFooter();


