package com.addressbook.web;


import com.britesnow.snow.web.CurrentRequestContextHolder;
import com.britesnow.snow.web.RequestContext;
import com.google.inject.Singleton;
import org.omg.CORBA.Current;
import com.addressbook.web.WebResponse;

import javax.inject.Inject;

/**
 * <p>The WebResponse factory. Any @Web[REST] that needs to return a JSON data to the client should return a WebResponse built by this Injected factory.</p>
 *
 * <p>This Guice managed WebResponse factory pattern allows to add all sort of useful information across all WebResponse.
 * For example, basic performance information could be added here for all WebResponse of the application without changing any @Web[REST] code.</p>
 *
 */
@Singleton
public class WebResponseBuilder {


    public WebResponseBuilder(){}

    // --------- WebResponse Factories --------- //
    public WebResponse success(){
        return WebResponse.success();
    }

    public WebResponse success(Object result){
        return WebResponse.success(result);
    }

    public WebResponse fail(){
        return WebResponse.fail();
    }

    public WebResponse fail(Throwable t){
        return WebResponse.fail(t);
    }
    // --------- /WebResponse Factories --------- //


}
