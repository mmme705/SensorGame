/**
 * 
 */
function Target() {
    'use strict';
    return;
};

(function strict() {
	Target.prototype = {
			x: 0,
			y: 0,
			
			gameHeight: 0,
            gameWidth: 0,
            
            gamemarginHeight: 120,
	};
	
	Target.prototype.setGameFieldSize = function (size) {
        this.gameWidth = size.width;
        this.gameHeight = size.height;
    };

    Target.prototype.setTargetPosition = function setTargetPosition() {
		$('#target').css('left', this.x + 'px');
		$('#target').css('top', this.y + 'px');
	};
	
	Target.prototype.setup = function (size) {
		this.setGameFieldSize(size);
	};
	
    Target.prototype.createTarget = function () {
    	this.x = Math.floor(Math.random()*(this.gameWidth - $('#target').width())); 
    	this.y = Math.floor(Math.random()*(this.gameHeight - $('#target').height())); 
    	
    	this.setTargetPosition();
    };

    Target.prototype.getTargetPosition = function () {
    	var data = {};
    	
    	data.x = this.x;
    	data.y = this.y;
    	
    	return data;
    };

}());