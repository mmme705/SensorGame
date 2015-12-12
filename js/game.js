/**
 * 
 */

function Game() {
    'use strict';
    return;
};

(function strict() {
	Game.prototype = {
			ball: null,
			target: null,

			motionEvent: null,
			score: 0,
			timeSet: 0,
			timerCount: null,
			timerStop: false
	};
	
    Game.prototype.checkCollision = function () {
    	var imgCenterX = (this.target.x + $('#target').width()/2);
    	var imgCenterY = (this.target.y + $('#target').height()/2);
    	var ballCenterX = (this.ball.x + this.ball.width/2);
    	var ballCenterY = (this.ball.y + this.ball.height/2);
    	
    	if (ballCenterX>= (imgCenterX-10) && ballCenterX <= (imgCenterX+10) &&
    			ballCenterY >= (imgCenterY-10) && ballCenterY <= (imgCenterY+10)){
    		this.score++;
    		this.start();
    	}
    };
    
    Game.prototype.updateScore = function () {
    	$('#score').text('Socre: ' + this.score);
    };
    
    Game.prototype.setGameFieldSize = function () {
    	var size = {};
    	
    	size.width = $('#background').width();
    	size.height = $('#background').height();
    	
    	return size;
    };
    
    Game.prototype.startTimer = function () {
    	if(this.timerCount == null) {
    		this.timerCount = window.setInterval(this.countDown.bind(this),1000);
    		this.timeSet = 30;
    		$('#time').text('Time: '+ this.timeSet);
    	}
    };
    
    Game.prototype.stopTimer = function () {
    	window.clearInterval(this.timerCount);
    	this.timerCount = null;
    	this.timerStop = true;
    	this.ball.unsetMotionEvent();
    	$('#gameover').css("display", "block");   
    };
    
    Game.prototype.countDown = function () {
    	if(this.timeSet <= 0) {
    		this.stopTimer();
    	}
    	else {
    		this.timeSet--;
    		$('#time').text('Time: '+ this.timeSet);
    	}
    };
    
    Game.prototype.setup = function () {
		this.ball = new Ball();
		this.target = new Target();
		
		this.ball.setup(this.setGameFieldSize());
		this.target.setup(this.setGameFieldSize());
    };
    
    Game.prototype.start = function () {
    	this.target.createTarget();
    	
		if(this.timerStop != true)
			this.startTimer();
	};

	Game.prototype.drawFrame = function () {
		this.ball.drawFrame();
		
		this.checkCollision();
		this.updateScore();
	};
}());


