//我们将会打造一个高大上的消费者社区，从创客到终端消费者，推荐最好的硬件产品和软件APP!</br>
//我们将打造一个支持各种创客创业者的一个平台，从数据，产品测试，消费者喜好，服务工具入手</br>

var string = "If you are intrested in helping me develop LifeNote together, please Email: shaochenxiong@gmail.com";
console.log(string);

/************************************************************************************************/

(function(){

    $(document).ready(function() {

        var $dumbBoxWrap = $('.dumbBoxWrap'),
            $dumbBoxOverlay = $('.dumbBoxOverlay'),
            $closeModal = $('#closeModal');

        if( window.localStorage ) {
            console.log("Welcome back, friend :)");
            $dumbBoxWrap.css('display','none');
        }

        // Close Btn or Outside Area cancel the submit email interface
        $dumbBoxOverlay.click(function() {
          	$dumbBoxWrap.hide();
        });  
        
        $closeModal.click(function() {
            $dumbBoxWrap.hide();
        });

        // var init
        var newListItem = '',
            insertedNewList = {},
            colorSaveObj = {},
            saveInputOrderToNewOrder = '',
            size = 0,
            oddEvenTest = 0,
            oddEvenTest2 = 0,
            oddEvenTest3 = 1,
            tempDailyNum = 0;

        // localStorage init
        window.localStorage.BiggestID = ( parseInt(window.localStorage.BiggestID) > 0) ? window.localStorage.BiggestID : 0;
        var temp = parseInt(window.localStorage.BiggestID) || 0;       //当前最大ID的值
        //console.log(temp);

        //window.localStorage.InputColorOrder = window.localStorage.InputColorOrder ? window.localStorage.InputColorOrder : 0;
        //window.localStorage.InputTimeOrder = window.localStorage.InputTimeOrder ? window.localStorage.InputTimeOrder : 0;
        //window.localStorage.InputDeadLineOrder = window.localStorage.InputDeadLineOrder ? window.localStorage.InputDeadLineOrder : 0;
        //window.localStorage.InputLoadOrder = window.localStorage.InputLoadOrder ? window.localStorage.InputLoadOrder : 0;
        window.localStorage.EverydayDoList = window.localStorage.EverydayDoList ? window.localStorage.EverydayDoList : 0;

        //test
        window.localStorage.AllToDoList = window.localStorage.AllToDoList ? window.localStorage.AllToDoList : 0;
        window.localStorage.AllToDoListOrder = window.localStorage.AllToDoListOrder ? window.localStorage.AllToDoListOrder : 0;
        window.localStorage.AllDoingListOrder = window.localStorage.AllDoingListOrder ? window.localStorage.AllDoingListOrder : 0;
        window.localStorage.AllDoneListOrder = window.localStorage.AllDoneListOrder ? window.localStorage.AllDoneListOrder : 0;

        //window.localStorage.InputOrder = window.localStorage.InputOrder ? window.localStorage.InputOrder : 0; // order is a JSON obj
        //window.localStorage.DoOrder = window.localStorage.DoOrder ? window.localStorage.DoOrder : 0;
        //window.localStorage.DoingOrder = window.localStorage.DoingOrder ? window.localStorage.DoingOrder : 0; // order is a JSON obj
        //window.localStorage.DoneOrder = window.localStorage.DoneOrder ? window.localStorage.DoneOrder : 0; // order is a JSON obj
        window.localStorage.aimOrder = window.localStorage.aimOrder ? window.localStorage.aimOrder : 0;
        var //currentInputOrder = (parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ) ? JSON.parse(window.localStorage.InputOrder) : {},
            //currentDoingOrder = (parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ) ? JSON.parse(window.localStorage.InputOrder) : {},
            //currentDoneOrder = (parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ) ? JSON.parse(window.localStorage.InputOrder) : {},
            tempDailyObj = ( parseInt(window.localStorage.EverydayDoList) !== 0 && window.localStorage.EverydayDoList !== '' ) ? JSON.parse(window.localStorage.EverydayDoList) : {},
            //test
            thisTempNum = ( parseInt(window.localStorage.AllToDoListOrder) !== 0 && window.localStorage.AllToDoListOrder !== '' ) ? JSON.parse(window.localStorage.AllToDoListOrder) : {},
            thisTempDoingNum = ( parseInt(window.localStorage.AllDoingListOrder) !== 0 && window.localStorage.AllDoingListOrder !== '' ) ? JSON.parse(window.localStorage.AllDoingListOrder) : {},
            thisTempDoneNum = ( parseInt(window.localStorage.AllDoneListOrder) !== 0 && window.localStorage.AllDoneListOrder !== '' ) ? JSON.parse(window.localStorage.AllDoneListOrder) : {},
            tempAllToDoListObj = ( parseInt(window.localStorage.AllToDoList) !== 0 && window.localStorage.AllToDoList !== '' ) ? JSON.parse(window.localStorage.AllToDoList) : {};
            
        for (var key in tempAllToDoListObj) { 
            if(tempAllToDoListObj[key]["checkornot"] === 1) {
                size++; 
            }
        }

        window.localStorage.Total = size || 0; // save total

        //var recordTimeObj = ( parseInt(window.localStorage.InputTimeOrder) !== 0 && window.localStorage.InputTimeOrder !== '' ) ? JSON.parse(window.localStorage.InputTimeOrder) : {},
            //recordDeadLineObj = ( parseInt(window.localStorage.InputDeadLineOrder) !== 0 && window.localStorage.InputDeadLineOrder !== '' ) ? JSON.parse(window.localStorage.InputDeadLineOrder) : {},
            //recordLoadObj = ( parseInt(window.localStorage.InputLoadOrder) !== 0 && window.localStorage.InputLoadOrder !== '' ) ? JSON.parse(window.localStorage.InputLoadOrder) : {},
            //recordDeadLineObj = ( parseInt(window.localStorage.InputDeadLineOrder) !== 0 && window.localStorage.InputDeadLineOrder !== '' ) ? JSON.parse(window.localStorage.InputDeadLineOrder) : {};

        var colorMenuTitle = '<li class="colorMenuTitle">Category</li>',
            deadLineTitle = '<li class="deadLineTitle">Deadline</li>',
            progressTitle = '<li class="progressTitle">Progress</li>',
            colorMenuList = '<li class="colorMenu3"><a href="#"><span class="A">A1</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="B">A2</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="C">A3</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="D">B1</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="E">B2</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="F">B3</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="G">C1</span></a></li>'
                          + '<li class="colorMenu3"><a href="#"><span class="H">C2</span></a></li>';

        var $addEverydayDo = $('#addEverydayDo'),
            $everydayDo = $('#everydayDo'),
            $myEverydayDoList = $('#myEverydayDoList'),
            $mySetUpBtn = $('.mySetUpBtn'),
            $allLists = $( "#theList, #doingList, #doneList" ),
            $listCategory = $('.listCategory'),
            $studyMode = $('#studyMode'),
            $addToDo = $('#addToDo'),
            $toDoItem = $('#toDoItem'),
            $doClearAll = $('#doClearAll'),
            $textarea = $('textarea'),
            $listGroupItem = $('.list-group-item');

        var aimCat = [  "Life",
                        "Studying",
                        "Work",
                        "Workout",
                        "Entertainment",
                        "Family",
                        "Chores",
                        "Ideas" ];
        
        // 检测空格
        String.prototype.trim = function() {
            var str = this,
            str = str.replace(/^\s\s*/, ''),
            ws = /\s/,
            i = str.length;
            while (ws.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }

        // time add 0
        function stringCheck(e) {
            // 如果返回值是一位的，前面加个0
            return (e.toString().length === 1) ? ("0" + e.toString()) : e;
            //return e;
        }
        
        //object
        function DailyObj ( mydailycontent, mycategory, mycheckornot, myorder, mypriority, mystarttime, myendtime, myspendtime, myloadingrate, myseeornot ) {
            this.dailycontent = mydailycontent;
            this.category = mycategory;
            this.checkornot = mycheckornot;
            this.order = myorder;
            this.priority = mypriority;
            this.starttime = mystarttime;
            this.endtime = myendtime;
            this.spendtime = myspendtime;
            this.loadingrate = myloadingrate;
            this.seeornot = myseeornot;
        }

        // position of clear all
        function clearAllMarginTop() {
            var list1 = parseInt(window.localStorage.DoingTotal),
                list2 = parseInt(window.localStorage.DoneTotal),
                list3 = parseInt(window.localStorage.Total) - parseInt(window.localStorage.DoneTotal) - parseInt(window.localStorage.DoingTotal),
                largeOne = (list1 > list2) ? list1 : list2;
            largeOne = (largeOne > list3) ? largeOne : list3;
            //console.log(largeOne);
            var N = 10,
                M = 4,
                $doClearAll = $("#doClearAll");
            
            if( $( window ).height() <= 600){
                //var marginTopOfClearAll = $( window ).height() * 0.5 / 16 * multiple;
                if( list1 >= M || list2 >= M || list3 >= M ) {
                    var multiple = largeOne - M,
                        marginTopOfClearAll = $( window ).height() * 0.5 / 8 * multiple + 2*12;
                    //console.log($( window ).height());
                    //console.log(marginTopOfClearAll);
                    $doClearAll.css("margin-top", marginTopOfClearAll);
                }
            } else {
                if( list1 >= N || list2 >= N || list3 >= N ) {
                    var multiple = largeOne - N,
                        marginTopOfClearAll = $( window ).height() * 0.5 / 16 * multiple + 2*12;
                    //console.log($( window ).height());
                    //console.log(marginTopOfClearAll);
                    $doClearAll.css("margin-top", marginTopOfClearAll);
                }
            }
        }

        /* 
         *  读取现有的localStorage
         */
         
        function loadToDo() {
            var todoTotal = parseInt(window.localStorage.Total) - parseInt(window.localStorage.DoingTotal) - parseInt(window.localStorage.DoneTotal),
                theValue = '',
                newOrderIndex = 0,
                tempcolor = '',
                tempheight = 0,
                current_time = '',
                tempValue = '',
                investTime = '',
                $theList = $('#theList');

            // test
            var tempAllToDoListOrderObj = JSON.parse(window.localStorage.AllToDoListOrder) || {};
            var k = 1;
            var Num = 0;

            //如果没有顺序，给一个顺序
            if( JSON.stringify(tempAllToDoListOrderObj) === "{}" ){
                for(var key in tempAllToDoListObj) {
                    if( tempAllToDoListObj[key]["category"] === "todolist" && tempAllToDoListObj[key]["seeornot"] === 1 ){
                        tempAllToDoListOrderObj[k] = key;
                        k++;
                    }
                }
                window.localStorage.AllToDoListOrder = JSON.stringify(tempAllToDoListOrderObj);
            }

            //按照顺序输出
            //console.log(tempAllToDoListObj);
            var i = 0;
            if( JSON.stringify(tempAllToDoListObj) !== "{}" ){
                for(var key in tempAllToDoListOrderObj) {
                    Num = tempAllToDoListOrderObj[key];
                    //console.log(key,tempAllToDoListObj[Num]);
                    theValue = tempAllToDoListObj[Num]["dailycontent"];
                    current_time = tempAllToDoListObj[Num]["starttime"];
                    //console.log(tempAllToDoListObj[Num]["endtime"]);
                    investTime = "00:00 " +  tempAllToDoListObj[Num]["endtime"];
                    tempcolor = tempAllToDoListObj[Num]["priority"];
                    //console.log(current_time, investTime, tempcolor);
                    var dateMenu = '<div class="dateMenu"><span class="investTime">' + investTime + '</span><span class="current_time">' + current_time + '</span></div>',
                        loadingBar = '<div class="loadingBot"></div><div class="loadingBK"></div><div class="loadingRate"></div>',
                        Menu = '<ul class="colorMenu" >'
                             +     '<li class="colorMenu0"><a href="#"><img src="images/allmenu.png"/></a></li>'
                             +     '<li class="colorMenu1">'
                             +         '<ul class="colorMenu2">'
                             +             colorMenuTitle
                             +             colorMenuList
                             +             deadLineTitle
                             +             '<li>'
                             +                 dateMenu
                             +             '</li>'
                             +                 progressTitle
                             +             '<li class="loadingArea">'
                             +                 loadingBar
                             +             '</li>'
                             +         '</ul>'
                             +     '</li>'
                             + '</ul>';
                    newListItem = '<li class="allLi" >' + Menu + '<textarea class="ListItem">' + theValue + '</textarea><a class="removeListItem"><img src="images/li_close_white.png"/></a></li>';
                    $theList.append(newListItem);
                    $theList.children().eq(i).attr( "id", "todolist_" + tempAllToDoListObj[Num]["order"] ); // give li a id
                    $theList.children().eq(i).find('.colorMenu0').css('background',  tempcolor);    //color
                    
                    tempheight = tempAllToDoListObj[Num]["loadingrate"].substring(0,tempAllToDoListObj[Num]["loadingrate"].length-1);
                    //console.log(tempAllToDoListObj[Num]["loadingrate"], tempheight);
                    $theList.children().eq(i).find('.loadingBK').width(parseInt(tempheight) * 108 / 100);   // show loadingrate number
                    var rate = tempAllToDoListObj[Num]["loadingrate"];
                    $theList.children().eq(i).find('.loadingRate').text(rate);  // show loadingrate bar
                    //console.log(tempheight, rate);

                    $theList.children().eq(i).find('.investTime').text( tempAllToDoListObj[Num]["endtime"] );
                    $theList.children().eq(i).find('.current_time').text( tempAllToDoListObj[Num]["starttime"] );
                    i++;
                }
            }

            $toDoItem.focus();
            $toDoItem.val('');
            //var size = 0;
            //for (var key in tempAllToDoListOrderObj){size++;}
            //console.log(size);
            //for(var i=0; i<size; i++){}
            /*
            if( todoTotal > 0) {
                if( todoTotal === 1 ){ saveInputOrderToNewOrder = window.localStorage.DoOrder.substring(9).split("todolist_"); }
                if( todoTotal >= 2 ){ saveInputOrderToNewOrder = window.localStorage.DoOrder.substring(9).split(",todolist_"); }            
                //console.log(saveInputOrderToNewOrder);

                if( parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ){ 
                    currentInputOrder = JSON.parse(window.localStorage.InputOrder);
                    for (var i = 0 ; i < saveInputOrderToNewOrder.length; i++) {
                        // load from the InputOrder 暂时不支持中文
                        newOrderIndex = parseInt(saveInputOrderToNewOrder[i]);  // get current order index
                        if( currentInputOrder[newOrderIndex] ){  // get value from localStorage.InputOrder
                            theValue = currentInputOrder[newOrderIndex]; 
                            current_time = recordTimeObj[newOrderIndex];
                            // get the saved date value
                            if( JSON.parse(window.localStorage.InputDeadLineOrder)[newOrderIndex]) {
                                tempValue = JSON.parse(window.localStorage.InputDeadLineOrder)[newOrderIndex];
                                investTime = "00:00 " +  tempValue;
                            } else {
                                investTime = "Not Added ";
                            }
                            //console.log(tempValue);

                            // * newListItem = '<li class="allLi" >' + Menu + '<textarea class="ListItem">' + theValue + '</textarea><a class="removeListItem"><img src="images/li_close_white.png"/></a></li>';
        
                            // * $theList.append(newListItem);
                            // * $theList.children().eq(i).attr("id", "todolist_" + newOrderIndex); // give li a id
                            
                            // get saved color
                            if( JSON.parse(window.localStorage.InputColorOrder)[newOrderIndex] ) {
                                tempcolor = JSON.parse(window.localStorage.InputColorOrder)[newOrderIndex];
                                $theList.children().eq(i).children().eq(0).children().eq(0).css('background', tempcolor);
                            }
                            // get saved width

                            if( JSON.parse(window.localStorage.InputLoadOrder)[newOrderIndex] ) {
                                tempheight = parseInt(JSON.parse(window.localStorage.InputLoadOrder)[newOrderIndex]);
                                $theList.children().eq(i).find('.loadingBK').width(tempheight);
                                var rate = Math.ceil(tempheight / 108 * 100) + '%';
                                $theList.children().eq(i).find('.loadingRate').text(rate);
                                    //console.log(newOrderIndex, tempheight,rate);
                            } else {
                                $theList.children().eq(i).find('.loadingBK').width(0);
                                $theList.children().eq(i).find('.loadingRate').text('0%');
                            }

                            newListItem = '';
                            theValue = null;
                        } 
                    }     
                } 
                
                $toDoItem.focus();
                $toDoItem.val('');
            }   else {
                console.log("Add your own to-do list :)");
            }
            */
        }

        function loadDoing() {

            var saveInputOrderToDoingOrder = '',
                doingListItem = '',
                tempcolor = '',
                tempheight = 0,
                current_time = '',
                theValue = '',
                doingOrderIndex = 0,
                investTime = '',
                $doingList = $('#doingList'),
                dateMenu = '<div class="dateMenu"><span class="investTime">' + investTime + '</span><span class="current_time">' + current_time + '</span></div>',
                loadingBar = '<div class="loadingBot"></div><div class="loadingBK"></div><div class="loadingRate"></div>',
                Menu = '<ul class="colorMenu" >'
                     +     '<li class="colorMenu0"><a href="#"><img src="images/allmenu.png"/></a></li>'
                     +     '<li class="colorMenu1">'
                     +         '<ul class="colorMenu2">'
                     +             colorMenuTitle
                     +             colorMenuList
                     +             deadLineTitle
                     +             '<li>'
                     +                 dateMenu
                     +             '</li>'
                     +                 progressTitle
                     +             '<li>'
                     +                 loadingBar
                     +             '</li>'
                     +         '</ul>'
                     +     '</li>'
                     + '</ul>';

            // test
            var tempAllDoingListOrderObj = JSON.parse(window.localStorage.AllDoingListOrder) || {};
            var k = 1;
            var Num = 0;
            //如果没有顺序，给一个顺序
            if( JSON.stringify(tempAllDoingListOrderObj) === "{}" ){
                for(var key in tempAllToDoListObj) {
                    if( tempAllToDoListObj[key]["category"] === "doinglist" && tempAllToDoListObj[key]["seeornot"] === 1 ){
                        tempAllDoingListOrderObj[k] = key;
                        k++;
                    }
                }
                window.localStorage.AllDoingListOrder = JSON.stringify(tempAllDoingListOrderObj);
            }

            //按照顺序输出
            for(var key in tempAllDoingListOrderObj) {
                Num = tempAllDoingListOrderObj[key];
                //console.log(tempAllToDoListObj[Num]);
            }

            if( parseInt(window.localStorage.DoingTotal) > 0 ) {
                if( parseInt(window.localStorage.DoingTotal) <= 1 && parseInt(window.localStorage.DoingOrder) !== 0 ){ saveInputOrderToDoingOrder = window.localStorage.DoingOrder.substring(9).split("todolist_");}
                if( parseInt(window.localStorage.DoingTotal) > 1 && parseInt(window.localStorage.DoingOrder) !== 0 ){ saveInputOrderToDoingOrder = window.localStorage.DoingOrder.substring(9).split(",todolist_");}            
                //console.log(saveInputOrderToDoingOrder);
                
                if( parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ){ 
                    currentDoingOrder = JSON.parse(window.localStorage.InputOrder);
                    //console.log(saveInputOrderToDoingOrder.length);
                    for (var i = 0 ; i < saveInputOrderToDoingOrder.length; i++) {
                        // load from the InputOrder 暂时不支持中文
                        doingOrderIndex = parseInt(saveInputOrderToDoingOrder[i]);  // get current order index
                        
                        if( currentDoingOrder[doingOrderIndex] ) {  // get value from localStorage.InputOrder
                            theValue = currentDoingOrder[doingOrderIndex];
                            current_time = recordTimeObj[doingOrderIndex];
                            if( JSON.parse(window.localStorage.InputDeadLineOrder)[doingOrderIndex] ) {
                                tempValue = JSON.parse(window.localStorage.InputDeadLineOrder)[doingOrderIndex];
                                investTime = "00:00 " + tempValue;
                            } else {
                                investTime = "Not Added ";
                            }
                            
                            doingListItem += '<li class="allLi">' + Menu + '<textarea class="ListItem">' + theValue + '</textarea><a class="removeListItem"><img src="images/li_close_white.png"/></a></li>';
                            
                            $doingList.append(doingListItem);
                            $doingList.children().eq(i).attr("id", "todolist_" + doingOrderIndex); // give li a id
                            // get saved color
                            //console.log(currentDoingOrder[doingOrderIndex]);
                            if( JSON.parse(window.localStorage.InputColorOrder)[doingOrderIndex] ) {        
                                tempcolor = JSON.parse(window.localStorage.InputColorOrder)[doingOrderIndex];
                                $doingList.children().eq(i).children().eq(0).children().eq(0).css('background', tempcolor);
                            }

                            // get saved width
                            if( JSON.parse(window.localStorage.InputLoadOrder)[doingOrderIndex] ) {
                                tempheight = parseInt(JSON.parse(window.localStorage.InputLoadOrder)[doingOrderIndex]);
                                $doingList.children().eq(i).find('.loadingBK').width(tempheight);
                                var rate = Math.ceil( tempheight / 108 * 100) + '%';
                                $doingList.children().eq(i).find('.loadingRate').text(rate);
                            } else {
                                $doingList.children().eq(i).find('.loadingBK').width(0);
                                $doingList.children().eq(i).find('.loadingRate').text('0%');
                            }
                            doingListItem = '';
                            theValue = null;
                        } 
                    }
                }     
            } 
        }

        function loadDone() {
            var saveInputOrderToDoneOrder = '',
                doneListItem = '',
                tempcolor = '',
                tempheight = {},
                current_time = '',
                theValue = '',
                doneOrderIndex = 0,
                investTime = '',
                $doneList = $('#doneList'),
                dateMenu = '<div class="dateMenu"><span class="investTime">' + investTime + '</span><span class="current_time">' + current_time + '</span></div>',
                loadingBar = '<div class="loadingBot"></div><div class="loadingBK"></div><div class="loadingRate"></div>',
                Menu = '<ul class="colorMenu" >'
                     +     '<li class="colorMenu0"><a href="#"><img src="images/allmenu.png"/></a></li>'
                     +     '<li class="colorMenu1">'
                     +         '<ul class="colorMenu2">'
                     +             colorMenuTitle
                     +             colorMenuList
                     +             deadLineTitle
                     +             '<li>'
                     +                 dateMenu
                     +             '</li>'
                     +                 progressTitle
                     +             '<li>'
                     +                 loadingBar
                     +             '</li>'
                     +         '</ul>'
                     +     '</li>'
                     + '</ul>';

            // test
            var tempAllDoneListOrderObj = JSON.parse(window.localStorage.AllDoneListOrder) || {};
            var k = 1;
            var Num = 0;
            //如果没有顺序，给一个顺序
            if( JSON.stringify(tempAllDoneListOrderObj) === "{}" ){
                for(var key in tempAllToDoListObj) {
                    if( tempAllToDoListObj[key]["category"] === "donelist" && tempAllToDoListObj[key]["seeornot"] === 1 ){
                        tempAllDoneListOrderObj[k] = key;
                        k++;
                    }
                }
                window.localStorage.AllDoneListOrder = JSON.stringify(tempAllDoneListOrderObj);
            }

            //按照顺序输出
            for(var key in tempAllDoneListOrderObj) {
                Num = tempAllDoneListOrderObj[key];
                //console.log(tempAllToDoListObj[Num]);
            }

            if( parseInt(window.localStorage.DoneTotal) > 0 ) {
                if( parseInt(window.localStorage.DoneTotal) <= 1 && parseInt(window.localStorage.DoneOrder) !== 0 ){ saveInputOrderToDoneOrder = window.localStorage.DoneOrder.substring(9).split("todolist_");}
                if( parseInt(window.localStorage.DoneTotal) > 1 && parseInt(window.localStorage.DoneOrder) !== 0 ){ saveInputOrderToDoneOrder = window.localStorage.DoneOrder.substring(9).split(",todolist_");}            
                //console.log(saveInputOrderToDoneOrder);
                
                if( parseInt(window.localStorage.InputOrder) !== 0 && window.localStorage.InputOrder !== '' ){
                    currentDoneOrder = JSON.parse(window.localStorage.InputOrder);
                    //console.log(currentDoneOrder);
                    for (var i = 0 ; i < saveInputOrderToDoneOrder.length; i++) {
                        // load from the InputOrder 暂时不支持中文
                        doneOrderIndex = parseInt(saveInputOrderToDoneOrder[i]);  // get current order index
                        if( currentDoneOrder[doneOrderIndex] ) {  // get value from localStorage.InputOrder
                            theValue = currentDoneOrder[doneOrderIndex]; 
                            current_time = recordTimeObj[doneOrderIndex];
                            if( JSON.parse(window.localStorage.InputDeadLineOrder)[doneOrderIndex] ) {
                                tempValue = JSON.parse(window.localStorage.InputDeadLineOrder)[doneOrderIndex];
                                investTime = "00:00 " + tempValue;
                            } else {
                                investTime = "Not Added ";
                            }
                            //console.log(tempValue);
                        
                            doneListItem += '<li class="allLi">' + Menu + '<textarea class="ListItem">' + theValue + '</textarea><a class="removeListItem"><img src="images/li_close_white.png"/></a></li>';
                            $doneList.append(doneListItem);
                            $doneList.children().eq(i).attr("id", "todolist_" + doneOrderIndex); // give li a id
                            // get saved color
                            if( JSON.parse(window.localStorage.InputColorOrder)[doneOrderIndex] ) {
                                tempcolor = JSON.parse(window.localStorage.InputColorOrder)[doneOrderIndex];
                                //console.log(tempcolor);
                                $doneList.children().eq(i).children().eq(0).children().eq(0).css('background-color', tempcolor);
                            }

                            // get saved width
                            if( JSON.parse(window.localStorage.InputLoadOrder)[doneOrderIndex] ) {
                                tempheight[doneOrderIndex] = parseInt(JSON.parse(window.localStorage.InputLoadOrder)[doneOrderIndex]);
                                $doneList.children().eq(i).find('.loadingBK').width(tempheight[doneOrderIndex]);
                                var rate = Math.ceil(tempheight[doneOrderIndex] / 108 * 100) + '%';
                                $doneList.children().eq(i).find('.loadingRate').text(rate);
                            } else {
                                $doneList.children().eq(i).find('.loadingBK').width(0);
                                $doneList.children().eq(i).find('.loadingRate').text('0%');
                            }
                            doneListItem = '';
                            theValue = null;
                        } 
                    }
                }     
            } 
        }

        /* 
         *  增加条目
         */
        function addList() {
            // get the current time when you record this note
            //var current_year = stringCheck( new Date().getFullYear() );
            var current_month = stringCheck( new Date().getMonth() + 1 ),
                current_day = stringCheck( new Date().getDate() + 1 ),
                current_hour = stringCheck( new Date().getHours() ),
                current_min = stringCheck( new Date().getMinutes() ),
                current_time = /*current_year + "-" + */current_hour + ":" + current_min + " " + current_month + "-" + current_day,
                $toDoItem = $("#toDoItem"),
                $theList = $('#theList'),
                $inputInvestTime = $( ".investTime" ),
                theValue = $toDoItem.val(),
                investTime = '<input class="investTime" type="date" name="investTime">',
                dateMenu = '<div class="dateMenu"><span class="investTime">' + investTime + '</span><span class="current_time">' + current_time + '</span></div>',
                loadingBar = '<div class="loadingBot"></div><div class="loadingBK"></div><div class="loadingRate"></div>',
                Menu = '<ul class="colorMenu" >'
                      +     '<li class="colorMenu0"><a href="#"><img src="images/allmenu.png"/></a></li>'
                      +     '<li class="colorMenu1">'
                      +         '<ul class="colorMenu2">'
                      +             colorMenuTitle
                      +             colorMenuList
                      +             deadLineTitle
                      +             '<li>'
                      +                 dateMenu
                      +             '</li>'
                      +             progressTitle
                      +             '<li>'
                      +                 loadingBar
                      +             '</li>'
                      +         '</ul>'
                      +     '</li>'
                      + '</ul>';
            
            if( theValue.trim() === '' ){ theValue = "blank"; }  // space detect
            newListItem = '<li class="allLi" >' + Menu + '<textarea class="ListItem">' + theValue + '</textarea><a class="removeListItem"><img src="images/li_close_white.png"/></a></li>';
            
            $theList.append(newListItem);

            // 新添加的在insertedNewList[BiggestID+1]里
            temp++;

            
            
            insertedNewList[temp] = theValue;

            // Set new inserted li a id
            var $theListLastLi = $( "#theList .allLi:last-child" );
            $theListLastLi.attr("id", "todolist_" + temp);
            //console.log( $theListLastLi.attr('id') );
            // init loading            
            $theListLastLi.find('.loadingBK').width(0);
            $theListLastLi.find('.loadingRate').text('0%');
            // get deadline an id
            $inputInvestTime.attr("id", "deadline_" + temp);
            //console.log( $inputInvestTime.attr("id") );
            window.localStorage.Total = parseInt(window.localStorage.Total) + 1;     //当前总数+1
            window.localStorage.BiggestID = parseInt(window.localStorage.BiggestID) + 1; // BiggestID +1
            /*
            if( parseInt(window.localStorage.Total) === 0 ) {
                //console.log("here");
                window.localStorage.InputOrder = JSON.stringify(insertedNewList); // save new added item to InputOrder
                
                var sorted = "todolist_" + temp;  // save new item's 顺序码
                window.localStorage.DoOrder = sorted;

            } else {
                var temp1 = {};
                temp1[temp] = insertedNewList[temp];    // 新的OBJ1
                var temp2 = JSON.parse(window.localStorage.InputOrder);    // 再把local 提取出来放到temp2里 OBJ2
                var temp3 = $.extend({}, temp2, temp1);    //合并老的和新的
                window.localStorage.InputOrder = JSON.stringify(temp3);    //合并后的OBJ再储存
                var todoTotal = parseInt(window.localStorage.Total) - parseInt(window.localStorage.DoingTotal) - parseInt(window.localStorage.DoneTotal);

                if( todoTotal === 0 ){
                    var sorted2 = window.localStorage.DoOrder + "todolist_" + temp; 
                }  else  {
                    var sorted2 = window.localStorage.DoOrder + ",todolist_" + temp; 
                }
                window.localStorage.DoOrder = sorted2;

            }

            window.localStorage.Total = parseInt(window.localStorage.Total) + 1;     //当前总数+1
            window.localStorage.BiggestID = parseInt(window.localStorage.BiggestID) + 1; // BiggestID +1

            // add inputTimeOrder
            recordTimeObj[temp] = current_time;
            window.localStorage.InputTimeOrder = JSON.stringify(recordTimeObj);
            */

            // test
            // mydailycontent, mycategory, mycheckornot, myorder, mypriority, mystarttime, myendtime, myspendtime, myloadingrate, myseeornot
            var tempAllListObj = new DailyObj( theValue, "todolist", 0, temp, "#27ae60", current_time, "not set", "not count", "0%", 1 );
            tempAllToDoListObj[temp] = tempAllListObj;
            window.localStorage.AllToDoList = JSON.stringify(tempAllToDoListObj);
            
            thisTempNum[temp] = temp;
            var tempOrderOfToDoList = JSON.parse(window.localStorage.AllToDoListOrder) || {};
            if( JSON.stringify(window.localStorage.AllToDoListOrder) === "{}" ) { 
                window.localStorage.AllToDoListOrder = JSON.stringify(thisTempNum); 
            } else {
                tempOrderOfToDoList[temp] = temp;
                window.localStorage.AllToDoListOrder = JSON.stringify(tempOrderOfToDoList); 
            }
            //console.log(tempAllToDoListObj, thisTempNum);

            newListItem = '';
            theValue = null;
            $toDoItem.val('');
            $toDoItem.focus();
            clearAllMarginTop();
        }

        function loadEverydayDoList() {
            var tempLoadDailyList = JSON.parse(window.localStorage.EverydayDoList) || {},
                tempNum = JSON.parse(window.localStorage.EverydayDoTotal) || 0,
                tempValue = '',
                size = {},
                loadSize = 0,
                j = 0,
                x = 0,
                $myEverydayDoList = $('#myEverydayDoList');

            for (var k in tempLoadDailyList) { loadSize++; }   // Get Number of list
            // append the list
            
            for (var i in tempLoadDailyList) {
                tempValue = tempLoadDailyList[i]['dailycontent'];
                var newEverydayList = '<li class="newAddEverydayDoList"><label><input class="everyDayDoList newAddEverydayDoList" type="checkbox" ><span>' + tempValue + '</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>';
                $myEverydayDoList.append(newEverydayList);
                if( tempLoadDailyList[i]["checkornot"] === 1 ) {
                    //console.log(loadSize,tempLoadDailyList,i);
                    $myEverydayDoList.children().eq(j).find('input').css("background","url(images/checked.png) 0 top no-repeat");
                }
                j++;
            }
            // get list id, for and name
            for (var i in tempLoadDailyList) {
                size[tempNum-loadSize+x] = i; 
                var j = tempNum-loadSize+x;
                $myEverydayDoList.children().eq(j).find('label').attr("for", "dailylist_" + i);
                $myEverydayDoList.children().eq(j).find('input').attr("name", "dailylist_" + i);
                $myEverydayDoList.children().eq(j).attr("id", "dailylist_" + i);
                x++;
                //console.log(j,size);
            }
        }

        // add everyday do list
        function addEverydayDoList() {
            var $myEverydayDoList = $('#myEverydayDoList'),
                $everydayDo = $("#everydayDo"),
                EverydayDoListObj = JSON.parse(window.localStorage.EverydayDoList) || {},
                biggestNum = 0,
                tempDailyNum2 = parseInt(window.localStorage.EverydayDoTotal) + 1,
                thisValue = $everydayDo.val();

            window.localStorage.EverydayDoTotal = $myEverydayDoList.find('li:last-child').index() + 1;
            
            for(var key in EverydayDoListObj ) { biggestNum = key;} //console.log(biggestNum);
            tempDailyNum = biggestNum;
            tempDailyNum++;
            //console.log(tempDailyNum);
            
            var newEverydayList = '<li class="newAddEverydayDoList"><label><input class="everyDayDoList newAddEverydayDoList" type="checkbox" ><span>' + thisValue + '</span></label><a class="liClose"><img src="images/li_close_white.png"/></a></li>';
            $myEverydayDoList.append(newEverydayList);
            // for="getup" name="getup" id="getup"
            $( "#myEverydayDoList li:last-child label" ).attr("for", "dailylist_" + tempDailyNum);
            $( "#myEverydayDoList li:last-child input" ).attr("name", "dailylist_" + tempDailyNum);
            $( "#myEverydayDoList li:last-child" ).attr("id", "dailylist_" + tempDailyNum);

            var tempObj = new DailyObj( thisValue, "myList", 0 );
            tempDailyObj[tempDailyNum] = tempObj;
            //console.log(tempDailyObj);
            
            window.localStorage.EverydayDoList = JSON.stringify(tempDailyObj);
            window.localStorage.EverydayDoTotal = tempDailyNum2;
            //console.log(tempDailyObj);
            $everydayDo.val('');
            $everydayDo.focus();
            tempDailyNum = 0;
        }


        function loadAimByOrder() {
            
            if(parseInt(window.localStorage.aimOrder) !== 0 && window.localStorage.aimOrder !== '' ){
                var tempDailyOrder = JSON.parse(window.localStorage.aimOrder) || 0, 
                    tempDailyOrder2 = [];
                //console.log(tempDailyOrder);
                for(var i=0; i<tempDailyOrder.length; i++){
                    $listCategory.children().eq(i).attr("id",tempDailyOrder[i]);
                    tempDailyOrder2[i] = parseInt(tempDailyOrder[i].slice(4)) - 1;
                    $listCategory.children().eq(i).children().children().eq(1).text((i+1) + '. ' + aimCat[tempDailyOrder2[i]]);
                }
                //console.log(tempDailyOrder2);
            } else {
                for(var i=0; i<aimCat.length; i++){
                    $listCategory.children().eq(i).children().children().eq(1).text((i+1) + '. ' + aimCat[i]);
                }
            }
        }

        /************************** ****** ***********************************/
        /************************** EVENTS ***********************************/
        /************************** ****** ***********************************/

        $myEverydayDoList.on('click', '.everyDayDoList', function(e){
            e.preventDefault();
            //console.log($(this));
            if( oddEvenTest3 === 1 ) {
                $(this).css("background","url(images/checked.png) 0 top no-repeat");
                var savedObj = JSON.parse(window.localStorage.EverydayDoList) || {};
                var i = parseInt( $(this).parent().parent().attr("id").slice(10) );
                var tempDailyObj = savedObj[i];
                tempDailyObj["checkornot"] = 1;
                savedObj[i] = tempDailyObj;
                window.localStorage.EverydayDoList = JSON.stringify(savedObj);
                //console.log(i,tempDailyObj);
                oddEvenTest3 = 0;
            } else {
                $(this).css("background","white");
                var savedObj = JSON.parse(window.localStorage.EverydayDoList) || {};
                var i = parseInt( $(this).parent().parent().attr("id").slice(10) );
                var tempDailyObj = savedObj[i];
                tempDailyObj["checkornot"] = 0;
                savedObj[i] = tempDailyObj;
                window.localStorage.EverydayDoList = JSON.stringify(savedObj);
                //console.log(i,tempDailyObj);
                oddEvenTest3 = 1;
            }
            //console.log(i);
        }).on('click','.liClose', function(e){
            // Delete EveryDayDoList
            e.preventDefault();
            var tempDailyNum2 = parseInt(window.localStorage.EverydayDoTotal) - 1;
            if(parseInt(window.localStorage.EverydayDoTotal) > 0) {
                var tempLoadDailyList = JSON.parse(window.localStorage.EverydayDoList) || 0;
                var tempNum = parseInt( $(this).parent().attr("id").slice(10) );
                delete tempLoadDailyList[tempNum];
                delete tempDailyObj[tempNum];
                //console.log("del: "+tempNum, tempLoadDailyList );

                window.localStorage.EverydayDoList = JSON.stringify(tempLoadDailyList);
                window.localStorage.EverydayDoTotal = tempDailyNum2;
            }
            $(this).parent().remove();
        });

        $listCategory.sortable({
            forcePlaceholderSize: true,
            placeholder: 'placeholder',  
            dropOnEmpty: true,
            connectWith: ".aimConnectedSortable"
        }).on("sortupdate", function( event, ui ) {
            //var dailyOrder = $listCategory.sortable( "toArray" );
            var dailyOrder = [],
                tempDailyOrder = [],
                tempText = '';
            for(var i=0; i<8; i++ ){
                dailyOrder[i] = $listCategory.children().eq(i).attr("id");
                tempDailyOrder[i] = parseInt( dailyOrder[i].slice(4) );
                tempText = $listCategory.children().eq(i).children().children().eq(1).text().slice(3);
                $listCategory.children().eq(i).children().children().eq(1).text((i+1) + '. ' + tempText);
            }
            //console.log(tempDailyOrder);
            window.localStorage.aimOrder = JSON.stringify(dailyOrder);
            
        }).disableSelection();

        $addEverydayDo.on('click', function(e){
            e.preventDefault();
            addEverydayDoList();
        });

        $everydayDo.on('keydown',function(e){
            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
            if(key === 13){
                e.preventDefault();
                addEverydayDoList();
            }
        });

        // click me set up
        $mySetUpBtn.on('click', function(e){
            e.preventDefault();
            oddEvenTest2++;
            var $setListCategory = $('.setListCategory');
            if( oddEvenTest2%2 !== 0 ) { 
                $setListCategory.css('display','block');
            } else { 
                $setListCategory.css('display','none');
            }
        });
      
        // jQuery DnD
        $allLists.sortable({
            forcePlaceholderSize: true,
            placeholder: 'placeholder',  
            dropOnEmpty: true,
            connectWith: ".connectedSortable"
        }).on("sortupdate", function( event, ui ) {
            var $theList = $("#theList"),
                $doingList = $("#doingList"),
                $doneList = $("#doneList");

            // update tempAllToDoListObj
            // mydailycontent, mycategory, mycheckornot, myorder, mypriority, mystarttime, myendtime, myspendtime, myloadingrate, myseeornot
            var updateToDoList = {};
            var tempToDoList = JSON.parse(window.localStorage.AllToDoList);
            for ( var i = 1; i <= $theList.children().length; i++ ) {
                updateToDoList[i] = parseInt( $theList.children().eq(i-1).attr("id").slice(9) );
                tempToDoList[updateToDoList[i]]["category"] = "todolist";
            }
            window.localStorage.AllToDoList = JSON.stringify(tempToDoList);
            window.localStorage.AllToDoListOrder = JSON.stringify(updateToDoList);

            var updateDoingList = {};
            var tempDoingList = JSON.parse(window.localStorage.AllToDoList);
            for ( var i = 1; i <= $doingList.children().length; i++ ) {
                updateDoingList[i] = parseInt( $doingList.children().eq(i-1).attr("id").slice(9) );
                tempDoingList[updateDoingList[i]]["category"] = "doinglist";
            }
            window.localStorage.AllToDoList = JSON.stringify(tempDoingList);
            window.localStorage.AllDoingListOrder = JSON.stringify(updateDoingList);

            var updateDoneList = {};
            var tempDoneList = JSON.parse(window.localStorage.AllToDoList);
            for ( var i = 1; i <= $doneList.children().length; i++ ) {
                updateDoneList[i] = parseInt( $doneList.children().eq(i-1).attr("id").slice(9) );
                tempDoneList[updateDoneList[i]]["category"] = "donelist";
            }
            window.localStorage.AllToDoList = JSON.stringify(tempDoneList);
            window.localStorage.AllDoneListOrder = JSON.stringify(updateDoneList);


            /*
            // update NewOrder 更新顺序就够了对吧
            var sortedToDo = $theList.sortable( "toArray" );
            window.localStorage.DoOrder = sortedToDo;

            // update DoingOrder
            var sortedDoing = $doingList.sortable( "toArray" );
            window.localStorage.DoingOrder = sortedDoing;
            var doingNum = $doingList.find('.allLi:last-child').index() + 1;
            window.localStorage.DoingTotal = doingNum;

            // update DoneOrder
            var sortedDone = $doneList.sortable( "toArray" );
            window.localStorage.DoneOrder = sortedDone;
            var doneNum = $doneList.find('.allLi:last-child').index() + 1;
            window.localStorage.DoneTotal = doneNum;
            */
            // position of clear all
            clearAllMarginTop();
        }).disableSelection();

        /**********************************************************************/
        /*
         *  菜单 变色彩菜单
         */
        $allLists.on('click', '.loadingRate', function(e){
            e.preventDefault();
            var loadingLen = parseInt(e.clientX - $(this).offset().left);  //console.log(loadingLen);
            var rate = Math.ceil(loadingLen / 108 * 100) + '%';
            $(this).text(rate); 
            $(this).parent().children().eq(1).width(loadingLen);
            var ID = parseInt( $(this).parent().parent().parent().parent().parent().attr("id").slice(9) );
            //test
            var tempObj = JSON.parse(window.localStorage.AllToDoList);
            tempObj[ID]["loadingrate"] = rate;
            window.localStorage.AllToDoList = JSON.stringify(tempObj);
            //console.log(tempObj[ID]["loadingrate"]);
            //recordLoadObj[ID] = loadingLen;
            //window.localStorage.InputLoadOrder = JSON.stringify(recordLoadObj);
        }).on('click', '.colorMenu0', function(e){
            e.preventDefault();
            var checkElement = $(this).next();
            if( (checkElement.is('li')) && (checkElement.is(':visible')) ) {
                checkElement.slideUp('fast');
            }
            if( (checkElement.is('li')) && (!checkElement.is(':visible')) ) {
                checkElement.slideDown('fast');
            }
        }).on('mouseleave', '.colorMenu1', function(e){
            e.preventDefault();
            var checkElement = $(this);
            if( (checkElement.is('li')) && (checkElement.is(':visible')) ) {
                checkElement.slideUp('fast');
            }
        }).on('change', 'input.investTime', function(e){
            e.preventDefault();
            //console.log($(this));
            var tempDLVal = $(this).val().slice(5);
            var ID = parseInt( $(this).parent().parent().parent().parent().parent().parent().parent().attr("id").slice(9) );
            //console.log(ID);
            var tempDLObj = JSON.parse( window.localStorage.AllToDoList );
            tempDLObj[ID]["endtime"] = "23:59 " + tempDLVal;
            window.localStorage.AllToDoList = JSON.stringify( tempDLObj );
            //console.log(JSON.parse( window.localStorage.AllToDoList )[ID]["endtime"]);

        }).on('click', '.colorMenu3', function(e){
            /* A B C D 的4种颜色*/
            e.preventDefault();
            /*
            if( parseInt(window.localStorage.InputColorOrder) !== 0 ){ 
                colorSaveObj = JSON.parse(window.localStorage.InputColorOrder) || 0; 
            }
            */
            //console.log($(this));
            var thisLiID = parseInt( $(this).parent().parent().parent().parent().attr("id").slice(9) );
            var thisClick = $(this).parent().parent().parent().parent().children().eq(0).children().eq(0);
            var thisClass = $(this).children().children().eq(0).attr('class');
            //var slideUpMenu = $(this).parent().parent();

            //test
            var tempPriority = JSON.parse(window.localStorage.AllToDoList);
            //console.log(tempPriority);
            if( thisClass == "A" ) {
                thisClick.css('background','#FF0066');   // #d9534f 1
                tempPriority[thisLiID]["priority"] = '#FF0066'; // test
                //colorSaveObj[thisLiID] = '#FF0066';
                //console.log(tempPriority[thisLiID]["priority"],tempPriority);
            } else if ( thisClass == "B" ) {
                thisClick.css('background','#d9534f');    // #e4792b 2
                tempPriority[thisLiID]["priority"] = '#d9534f'; // test
                //colorSaveObj[thisLiID] = '#d9534f';
            } else if ( thisClass == "C" ) {
                thisClick.css('background','#e4792b');    // #eeb929 3
                tempPriority[thisLiID]["priority"] = '#e4792b'; // test
                //colorSaveObj[thisLiID] = '#e4792b'; 
            } else if ( thisClass == "D" ) {
                thisClick.css('background','#eeb929');    // #eeb929 4
                tempPriority[thisLiID]["priority"] = '#eeb929'; // test
                //colorSaveObj[thisLiID] = '#eeb929';
            } else if ( thisClass == "E" ) {
                thisClick.css('background','#3fc2d5');    // #eeb929 5
                tempPriority[thisLiID]["priority"] = '#3fc2d5'; // test
                //colorSaveObj[thisLiID] = '#3fc2d5';
            } else if ( thisClass == "F" ) {
                thisClick.css('background','#3f9ed5');    // #eeb929 6
                tempPriority[thisLiID]["priority"] = '#3f9ed5'; // test
                //colorSaveObj[thisLiID] = '#3f9ed5';
            } else if ( thisClass == "G" ) {
                thisClick.css('background','#9900CC');    // #eeb929 7
                tempPriority[thisLiID]["priority"] = '#9900CC'; // test
                //colorSaveObj[thisLiID] = '#9900CC';
            } else {
                thisClick.css('background','#bbb');    // #cbcbcb 8
                tempPriority[thisLiID]["priority"] = '#bbb'; // test
                //colorSaveObj[thisLiID] = '#bbb';
            }
            //console.log(colorSaveObj);
            //window.localStorage.InputColorOrder = JSON.stringify(colorSaveObj); 
            //slideUpMenu.slideUp('fast');
            //test
            window.localStorage.AllToDoList = JSON.stringify(tempPriority);
            
            /* 
            *  1.修改时的存储 change content 2.清除 delete content
            */
        }).on('change','.ListItem', function(e){
            e.preventDefault();
            var currentValue = $(this).val();
            if( currentValue === '' ){ currentValue = "blank"; }
            var currentOrder = parseInt( $(this).parent().attr("id").slice(9) );

            //var tempOrderObj2 = JSON.parse(window.localStorage.InputOrder) || 0;
            //tempOrderObj2[currentOrder] = currentValue;
            //window.localStorage.InputOrder = JSON.stringify(tempOrderObj2);

            //test
            var tempDailyContent = JSON.parse( window.localStorage.AllToDoList ) || {};
            tempDailyContent[currentOrder]["dailycontent"] = currentValue;
            window.localStorage.AllToDoList = JSON.stringify(tempDailyContent);

        }).on('click','.removeListItem', function(e){
            e.preventDefault();

            //**********test
            var listIDNum = parseInt( $(this).parent().attr("id").slice(9) );

            if( $(this).parent().parent().attr("id") === "theList" ) {
                var tempTodoOrder = JSON.parse(window.localStorage.AllToDoListOrder);
                //console.log(tempTodoOrder);
                for( var key in tempTodoOrder ){
                    if ( tempTodoOrder[key] === listIDNum ) {
                        //delete tempTodoOrder[key];
                        tempTodoOrder[key]["checkornot"] = 0;
                        delete thisTempNum[key];
                        window.localStorage.AllToDoListOrder = JSON.stringify( tempTodoOrder );
                    }
                }
            } else if ( $(this).parent().parent().attr("id") === "doingList" ) {
                var tempDoingOrder = JSON.parse(window.localStorage.AllDoingListOrder);
                //console.log(tempDoingOrder);
                for( var key in tempDoingOrder ){
                    if ( tempDoingOrder[key] === listIDNum ) {
                        //delete tempDoingOrder[key];
                        tempDoingOrder[key]["checkornot"] = 0;
                        delete thisTempNum[key];
                        window.localStorage.AllDoingListOrder = JSON.stringify( tempDoingOrder );
                    }
                }
            }  else {
                var tempDoneOrder = JSON.parse(window.localStorage.AllDoneListOrder);
                //console.log(tempDoneOrder);
                for( var key in tempDoneOrder ){
                    if ( tempDoneOrder[key] === listIDNum ) {
                        //delete tempDoneOrder[key];
                        tempDoneOrder[key]["checkornot"] = 0;
                        delete thisTempNum[key];
                        window.localStorage.AllDoneListOrder = JSON.stringify( tempDoneOrder );
                    }
                }
            }

            tempAllToDoListObj[listIDNum]["seeornot"] = 0;
            window.localStorage.AllToDoList = JSON.stringify(tempAllToDoListObj);
            /*
            for(var key in tempAllToDoListObj) {
                if( tempAllToDoListObj[key]["seeornot"] === 1 ) {
                    console.log(tempAllToDoListObj[key]);
                }
            }
            */
            //console.log(tempAllToDoListObj);

            // delete localStorage.DoOrder
            /*
            if( $(this).parent().parent().attr("id") === "theList" ) {
                if( parseInt(window.localStorage.DoOrder) !== 0 && window.localStorage.DoOrder !== '' ) {
                    var tempNewOrder = window.localStorage.DoOrder;
                } else {
                    var tempNewOrder = '';
                }
                var tempID = $(this).parent().attr("id");
                var tempIDNum = parseInt( tempID.slice(9) );
                var minusStringIndex = tempNewOrder.indexOf(tempID);
                var newTempNewOrderLeft = (minusStringIndex !== 0) ? tempNewOrder.substring(0, minusStringIndex-1) : '';
                var newTempNewOrderRight = (minusStringIndex !== tempNewOrder.length-tempID.length) ? tempNewOrder.substring( ( minusStringIndex + tempID.length + 1), tempNewOrder.length ) : '';
                var newTempNewOrderLeftAndRight = ( minusStringIndex !== 0 && minusStringIndex !== tempNewOrder.length-tempID.length ) ? (newTempNewOrderLeft + ',' + newTempNewOrderRight) : (newTempNewOrderLeft + newTempNewOrderRight);
                //console.log("l:"+newTempNewOrderLeft,"r:"+newTempNewOrderRight,"l+r:"+newTempNewOrderLeftAndRight);
                window.localStorage.DoOrder = newTempNewOrderLeftAndRight;

            } else if ( $(this).parent().parent().attr("id") === "doingList" ) {
                if( parseInt(window.localStorage.DoingOrder) !== 0 && window.localStorage.DoingOrder !== '' ) {
                    var tempDoingOrder = window.localStorage.DoingOrder;
                } else {
                    var tempDoingOrder = '';
                }
                var tempDoingID = $(this).parent().attr("id");
                var tempDoingIDNum = parseInt( tempDoingID.slice(9) );
                var minusStringDoingIndex = tempDoingOrder.indexOf(tempDoingID);
                var newTempDoingOrderLeft = (minusStringDoingIndex !== 0) ? tempDoingOrder.substring(0, minusStringDoingIndex-1) : '';
                var newTempDoingOrderRight = (minusStringDoingIndex !== tempDoingOrder.length-tempDoingID.length) ? tempDoingOrder.substring( ( minusStringDoingIndex + tempDoingID.length + 1), tempDoingOrder.length ) : '';
                var newTempDoingOrderLeftAndRight = ( minusStringDoingIndex !== 0 && minusStringDoingIndex !== tempDoingOrder.length-tempDoingID.length ) ? (newTempDoingOrderLeft + ',' + newTempDoingOrderRight) : (newTempDoingOrderLeft + newTempDoingOrderRight);
                window.localStorage.DoingOrder = newTempDoingOrderLeftAndRight;
                window.localStorage.DoingTotal = parseInt(window.localStorage.DoingTotal) - 1;
            } else {
                if( parseInt(window.localStorage.DoneOrder) !== 0 && window.localStorage.DoneOrder !== '' ) {
                    var tempDoneOrder = window.localStorage.DoneOrder;
                } else {
                    var tempDoneOrder = '';
                }
                var tempDoneID = $(this).parent().attr("id");
                var tempDoneIDNum = parseInt( tempDoneID.slice(9) );
                var minusStringDoneIndex = tempDoneOrder.indexOf(tempDoneID);
                var newTempDoneOrderLeft = (minusStringDoneIndex !== 0) ? tempDoneOrder.substring(0, minusStringDoneIndex-1) : '';
                var newTempDoneOrderRight = (minusStringDoneIndex !== tempDoneOrder.length-tempDoneID.length) ? tempDoneOrder.substring( ( minusStringDoneIndex + tempDoneID.length + 1), tempDoneOrder.length ) : '';
                var newTempDoneOrderLeftAndRight = ( minusStringDoneIndex !== 0 && minusStringDoneIndex !== tempDoneOrder.length-tempDoneID.length ) ? (newTempDoneOrderLeft + ',' + newTempDoneOrderRight) : (newTempDoneOrderLeft + newTempDoneOrderRight);
                window.localStorage.DoneOrder = newTempDoneOrderLeftAndRight;
                window.localStorage.DoneTotal = parseInt(window.localStorage.DoneTotal) - 1;
            }
            */
            //delete localStorage.InputOrder
            //var tempOrderObj = JSON.parse(window.localStorage.InputOrder) || 0;
            //var clickID = parseInt( $(this).parent().attr("id").slice(9) );    //console.log(clickID);
            //delete tempOrderObj[clickID];
            //delete insertedNewList[clickID];
            //window.localStorage.InputOrder = JSON.stringify(tempOrderObj);

            //delete localStorage.InputColorOrder
            //var tempColorObj = JSON.parse(window.localStorage.InputColorOrder) || 0;
            //delete tempColorObj[clickID];
            //window.localStorage.InputColorOrder = JSON.stringify(tempColorObj);

            //delete localStorage.InputTimeOrder
            //var tempTimeObj = JSON.parse(window.localStorage.InputTimeOrder) || 0;
            //console.log(clickID, tempTimeObj);
            //delete tempTimeObj[clickID];
            //delete recordTimeObj[clickID];
            //window.localStorage.InputTimeOrder = JSON.stringify(tempTimeObj);

            //delete localStorage.InputLoadOrder
            //var tempLoadObj = JSON.parse(window.localStorage.InputLoadOrder) || 0;
            //delete tempLoadObj[clickID];
            //delete recordLoadObj[clickID];
            //window.localStorage.InputLoadOrder = JSON.stringify(tempLoadObj);

            //delete localStorage.InputDeadLineOrder
            //var tempDeadLineObj = JSON.parse(window.localStorage.InputDeadLineOrder) || 0;
            //delete tempDeadLineObj[clickID];
            //delete recordDeadLineObj[clickID];
            //window.localStorage.InputDeadLineOrder = JSON.stringify(tempDeadLineObj);

            //delete localStorage.AllToDoList
            //var deleteTempAllToDoListObj = JSON.parse(window.localStorage.AllToDoList) || {};
            //delete deleteTempAllToDoListObj[clickID];
            //delete tempAllToDoListObj[clickID];
            //window.localStorage.AllToDoList = JSON.stringify(tempAllToDoListObj);
            //console.log(tempAllToDoListObj);
           
            //delete localStorage.clickedIDelement
            window.localStorage.Total = parseInt(window.localStorage.Total) - 1;
            $(this).parent().remove();

        }); 

        // 图标控制
        
        $listGroupItem.on('click', function(e){
            e.preventDefault();
            oddEvenTest++;
            //$('.fa-chevron-right').toggle();  
            //$('.fa-chevron-down').toggle();
            var $modeChoosing = $('.modeChoosing'),
                $everyDayDoArea = $('.everyDayDoArea');

            if( oddEvenTest%2 !== 0 ) { 
                $modeChoosing.css({
                    'padding-bottom':'1em',
                    'height':'auto'
                });
                $everyDayDoArea.css('display','block');
                $listCategory.css('display','block');
                //$('div#MBO').css('display','block');
            } else { 
                $modeChoosing.css({
                    'padding-bottom':'0',
                    'height':'44'
                });
                $everyDayDoArea.css('display','none');
                $listCategory.css('display','none');
                //$('div#MBO').css('display','none');
            }
        });

        /**********************************************************************/
        /*
         *  增加条目
         */
        /*
        $studyMode.on('click', function(e){
            e.preventDefault();
            //$('#chartdiv').toggle(); 
        });
        */
        
        $addToDo.on('click', function(e){
            e.preventDefault();
            addList();
        });
        
        $toDoItem.on('keydown',function(e){
            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
            if(key === 13){
                e.preventDefault();
                addList();
            }
        });

        /****************************************************************************/
        /*
         *  按钮
         */
        $doClearAll.on('click', function(e){
            e.preventDefault();
            $allLists.children().remove();
            $myEverydayDoList.children().remove();
            var $toDoItem = $('#toDoItem');
            $toDoItem.val('');
            $toDoItem.focus();
            temp = 0;
            //recordTimeObj = {};
            //recordLoadObj = {};
            //recordDeadLineObj = {};
            tempAllToDoListObj = {};
            tempAllToDoListOrderObj = {};
            tempAllDoingListOrderObj = {};
            tempAllDoneListOrderObj = {};
            thisTempNum = {};
            //var temp = parseInt(window.localStorage.BiggestID);
            //var tempOrder = window.localStorage.InputOrder;
            var aimOrder = JSON.parse(window.localStorage.aimOrder) || {};
            if(window.localStorage) { window.localStorage.clear(); }
            window.localStorage.BiggestID = 0;
            //window.localStorage.InputColorOrder = 0;
            //window.localStorage.InputTimeOrder = 0;
            //window.localStorage.InputDeadLineOrder = 0;
            //window.localStorage.InputLoadOrder = 0;
            //window.localStorage.InputOrder = 0;
            //window.localStorage.DoOrder = '';
            //window.localStorage.DoingOrder = '';
            //window.localStorage.DoneOrder = '';
            window.localStorage.Total = 0;
            //window.localStorage.DoingTotal = 0;
            //window.localStorage.DoneTotal = 0;
            window.localStorage.EverydayDoList = '';
            window.localStorage.EverydayDoTotal = 0;
            window.localStorage.aimOrder = JSON.stringify(aimOrder);
            window.localStorage.AllToDoList = 0;
            window.localStorage.AllToDoListOrder = 0;
            window.localStorage.AllDoingListOrder = 0;
            window.localStorage.AllDoneListOrder = 0;
        });
        loadAimByOrder();
        loadEverydayDoList();
        loadToDo();
        //loadDoing();
        //loadDone();
        clearAllMarginTop();
        // auto resize textarea
        $('.ListItem').elastic();
    });
})();

