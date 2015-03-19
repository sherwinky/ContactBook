package com.addressbook.dao;

import com.addressbook.entity.BaseEntity;
import com.addressbook.entity.Group;
import com.addressbook.entity.GroupContact;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import org.j8ql.query.InsertQuery;
import org.j8ql.query.Query;
import org.j8ql.query.Condition;
import org.j8ql.query.SelectQuery;
import static org.jomni.util.Maps.mapOf;



import java.lang.reflect.Type;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
/**
 * Created by Stev.L on 03/15/15.
 */
@Singleton
public class GroupDao extends BaseDao<Group> {
    @Inject
    private GroupContactDao groupContactDao;
    public GroupDao()
    {
        super();
        this.tableName = "group";
    }
    @Override
    public Long create(BaseEntity entity)
    {
        if(entity instanceof Group)
        {
            Group group = (Group)entity;
            Map valMap = mapOf("name",group.getName());
            return super.createObj(valMap);
        }
        else
        {
            return InvalidId;
        }
    }

    @Override
    public void update(BaseEntity entity) {
        if(entity instanceof Group)
        {
            Group group = (Group)entity;
            Map valMap = mapOf("name",group.getName());
            super.updateObj(valMap,group.getId());
        }
        return;
    }

    @Override
    public int delete(Long id) {
        return super.deleteObj(id);
    }

    public List<Group> listByContact(Long contactId){
        HashSet<Long> includeGroupIdList = new HashSet<Long>();
        SelectQuery query = Query.select(entityClass)
                .columns("group.*")
                .innerJoin("groupContact", "groupId", "group", "id").orderBy("id").where("contactId",contactId);
        List<Group> groupList = daoHelper.list(query);
        List<GroupContact> groupContactList = groupContactDao.listByContactId(contactId);
        for(Group group: groupList){
            includeGroupIdList.add(group.getId());
            for(GroupContact gContact: groupContactList)
            {
                if(gContact.getGroupId().equals(group.getId()))
                {
                    group.getGroupContact().add(gContact);
                }
            }
        }
        List<Group> notIncludeGroupList = this.list(null,"");
        for(Group g : notIncludeGroupList)
        {
            if(!includeGroupIdList.contains(g.getId()))
            {
                groupList.add(g);
            }
        }
        return groupList;
    }
}
