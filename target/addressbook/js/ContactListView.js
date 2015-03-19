(function(){
    brite.registerView("ContactListView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(data){
                var view = this;
                var selectGroupid = 0;
                if(data)
                    {
                        selectGroupid = data.groupid;
                    }
                if(selectGroupid >0)
                {
                    var opts = {};
                    opts.groupId = selectGroupid;
                    return  app.contactDao.getContactListByGroup(opts).pipe(function(contacts){
                        var data = {};
                        data.contactList = contacts;
                        return render("ContactListView",{data:data});
                    });

                }
                else
                {
                    return  app.contactDao.list().pipe(function(contacts){
                    var data = {};
                    data.contactList = contacts;
                    return render("ContactListView",{data:data});
                    });    
                }
                
            },

            postDisplay: function(data){
                var view = this;
                app.groupDao.list().done(function(groups){
                    var data = {};
                    data.groupList = groups;
                    var dropDownView = render("GroupDropDownList",{data:data})
                    $(".navbar-default").find(".dropdown-menu").replaceWith(dropDownView);
                    $(".contact-group-selector").click(function(event){
                        var filter = {};
                        filter.groupid = $(event.target).closest("li").data("groupid");
                        brite.display("ContactListView",$(".MainView-content"),filter);
                    });
                });
            },
            // --------- /View Interface Implement--------- //

            // --------- Events--------- //
            events:{
                "click;.btn-manage-group": function(event){
                     var id = $(event.target).closest("tr").data("item-id");
                     brite.display("GroupContactManageView",null,{contactId:id});
                },
                "click;.btn-new-contact" : function(event){
                    var data ={firstName: "", lastName: ""};
                    brite.display("ContactEditorView",null,{data: data });
                    return false;
                },
                "click;.btn-refresh" : function(event){
                    brite.display("ContactListView",$(".MainView-content"));
                },
                "click;.btn-modify-contact": function(event){
                    var id = $(event.target).closest("tr").data("item-id");
                    app.contactDao.get(id).done(function(data){
                        brite.display("ContactEditorView",null,{data: data });
                    });
                },
                "click; .btn-delete-contact":function(event){
                    var target = $(event.target);
                    var id = $(target).closest("tr").data("item-id");
                    app.contactDao.delete(id).done(function(){
                        brite.display("ContactListView",$(".MainView-content"));
                    });
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

