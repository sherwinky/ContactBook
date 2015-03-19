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
public class GroupContactDao extends BaseDao<GroupContact> {
    public GroupContactDao(){
        super();
        this.tableName="groupContact";
    }
    @Override
    public Long create(BaseEntity entity) {
        if(entity instanceof GroupContact){
            return super.createObj(createValMap((GroupContact)entity));
        }
        else
        {
            return InvalidId;
        }
    }

    @Override
    public void update(BaseEntity entity) {
        if(entity instanceof GroupContact)
        {
            GroupContact groupContact = (GroupContact)entity;
            Map valMap = createValMap((GroupContact)groupContact);
            super.updateObj(valMap,groupContact.getId());
        }
        return;
    }

    @Override
    public int delete(Long id) {

        return super.deleteObj(id);
    }
    public int deleteByContact(Long contactId){
        return daoHelper.execute(Query.delete(tableName).where("contactId",contactId));
    }

    public List<GroupContact> listByContactId(Long contactId)
    {
        Condition cond = Query.and("contactId",contactId);
        return super.list(cond,"id");
    }

    private Map createValMap(GroupContact gContact){
        Map valMap = mapOf(
                "groupId",gContact.getGroupId(),
                "contactId",gContact.getContactId()
        );
        return valMap;
    }
}
