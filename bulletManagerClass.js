
var BulletManager = function(_w, _h){
    this.bullets = new List();
    this.windowW = _w;
    this.windowH = _h;
};
BulletManager.prototype.add = function( bullet ){
      this.bullets.push(bullet);
};

BulletManager.prototype.isIn = function( x, y, r){
    return 0 <=  x + r && x - r < this.windowW && 0 <= y + r && y - r < this.windowH;
};
BulletManager.prototype.update = function(px, py){
    for(var i = 0; i<this.bullets.length(); ){
	this.bullets.get(i).update(px , py);
	var x = this.bullets.get(i).x;
	var y = this.bullets.get(i).y;
	var r = this.bullets.get(i).r;
	var exist = this.bullets.get(i).exist
	if( exist == 0 || !this.isIn( x, y, r ) ){
	    this.bullets.delete( i );
	} else {
	    i++;
	}
    }
};

BulletManager.prototype.draw = function(graphic ){
    for(var i = 0; i<this.bullets.length(); i++){
	this.bullets.get(i).draw(graphic);
    }
};

BulletManager.prototype.clear = function(){
    this.bullets.clear();
};
