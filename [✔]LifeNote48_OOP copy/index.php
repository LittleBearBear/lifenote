<?php
    include_once "common/base.php";
    if(!empty($_POST['username'])):
        include_once "inc/class.users.inc.php";
        $users = new LifenoteUsers($db);
        echo $users->createAccount();
    else:
?>

<!DOCTYPE html>
<html>
<head>
    <title>LifeNote</title>
    
    <!--[if lt IE 9]>
　　　　<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
　　<![endif]-->
   
    <link rel="stylesheet" href="CSSfiles/quiz_absolutePx.css" type="text/css" />
    <link rel="bookmark"  type="image/x-icon"  href="/images/logo.ico" />
    <link rel="shortcut icon" href="/images/logo.ico" />
    <link rel="icon" href="/images/logo.ico" />
</head>

<body>
    <?php include_once("JSfiles/analyticstracking.php") ?>
    <div class="page-wrap">
        
        <div class="dumbBoxWrap"> 
        	<div class="dumbBoxOverlay">
    		     &nbsp; 
    		</div>     

    		<div class="vertical-offset"> 
    			<div class="dumbBox">
    				<div id="sideBar">
                        <a id="closeModal"><img src="images/modal_close.png"/></a>
                        <h3>This is a beta version of LifeNote</h3>
                        <p>Our final domain will be <b><i>www.lifenote.me</i></b>, which is under instruction. If you like our product, please subscribe here. We will inform you when it is ready. </p>
        
                        <form method="post" action="<?php $_SERVER["HTTP_HOST"] ?>" id="registerform">
                            <div>
                                <label for="username">Email:</label>
                                <input type="text" name="username" id="username" />
                                <input type="submit" name="subscribe" id="subscribe" value="Subscribe" />
                            </div>
                        </form>
              
                    </div>
    			</div> 
    		</div> 
    	</div>
        
        <header>
            <img id="lifenoteLogo" src="images/logo_v1.png"/><h3 id = "logo">LifeNote<sup>Beta</sup></h3>

        	<!-- <h3 class="headerTip">Best Personal Assistant</h3> -->
            <!-- weibo login -->
            <!-- <wb:login-button type="3,1" onlogin="login" onlogout="logout">登录按钮</wb:login-button> -->
            <!-- 
                <div id = "register">Register</div>
                <div id = "signIn">Sign In</div> 
            -->

            <div id = "mySetUp">
                <a class="mySetUp"><img class="mySetUpBtn" src="images/setUp1.png"/></a>
                <ul class="setListCategory">
                    <li><span>Life</span></li>
                    <li><span>Studying</span></li>
                    <li><span>Work</span></li>
                    <li><span>Workout</span></li>
                    <li><span>Entertainment</span></li>
                    <li><span>Family</span></li>
                    <li><span>Ideas</span></li>
                    <li><span>Chores</span></li>
                </ul>
            </div>
            <div id = "myInfo">
                <a class="mySetUp"><img src="images/profile2.png"/></a>
                
            </div>
        </header>
        
        <div class="biggerContainer">
            
            <div id="clockBox">
                <h3 class="conversion">Time is Money ! <span class="TimeCoinRule">Golden &amp; Silver TimeCoin:</span>
                    <span class="rule"><img src="images/goldcoin.png" /> 1 = 1 Hour</span>
                    <span class="rule"><img src="images/silvercoin.png" /> 1 = 1 Minute</span>
                </h3>
                <div>
                    <!-- <span class="rule"><img src="images/goldcoin.png" /> 1 = <img src="images/silvercoin.png" /> 60 </span> -->
                </div>
                <!-- <p>Today, you have</p> -->
                <span id="moneySign"> TimeCoin: </span>
                <img src="images/goldcoin.png" /><span class="goldcoin"></span>
                <img src="images/silvercoin.png" /><span class="silvercoin"></span>
                <img src="images/coppercoin.png" /><span class="coppercoin"></span>
                <!-- <span>&nbsp;&nbsp;&nbsp; or &nbsp;</span><img src="images/silvercoin.png" /><span class="allsilvercoin"></span> -->
                <!-- <span class="rule2">2014's TimeCoin <img src="images/silvercoin.png" /></span><span id="leftTime"></span> -->
            </div>
            <!-- 
            <div class="everydayNews">
                <h3>Daily Tips</h3>
                <p></p>
            </div>
            -->
            
            <div class="modeChoosing">
            
                <a class="list-group-item" href="#">
                    <!-- <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-down" style="display:none;"></i>  -->
                    <img src="images/everydaydomenu.png"/>
                    <span class="everydayTitle">My Daily Task</span> 
                    <span class="DnDIntro">
                        Drag and drop your most important and urgent goal to the front
                    </span>
                </a>

                <ul class="listCategory">
                    <li id="Cat_1"><label for="life"><input class="everyDayDoList" type="checkbox" name="life" id="life"><span></span></label></li>
                    <li id="Cat_2"><label for="study"><input class="everyDayDoList" type="checkbox" name="study" id="study"><span></span></label></li>
                    <li id="Cat_3"><label for="work"><input class="everyDayDoList" type="checkbox" name="work" id="work"><span></span></label></li>
                    <li id="Cat_4"><label for="workout"><input class="everyDayDoList" type="checkbox" name="workout" id="workout"><span></span></label></li>
                    <li id="Cat_5"><label for="entertainment"><input class="everyDayDoList" type="checkbox" name="entertainment" id="entertainment"><span></span></label></li>
                    <li id="Cat_6"><label for="family"><input class="everyDayDoList" type="checkbox" name="family" id="family"><span></span></label></li>
                    <li id="Cat_7"><label for="chore"><input class="everyDayDoList" type="checkbox" name="chore" id="chore"><span></span></label></li>
                    <li id="Cat_8"><label for="idea"><input class="everyDayDoList" type="checkbox" name="idea" id="idea"><span></span></label></li>
                </ul>

                <div class="everyDayDoArea" style="display:none;">
                    <!-- <div class="progressBar"></div> -->
                    <ul id="myEverydayDoList">
                        <!--
                        <li class="lifeHabit"><label for="getup"><input class="everyDayDoList" type="checkbox" name="getup" id="getup"><span>Get up early</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="lifeHabit"><label for="sleep"><input class="everyDayDoList" type="checkbox" name="sleep" id="sleep"><span>Sleep early</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="lifeHabit"><label for="fruit"><input class="everyDayDoList" type="checkbox" name="fruit" id="fruit"><span>Fruit everyday</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="study"><label for="diary"><input class="everyDayDoList" type="checkbox" name="diary" id="diary"><span>Writing diary</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="study"><label for="read"><input class="everyDayDoList" type="checkbox" name="read" id="read"><span>Reading</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="study"><label for="word"><input class="everyDayDoList" type="checkbox" name="word" id="word"><span>Remebering words</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="study"><label for="plan"><input class="everyDayDoList" type="checkbox" name="plan" id="plan"><span>Making Plan</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="work"><label for="workhard"><input class="everyDayDoList" type="checkbox" name="workhard" id="workhard"><span>Work Hard</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="workOut"><label for="run"><input class="everyDayDoList" type="checkbox" name="run" id="run"><span>Running</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="entertainment"><label for="fun"><input class="everyDayDoList" type="checkbox" name="fun" id="fun"><span>Having Fun</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="relationship"><label for="parents"><input class="everyDayDoList" type="checkbox" name="parents" id="parents"><span>Talk to parents</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="relationship"><label for="mate"><input class="everyDayDoList" type="checkbox" name="mate" id="mate"><span>Having dinner with mate</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="chores"><label for="chore1"><input class="everyDayDoList" type="checkbox" name="chore1" id="chore1"><span>Get lisence</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="idea"><label for="smile"><input class="everyDayDoList" type="checkbox" name="smile" id="smile"><span>Keep Smiling</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="idea"><label for="noGiveUp"><input class="everyDayDoList" type="checkbox" name="noGiveUp" id="noGiveUp"><span>No give up</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="idea"><label for="express"><input class="everyDayDoList" type="checkbox" name="express" id="express"><span>Express yourself</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        <li class="idea"><label for="goodDeed"><input class="everyDayDoList" type="checkbox" name="goodDeed" id="goodDeed"><span>Do a kind deed</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>
                        -->     
                    </ul>
                    <div><input type="text" placeholder="Write your everyday list" name="everydayDo" id="everydayDo" autofocus><input type="button" name="addEverydayDo" id="addEverydayDo" value="+"></div>
                </div>

                <!-- 
                <ul class="modeMenu">
                    <li> Mode 
                        <ul class="modeListMenu">
                            <li id="studyMode"> Study </li>
                                <ul class="modeLv">
                                    <li>easy</li>
                                    <li>normal</li>
                                    <li>hard</li>
                                    <li>challenge</li>
                                </ul>
                            <li> Start-up </li>
                            <li> Random </li>
                            <li> Normal </li>
                            <li> Work Family </li>
                        </ul>
                    </li>
                </ul>
                <div id="MBO" style="display:none;">
                    Management by objectives (MBO)
                    <ul>
                        <li>Life</li>
                        <li>Studying</li>
                        <li>Work</li>
                        <li>Workout</li>
                        <li>Entertainment</li>
                        <li>Family</li>
                        <li>Chores</li>
                        <li>Ideas</li>
                    </ul>
                </div> 
                -->
                

            </div>
            
            

            <!-- <div id="chartdiv"></div> -->
            
            <div style="clear:both; height:0px;"></div> 
            
            <div class="maincontent">

            	<div class="container">
                    <div class="containerColor">
                		<div class="insideContainer">
                        	<div class="boardTitle">
                                <h3>To Do</h3>
                                <span id="noteNums"> </span>
                            </div>
                            <div class="inputList">
                    			<span class="blankBox"></span><input type="text" placeholder="Add your note here( shortcut: Enter )" name="toDoItem" id="toDoItem" autofocus><input type="button" name="addToDo" id="addToDo" value="+">
                            </div>
                            <div>
                    		    <ul id="theList" class="connectedSortable"></ul>
                            </div>
                		</div>
                    </div>
            	</div>

                <div class="container">
                    <div class="containerColor">
                        <div class="insideContainer">
                            <div class="boardTitle">
                                <h3>Doing</h3>
                            </div>
                            <div>
                                <ul id="doingList" class="connectedSortable" >
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="containerColor">
                        <div class="insideContainer">
                            <div class="boardTitle">
                                <h3>Done</h3>
                            </div>
                            <div>
                                <ul id="doneList" class="connectedSortable">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div style="height: 0px; display:block;">
                </br style="clear:both;">
            </div>

            <div id="doClearAll">
                    <a id="clearAll" href="javascript:void();"><img src="images/clearAll.png" /><span>Clear All</span></a>
            </div>

        </div>
    </div>
    <footer class="site-footer">
    </footer>

    <script src="JSfiles/jquery-2.1.1.min.js"></script>
    <script src="JSfiles/jquery-ui-1.10.4.custom.min.js"></script>
    <script src="JSfiles/jquery.elastic.source.min.js"></script>
    <script src="JSfiles/Version3_SaveOrder.js"></script>
    <script src="JSfiles/ClockCountDown.min.js"></script>
    <!-- 
    <script src="bootstrap/js/bootstrap-datetimepicker.min.js"></script>
    <script src="JSfiles/modalTag.js"></script>
    -->
</body>
</html>

<?php
    endif;
    //include_once 'common/close.php';
?>