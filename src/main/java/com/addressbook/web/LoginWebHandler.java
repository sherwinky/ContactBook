package com.addressbook.web;

import com.addressbook.dao.DaoRegistry;
import com.google.inject.*;
import javax.servlet.http.HttpServletRequest;

import com.addressbook.dao.GroupDao;
import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.addressbook.entity.*;

/**
 * Created by Stev.L on 03/14/15.
 */
@Singleton
public class LoginWebHandler {

    @Inject
    private DaoRegistry daoTool;
    /**
     * Note 1: for production, use stateless login (as shown in http://britesnow.com/snow/authrequest)
     * Note 2: Here the RequestContext will be injected
     *          (could have Injected HttpServletRequest directly as well)
     */
    @WebPost("/api/user-login")
    public WebResponse login(@WebParam("userName")String userName, @WebParam("pwd")String password, RequestContext rc){
        User user = null;
        if(userName.equals("admin") && password.equals("1"))
        {
            user = new User();
            user.setName(userName);
            user.setPassword(password);
            user.setFirstName("test");
            user.setLastName("user");
        }
        if (user != null){
            rc.getReq().getSession().setAttribute("user", user);
            return WebResponse.success();
        }else{
            return WebResponse.fail("Wrong username or password.");
        }

    }

    /**
     * Note: Here we show how we can inject HttpServletRequest directly
     * @param req
     */
    @WebPost("/api/user-logoff")
    public void logoff(HttpServletRequest req){
        req.getSession().removeAttribute("user");
    }
}
