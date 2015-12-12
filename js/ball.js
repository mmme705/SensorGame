/**
 * 
 */

function Ball() {
    'use strict';
    return;
};

(function strict() {
	Ball.prototype = {
			x: 0,
			y: 0,

			width:35,
			height:35,

			gameHeight: 0,
            gameWidth: 0,

			motionEvent: null
	};
	
    Ball.prototype.checkBoundaries = function () {
    	if (this.x < 0) {
            this.x = 0;
        } else if ((this.x + this.width) > this.gameWidth) {
            this.x = this.gameWidth - this.width;
        }

        if (this.y < 0) {
        	this.y = 0;
        } else if ((this.y + this.height) > this.gameHeight) {
        	this.y = this.gameHeight - this.height;
        }
    };
	
    Ball.prototype.setMotionEvent = function (evnet) {
    	this.motionEvent = event;
    };
    
    Ball.prototype.unsetMotionEvent = function (evnet) {
    	this.motionEvent = null;
    };
    
 
	Ball.prototype.getBallData = function () {
        var result = {};
        var x=100,y=100;
        
        if (this.motionEvent != null) {
            result.x = -this.motionEvent.accelerationIncludingGravity.x;
            result.y = this.motionEvent.accelerationIncludingGravity.y;
        }  
        
        return result;
    };

	Ball.prototype.setBallSize = function () {
		$('#ball').css('width', this.width);
		$('#ball').css('height', this.height);
	};

	Ball.prototype.setBallPosition = function (x, y) {
		$('#ball').css('left', x + 'px');
		$('#ball').css('top', y + 'px');
	};
	
	Ball.prototype.setGameFieldSize = function (size) {
        this.gameWidth = size.width;
        this.gameHeight = size.height;
        
    };

	Ball.prototype.setup = function (size) {
		this.setGameFieldSize(size);
		this.setBallSize();
	};

	Ball.prototype.drawFrame = function () {
		var data = this.getBallData();
		
		this.x += data.x;
		this.y += data.y;
        
		this.checkBoundaries();
		
		this.setBallPosition(this.x,this.y);
	};
}());
