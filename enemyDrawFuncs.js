
function nomalEnemydraw(graphic){

    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = 'rgb( 255, 0, 0)';
    graphic.ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
    graphic.ctx.fill();
    graphic.ctx.beginPath();
    graphic.ctx.strokeStyle = 'rgba( 255, 255, 255, 0.2)';
    graphic.ctx.arc(this.x,this.y,this.r,Math.PI*2,false);
    graphic.ctx.stroke();

    graphic.reset();
};