<!DOCTYPE html>
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
        <!--
        <script src="./js/bootstrap/js/bootstrap.js" type="text/javascript"></script>
        -->
        <link rel="stylesheet" href="./js/artDialog/skins/black.css?4.1.2"></link>
	<script src="./js/artDialog/artDialog.source.js?skin=black"></script>        
        <script src="./js/jquery/jquery-2.0.0.js" type="text/javascript"></script>
        <script src="./js/wildfox/maingui.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="./js/CustomLoginFormStyling/css/style.css" />
        <link rel="stylesheet" type="text/css" href="./css/main.css" />
        <script src="./js/CustomLoginFormStyling/js/modernizr.custom.63321.js"></script>
        <script type="text/javascript" src="./js/eidogo/js/all.compressed.js"></script>
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
                            <input type="submit" value="登录" name="loginSubmit">
                            <!--
                            <input type="button" value="测试" name="test" onclick="testStorage();">-->
			</p>       
                </form>
            </section>
            
            <section class="mainContent" id ="contentPanel">
                <form class="form-6">
                           
                </form>
            </section>
        </div>
        <div class="foot">
        </div>
    </body>
</html>
