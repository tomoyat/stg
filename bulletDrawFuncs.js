
function nomalBulletDraw(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = 'rgb( 255, 0, 0)';
    graphic.ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
    graphic.ctx.fill();

    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = 'rgba( 255, 255, 255, 0.5)';
    graphic.ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
    graphic.ctx.fill();

    graphic.reset();
};

function playerBulletDraw(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#00ccff";
    graphic.ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
    graphic.ctx.fill();

    graphic.reset();
};