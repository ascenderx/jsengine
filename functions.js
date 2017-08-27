var ANSI_CLEAR   = '\033c';
var ANSI_RED     = '\033[1;31m';
var ANSI_GREEN   = '\033[1;32m';
var ANSI_YELLOW  = '\033[1;33m';
var ANSI_BLUE    = '\033[1;34m';
var ANSI_MAGENTA = '\033[1;35m';
var ANSI_CYAN    = '\033[1;36m';
var ANSI_WHITE   = '\033[1;37m';
var ANSI_RESET   = '\033[0m';
var stdin        = java.lang.System['in'];
var stdscan      = new java.util.Scanner(stdin);
var stdout       = java.lang.System['out'];

function print(string)
{
   if (string === null || string === undefined)
      string = '';
   
   stdout.print(string);
}

function println(string)
{
   if (string === null || string === undefined)
      string = '';

   stdout.println(string);
}

function prompt(msg)
{
   print(msg);
   
   print(ANSI_GREEN);
   var input = readline();
   print(ANSI_RESET);

   return input;
}

function clear()
{
   print(ANSI_CLEAR);
}

function read()
{
   return stdscan.next();
}

function readbool()
{
   return stdscan.nextBool();
}

function readbyte()
{
   return stdscan.nextByte();
}

function readdouble()
{
   return stdscan.nextDouble();
}

function readfloat()
{
   return stdscan.nextFloat();
}

function readint()
{
   return stdscan.nextInt();
}

function readline()
{
   return stdscan.nextLine();
}

function readlong()
{
   return stdscan.nextLong();
}

function readshort()
{
   return stdscan.nextShort();
}
