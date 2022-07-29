
(function(){
	$(document).ready(function() { 

		var EFFICIENCY = 1;
		var countdown = '';
		var today_h = '';
		var today_m = '';
		var today_s = '';

		function stringCheck(e) {
			// 如果返回值是一位的，前面加个0
			return (e.toString().length === 1) ? ("0" + e.toString()) : e;
		}

		setInterval(function () {
			// set the date we're counting down to
			var target_date = new Date("Dec 31, 2014").getTime();
			// variables for time units
			var days, hours, minutes, seconds;
			// get tag element
			var countdown2 = '';
		    // find the amount of "seconds" between now and target
			var current_date = new Date().getTime();
			var seconds_left = (target_date - current_date) / 1000;
			// 换算成天 总秒数/24*3600 = 总天数
			days = parseInt(seconds_left / 86400);
			seconds_left = seconds_left % 86400;
			// 总天数/3600 = 
			hours = parseInt(seconds_left / 3600);
			seconds_left = seconds_left % 3600;
			  
			minutes = parseInt(seconds_left / 60);
			seconds = parseInt(seconds_left % 60);
			//countdown2 = "G: "+ days + "Au " + hours + "Ag " + minutes + "Cu " + seconds + "Al "; 
			countdown2 = days*24*60 + hours*60 + minutes + "." + ( parseInt(seconds*10/6) );

			//var countdown = '';
			today_h = new Date().getHours();
			today_m = new Date().getMinutes();
			today_s = new Date().getSeconds();
			countdown = parseInt( (24*60 - (today_h*60+today_m) )*EFFICIENCY ) + "." + ( parseInt((60 - today_s)*10/6)-1) ;
			var countdownHour = countdown/60;
			var countdownHourInt = Math.floor(countdownHour);
			var countdownMin = parseInt((countdownHour - countdownHourInt)*60);

			//console.log(countdownHour);

			$('.goldcoin').text(countdownHourInt);
			$('.silvercoin').text(countdownMin);
			$('.coppercoin').text(seconds);
			$('.allsilvercoin').text(countdown);
			$('span#leftTime').text(countdown2);

			countdown = '';
			countdown2 = '';

		}, 1000);

		// get the current time when you record this note
		/*
		var current_month = stringCheck( new Date().getMonth() + 1 );
		var current_day = stringCheck( new Date().getDate() + 1 );
		var current_hour = stringCheck( new Date().getHours() );
		var current_min = stringCheck( new Date().getMinutes() );
		var current_time = current_hour + ":" + current_min + " " + current_month + "/" + current_day;

		$('span.secondCount').text(current_time);
		alert(current_time);
		*/
	});
})();