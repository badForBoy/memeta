$(function(){
	var n;
    $('#dowebok').fullpage({
        verticalCentered: !1,
        navigation: !0,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using index
            if(index == 1){
                $("#firstPage .wrap").addClass('move')
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

    $(".header ul li a").click(function(event) {
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