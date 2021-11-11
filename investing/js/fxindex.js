// Create a connection to http://localhost:9999/echo
console.log('stream: '+stream);
var sock = null;
//var server_heartbeat_interval = 5;
new_conn = function (){

			var options = {
				protocols_whitelist: ['websocket', 'xdr-streaming', 'xhr-streaming', 'iframe-eventsource', 'xdr-polling', 'xhr-polling'], 
				debug: true, 
				jsessionid: false, 
				server_heartbeat_interval: 4000, 
				heartbeatTimeout: 2000
			};
			//sock = new SockJS('//'+stream+':443/echo', null, options);
			sock = new SockJS(stream+'/echo', null, options);
			//sock = new SockJS('http://web61.forexpros.com:80/echo');
			// managing heartbeats
			var heartbeat, death;
			var suicide = false; // why would you do this
			var events = {};
			function on(event, func) {events[event] = func;}
			            
			// all users announce their info to the server and start a heartbeat
			
			var onDeath = function() {
			    clearTimeout(heartbeat);
			    clearTimeout(death);
			};
			
			var setHeartbeat = function() {
			    clearTimeout(heartbeat);
			    heartbeat = setTimeout(function() {
					console.log("heartbeat");
					sock.send(JSON.stringify({ _event: "heartbeat", data: 'h'}));
			    }, 3000);
			    death = setTimeout(function() {
					console.log("Diying...");
					sock.close();
				}, 60000);
			};
			                                                          
			on("heartbeat", function(e,data) {
			    if (suicide) return; // let death take me
			    clearTimeout(death); // death averted
			    // console.log("heartbeat: returned, death averted");
			    setHeartbeat();
			});
			
			function getTimeUnitForDisplay(timeUnit) {
		        if(timeUnit > 9) return timeUnit;
		        return '0' + timeUnit;
		    }

			function getUTCTime(timestamp, timezoneOffset) {
		        var currentTime = new Date((timestamp + timezoneOffset) * 1000);
		        return getTimeUnitForDisplay(currentTime.getUTCHours()) + ':' + getTimeUnitForDisplay(currentTime.getUTCMinutes()) + ':' + getTimeUnitForDisplay(currentTime.getUTCSeconds());
		    }

			//sock.onheartbeat = function() {
			//    console.log('heartbeat');
			//};
			// Open the connection
			sock.onopen = function() {
			  console.log('open-fx');
			  setHeartbeat();
 
			  jQuery.each (pid_arr , function (i , val) {
				 // console.log(val);
				  	sock.send(JSON.stringify({_event: "subscribe", "tzID": TimeZoneID, "message": val}));
			  			}
			  		)
			};
			// Open the connection END
			
			on("tick",function(e,data) {
					var content = JSON.parse(e.data);
								
					//console.log(content.message);
					var result = content.message.split('::');
					
					
					var pid_obj = JSON.parse(result[1]);
					//var tz_arr = JSON.parse(pid_obj.local_time);
						var table_name = summary.findTableByPid(pid_obj.pid);
						summary.updateSummary(table_name, pid_obj)

						var curr_avg = summary.getCurrentAvgFormatedOf(table_name)
						var avg_class = summary.getCurrentAvgOf(table_name) > 0 ? "greenFont" : "redFont"

						$(table_name).closest("table")
							.find("caption .avg")
							.html(curr_avg)
							.removeClass("greenFont")
							.removeClass("redFont")
							.addClass(avg_class)
						
						$('.pid-'+pid_obj.pid+'-line')
							.find("td")
							.removeClass("greenFont")
							.removeClass("redFont")
							.removeClass("blackFont")
							.addClass(pid_obj.pc_col)

						$('.pid-'+pid_obj.pid+'-ativo')
							.addClass("yellowBg")
							.addClass("blackFont");
						
					    $('.pid-'+pid_obj.pid+'-last').html(pid_obj.last);
					    $('.pid-'+pid_obj.pid+'-pcp').html(pid_obj.pcp);
						

						if(pid_obj.high == pid_obj.last){
							$('.pid-'+pid_obj.pid+'-last').addClass("text-overline")
						}

						if(pid_obj.low == pid_obj.last){
							$('.pid-'+pid_obj.pid+'-last').addClass("text-underline")
						}
					    
					    setTimeout(function(){

							$('.pid-'+pid_obj.pid+'-ativo')
								.removeClass("yellowBg")
								.removeClass("blackFont");
							
							$('.pid-'+pid_obj.pid+'-last')
								.removeClass("text-overline")
								.removeClass("text-underline");
							
						}, 1250);
			});
			
			// On receive message from server
			sock.onmessage = function(e) {
				// Get the content
				//console.log(e.data);
				                
				try {
					//console.log(e.data);
				        var data = JSON.parse(e.data);
				        if (data._event == undefined)
					    	data._event = 'tick';
				        	(events[data._event] || noop)(e,data);
				}catch(err){
					console.log('CATCH ERR ');
					console.log('CATCH ERR '+err.message+e.data);
					sock.close();
					clearTimeout(death); // death averted
					new_conn();
				}
				    
			 };
			// On receive message from server END
			 
			// On connection close
			 sock.onclose = function() {
				console.log('close-fx');
				setTimeout(function () {
			 		console.log('retry');
					clearTimeout(death); // death averted
			 		new_conn();
					console.log("new conn: returned, death averted");
			 	  	//console.log('retry2');
			   }, 3000);
			 }
			// On connection close END
}

new_conn();

            	                                    
// Function for sending the message to server
function sendMessage(){
    // Get the content from the textbox
    var message = $('#message').val();
    var username = $('#username').val();
        
    // The object to send
    var send = {
        message: message,
        username: username
        };
                    
    // Send it now
    sock.send(JSON.stringify(send));
}