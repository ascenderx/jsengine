import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

/*********************************************************
 * JAVASCRIPT-CANVAS CLASS [MAIN]
 *********************************************************/
public class JSCanvas extends Application
{
   /******************************************************
    * 
    ******************************************************/
   @Override
   public void start(Stage stage)
   {
      // display debug message
      System.err.printf("Initializing GUI...");
      
      // initialize the canvas and window
      Canvas   canvas = new Canvas(500, 500);
      GridPane pane   = new GridPane();
      Scene    scene  = new Scene(pane);
      
      // initialize the scripting engine
      ScriptEngineManager mgr = new ScriptEngineManager(null);
      ScriptEngine        eng = mgr.getEngineByName("nashorn");
      GraphicsContext     ctx = canvas.getGraphicsContext2D();
      
      // finish up GUI
      pane.add(canvas, 0, 0);
      stage.setScene(scene);
      stage.sizeToScene();
      stage.setResizable(false);
      stage.setTitle("JSCanvas");
      
      // display debug message
      System.err.printf("Complete%n");
      
      // display debug message
      System.err.printf("Fetching command-line arguments...");
      
      // get command-line arguments
      Object[] objArgs = getParameters().getRaw().toArray();
      String[] args    = new String[objArgs.length];
      for (int i = 0; i < objArgs.length; i++)
         args[i] = (String) objArgs[i];
      
      // display debug message
      System.err.printf("Complete%n");
      
      // display debug message
      System.err.printf("Initializing JavaScript engine...");
      
      // add variables to the JavaScript engine
      eng.put("args", args);
      eng.put("canvas", canvas);
      eng.put("ctx", ctx);
      
      // display debug message
      System.err.printf("Complete%n");
      
      // display debug message
      System.err.printf("Reading user source file...");
      
      if (args.length > 0)
      {
         FileReader fin;
         try
         {
            // load and evaluate predefined functions
            eng.eval(
               "function color(string)" +
               "{ return javafx.scene.paint.Color.web(string); }"
            );
            
            // load and evaluate the file
            fin = new FileReader(args[0]);
            eng.eval(fin);
            fin.close();
            
            if ((eng.get("main") != "undefined") &&
                (eng.get("main") != "null"))
               eng.eval("main();");
            
            // display debug message
            System.err.printf("Complete%n");
            
            // display the GUI
            stage.show();
         }
         // parse any file errors
         catch (IOException ioe)
         {
            File   file = new File(args[0]);
            String message;
            
            // parse the error and set the message accordingly
            if (!file.exists())
               message = "Cannot find file \"" + args[0] + "\"";
            else if (file.isDirectory())
               message = "\"" + args[0] + "\" is a directory";
            else if (!file.canRead())
               message = "Cannot read file \"" + args[0] + "\"";
            else
               message = "Cannot open file \"" + args[0] + "\"";
               
            System.out.println(message);
            
            System.exit(1);
         }
         // parse any script errors
         catch (ScriptException se)
         {
            String message = se.getMessage();
            
            System.out.println(message);
            
            System.exit(1);
         }
      }
      // if no filename was provided, then display a message
      else
      {
         System.out.println("No filename specified");
         System.exit(1);
      }
   }
   
   /******************************************************
    * 
    ******************************************************/
   public static void main(String[] args)
   {
      launch(args);
   }
}
