(function(){
    brite.registerView("GroupContactManageView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(data){
                var view = this;
                var contactId = data.contactId;

                    app.groupDao.listByContact(contactId).done(function(groups){
                        var data = {};
                        data.contactid=contactId;
                        data.notSelectedGroups = LoadNotSelectedGroup(groups);
                        data.selectedGroups = LoadSelectedGroup(groups);
                        var view = render("GroupContactManageView",{data:data});
                         var popViewData = {
                            content: view,
                            title: "Select group",
                            hideSave:true
                         };
                        brite.display("PopupView",null,popViewData);
                        AddEvent();
                    });

                
            },

            postDisplay: function(data){

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
function refreshGroupContactList()
{
     app.groupDao.listByContact($("#contactid_container").val()).done(function(groups){
                        var data = {};
                        data.contactid = $("#contactid_container").val();
                        data.notSelectedGroups = LoadNotSelectedGroup(groups);
                        data.selectedGroups = LoadSelectedGroup(groups);
                        var view = render("GroupContactManageView",{data:data});
                        $(".GroupContactManageView").replaceWith(view);
                        AddEvent();
                    });
}
function AddEvent()
{
    $(".btn-select-group").click(function(event){
         var target = $(event.target);
                    var contactId = $("#contactid_container").val();
                    var groupId = $(target).closest("tr").data("groupid");
                    app.groupContactDao.create(groupId,contactId).done(function(){
                            refreshGroupContactList();
                    });
    });
    $(".btn-remove-group").click(function(event){
        var id = $(event.target).closest("tr").find(".cls-group-contact-id").first().val();
        app.groupContactDao.delete(id).done(function(){
            refreshGroupContactList();
        });
    });
}
function LoadNotSelectedGroup(groups)
{
    var resultGroups = [];
    $.each(groups,function(index,value){
            if(!value.groupContact || (value.groupContact  && value.groupContact.length ==0))
            {
                resultGroups.push(value);
            }
             
        });
    return resultGroups;
}
function LoadSelectedGroup(groups)
{
    var resultGroups = [];
    $.each(groups,function(index,value){
            if(value.groupContact  && value.groupContact.length >0)
            {
                resultGroups.push(value);
            }
             
        });
    return resultGroups;   
}

