<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <meta charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="./js/bonbonButton/reset-min.css">    
        <link rel="stylesheet" type="text/css" href="./js/bonbonButton/style.css">
        <link rel="stylesheet" type="text/css" href="./js/bonbonButton/buttons.css">
        <link rel="stylesheet" type="text/css" href="./js/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="./js/bootstrap/css/bootstrap-responsive.css">
        <link rel="stylesheet" href="./js/boundmenu/templates/css/main.css" type="text/css" />
        <link rel="stylesheet" href="./js/artDialog/skins/black.css?4.1.2"></link>
        <link rel="stylesheet" type="text/css" href="./js/primeui/development/primeui-0.9.6.css" />
        <link rel="stylesheet" type="text/css" href="./js/CustomLoginFormStyling/css/style.css" />
        <link rel="stylesheet" type="text/css" href="./css/main.css" />
        <link rel="stylesheet" type="text/css" href="./js/primeui/themes/pepper-grinder/theme.css" />
        <!--
        <script src="./js/bootstrap/js/bootstrap.js" type="text/javascript"></script>
        -->        
        <script src="./js/jquery/jquery-2.0.0.js" type="text/javascript"></script>
        <script src="./js/jquery/jquery-ui.min.js" type="text/javascript"></script>
        <script src="./js/eidogo/player/i18n/cn.js"></script>
        <script src="./js/quarkjs/js/quark.base-1.0.0.js"></script>
        <script src="./js/boundmenu/js/main.js"></script>        
	<script src="./js/artDialog/artDialog.source.js?skin=black"></script>      
        <script src="./js/CustomLoginFormStyling/js/modernizr.custom.63321.js"></script>        
        <script type="text/javascript" src="./js/eidogo/player/js/all.compressed.js"></script>
        <script src="./js/primeui/development/primeui-0.9.6.js"></script>
        <script src="./js/wildfox/maingui.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="head">

        </div>
        <div class="body">
            <section class="mainLogin" id ="loginPanel">
                <form class="form-4" id="loginForm">
                    <h1>用户登录</h1>
                        <p>
                            <label for="login">用户名</label>
                                <input type="text" id="userInput" required="" placeholder="请输入用户名..." name="login">
                        </p>
			<p>
                            <label for="password">密码</label>
                            <input type="password" id="pwdInput" required="" placeholder="请输入密码..." name="password"> 
			</p>

			<p>
                            <input type="button" value="登录" name="loginSubmit" onclick="doLogin();">
                            <!--
                            <input type="button" value="测试" name="test" onclick="testStorage();">-->
			</p>       
                </form>
            </section>
            
            <section class="mainContent" id ="contentPanel" style="display:none">
                <div id="menu">
                    <ul class="level1">
                        <li class="level1-li"><a class="level1-a" href="#url" onclick="changePanel('mainPanel','')">首页</a></li>
                        <li class="level1-li"><a class="level1-a drop" href="#url">打谱<!--[if gte IE 7]><!--></a><!--<![endif]-->
                            <!--[if lte IE 6]><table><tr><td><![endif]-->
                            <ul class="level2">
                                <li><a href="#url" onclick="changePanel('selfIgoManual','');">自战棋谱</a></li>
                                <li><a href="#url" onclick="changePanel('professionalIgoManual','');">历代棋士棋谱</a></li>
                                <li><a href="#url" onclick="changePanel('igoManualGame','');">打谱闯关</a></li>                                    
                            </ul>
                            <!--[if lte IE 6]></td></tr></table></a><![endif]-->
                        </li>
                        <li class="level1-li"><a class="level1-a drop" href="#url">死活与手筋<!--[if gte IE 7]><!--></a><!--<![endif]-->
                            <!--[if lte IE 6]><table><tr><td><![endif]-->
                            <ul class="level2">
                                <li><a href="#url" onclick="changePanel('liveAndDie','liveAndDie');">死活题集</a></li>
                                <li><a href="#url" onclick="changePanel('liveAndDie','arrangement');">布局题集</a></li>
                                <li><a href="#url" onclick="changePanel('liveAndDie','curcia');">手筋题集<!--[if gte IE 7]><!--></a><!--<![endif]-->
                                    <!--[if lte IE 6]><table><tr><td><![endif]-->
                                        <!--
                                        <ul class="level3">
                                            <li><a href="#url">Beginners Slopes</a></li>
                                            <li><a href="#url">Intermediate Slopes</a></li>
                                            <li><a class="fly" href="#url">Advanced Skill Levels</a>
                                            
                                                <ul class="level4">
                                                    <li><a href="#url">Local</a></li>

                                                    <li><a href="#url">Nearby</a></li>
                                                    <li><a href="#url">With instructor</a></li>
                                                    <li><a href="#url">Snow boarding</a><b></b></li>
                                                </ul>
                                           
                                            </li>
                                            <li><a href="#url">Expert</a></li>
                                        </ul>
                                        -->
                                </li>
                                    
                            </ul>
                            <!--[if lte IE 6]></td></tr></table></a><![endif]-->
                        </li>
                        <li class="level1-li"><a class="level1-a drop" href="#url">视频讲座<!--[if gte IE 7]><!--></a><!--<![endif]-->
                            <!--[if lte IE 6]><table><tr><td><![endif]-->
                            <ul class="level2">
                                <li><a href="#url" onclick="changePanel('vedioClasss','arrangement');">布局</a></li>
                                <li><a href="#url" onclick="changePanel('vedioClasss','fight');">中盘战术</a></li>
                                <li><a href="#url" onclick="changePanel('vedioClasss','guanzi');">官子</a></li>                                    
                            </ul>
                            <!--[if lte IE 6]></td></tr></table></a><![endif]-->
                        </li>
                        <li class="level1-li left"><a class="level1-a drop" href="#url">在线游戏<!--[if gte IE 7]><!--></a><!--<![endif]-->
                            <!--[if lte IE 6]><table><tr><td><![endif]-->
                            <ul class="level2">
                                <li><a href="#url" onclick="changePanel('games','luobo');">保卫萝卜</a></li>                                
                                <li><a href="#url" onclick="changePanel('games','snowGround');">雪地大冒险</a></li>
                            </ul>
                            <!--[if lte IE 6]></td></tr></table></a><![endif]-->
                        </li>
                        <li class="level1-li"><a class="level1-a  drop" href="#url">用户管理</a>
                            <ul class="level3">
                                <li><a href="#url" onclick="changePanel('scoreManagement','');">积分管理</a></li>
                                <li><a href="#url" onclick="changePanel('userManagement','');">用户管理</a></li>                                            
                            </ul>
                        </li>
                        <li class="level1-li"><a class="level1-a" href="#url" onclick="dologout();">退出</a></li>
                    </ul>
                </div>                
                <form class="form-6" id="selfIgoManual">
                    <div class="listPanel" id="selfIgoManualList">
                       
                    </div>
                    <div class="leftPanel" id="slftIgoManualLeftPanel">
                        
                    </div>
                    <div class="rightPanel" id="selfIgoManualRightPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="professionalIgoManual">
                    <div class="listPanel" id="proIgoManualList">
                        
                    </div>
                    <div class="leftPanel" id="proIgoManualLeftPanel">
                        <div id="player-container"></div>
                    </div>
                    <div class="rightPanel" id="proIgoManualRightPanel">
                        
                    </div> 
                </form>
                <form class="form-6" id="igoManualGame">
                    <div class="listPanel" id="igoManualGameList">
                        
                    </div>
                    <div class ="middlePanel" id="igoManualPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="liveAndDie">
                    <div class="listPanel" id="liveAndDieList">
                        
                    </div>
                    <div class ="middlePanel" id="liveAndDiePanel">
                        
                    </div>
                </form>
                <form class="form-6" id="arrangement">
                    <div class="listPanel" id="arrangementList">
                        
                    </div>
                    <div class="middlePanel" id="arrangementPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="crucia">
                    <div class="listPanel" id="cruciaList">
                        
                    </div>
                    <div class="middlePanel" id="cruciaPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="vedioClasss">
                    <div class="listPanel" id="vedioClasssList">
                        
                    </div>
                    <div class="middlePanel" id="vedioClasssPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="games">
                    <div class="middlePanel" id="gamePanel">
                        <div id="main" style="width: 1920px;">
                            <div id="canvasContainer">
                                <canvas id="canvas" width="1920" height="700">Sorry, your browser doesn't support canvas, please use Firefox3.6+, Safari5+, Chrome, IE9 etc.</canvas>
                            </div>  
                            <div id="textContainer" style="left: 771px;">
                                <span id="status"></span>
                            </div>
                            <span><input type="checkbox" onclick="this.checked ? game.bgSound.play() : game.bgSound.stop();" checked="true">Enable Sound</span>
                        </div>
                    </div>
                </form>
                <form class="form-6" id="scoreManagement">
                    <div class="middlePanel" id="scoreManagementPanel">
                        
                    </div>
                </form>
                <form class="form-6" id="userManagement">
                    <div class="middlePanel" id="userManagementPanel">
                        
                    </div>
                </form>
                
            </section>
        </div>
        <div class="foot">
        </div>
    </body>
</html>



