var app = {
	initialize: function() {
		app.loadMessages();
	},
	loadMessages: function() {
		$.ajax({
			url:'http://darkuskyo.net/api/sitemessages/index/format/json',
			data:{},
			dataType:'JSON'
		}).done(function(data){
			$('#messages').empty();
			$('#messages').append('<div><a href="#" onclick="app.loadMessages()">Reload</a> </div>');
			$.each(data.messages,function(key,item){

				$('#messages').append('<div>'+item.content+'</div>');
			});
			//console.log(data.textos);
		}).error(function( event, jqxhr, settings, thrownError){
			$('#messages').empty();
			$('#messages').append('<div>Unable to connect to server.</div>');
			$('#messages').append('<div><a href="#" onclick="app.loadMessages()">Reload</a> </div>');

		});
	},
	bindEvents: function() {
		
	}
};

window.onload=function(){
	app.initialize();
}