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
public class AddressDao extends BaseDao<Address> {
    public AddressDao()
    {
        super();
        this.tableName = "address";
    }

    @Override
    public Long create(BaseEntity entity) {
            if(entity!= null && entity instanceof Address) {
                return super.createObj(createValMap((Address)entity));
            }
        else{
             return InvalidId;
            }
    }

    @Override
    public void update(BaseEntity entity) {
        if(entity!= null && entity instanceof Address) {
            super.updateObj(createValMap((Address)entity),entity.getId());
        }
    }

    @Override
    public int delete(Long id) {
       return super.deleteObj(id);
    }

    public Address listAddress(Long contactId)
    {
        SelectQuery<Address> sQuery = Query.select(Address.class).where("contactId",contactId);
        Optional<Address> address = daoHelper.first(sQuery);
        if(address.isPresent())
        {
            return address.get();
        }
        else
        {
            return null;
        }
    }

    private Map createValMap(Address address){
        Map valMap = mapOf(
                "street",address.getStreet(),
                "city",address.getCity(),
                "state",address.getState(),
                "zip",address.getZip(),
                "country",address.getCountry(),
                "contactId",address.getContactId()
        );
        return valMap;
    }
}
