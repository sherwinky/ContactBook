package com.addressbook.dao;

import com.google.inject.Inject;
import com.google.inject.Singleton;

/**
 * Created by Stev.L on 03/16/15.
 */
@Singleton
public class DaoRegistry {
    @Inject
    public GroupDao groupDao;
    @Inject
    public ContactDao contactDao;
    @Inject
    public AddressDao addressDao;
    @Inject
    public GroupContactDao groupContactDao;
    public DaoRegistry(){
    }
}
