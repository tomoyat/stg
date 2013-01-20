
var EffectManager = function(){
    this.effects = new List();
};

EffectManager.prototype.clear = function(){
    this.effects.clear();
};

EffectManager.prototype.add = function(effect){
    this.effects.push(effect);
};

EffectManager.prototype.update = function(){
    for( var i = 0; i<this.effects.length(); ){
	var exist = this.effects.get(i).exist;
	if( exist == 0 ){
	    this.effects.delete( i );
	} else {
	    this.effects.get(i).update();
	    i++;
	}
    }
};

EffectManager.prototype.draw = function(graphic){
    var len = this.effects.length();
    for(var i = 0; i<len; i++){
	this.effects.get(i).draw(graphic);
    }
};