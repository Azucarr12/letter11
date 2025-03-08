$("#messageState").on("change", function() {
    var audio = document.getElementById("bgMusic"); // Kumuha ng audio element

    $(".message").removeClass("openNor").removeClass("closeNor");

    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abrindo");

        // Play music (Check kung may user interaction)
        if (audio.paused) {
            audio.play().catch(error => console.log("Playback error:", error));
        }
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("fechando");

        // Pause music and reset time
        audio.pause();
        audio.currentTime = 0;
    }
});


$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});