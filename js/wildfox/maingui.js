/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//TODO: use jquery API do ajax request
var UserInfo = {
    userId:"",
    right:"",
    score:""
};
$().ready(function(){  
   changePanel('');
});

$(":submit[name='loginSubmit']").click(function() { 
   showMessage('info','clicked'); 
});
var doLogin = function(){
  var userId = $("#userInput").val();
  var pwd = $("#pwdInput").val();
  $.ajax({
        url:"./src/main.php",
        type:"GET",
        data:{
            action:"getUserInfo",
            userId:userId,
            pwd: pwd
        },
        dataType:"json",
        timeout:"10000",    	
        success:function(data){	    	
            if (data==undefined ||data.body.userInfo == undefined){
                showMessage("错误","请求数据失败。");
                return;
            }else{
                if(data.status == "0000"){
//                    UserInfo.userId = data.body.userInfo.userId;
//                    UserInfo.right = data.body.userInfo.right;
//                    UserInfo.score = data.body.userInfo.score;
                    $("#loginPanel").hide();
                    $("#contentPanel").show();
                }else{
                    showMessage("错误","输入的用户名或者密码错误，请确认后重试。");
                    return;
                }
            }
        },
        error: function(){
            showMessage("错误","请求数据失败。");
        }
    });
};

var changePanel = function(panelName,subClass){
    if(panelName == ''){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
    }else if (panelName=='mainPanel'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
    }else if (panelName == 'selfIgoManual'){
        $("#selfIgoManual").show();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
//        showConvas();
        getFileList();
    }
    else if(panelName == 'professionalIgoManual'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").show();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
        loadEidogo("player-container","resource/sgf/blood_vomit.sgf");
    }else if(panelName == 'igoManualGame'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").show();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
    }else if(panelName == 'liveAndDie'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").show();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
        if(subClass == "liveAndDie"){
            
        }else if(subClass == "arrangement"){
            
        }else if(subClass == "curcia"){
            
        }else if(subClass == "guanzi"){
            
        }else {
            
        }
    }else if(panelName == 'vedioClasss'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").show();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
        if(subClass == "arrangement"){
            
        }else if(subClass == "fight"){
            
        }else if(subClass == "guanzi"){
            
        }else{
            
        }
    }else if(panelName == 'games'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").show();
        $("#scoreManagement").hide();
        $("#userManagement").hide();
        if(subClass == "luobo"){
            
        }else if(subClass == "snowGround"){
            
        }else{
            
        }
    }else if(panelName == 'scoreManagement'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").show();
        $("#userManagement").hide();
    }else if(panelName == 'userManagement'){
        $("#selfIgoManual").hide();
        $("#professionalIgoManual").hide();
        $("#igoManualGame").hide();
        $("#liveAndDie").hide();
        $("#arrangement").hide();
        $("#crucia").hide();
        $("#vedioClasss").hide();
        $("#games").hide();
        $("#scoreManagement").hide();
        $("#userManagement").show();
    }
};

var showConvas = function(){
    var container = Quark.getDOM("slftIgoManualLeftPanel");
    container.style.background = "url(images/IgoBoard.jpg) repeat-x";
    var canvas = Quark.createDOM("canvas", {width:480, height:320, style:
        {
            position:"absolute",
            backgroundColor:"#fff"
        }
    });
    container.appendChild(canvas);
//    var canvasContext = new Quark.CanvasContext({
//        canvas:canvas
//    });
}

var getFileList = function(){
    $.ajax({
        url:"./src/main.php",
        type:"GET",
        data:{
            action:"getFileList"            
        },
        dataType:"json",
        timeout:"10000",    	
        success:function(data){	    	
            if (data==undefined ||data.body.fileList == undefined){
                showMessage("错误","请求数据失败。");
                return;
            }else{
                if(data.status == "0000"){
                    $("#qipuList")[0].innerHTML ="";
                    var htmlStr = "";
                    for(var i=0; i<data.body.fileList.length;i++){
                        if(data.body.fileList[i] != undefined)
                            htmlStr = htmlStr + "<li><a>"+data.body.fileList[i]+"</a></li>";
                    }
                   
                    $("#qipuList")[0].innerHTML = htmlStr;
                    $("#qipuList").puislidemenu();
//                    $("#selfIgoManualList").show();
                }else{
                    showMessage("错误","输入的用户名或者密码错误，请确认后重试。");
                    return;
                }
            }
        },
        error: function(){
            showMessage("错误","请求数据失败。");
        }
    });
}

var doSendSGFString = function (){
    
};

var doGetSGFString = function (){
    
};
            
var showUploadForm = function(){
    
};

var showProlemForm = function (){
    
};

var showQipuForm = function (){
    
};

var showLoginForm = function (){
    
};

var testStorage = function(){
    if(window.localStorage){
        showMessage('Info','This browser supports localStorage');
    }else{
        showMessage('Info','This browser does NOT support localStorage');
    }
}

var initEidogo = function(){
    var player = new eidogo.Player({
        container:       "player-container", // HTML element id indicating where to put the player
        theme:           "standard", // "standard" or "compact"
        sgfUrl:          "resource/sgf/blood_vomit.sgf", // relative URL (within same domain) to SGF file to load 
        loadPath:        [0, 0], // The location within the game tree to start at
        mode:            "play", // "play" or "view"
        showComments:    true,
        showPlayerInfo:  true,
        showGameInfo:    true,
        showTools:       true,
        showOptions:     true,
        markCurrent:     true,
        markVariations:  true,
        markNext:        false,
        enableShortcuts: false,
        problemMode:     false
    });
}

var loadEidogo = function(containerID,sgfUrl){
    var player = new eidogo.Player({
        container:       containerID, // HTML element id indicating where to put the player
        theme:           "standard", // "standard" or "compact"
        sgfUrl:          sgfUrl, // relative URL (within same domain) to SGF file to load 
        loadPath:        [0, 0], // The location within the game tree to start at
        mode:            "play", // "play" or "view"
        showComments:    true,
        showPlayerInfo:  true,
        showGameInfo:    true,
        showTools:       true,
        showOptions:     true,
        markCurrent:     true,
        markVariations:  true,
        markNext:        false,
        enableShortcuts: false,
        problemMode:     false
    });
}

artDialog.notice = function (options) {
    var opt = options || {},
        api, aConfig, hide, wrap, top,
        duration = 800;
        
    var config = {
        id: 'Notice',
        left: '50%',
        top: '90%',
        fixed: true,
        drag: false,
        resize: false,
        follow: null,
        lock: false,
        init: function(here){
            api = this;
            aConfig = api.config;
            wrap = api.DOM.wrap;
            top = parseInt(wrap[0].style.top);
            hide = top + wrap[0].offsetHeight;
            
            wrap.css('top', hide + 'px')
                .animate({top: top + 'px'}, duration, function () {
                    opt.init && opt.init.call(api, here);
                });
        },
        close: function(here){
            wrap.animate({top: hide + 'px'}, duration, function () {
                opt.close && opt.close.call(this, here);
                aConfig.close = $.noop;
                api.close();
            });
            
            return false;
        }
    };	
    
    for (var i in opt) {
        if (config[i] === undefined) config[i] = opt[i];
    };
    
    return artDialog(config);
};

var showMessageFloat = function(title,message){
    art.dialog.notice({
	    title: title,
	    width: 220,
	    content: message,	    
	    time: 5
    });
}

var showMessage = function (title,message){
    art.dialog({
        title: title,
        content: message,
        cancelVal: '关闭',
        cancel:true
    });
}
