$(function(){

	/* 스크롤탑 메뉴바 */

	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			skillsProgressbar();
		}
	});


  var menu=$('nav > ul > li');
	var contents=$('.page');
	
	
	//메뉴클릭시 페이지 이동
	menu.click(function(event){
		event.preventDefault(); 
		var tg=$(this); 
		var i=tg.index(); 
		var section=contents.eq(i); 
		var tt=section.offset().top; 
		$('html,body').stop().animate({scrollTop:tt});  
	});
	
	
	//스크롤 이동시 메뉴와 버튼 활성화
	$(window).scroll(function(){
		var sct=$(window).scrollTop(); 
		contents.each(function(){ 

			var tg=$(this); 
			var i=tg.index(); 
			if(tg.offset().top<=sct){ 
				menu.removeClass('active'); 
				menu.eq(i).addClass('active'); 
			}
		});
	});

  $('.navText').css('opacity','0');

  $('nav > ul > li').hover(function(){
    $(this).find('.navText').stop().animate({opacity:1},300);
  }, function(){
    $(this).find('.navText').stop().animate({opacity:0},300);
  });


	var swiper1 = new Swiper('.swiper1', {
		spaceBetween: 100, // 슬라이드간 간격
		loop: true,    // 무한 반복
		pagination: {   // 페이징
			el: '.swiper-pagination1',
			clickable: true,  // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
		},
		navigation: {   // 네비게이션
			nextEl: '.next1',   // 다음 버튼 클래스명
			prevEl: '.prev1',   // 이전 버튼 클래스명
		},
	});

	/* 호버시 스크롤링 */

	/* $('.PCmockup > .frame').hover(function(){

    var ah = $(this).find('a').innerHeight(); // .innerHeight() : 대상의 Height + Padding
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({top:ah-imgh},8000)

  }, function(){ // hover 해제 → top : 0
    var img = $(this).find('img');
    img.stop().animate({top:0}, 5000);
  })
 */

	$('.mobileMockup >.frame').hover(function(){

    var ah = $(this).find('a').innerHeight(); // .innerHeight() : 대상의 Height + Padding
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({top:ah-imgh},12000)

  }, function(){ // hover 해제 → top : 0
    var img = $(this).find('img');
    img.stop().animate({top:0}, 8000);
  })



	//마우스 휠 이벤트
	$("div.page").each(function () { 
		$(this).on("mousewheel DOMMouseScroll", function (e) { 
			var delta = 0;
			if (!event) event = window.event; 
					
			if (event.wheelDelta) { 
			
				delta = event.wheelDelta / 120;  

			} else if (event.detail) delta = -event.detail / 3;  
			
			
			var moveTop = null;
			
			//마우스휠을 위에서 아래로
			if (delta < 0) {
				if ($(this).next() != undefined) {
					moveTop = $(this).next().offset().top;
				}
				
			//마우스휠을 아래에서 위로
			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}
      
			
			//화면이동0.5초
			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 400
			});
		});
	});	

  //skills
  function skillsProgressbar(){
    var htmlNum = 90;
    var cssNum = 90;
    var javascriptNum = 80;
    var jqueryNum = 90;
    var photoshopNum = 95;
    var illustratorNum = 100;
		var indesignNum = 100;
		var figmaNum = 90;
		var reactNum = 60;
		var gitNum = 60;
		var primiereNum = 60;
    var max = 100;
    var duration = 1500;

    //Progressbar 초기 위치
    $('.bar').css('right','100%');


    //html

    $('#html_bar').stop().animate({
      'right':100-(htmlNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#html_cnt').text(Math.round(htmlNum*progress)+'%');
      }
    })

		/* css */

		$('#css_bar').stop().animate({
      'right':100-(cssNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#css_cnt').text(Math.round(cssNum*progress)+'%');
      }
    })

		/* jquery */

		$('#jquery_bar').stop().animate({
      'right':100-(jqueryNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#jquery_cnt').text(Math.round(jqueryNum*progress)+'%');
      }
    })

		/* illustrator */

		$('#illust_bar').stop().animate({
      'right':100-(illustratorNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#illust_cnt').text(Math.round(illustratorNum*progress)+'%');
      }
    })

		/* photoshop */

		$('#photoshop_bar').stop().animate({
      'right':100-(photoshopNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#photoshop_cnt').text(Math.round(photoshopNum*progress)+'%');
      }
    })

		/* indesign */

		$('#indesign_bar').stop().animate({
      'right':100-(indesignNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#indesign_cnt').text(Math.round(indesignNum*progress)+'%');
      }
    })

		/* figma */

		$('#figma_bar').stop().animate({
      'right':100-(figmaNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#figma_cnt').text(Math.round(figmaNum*progress)+'%');
      }
    })

		/* react */

		$('#react_bar').stop().animate({
      'right':100-(reactNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#react_cnt').text(Math.round(reactNum*progress)+'%');
      }
    })

		/* react */

		$('#git_bar').stop().animate({
      'right':100-(gitNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#git_cnt').text(Math.round(gitNum*progress)+'%');
      }
    })

		/* react */

		$('#primiere_bar').stop().animate({
      'right':100-(gitNum/max*100)+'%',
    },{
      'duration':duration,
      'easing':'easeInOutQuart',
      'progress': function(animation,progress,msRemaining){
        $('#primiere_cnt').text(Math.round(primiereNum*progress)+'%');
      }
    })

  }

   /* closeBtn */



   $('.closeBtn').click(function(){
     $(this).parents('.designModal').hide()
   });


   $('.namsung').click(function(){
    $('#namsung').show();
   });

   $('.pizza').click(function(){
    $('#pizza').show();
   });

   $('.game').click(function(){
    $('#game').show();
   });

   $('.pillow').click(function(){
    $('#pillow').show();
   });

   $('.brush').click(function(){
    $('#brush').show();
   });




     /* pings */

     $(window).load(function(){
      $('.ping1').stop().delay(150).animate({width:'50px'},300,"easeOutElastic");
      $('.ping2').stop().delay(280).animate({width:'50px'},300,"easeOutElastic");
      $('.ping3').stop().delay(370).animate({width:'50px'},300,"easeOutElastic");
      $('.pizzadesign').stop().delay(150).animate({width:'223px',height:'125px'},700);
      $('.cursordesign').stop().delay(150).animate({left:'749px',top:'265px'},700);

     });








})