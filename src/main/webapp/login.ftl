<section id="loginsection" class="content">
    <form id="login-form" class="form-horizontal" action="${_r.contextPath}/api/user-login" method="post">
        <!-- If the user has not be set, then, we display the login form -->
        <div class="control-group">
            <h3>Login</h3>
            <input id="login-username" type="text" name="userName" class="input" placeholder="name">
            <input id="login-pwd" type="password"  name="pwd" class="input" placeholder="password">
            <br/>
            <span class="help-inline">You are not logged in, please try admin/1</span>
        </div>
        <div class="control-group">
            <button style="margin: 0 auto;display:block;width:200px;float:left;" type="submit" class="btn">Sign in</button>
        </div>
        <span id="login-error" class="help-inline error"></span>
        <p></p>
    </form>
</section>

<script type="text/javascript">
    // Login form
    // Use the jquery form plugin, to ajax enable this create bookmark form.
    // Just refresh the page on success
    $(function(){
        var $form = $("#login-form");
        $form.ajaxForm({
            dataType: "json",
            success: function(data){
                if (data.success){
                    // this is a page refresh sample, so, just refresh the page.
                    window.location = window.location.href;
                }else{
                    var msg = data.errorMessage || data.errorCode || "wrong user/password. Try registering.";
                    console.log(msg);
                }
            }
        });
        return false;
    });
</script>
