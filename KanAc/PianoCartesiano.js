function Draw() {
    var c = document.getElementById('lavagna');
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "rgba(120,120,120,1)"
    ctx.fillStyle = "rgba(120,120,120,1)"
    ctx.moveTo(40, c.height / 2);
    ctx.lineTo(c.width-40, c.height / 2);
    ctx.stroke();
    ctx.moveTo(c.height / 2,40);
    ctx.lineTo(c.height / 2,c.width-40);
    ctx.stroke();
    ctx.moveTo(c.width-40,c.height / 2);
    ctx.lineTo(c.width-40,c.height / 2-5);
    ctx.stroke();
    ctx.moveTo(c.width-40,c.height / 2-5);
    ctx.lineTo(c.width-25,c.height / 2);
    ctx.stroke();
    ctx.moveTo(c.width-40,c.height / 2);
    ctx.lineTo(c.width-40,c.height / 2+5);
    ctx.stroke();
    ctx.moveTo(c.width-40,c.height / 2+5);
    ctx.lineTo(c.width-25,c.height / 2);
    ctx.stroke();
    ctx.moveTo(c.height / 2,40);
    ctx.lineTo(c.width/2-5,40);
    ctx.stroke();
    ctx.moveTo(c.height / 2,40);
    ctx.lineTo(c.width/2+5,40);
    ctx.stroke();
    ctx.moveTo(c.width/2-5,40);
    ctx.lineTo(c.width/2,25);
    ctx.stroke();
    ctx.moveTo(c.width/2+5,40);
    ctx.lineTo(c.width/2,25);
    ctx.stroke();
    ctx.strokeStyle = "rgba(0,0,0,1)"
    ctx.fillStyle = "rgba(0,0,0,1)"
    ctx.fillText('O',c.width/2+3,c.height/2+10);
    ctx.fillText('X',c.width-50,c.height/2+15);
    ctx.fillText('Y',c.width/2+5,55);
}