function main()
{
   ctx.setFill(color('#000000'));
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   
   ctx.setFill(color('#ff0000'));
   ctx.fillRect(200, 0, 2, 500);
   
   ctx.setFill(color('#007fff'));
   ctx.fillRect(0, 200, 500, 2);
}
