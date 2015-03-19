package com.addressbook;
import com.addressbook.dao.DaoHelper;
import com.britesnow.snow.web.auth.AuthRequest;
import com.google.inject.*;
import com.addressbook.web.*;
/**
 * Created by Stev.L on 03/14/15.
 */
public class AppConfig extends AbstractModule {
    @Override
    protected void configure() {
        bind(AuthRequest.class).to(AppAuthRequest.class);
    }
}
