
var EnemyManager = function(_w, _h){
    this.enemys = new List();
    this.windowW = _w;
    this.windowH = _h;
};
EnemyManager.prototype.add = function( enemy ){
    this.enemys.push(enemy);
};
EnemyManager.prototype.length = function(){
    return this.enemys.length();
};

EnemyManager.prototype.isIn = function( x, y, r){
    return 0 <=  x + r && x - r < this.windowW && 0 <= y + r && y - r < this.windowH;
};

EnemyManager.prototype.collision = function( bm ){
    var enemylen = this.enemys.length();
    var bulletlen = bm.bullets.length();
    for( var i = 0; i<enemylen; i++ ) {
	for( var j = 0; j <bulletlen; j++){
	    if( this.enemys.get(i).collision( bm.bullets.get(j) ) ){
		this.enemys.get(i).life--;
		bm.bullets.get(j).exist = 0;
	    }
	}
    }
};
EnemyManager.prototype.update = function(plx, ply, enemybm, playerbm,
					 effectManager){
    var score = 0;
    
    this.collision(playerbm);

    for(var i = 0; i<this.enemys.length(); ){
	var x = this.enemys.get(i).x;
	var y = this.enemys.get(i).y;
	var r = this.enemys.get(i).r;
	var life = this.enemys.get(i).life;
	var frame = this.enemys.get(i).frame;
	if( life <= 0 ) {
	    score = score + this.enemys.get(i).score;
	    effectManager.add( new NomalEnemyDeadEffect(x,y) );
	}
	if( life <= 0 || (frame > 15  && !this.isIn( x, y, r ) ) ){
	    this.enemys.delete( i );
	} else {
	    this.enemys.get(i).update(plx,ply,enemybm);
	    i++;
	}
    }
    return score;
};

EnemyManager.prototype.draw = function(graphic ){
    for(var i = 0; i<this.enemys.length(); i++){
	this.enemys.get(i).draw(graphic);
    }
};
EnemyManager.prototype.clear = function(){
    this.enemys.clear();
};