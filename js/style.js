$(function(){
	var n;
    $("#secondPage .wrap").css({right: '-500px'});
    $("#secondPage .title").css({left: '-500px'});
    $("#thirdPage .wrap").css({right: '-500px'});
    $("#thirdPage .title").css({left: '-500px'});
    $("#fourthPage .wrap").css({left: '-500px'});
    $("#fourthPage .title").css({right: '-500px'});
    $("#fivePage .wrap").css({left: '-500px'});
    $("#fivePage .title").css({right: '-500px'});
    $('#dowebok').fullpage({
        verticalCentered: !1,
        navigation: !0,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 1){
                $("#firstPage .wrap").addClass('move');
                $(".mun span").css({background: '#fff'});
            } /*else{
                $(".mun span").css({background: '#9b9b9b'});
            }*/
            else if (index == 2) {
                $("#secondPage .wrap").animate({right: 0}, 500)
                $("#secondPage .title").animate({left: 0}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 3) {
                $("#thirdPage .wrap").animate({right: 0}, 500)
                $("#thirdPage .title").animate({left: 0}, 500)
                $("#secondPage .wrap").animate({left: -400}, 500)
                $("#secondPage .title").animate({right: -400}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 4) {
                $("#fourthPage .wrap").animate({left: 0}, 500)
                $("#fourthPage .title").animate({right: 0}, 500)
                $("#thirdPage .wrap").animate({right: -400}, 500)
                $("#thirdPage .title").animate({left: -400}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 5) {
                $("#fivePage .wrap").animate({left: 0}, 500)
                $("#fivePage .title").animate({right: 0}, 500)
                $("#fourthPage .wrap").animate({left: -400}, 500)
                $("#fourthPage .title").animate({right: -400}, 500)
                $(".mun span").css({background: '#9b9b9b'});
            }
            else if (index == 6) {
                $("#fivePage .wrap").animate({left: -400}, 500)
                $("#fivePage .title").animate({right: -400}, 500)
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