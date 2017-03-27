$(function(){
	var n;
    $(".second .wrap").css({right: '-500px'});
    $(".second .title").css({left: '-500px'});
    $(".third .wrap").css({right: '-500px'});
    $(".third .title").css({left: '-500px'});
    $(".fourth .wrap").css({left: '-500px'});
    $(".fourth .title").css({right: '-500px'});
    $(".five .wrap").css({left: '-800px'});
    $(".five .title").css({right: '-800px'});
    $('#dowebok').fullpage({
        verticalCentered: !1,
        navigation: !0,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage','lastPage'],
        menu: '#myMenu',
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 1){
                //debugger
                $(".first .wrap").addClass('move');
                $(".mun span").css({background: '#fff'});
            } /*else{
                $(".mun span").css({background: '#9b9b9b'});
            }*/
            else if (index == 2) {
                //debugger
                $(".second .wrap").animate({right: 0}, 500)
                $(".second .title").animate({left: 0}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 3) {
                $(".third .wrap").animate({right: 0}, 500)
                $(".third .title").animate({left: 0}, 500)
                $(".second .wrap").animate({right: -800}, 500)
                $(".second .title").animate({left: -800}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 4) {
                $(".fourth .wrap").animate({left: 0}, 500)
                $(".fourth .title").animate({right: 0}, 500)
                $(".third .wrap").animate({right: -400}, 500)
                $(".third .title").animate({left: -400}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 5) {
                $(".five .wrap").animate({left: 0}, 500)
                $(".five .title").animate({right: 0}, 500)
                $(".fourth .wrap").animate({left: -800}, 500)
                $(".fourth .title").animate({right: -800}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 6) {
                $(".five .wrap").animate({left: -800}, 500)
                $(".five .title").animate({right: -800}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
        }
    });




    $(".mun").click(function(event) {
        $(".header ul li .box span").stop(true);
        $(".header ul li a").stop(true);
    	$(this).toggleClass('move');
    	if ($(".mun").hasClass('move')) {
    		$(".header").animate({right:'0'}, 300,function(){
    			$(".header ul li").eq(0).find('.box span').animate({right:'0'},300)
    			$(".header ul li").eq(1).find('.box span').animate({left:'0'},300)
    			$(".header ul li").eq(2).find('.box span').animate({right:'0'},300)
                $(".header ul li").eq(3).find('.box span').animate({left:'0'},300,function(){
                    $(".header ul li a").animate({bottom:0}, 300)
                })
                $(".header ul li").eq(4).find('.box span').animate({right:'0'},300)
    		})
    	} else{
            $(".header ul li a").animate({bottom:'-10'}, 300,function(){
                $(".header ul li").eq(0).find('.box span').animate({right:'-100%'},300)
                $(".header ul li").eq(1).find('.box span').animate({left:'-100%'},300)
                $(".header ul li").eq(2).find('.box span').animate({right:'-100%'},300,function(){
                    $(".header").animate({right:'-100%'}, 300)
                })
                $(".header ul li").eq(3).find('.box span').animate({left:'-100%'},300)
                $(".header ul li").eq(4).find('.box span').animate({right:'-100%'},300)
            })
    	}
    });

    $(".header ul li").click(function(event) {
        var $height = $("#firstPage").height();
        var n = $(this).index();
        //$("html,body").animate({ scrollTop: $height*(n+1)}, 500); 
        $(".header ul li a").animate({bottom:'-10'}, 300,function(){
            $(".header ul li").eq(4).find('.box span').animate({right:'-100%'},300)
            $(".header ul li").eq(0).find('.box span').animate({right:'-100%'},300)
            $(".header ul li").eq(1).find('.box span').animate({left:'-100%'},300)
            $(".header ul li").eq(2).find('.box span').animate({right:'-100%'},300)
            })
            $(".header ul li").eq(3).find('.box span').animate({left:'-100%'},300,function(){
                $(".header").animate({right:'-100%'}, 300)
        })
        $(".mun").removeClass('move')
    });
});