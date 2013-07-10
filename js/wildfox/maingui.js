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
    $("#loginForm").submit(function() {
        doLogin();
    });
   
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
                    UserInfo.userId = data.body.userInfo.userId;
                    UserInfo.right = data.body.userInfo.right;
                    UserInfo.score = data.body.userInfo.score;
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
