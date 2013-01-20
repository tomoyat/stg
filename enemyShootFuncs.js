
function nomalEnemyShoot( plx, ply, bm ){
    var dx = plx - this.x;
    var dy = ply - this.y;
    var dir = Math.atan2( dy, dx);
    var nx = this.x + Math.cos(dir) * (this.r+1);
    var ny = this.y + Math.sin(dir) * (this.r+1);
    switch (this.bulletType){
    case 0:
	bm.add( new Bullet( nx, ny, dir, NomalBulletStatus, nomalBulletDraw, nomalBulletMove) );
	break;
    default:
	break;
    }
};