/*********************************************************
 * 
 *********************************************************/
var stdin   = java.lang.System['in'];
var stdscan = new java.util.Scanner(stdin);
var stdout  = java.lang.System['out'];

/*********************************************************
 * 
 *********************************************************/
function print(string)
{
   if (string === null || string === undefined)
      string = '';
   
   stdout.print(string);
}

/*********************************************************
 * 
 *********************************************************/
function println(string)
{
   if (string === null || string === undefined)
      string = '';

   stdout.println(string);
}

/*********************************************************
 * 
 *********************************************************/
function prompt(msg)
{
   print(msg);
   
   print(ANSI_GREEN);
   var input = read();
   print(ANSI_RESET);

   return input;
}

/*********************************************************
 * 
 *********************************************************/
function promptLine(msg)
{
   print(msg);
   
   print(ANSI_GREEN);
   var input = readline();
   print(ANSI_RESET);

   return input;
}

/*********************************************************
 * 
 *********************************************************/
function promptInt(msg)
{
   print(msg);
   
   print(ANSI_GREEN);
   var input = readint();
   print(ANSI_RESET);
   
   return input;
}

/*********************************************************
 * 
 *********************************************************/
function promptFloat(msg)
{
   print(msg);
   
   print(ANSI_GREEN);
   var input = readfloat();
   print(ANSI_RESET);
   
   return input;
}

/*********************************************************
 * 
 *********************************************************/
function clear()
{
   print(ANSI_CLEAR);
}

/*********************************************************
 * 
 *********************************************************/
function read()
{
   return stdscan.next();
}

/*********************************************************
 * 
 *********************************************************/
function readfloat()
{
   return parseFloat(stdscan.next());
}

/*********************************************************
 * 
 *********************************************************/
function readint()
{
   return parseInt(stdscan.next());
}

/*********************************************************
 * 
 *********************************************************/
function readline()
{
   return stdscan.nextLine();
}

/*********************************************************
 * 
 *********************************************************/
function color(string)
{
   return javafx.scene.paint.Color.web(string);
}
