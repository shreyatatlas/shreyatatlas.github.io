('.chat-button').onclick , function(){  
    ('.chat-button').css({"display": "none"});  
    ('.chat-box').css({"visibility": "visible"});  
};  
('.chat-box .chat-box-header p').onclick , function(){ 
    ('.chat-button').css({"display": "block"});  
    ('.chat-box').css({"visibility": "hidden"});  
};  
("#addExtra").onclick , function(){
         (".modal").toggleClass("show-modal");  
};  
(".modal-close-button").onclick , function(){
    (".modal").toggleClass("show-modal");  
};  