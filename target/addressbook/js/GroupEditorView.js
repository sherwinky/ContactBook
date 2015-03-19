(function(){
    brite.registerView("GroupEditorView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(data){
                var view = this;
                var group = data.data;
                var popupData ={};
                var view = render("GroupEditorView",{data : group});
                popupData.content = view;
                popupData.title="Create Group";
                brite.display("PopupView",null,popupData);
                $(".group-form").validate();
                $(".popup-submit").click(function(){
                    if($(".group-form").valid())
                    {
                        var data = $(".group-form").serialize();
                        if($(".group-form").find("#id").val())
                        {

                            app.groupDao.update(data).done(function(){
                            $('#myModal').modal('hide');
                             brite.display("GroupListView",$(".MainView-content"));
                            });
                        }
                        else
                        {
                            app.groupDao.create(data).done(function(){
                            $('#myModal').modal('hide');
                             brite.display("GroupListView",$(".MainView-content"));
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

