/**
 * @author Sjoerd
 */
/*
function _3DTutTimer()
{
	
	time:{ m : minutes, s : seconds},
	total_seconds : m*60+s
	
	var my_timer = new countDown( minutes, seconds, fn_tick, fn_complete);
	
	my_timer.set(minutes, seconds);
	my_timer.start();
	my_timer.stop();
	var m = 0;
	var s = 1;
	
	var my_timer = new countDown(0, 1, function(){},
	function(){
		Ti.App.fireEvent('nextpic');	
	});
	var countDown = function (m,s,fn_tick,fn_end ){
		return{
			total_sec: m*60+s,
			timer: this.timer,
			set: function(m,s){
				this.total_sec = parseInt(m)*60+parseInt(s){
					if ( self.total_sec){
						self.total_sec--;
						self.time = { m : parseInt(self.total_sec/60), s: self.total_sec%60)};
						fn_tick();
					}
					else{
						self.stop();
						fn_end();
					}
				}, 1000 );
				return this;
			},
			stop: function() {
				clearInterval(this.timer)
				this.time = {m:0,s:0};
				this.total_sec = 0;
				return this;
			}
		}
	}
	
	
}

module.exports = _3DTutTimer;
*/