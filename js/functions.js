
//Author: Jeff Hasz
//Exercise: Unit 2
//Date: 1/14/2015

var Messages = {

	getAllMessages: function(){
		self.clearMessages();
		$.ajax({
			url: "http://localhost/Unit2/messages.php",
			dataType: "json"
		}).done(function(data){
			for (var m in data){			
			  self.displayMessage(data[m].content);
		    }
		});
	},

 	addMessage: function(messageText) {
 		$.ajax({
			url: "http://localhost/Unit2/add.php",
			type: "POST",
			data:{content:messageText}
		}).done(function(data){
			console.log(data);
			self.getAllMessages();
		}).fail(function(jqXHR,status){
		    console.log(status);
		});
 	},

 	displayMessage: function(messageText){
 		if ($(".message").hasClass("current")==false) 
				{
					$(".message").html($("#messagetxt").val())
					.addClass("current")
					.show();	

				}
				else
			    {				
				  var current = $(".current").clone()
											.html(messageText);
				  $(".current").after(current)
			    	.removeClass("current");

			    }
 	},

 	clearMessages: function(messageText) {
		$(".message").remove();
		$(".content > .row").html('<div class="twelve columns message"></div>');
	}


}

var self = Messages;


$(document).ready(function() 
{
	Messages.getAllMessages();

		$("#messagebtn").click(function()
		 {
  		
  			var messageText = $("#messagetxt").val();

  			if (messageText != "")
  			{
  				Messages.addMessage(messageText);
		    }

		}); 
		
});

