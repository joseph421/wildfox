/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var xitiCurNumber = 0;
var xitiURLBase = "";
var xitiURLList = [ "./sgf/7S8H01.sgf", "./sgf/互相叫吃11.sgf","./sgf/xiti1.sgf","./sgf/2014.sgf","./sgf/2015.sgf","./sgf/Go-00058.sgf"]; 
var sndURLList = ["good0.mp3", "good1.mp3", "good2.mp3","good3.mp3","good4.mp3","good5.mp3"]; 
function init(){ 
    var ctrl=document.getElementById("mySwf"); 
    xitiIndex.innerHTML="第1题";
    ctrl.focus(); 

    ctrl1=document.getElementById("mySwf1"); 
    xitiIndex.innerHTML="第1题";
    ctrl1.focus(); 
}
function gibo_load(index){
    //先清除列表中前一题的正解图内容
    var answerListSelect = document.getElementById("area");
    answerListSelect.options.length=1;//保留第一个
    var sgfurl = xitiURLList[index];
    var sndurl = sndURLList[index];
    mySwf.NewGoExercises(sgfurl);
    mySwf1.NewGoExercises(sgfurl);
    //mySwf.NewGoExercisesSound(sgfurl,sndurl);//这个函数可以在装载棋谱的时候播放一段音频解说

    var IndexID = index + 1;
    xitiIndex.innerHTML="第"+IndexID.toString()+ "题";
}
function OnNextXiti() {
    document.getElementById("btnPrvXiti").removeAttribute("disabled");
    xitiCurNumber++;
    if (xitiCurNumber >= 5) {
        document.getElementById("btnNextXiti").disabled = true;
    }
    //xitiIndex.innerHTML="第"+xitiID.toString()+ "题";
    gibo_load(xitiCurNumber);
    }
function OnPrvXiti() {
    document.getElementById("btnNextXiti").removeAttribute("disabled");

    xitiCurNumber--;
    if (xitiCurNumber <= 0) {
        document.getElementById("btnPrvXiti").disabled = true;
    }
    gibo_load(xitiCurNumber);
}
	//返回上一步
function OnStepBack() {
    mySwf.JSStepBack();
    mySwf1.JSStepBack();
}

function OnStepPrv(){
    mySwf.JSStepPrv();
    mySwf1.JSStepPrv();
}
	//重新做题
function OnReset() {
    mySwf.ResetCurrentExercises();
    mySwf1.ResetCurrentExercises();
}
	//习题模式
function OnExerciseMode() {
    mySwf.EnterExerciseMode();
    mySwf1.EnterExerciseMode();
}
//研究模式
function OnResearchMode() {
    mySwf.EnterResearchMode();
    mySwf1.EnterResearchMode();
}
//切换是否显示棋子上的数字
function OnShowHideDigit() {
    mySwf.ShowHideDigit();
    mySwf1.ShowHideDigit();
}
//在显示/隐藏手数态变化时被调用，1-显示手数 0-不显示手数
function  OnDigitStatusChanged(bShow)
{
    if(bShow)
    {
        btnShowNumber.value = "隐藏手数";
    }	
    else
    {
        btnShowNumber.value = "显示手数";
    }
}
//切换是否打开落子声音
function OnPlaySoundOnOff() {
    mySwf.PlaySoundOnOff();
    mySwf1.PlaySoundOnOff();
}
//落子声音被打开/关闭是被调用 bPlay = 1-声音打开 0-声音关闭
function  OnPlaySoundStatusChanged(bPlay) 
{
    if(bPlay)
    {
        btnMute.value = "关闭落子声音";
    }	
    else
    {
        btnMute.value = "打开落子声音";
    }
}
//将新内容添加到listbox中
function OnUserPlayMove(posX,posY,color) {
    var list_selectedList = document.getElementById("selectedList");
    var oOption = document.createElement("option");
    var xitiID = xitiCurNumber+1;
    var sValue = "第"+xitiID.toString()+ "题,X:"+ posX.toString() +",Y:"+ posY.toString() + ",Color:"+color.toString();
    oOption.appendChild(document.createTextNode(sValue));
    oOption.setAttribute("value", sValue);
    list_selectedList.appendChild(oOption);
}
//解题结束
function OnUserPlayResult(res) {
    var list_selectedList = document.getElementById("selectedList");
    var oOption = document.createElement("option");
    var xitiID = xitiCurNumber+1;
    var sValue;
    if(res==0)
        sValue = "第"+xitiID.toString()+ "题回答错误";
    else
        sValue = "第"+xitiID.toString()+ "题回答正确";
    oOption.appendChild(document.createTextNode(sValue));
    oOption.setAttribute("value", sValue);
    list_selectedList.appendChild(oOption);
}
//收到解说
function OnCommentString(res) {
    commentNode.innerHTML=res;
}

 //检索到新正解图
function OnReceiveAnswer(strName) {
    var answerListSelect = document.getElementById("area");
    var newOption=document.createElement("option");
    newOption.setAttribute("value",strName);
    newOption.appendChild(document.createTextNode(strName));
    answerListSelect.appendChild(newOption);
}
//下拉框中选择了一个正解图，index从1开始
function OnShowAnswerGraph() {
    var answerListSelect = document.getElementById("area");
    var index=answerListSelect.selectedIndex;
    mySwf.ShowAnswerGraph(index);
    mySwf1.ShowAnswerGraph(index);
}
    
//点击开始/停止演示正解按钮  
function OnAutoAnimate() {
    var answerListSelect = document.getElementById("area");
    var index=answerListSelect.selectedIndex;
    if(index>0)
    {
        mySwf.SolutionAnimateStartStop();
    	mySwf1.SolutionAnimateStartStop();
    }
}
    
//收到开始自动演示正解图的回调消息
function  OnSolutionAnimateStart(){
    btnAutoAnimate.value = "停止演示正解";
    //btnAutoAnimate.src = "stop.bmp";
}
//收到停止自动演示正解图的回调消息
function  OnSolutionAnimateStop() {
    btnAutoAnimate.value = "自动演示正解";
    //btnAutoAnimate.src = "start.bmp";
}
//打开新习题后被调用，确定习题是白先行还是黑先行
function  OnFirstColor(color){
    if(color == 1)
        document.getElementById("firstColor").innerHTML = "白先行";
    else
        document.getElementById("firstColor").innerHTML = "黑先行";
}

    