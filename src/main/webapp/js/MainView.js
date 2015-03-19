(function(){

	brite.registerView("MainView",{parent:"body"}, {

		create: function(){
			return render("MainView");
		}, 

		init: function(){
			var view = this;
			return brite.display("ContactListView",view.$el.find(".MainView-content")).whenInit;
		},

		postDisplay: function(){
			$(".nav-contact-link").click(function(){
				$(this).addClass("active");
				$(".nav-group-link").removeClass("active");
				window.location = "#contact";
				return false;
			});
			$(".nav-group-link").click(function(){
				$(this).addClass("active");
				$(".nav-contact-link").removeClass("active");
				window.location = "#group";
				return false;
			});
		},

		docEvents: {

			"APP_CTX_CHANGE": function(event){
				var view = this;
				if("contact" === app.ctx.pathAt(0))
				{
					 brite.display("ContactListView",$(".MainView-content"));
				}
				if("group" === app.ctx.pathAt(0))
				{
					 brite.display("GroupListView",$(".MainView-content"));
				}

			}

		}

	});

})();
