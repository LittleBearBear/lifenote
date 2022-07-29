//我们将会打造一个高大上的消费者社区，从创客到终端消费者，推荐最好的硬件产品和软件APP!</br>
//我们将打造一个支持各种创客创业者的一个平台，从数据，产品测试，消费者喜好，服务工具入手</br>

var string = "If you are intrested in helping me develop LifeNote together, please Email: shaochenxiong@gmail.com";
console.log(string);

//S=s1:U=8edc7:E=14e2f3631e4:C=146d7850308:P=1cd:A=en-devtoken:V=2:H=80f8f2c400bcb45f7dc40cd7369b3655
//https://sandbox.evernote.com/shard/s1/notestore
//Expire: 26 June 2015, 02:32

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
        window.localStorage.EverydayDoList = window.localStorage.EverydayDoList ? window.localStorage.EverydayDoList : 0;

        window.localStorage.AllToDoList = window.localStorage.AllToDoList ? window.localStorage.AllToDoList : 0;
        window.localStorage.AllToDoListOrder = window.localStorage.AllToDoListOrder ? window.localStorage.AllToDoListOrder : 0;
        window.localStorage.AllDoingListOrder = window.localStorage.AllDoingListOrder ? window.localStorage.AllDoingListOrder : 0;
        window.localStorage.AllDoneListOrder = window.localStorage.AllDoneListOrder ? window.localStorage.AllDoneListOrder : 0;

        window.localStorage.aimOrder = window.localStorage.aimOrder ? window.localStorage.aimOrder : 0;
        var tempDailyObj = ( parseInt(window.localStorage.EverydayDoList) !== 0 && window.localStorage.EverydayDoList !== '' ) ? JSON.parse(window.localStorage.EverydayDoList) : {},
            //test
            thisTempNum = ( parseInt(window.localStorage.AllToDoListOrder) !== 0 && window.localStorage.AllToDoListOrder !== '' ) ? JSON.parse(window.localStorage.AllToDoListOrder) : {},
            thisTempDoingNum = ( parseInt(window.localStorage.AllDoingListOrder) !== 0 && window.localStorage.AllDoingListOrder !== '' ) ? JSON.parse(window.localStorage.AllDoingListOrder) : {},
            thisTempDoneNum = ( parseInt(window.localStorage.AllDoneListOrder) !== 0 && window.localStorage.AllDoneListOrder !== '' ) ? JSON.parse(window.localStorage.AllDoneListOrder) : {},
            tempAllToDoListObj = ( parseInt(window.localStorage.AllToDoList) !== 0 && window.localStorage.AllToDoList !== '' ) ? JSON.parse(window.localStorage.AllToDoList) : {};
            
        for (var key in tempAllToDoListObj) { 
            if(tempAllToDoListObj[key]["seeornot"] === 1) {
                size++; 
            }
        }

        window.localStorage.Total = size || 0; // save total

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
            var Obj1 = JSON.parse(window.localStorage.AllDoingListOrder),
                Obj2 = JSON.parse(window.localStorage.AllDoneListOrder),
                Obj3 = JSON.parse(window.localStorage.AllToDoListOrder),
                list1 = 0,
                list2 = 0,
                list3 = 0,
                N = 10,
                M = 4,
                largeOne = 0;

            for (var key in Obj1){ list1++; }
            for (var key in Obj2){ list2++; }
            for (var key in Obj3){ list3++; }

            largeOne = (list1 > list2) ? list1 : list2;
            largeOne = (largeOne > list3) ? largeOne : list3;
            //console.log(largeOne);
            
            if( $( window ).height() <= 600){
                //var marginTopOfClearAll = $( window ).height() * 0.5 / 16 * multiple;
                if( list1 >= M || list2 >= M || list3 >= M ) {
                    var multiple = largeOne - M,
                        marginTopOfClearAll = $( window ).height() * 0.5 / 8 * multiple + 2*12;
                    //console.log($( window ).height());  console.log(marginTopOfClearAll);
                    $doClearAll.css("margin-top", marginTopOfClearAll);
                }
            } else {
                if( list1 >= N || list2 >= N || list3 >= N ) {
                    var multiple = largeOne - N,
                        marginTopOfClearAll = $( window ).height() * 0.5 / 16 * multiple + 2*12;
                    $doClearAll.css("margin-top", marginTopOfClearAll);
                }
            }
        }

        /* 
         *  读取现有的localStorage
         */
        function loadToDo() {
            var theValue = '',
                tempcolor = '',
                tempheight = 0,
                current_time = '',
                investTime = '',
                $theList = $('#theList'),
                tempAllToDoListOrderObj = JSON.parse(window.localStorage.AllToDoListOrder) || {},
                k = 1,
                Num = 0;

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
           
        }

        function loadDoing() {

            var tempcolor = '',
                tempheight = 0,
                current_time = '',
                theValue = '',
                investTime = '',
                $doingList = $('#doingList'),
                tempAllDoingListOrderObj = JSON.parse(window.localStorage.AllDoingListOrder) || {},
                k = 1,
                Num = 0;

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
            //console.log(tempAllToDoListObj);
            var i = 0;
            if( JSON.stringify(tempAllToDoListObj) !== "{}" ){
                for(var key in tempAllDoingListOrderObj) {
                    Num = tempAllDoingListOrderObj[key];
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
                    $doingList.append(newListItem);
                    $doingList.children().eq(i).attr( "id", "todolist_" + tempAllToDoListObj[Num]["order"] ); // give li a id
                    $doingList.children().eq(i).find('.colorMenu0').css('background',  tempcolor);    //color
                    
                    tempheight = tempAllToDoListObj[Num]["loadingrate"].substring(0,tempAllToDoListObj[Num]["loadingrate"].length-1);
                    //console.log(tempAllToDoListObj[Num]["loadingrate"], tempheight);
                    $doingList.children().eq(i).find('.loadingBK').width(parseInt(tempheight) * 108 / 100);   // show loadingrate number
                    var rate = tempAllToDoListObj[Num]["loadingrate"];
                    $doingList.children().eq(i).find('.loadingRate').text(rate);  // show loadingrate bar
                    //console.log(tempheight, rate);

                    $doingList.children().eq(i).find('.investTime').text( tempAllToDoListObj[Num]["endtime"] );
                    $doingList.children().eq(i).find('.current_time').text( tempAllToDoListObj[Num]["starttime"] );
                    i++;
                }
            }

            $toDoItem.focus();
            $toDoItem.val('');
        }

        function loadDone() {
            var tempcolor = '',
                tempheight = 0,
                current_time = '',
                theValue = '',
                investTime = '',
                $doneList = $('#doneList'),
                tempAllDoneListOrderObj = JSON.parse(window.localStorage.AllDoneListOrder) || {},
                k = 1,
                Num = 0;

            //如果没有顺序，给一个顺序
            if( JSON.stringify(tempAllDoneListOrderObj) === "{}" ){
                for(var key in tempAllToDoListObj) {
                    if( tempAllToDoListObj[key]["category"] === "donleist" && tempAllToDoListObj[key]["seeornot"] === 1 ){
                        tempAllDoneListOrderObj[k] = key;
                        k++;
                    }
                }
                window.localStorage.AllDoneListOrder = JSON.stringify(tempAllDoneListOrderObj);
            }

            //按照顺序输出
            //console.log(tempAllToDoListObj);
            var i = 0;
            if( JSON.stringify(tempAllToDoListObj) !== "{}" ){
                for(var key in tempAllDoneListOrderObj) {
                    Num = tempAllDoneListOrderObj[key];
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
                    $doneList.append(newListItem);
                    $doneList.children().eq(i).attr( "id", "todolist_" + tempAllToDoListObj[Num]["order"] ); // give li a id
                    $doneList.children().eq(i).find('.colorMenu0').css('background',  tempcolor);    //color
                    
                    tempheight = tempAllToDoListObj[Num]["loadingrate"].substring(0,tempAllToDoListObj[Num]["loadingrate"].length-1);
                    //console.log(tempAllToDoListObj[Num]["loadingrate"], tempheight);
                    $doneList.children().eq(i).find('.loadingBK').width(parseInt(tempheight) * 108 / 100);   // show loadingrate number
                    var rate = tempAllToDoListObj[Num]["loadingrate"];
                    $doneList.children().eq(i).find('.loadingRate').text(rate);  // show loadingrate bar
                    //console.log(tempheight, rate);

                    $doneList.children().eq(i).find('.investTime').text( tempAllToDoListObj[Num]["endtime"] );
                    $doneList.children().eq(i).find('.current_time').text( tempAllToDoListObj[Num]["starttime"] );
                    i++;
                }
            }

            $toDoItem.focus();
            $toDoItem.val('');
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
            var updateToDoList = {},
                updateDoingList = {},
                updateDoneList = {};
            for ( var i = 1; i <= $theList.children().length; i++ ) {
                updateToDoList[i] = parseInt( $theList.children().eq(i-1).attr("id").slice(9) );
                tempAllToDoListObj[updateToDoList[i]]["category"] = "todolist";
            }
            window.localStorage.AllToDoListOrder = JSON.stringify(updateToDoList);

            for ( var i = 1; i <= $doingList.children().length; i++ ) {
                updateDoingList[i] = parseInt( $doingList.children().eq(i-1).attr("id").slice(9) );
                tempAllToDoListObj[updateDoingList[i]]["category"] = "doinglist";
            }
            window.localStorage.AllDoingListOrder = JSON.stringify(updateDoingList);
            
            for ( var i = 1; i <= $doneList.children().length; i++ ) {
                updateDoneList[i] = parseInt( $doneList.children().eq(i-1).attr("id").slice(9) );
                tempAllToDoListObj[updateDoneList[i]]["category"] = "donelist";
            }
            window.localStorage.AllDoneListOrder = JSON.stringify(updateDoneList);
            window.localStorage.AllToDoList = JSON.stringify( tempAllToDoListObj );
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

            tempAllToDoListObj[ID]["loadingrate"] = rate;
            window.localStorage.AllToDoList = JSON.stringify(tempAllToDoListObj);

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
            var tempDLVal = $(this).val().slice(5);
            var ID = parseInt( $(this).parent().parent().parent().parent().parent().parent().parent().attr("id").slice(9) );
            tempAllToDoListObj[ID]["endtime"] = "23:59 " + tempDLVal;
            window.localStorage.AllToDoList = JSON.stringify( tempAllToDoListObj );

        }).on('click', '.colorMenu3', function(e){
            /* A B C D 的4种颜色*/
            e.preventDefault();

            var thisLiID = parseInt( $(this).parent().parent().parent().parent().attr("id").slice(9) );
            var thisClick = $(this).parent().parent().parent().parent().children().eq(0).children().eq(0);
            var thisClass = $(this).children().children().eq(0).attr('class');

            if( thisClass == "A" ) {
                thisClick.css('background','#FF0066');   // #d9534f 1
                tempAllToDoListObj[thisLiID]["priority"] = '#FF0066';
            } else if ( thisClass == "B" ) {
                thisClick.css('background','#d9534f');    // #e4792b 2
                tempAllToDoListObj[thisLiID]["priority"] = '#d9534f';
            } else if ( thisClass == "C" ) {
                thisClick.css('background','#e4792b');    // #eeb929 3
                tempAllToDoListObj[thisLiID]["priority"] = '#e4792b';
            } else if ( thisClass == "D" ) {
                thisClick.css('background','#eeb929');    // #eeb929 4
                tempAllToDoListObj[thisLiID]["priority"] = '#eeb929';
            } else if ( thisClass == "E" ) {
                thisClick.css('background','#3fc2d5');    // #eeb929 5
                tempAllToDoListObj[thisLiID]["priority"] = '#3fc2d5';
            } else if ( thisClass == "F" ) {
                thisClick.css('background','#3f9ed5');    // #eeb929 6
                tempAllToDoListObj[thisLiID]["priority"] = '#3f9ed5';
            } else if ( thisClass == "G" ) {
                thisClick.css('background','#9900CC');    // #eeb929 7
                tempAllToDoListObj[thisLiID]["priority"] = '#9900CC';
            } else {
                thisClick.css('background','#bbb');    // #cbcbcb 8
                tempAllToDoListObj[thisLiID]["priority"] = '#bbb';
            }
            window.localStorage.AllToDoList = JSON.stringify( tempAllToDoListObj );
            
            /* 
            *  1.修改时的存储 change content 2.清除 delete content
            */
        }).on('change','.ListItem', function(e){
            e.preventDefault();
            var currentValue = $(this).val();
            if( currentValue === '' ){ currentValue = "blank"; }
            var currentOrder = parseInt( $(this).parent().attr("id").slice(9) );

            tempAllToDoListObj[currentOrder]["dailycontent"] = currentValue;
            window.localStorage.AllToDoList = JSON.stringify( tempAllToDoListObj );

        }).on('click','.removeListItem', function(e){
            e.preventDefault();

            var listIDNum = parseInt( $(this).parent().attr("id").slice(9) );

            if( $(this).parent().parent().attr("id") === "theList" ) {
                var tempTodoOrder = JSON.parse(window.localStorage.AllToDoListOrder);
                //console.log(tempTodoOrder);
                for( var key in tempTodoOrder ){
                    if ( tempTodoOrder[key] === listIDNum ) {
                        tempTodoOrder[key]["checkornot"] = 0;
                        delete tempTodoOrder[key];
                        delete thisTempNum[key];
                        window.localStorage.AllToDoListOrder = JSON.stringify( tempTodoOrder );
                    }
                }
            } else if ( $(this).parent().parent().attr("id") === "doingList" ) {
                var tempDoingOrder = JSON.parse(window.localStorage.AllDoingListOrder);
                //console.log(tempDoingOrder);
                for( var key in tempDoingOrder ){
                    if ( tempDoingOrder[key] === listIDNum ) {
                        tempDoingOrder[key]["checkornot"] = 0;
                        delete tempDoingOrder[key];
                        delete thisTempNum[key];
                        window.localStorage.AllDoingListOrder = JSON.stringify( tempDoingOrder );
                    }
                }
            }  else {
                var tempDoneOrder = JSON.parse(window.localStorage.AllDoneListOrder);
                //console.log(tempDoneOrder);
                for( var key in tempDoneOrder ){
                    if ( tempDoneOrder[key] === listIDNum ) {
                        tempDoneOrder[key]["checkornot"] = 0;
                        delete tempDoneOrder[key];
                        delete thisTempNum[key];
                        window.localStorage.AllDoneListOrder = JSON.stringify( tempDoneOrder );
                    }
                }
            }

            tempAllToDoListObj[listIDNum]["seeornot"] = 0;
            window.localStorage.AllToDoList = JSON.stringify(tempAllToDoListObj);
           
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
            $toDoItem.val('');
            $toDoItem.focus();
            temp = 0;

            tempAllToDoListObj = {};
            tempAllToDoListOrderObj = {};
            tempAllDoingListOrderObj = {};
            tempAllDoneListOrderObj = {};
            thisTempNum = {};
            
            var aimOrder = JSON.parse(window.localStorage.aimOrder) || {};
            if(window.localStorage) { window.localStorage.clear(); }
            window.localStorage.BiggestID = 0;
            window.localStorage.Total = 0;
    
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
        loadDoing();
        loadDone();
        clearAllMarginTop();
        // auto resize textarea
        $('.ListItem').elastic();
    });
})();

