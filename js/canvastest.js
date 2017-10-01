var GCW;
var GCH;
var x;
var y;
var r;
var dx;
var dy;
var dr;

function init()
{
   GCW = canvas.width;
   GCH = canvas.height;
   x   = 200;
   y   = 200;
   r   = 50;
   dx  = 0;
   dy  = 0;
   dr  = 0;
}

function run()
{
   draw();
   handleInput();
   update();
}

function draw()
{
   // draw the background
   ctx.setFill(color('#000000'));
   ctx.fillRect(0, 0, GCW, GCH);
   
   // draw a vertical line
   ctx.setFill(color('#ff0000'));
   ctx.fillRect(x, 0, 2, GCH);
   
   // draw a horizontal line
   ctx.setFill(color('#007fff'));
   ctx.fillRect(0, y, GCW, 2);
   
   // draw a circle
   ctx.setStroke(color('#ffff00'));
   ctx.strokeOval(x - r, y - r, 2 * r, 2 * r);
}

function update()
{
   x += dx;
   y += dy;
   
   if ((x + r > GCW) && (dx > 0))
   {
      x  = GCW - r;
      dx = -dx;
   }
   else if ((x - r < 0) && (dx < 0))
   {
      x  = 0 + r;
      dx = -dx;
   }
   
   if ((y + r > GCW) && (dy > 0))
   {
      y  = GCH - r;
      dy = -dy;
   }
   else if ((y - r < 0) && (dy < 0))
   {
      y  = 0 + r;
      dy = -dy;
   }
}

function handleInput()
{
   if (ui.keyUp > 0)
      dy = -5;
   else if (ui.keyDown > 0)
      dy = +5;
   else
      dy = 0;
   
   if (ui.keyLeft > 0)
      dx = -5;
   else if (ui.keyRight > 0)
      dx = +5;
   else
      dx = 0;
}
