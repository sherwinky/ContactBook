(function(){
    brite.registerView("GroupListView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(){
                var view = this;
                return app.groupDao.list().pipe(function(groups){
                	var data = {};
                    data.groupList = groups;
                    return render("GroupListView",{data:data});
                });
            },

            postDisplay: function(data){
                var view = this;
            },
            // --------- /View Interface Implement--------- //

            // --------- Events--------- //
            events:{
                 "click;.btn-refresh" : function(event){
                    brite.display("GroupEditorView",$(".MainView-content"));
                },
                 "click;.btn-modify-group": function(event){
                    var id = $(event.target).closest("tr").data("item-id");
                    app.groupDao.get(id).done(function(data){
                        brite.display("GroupEditorView",null,{data: data });
                    });
                },
                "click;.btn-new-group" : function(event){
                    var data ={name: ""};
                    brite.display("GroupEditorView",null,{data: data });
                }
            },
            // --------- /Events--------- //
            // --------- Document Events--------- //
            docEvents:{
            }
            // --------- /Document Events--------- //
        }
    );
})();

