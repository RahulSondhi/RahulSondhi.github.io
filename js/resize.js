$(function () {
    resizeWindow();
});

// Fix aspect ratio of the stage
$(window).resize(function () {
    resizeWindow();
});

// Resize the window
function resizeWindow() {
    // Get window width and height
    var w = $(window).width();
    var h = $(window).height();
    // If the aspect ratio is greater than or equal to 4:3, fix height and set width based on height
    if ((w / h) >= 16 / 9) {
        stageHeight = h;
        stageWidth = (16 / 9) * h;
        stageLeft = (w - stageWidth) / 2;
        stageTop = 0;
        coverTop = 0;
        coverBottom = 0;
        coverLeft = stageLeft;
        coverRight = stageLeft;
    }
    // If the aspect ratio is less than 4:3, fix width and set height based on width
    else {
        stageWidth = w;
        stageHeight = (9 / 16) * w;
        stageTop = (h - stageHeight) / 2;
        stageLeft = 0;
        coverTop = stageTop;
        coverBottom = stageTop;
        coverLeft = 0;
        coverRight = 0;
    }

    // Set "screen" object width and height to stageWidth and stageHeight, and center screen
    $(".screen").css({
        width: stageWidth + "px",
        height: stageHeight + "px",
        left: stageLeft + "px",
        top: stageTop + "px"
    });

    // Set "cover" object properties based on properties set above
    $("#coverTop").css({
        'width': w,
        'height': coverTop,
        'top': 0,
        'left': 0,
    });
    $("#coverBottom").css({
        'width': w,
        'height': coverBottom,
        'top': h - coverBottom,
        'left': 0,
    });
    $("#coverLeft").css({
        'width': coverLeft,
        'height': h,
        'top': 0,
        'left': 0,
    });
    $("#coverRight").css({
        'width': coverRight,
        'height': h,
        'top': 0,
        'left': w - coverRight,
    });

    // Resize text based on stage height
    // To give a class a certain font size, assign it the class "fs-X" where X is an integer between 1 and 1000. 1000 is the height of the screen.
    // New font resize loop
    $("html").css("font-size", (stageHeight / 60) + "px");
}
