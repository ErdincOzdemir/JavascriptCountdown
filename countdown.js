var countdown = {
	start: function(from, display, format) {
		const MINUTE = 60;
		const HOUR = MINUTE * 60;
		const DAY = HOUR * 24;
		const MONTH = DAY * 30;
		
		var difference = {
			month: 0,
			day: 0,
			hour: 0,
			minute: 0,
			second: 0
		}
		
		setInterval(function() {
			var now = new Date();
			var sDiff = Math.round(Math.abs(from.getTime() - now.getTime()) / 1000);
			difference.month = Math.floor(sDiff / MONTH);
			sDiff = sDiff - (difference.month * MONTH);
			difference.day = Math.floor(sDiff / DAY);
			sDiff = sDiff - (difference.day * DAY);
			difference.hour = Math.floor(sDiff / HOUR);
			sDiff = sDiff - (difference.hour * HOUR);
			difference.minute = Math.floor(sDiff / MINUTE);
			sDiff = sDiff - (difference.minute * MINUTE);
			difference.second = sDiff;
			var text = format.replace("%m", difference.month).replace("%d", difference.day).replace("%H", difference.hour).replace("%M", difference.minute).replace("%S", difference.second);
			display.html(text);
		}, 1000);
	}
};