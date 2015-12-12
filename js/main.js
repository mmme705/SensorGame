(function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "mainPage" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
}());

var game = new Game();

$(document).ready(function(){
	
	function onRequestAnimationFrame() {
		game.drawFrame();
		window.webkitRequestAnimationFrame(onRequestAnimationFrame);
	}

	function animate() {
		window.webkitRequestAnimationFrame(onRequestAnimationFrame);
	}

	function onDeviceMotion(event) {
		game.ball.setMotionEvent(event);
	}

	function bindEvent() {
		window.addEventListener('devicemotion', onDeviceMotion);
	}

	function init() {
		bindEvent();
		game.setup();
		game.start();
		animate();
	}

	init();
	
});
