$(document).ready(function() {

    // speed select

    $(".checked:first-child").css("color", "#349dd4");

    function speedPosition() {
        var currentPos = $("input:checked").parent().position();
        var currentPosPlusMargin = currentPos.left + parseInt($("input:checked").parent().css('marginLeft'), 10);

        $(".mercury").css("width", currentPosPlusMargin);
        $(".slider").css("left", currentPosPlusMargin - 15);
    }

    speedPosition();

    $("input[type=radio]").change(function() {
		if ($(this).is(":checked"))

            speedPosition();
            $("span").css("color", "#000000");
			$(this).prev().css("color", "#349dd4");
	});

    $(window).on("resize", function() {
        speedPosition();
    });


    // tooltip
    // 
	// $(".learn-more").hover(function(){
    //     $(this).children().show();
    //     }, function(){
    //     $(this).children().hide();
    // });

    $(".learn-more").on("mouseenter", function() {
        $(this).children().show();
    });

    $(".learn-more").on("mouseleave", function() {
        $(this).children().hide();
    });

    // popout

    $(".learn-more").click(function() {
        $(this).toggleClass("learn-more--click");
        $(this).parent().parent().children(".popout-box").toggle();
    });


}); // end ready
