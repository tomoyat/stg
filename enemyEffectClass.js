
var NomalEnemyDeadEffect = function(_x, _y){
    this.x = _x;
    this.y = _y;
    this.frame = 0;
    this.positions = new List();

    this.speed = 4;
    this.exist = 1;

    for(var i = 0; i<10; i++){
	var tdir = (Math.random() * Math.PI * 2.0);
	var tspeed = Math.random() * this.speed;
	var dx = Math.cos(tdir) * this.speed + this.x;
	var dy = Math.sin(tdir) * this.speed + this.y;
	this.positions.push({x: dx, y: dy, dir: tdir, speed: tspeed});
    }
};

NomalEnemyDeadEffect.prototype.update = function( frame ){
    this.frame++;
    if( this.frame > 15 ){ this.exist = 0; return; }
    var mspeed = 0;
    if( this.frame > 5  ) mspeed = 1;
    else if( this.frame > 10 ) mspeed = 2;    

    var len = this.positions.length();
    for(var i = 0; i<len; i++){
	var x = this.positions.get(i).x;
	var y = this.positions.get(i).y;
	var dir = this.positions.get(i).dir;
	var speed = this.positions.get(i).speed - mspeed;
	if( speed < 0 ) speed = 0;
	x = x + Math.cos(dir) * speed;
	y = y + Math.sin(dir) * speed;
	this.positions.get(i).x = x;
	this.positions.get(i).y = y;
    }
};

NomalEnemyDeadEffect.prototype.draw = function(graphic){
    var len = this.positions.length();
    for(var i = 0; i<len; i++){
	var x = this.positions.get(i).x;
	var y = this.positions.get(i).y;
	graphic.ctx.beginPath();

	graphic.ctx.fillStyle = 'rgb( 255, 0, 0)';
	graphic.ctx.arc( x, y, 1,Math.PI*2,false);
	graphic.ctx.fill();
    }
};

