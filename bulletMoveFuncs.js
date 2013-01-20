
function nomalBulletMove(){
    this.x = this.x + this.speed * Math.cos(this.dir);
    this.y = this.y + this.speed * Math.sin(this.dir);
};

function playerBulletMove(){
    this.x = this.x + this.speed * Math.cos(this.dir);
    this.y = this.y + this.speed * Math.sin(this.dir);
};