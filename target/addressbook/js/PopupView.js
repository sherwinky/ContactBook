(function(){
    brite.registerView("PopupView", {
            emptyParent:true
        },
        {

            // --------- View Interface Implement--------- //
            create: function(data){
                $(document.body).append(render("PopupView",{data : data}));
                $('#myModal').on('hidden.bs.modal', function () {
                    $('#myModal').remove();
                });
            },

            postDisplay: function(data){
                $('#myModal').modal('show');
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

