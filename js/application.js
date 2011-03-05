// Set URL of your WebSocketMain.swf here:


$(document).ready(function(){    
  WebSocket.__swfLocation = "/swf/WebSocketMain.swf";
  // Set this to dump debug message from Flash to console.log:
  WebSocket.__debug = true;
  
 

    if (window["WebSocket"]) {                            
         
      conn = new WebSocket("ws://localhost:1111");
      conn.onmessage = function(evt) {
        console.log(evt.data);
      };

      conn.onclose = function() {
        console.log("closed");
      };

      conn.onopen = function() {
        console.log("opened");
      };
    }



 });
      