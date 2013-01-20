
var Graphic = function(){
    this.canvas = document.getElementById('gameWindow');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext('2d');
};

Graphic.prototype.clear = function(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "#111111";
    this.ctx.fillRect(0,0, this.width, this.height);
    this.reset();
};

Graphic.prototype.reset = function(){
    this.ctx.fillStyle = "snow";
    this.ctx.strokeStyle = "snow";
    this.ctx.globalAlpha = 1.0;
}

Graphic.prototype.start = function() {
    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Click to Start", 235, 270 );
};

Graphic.prototype.ui = function(level, score) {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(0,0,0,0.4)';
    this.ctx.fillRect(0,0, this.width, 20);

    this.ctx.fillStyle = "snow";
    this.ctx.font = "10pt Calibri";
    this.ctx.fillText("level : " + String(level) , 20, 15 );
    this.ctx.fillText("score : " + String(score) , 100, 15 );
};

Graphic.prototype.gameOver = function(score) {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(20,10,10,0.4)';
    this.ctx.fillRect(0,0, this.width, this.height);

    this.ctx.fillStyle = "snow";
    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Game Over", 235, 270 );
    this.ctx.fillText("score :  " + String(score), 235, 390 );

    this.reset();
};

Graphic.prototype.gameClear = function() {

    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Clear", 140, 270 );
    this.reset();
};