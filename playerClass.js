
var Player = function(_w, _h,_ac){
    this.x = 250;
    this.y = 400;
    this.r = 10;
    this.life = 5;
    this.mouseX = 250;
    this.mouseY = 400;
    this.maxMove = 20;
    this.windowWidth = _w;
    this.windowHeight = _h;
    this.absoluteCoordinate = _ac;
    
    this.playerState = 0;
    this.hitState = 0;
    this.shootRate = 3;

    this.bulletManager = new BulletManager(_w,_h);
    this.score = 0;
    var self = this;
    document.onmousemove = function(e){
	if( !e ) e = window.event;
	self.mouseX = (e.clientX - self.absoluteCoordinate.left) - self.r;
	self.mouseY = (e.clientY - self.absoluteCoordinate.top) - self.r * 2;
    };
    document.onclick = function(e){
	if( self.playerState == 0 ){
	    self.playerState = 1;
	}
	if( self.playerState == 2  ){
	    self.init();
	    self.playerState = 3;
	}
    };
};

Player.prototype.init = function(){
    this.x = 250;
    this.y = 400;
    this.life = 5;
    this.mouseX = 250;
    this.mouseY = 400;
    this.hitState = 0;
    this.shootRate = 3;
    this.score = 0;
    this.bulletManager.clear();
};

Player.prototype.update = function( frame, bm ){

    this.move();
    this.bulletManager.update(this.x,this.y);
    if( frame % this.shootRate == 0 ){
	this.shoot();
    }
    var flg = this.collision(bm);
    if( flg ){
	this.playerState++;
    }
};


Player.prototype.shoot = function(){
    this.bulletManager.add( new Bullet(this.x - 10, this.y - this.r,
				       -Math.PI / 2, PlayerBulletStatus, playerBulletDraw, playerBulletMove) );
    this.bulletManager.add( new Bullet(this.x + 10, this.y - this.r,
				       -Math.PI / 2, PlayerBulletStatus, playerBulletDraw, playerBulletMove) );
    if( this.score > 2500 ){
	this.bulletManager.add( new Bullet(this.x - 15, this.y - this.r,
					   +Math.PI * 17 / 12, PlayerBulletStatus, playerBulletDraw, playerBulletMove) );
	this.bulletManager.add( new Bullet(this.x + 20, this.y - this.r,
					   +Math.PI * 19 / 12, PlayerBulletStatus, playerBulletDraw, playerBulletMove) );
    }
};

Player.prototype.move = function(){
    var dx = this.mouseX - this.x;
    var dy = this.mouseY - this.y;
    var rad = Math.atan2( dy, dx );
    var dist = Math.sqrt( dx*dx + dy*dy );

    dist = dist > this.maxMove ? this.maxMove : dist;
    this.x = this.x + Math.cos(rad) * dist;
    this.y = this.y + Math.sin(rad) * dist;

    if(this.x < this.r ) this.x = this.r;
    if(this.x > this.windowWidth - this.r ) this.x = this.windowWidth - this.r;
    if(this.y < this.r ) this.y = this.r;
    if(this.y > this.windowHeight - this.r ) this.y = this.windowHeight - this.r;
};

Player.prototype.collision = function( bm ){
    var px = this.x;
    var py = this.y;
    var pr = this.r;
    var flg = false;

    for( var i = 0; i<bm.bullets.length(); i++){

	var dx = px - bm.bullets.get(i).x;
	var dy = py - bm.bullets.get(i).y;
	var dr = pr + bm.bullets.get(i).r;
	if( dr * dr >= ( dx * dx + dy * dy ) ){
	    flg = true;
	    bm.bullets.get(i).exist = 0;
	}
    }
    return flg;
};


Player.prototype.draw =function(graphic){
    
    this.bulletManager.draw(graphic);

    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#00ccff";
    graphic.ctx.moveTo( this.x, this.y - 15 );
    graphic.ctx.lineTo( this.x - 15 , this.y + 20 );
    graphic.ctx.lineTo( this.x , this.y + 10 );
    graphic.ctx.lineTo( this.x + 15 , this.y + 20 );
    graphic.ctx.closePath();
    graphic.ctx.fill();

    graphic.reset();
};
