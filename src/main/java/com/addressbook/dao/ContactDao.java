package com.addressbook.dao;


import com.addressbook.entity.*;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.j8ql.query.InsertQuery;
import org.j8ql.query.Query;
import org.j8ql.query.Condition;
import org.j8ql.query.SelectQuery;
import static org.jomni.util.Maps.mapOf;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;
import java.util.Optional;
/**
 * Created by Stev.L on 03/16/15.
 */
@Singleton
public class ContactDao extends BaseDao<Contact> {
    @Inject
    private AddressDao addressDao;
    private GroupContactDao groupContactDao;

    public ContactDao(){
        super();
        this.tableName = "contact";
    }
    @Override
    public Long create(BaseEntity entity) {
        if(entity instanceof Contact)
        {
            Long id = super.createObj(createValMap((Contact)entity));
            ((Contact)entity).getAddress().setContactId(id);
            addressDao.create(((Contact)entity).getAddress());
            return id;
        }
        else
        {
            return InvalidId;
        }
    }

    @Override
    public void update(BaseEntity entity) {
        if(entity instanceof Contact)
        {
            super.updateObj(createValMap((Contact)entity),entity.getId());
            Address address = ((Contact) entity).getAddress();
            if(address != null)
            {
                address.setContactId(entity.getId());
                addressDao.update(address);
            }

        }
    }

    @Override
    public int delete(Long id) {
        Optional<Contact> contact = this.get(id);
        if(contact.isPresent())
        {
            Address address = contact.get().getAddress();
            if(address != null)
            {
                addressDao.delete(contact.get().getAddress().getId());
            }
            groupContactDao.deleteByContact(id);
        }
        return super.deleteObj(id);
    }

    @Override
    public List<Contact> list(Condition filter, String... orderBy) {
        return this.list(filter, null, orderBy);
    }

    public List<Contact> list(Condition filter,Long groupId, String... orderBy) {
        Condition contactCondition = null;
        if(orderBy[0] == "")
        {
            orderBy[0] ="id";
        }
        if(groupId != null  )
        {
            contactCondition =  Query.and("groupId",groupId);
        }
        SelectQuery query = null;
        if(contactCondition == null )
        {
            query = Query.select(entityClass)
                    .columns("contact.*").orderBy(orderBy);
        }
        else
        {
            query = Query.select(entityClass)
                    .columns("contact.*")
                    .innerJoin("groupContact", "contactId", "contact", "id").orderBy(orderBy).where("groupId",groupId);
            query.where(contactCondition);
        }
        List<Contact> contactList =  daoHelper.list(query);
        for(Contact c: contactList)
        {
            loadAddress(c);
        }
        return contactList;
    }

    @Override
    public Optional<Contact> get(Long id) {
        Optional<Contact> result = super.get(id);
        if(result.isPresent())
        {
            Contact contact = result.get();
            loadAddress(contact);
        }
        return result;
    }
    protected void loadAddress(Contact contact)
    {
        if(contact != null)
        {
            contact.setAddress(addressDao.listAddress(contact.getId()));
        }
        return;
    }
    private Map createValMap(Contact contact){
        Map valMap = mapOf(
                "firstName",contact.getFirstName(),
                "lastName",contact.getLastName()
        );
        return valMap;
    }
}
