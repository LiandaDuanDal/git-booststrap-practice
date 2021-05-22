$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 200} );
    $("#carouselButton").click(function(){
        // alert("clicked");
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                alert("has pause");
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                alert("has play");
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
    });
});


