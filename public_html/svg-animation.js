$(document).ready(function(){
            /*
            $(".menu-icon").on("click",function(){

                $("nav ul").toggleClass("showing");
            });


            $(window).on("scroll",function(){
               if($(window).scrollTop()){
                   $('nav').addClass('black');
               } else{
                   $('nav').removeClass('black');
               }
            });
            */
           /* svgが消えてトップ画面がでる時間 */ 
            setTimeout(function(){
                $(".sp-one").hide(50);
                $(".wrapper").show(150);
            },4500);
        });