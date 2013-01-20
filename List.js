

var List = function(){
    this.list = [];
};

List.prototype.push = function(data){
    this.list.push(data);
};

List.prototype.delete = function(num){
    this.list.splice(num,1);
};

List.prototype.get = function(num){
    if( num >= this.length ) num = this.list.length - 1;
    if( num < 0 ) return null;
    return this.list[num];
};

List.prototype.length = function(){
    return this.list.length;
};
List.prototype.clear = function(){
    this.list.splice(0,this.length());
};