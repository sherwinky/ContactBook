(function(){
    brite.registerView("ContactEditorView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(data){
                var view = this;
                var contact = data.data;
                var view = render("ContactEditorView",{data:contact});
                var popViewData = {};
                popViewData.content = view;
                popViewData.title="Create Adress";
                brite.display("PopupView",null,popViewData);
                $(".contact-form").validate();
                $(".popup-submit").click(function(){
                    if($(".contact-form").valid())
                    {
                        var data = $(".contact-form").serialize();
                        if($(".contact-form").find("#id").val())
                        {
                            app.contactDao.update(data).done(function(){
                            $('#myModal').modal('hide');
                             brite.display("ContactListView",$(".MainView-content"));
                            });
                        }
                        else
                        {
                            //new object
                            app.contactDao.create(data).done(function(){
                            $('#myModal').modal('hide');
                             brite.display("ContactListView",$(".MainView-content"));
                            });    
                        }
                        

                    }
                });
                return;
            },

            postDisplay: function(data){
                var view = this;
            },
            // --------- /View Interface Implement--------- //

            // --------- Events--------- //
            events:{
            },
            // --------- /Events--------- //
            // --------- Document Events--------- //
            docEvents:{
            }
            // --------- /Document Events--------- //
        }
    );
})();

