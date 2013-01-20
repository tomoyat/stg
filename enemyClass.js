var Enemy = function(_x, _y, _enemyStatus , _drawFunc, _moveFunc, _shootFunc, _bulletType){
    this.x = _x;
    this.y = _y;
    this.exist = 1;
    this.frame = 0;

    this.r = _enemyStatus.r;
    this.life = _enemyStatus.life;
    this.score = _enemyStatus.score;
    this.speed = _enemyStatus.speed;
    this.shootRate = _enemyStatus.shootRate;

    this.draw = _drawFunc;

    this.move = _moveFunc;
    
    this.shoot = _shootFunc;
    
    this.bulletType = _bulletType;
    
};

Enemy.prototype.collision = function( obj ){
    var dx = this.x - obj.x;
    var dy = this.y - obj.y;
    var dr = this.r + obj.r;
    return dr * dr >= ( dx * dx + dy * dy );
};


Enemy.prototype.update = function(plx, ply, bm ){
    this.frame = this.frame + 1;
    this.move();
    if( this.frame % this.shootRate == 0 ){
	this.shoot(plx, ply, bm );
    }
};



Enemy.prototype.collision = function( obj ){
    var dx = this.x - obj.x;
    var dy = this.y - obj.y;
    var dr = this.r + obj.r;
    return dr * dr >= ( dx * dx + dy * dy );
};


