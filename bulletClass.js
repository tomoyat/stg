
var Bullet = function(_x, _y, _dir, _bulletStatus, _drawFunc, _moveFunc){
    this.x = _x;
    this.y = _y;
    this.dir = _dir;

    this.exist = 1;
    this.frame = 0;
    this.move = _moveFunc;

    this.speed = _bulletStatus.speed;
    this.r = _bulletStatus.r;
    
    this.draw = _drawFunc;
};

Bullet.prototype.update = function(plx,ply){
    this.frame++;
    this.move(plx,ply);
};

