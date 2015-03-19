package com.addressbook.dao;

import com.addressbook.entity.BaseEntity;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Singleton;
import org.j8ql.query.*;
import java.util.List;
import com.googlecode.gentyref.GenericTypeReflector;

import static org.jomni.util.Maps.mapOf;



import java.lang.reflect.Type;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Created by Stev.L on 03/14/15.
 */
@SuppressWarnings({"rawtypes", "unchecked"})
public abstract class BaseDao<E> {
    public static final Long InvalidId = Long.MIN_VALUE;
    protected Class<E> entityClass;
    @Inject
    protected DaoHelper daoHelper;
    protected String tableName;
    protected static Injector appInjector;
    public BaseDao(){
        daoHelper = DaoHelper.getInstance();
        try
        {
            daoHelper = appInjector.getInstance(DaoHelper.class);
        }
        catch (Exception ex)
        {
            String s = ex.toString();
        }
        initEntityClass();
    }
    public abstract Long create(BaseEntity entity);
    public abstract void update(BaseEntity entity);
    public abstract int delete(Long id);
    protected Long createObj(Map valMap){
        if(valMap != null)
        {
            valMap.put("dateAdded", LocalDate.now());
            valMap.put("dateChanged", LocalDate.now());
        }
        InsertQuery<Long> isnert = Query.insert(tableName).value(valMap).returningIdAs(Long.class);
        Long id = daoHelper.execute(isnert);
        return id;
    }
    protected void updateObj(Map valMap,Long id){
        if(valMap != null){
            valMap.put("dateChanged",LocalDate.now());
        }
        daoHelper.execute(Query.update(tableName).value(valMap).whereId(id));
        return;
    }
    protected int deleteObj(Long id){
        return daoHelper.execute(Query.delete(tableName).whereId(id));
    }

    public Optional<E> get(Long id) {
        return daoHelper.first(Query.select(entityClass).whereId(id));
    }
    public List<E> list( Condition filter, String... orderBy) {
        return daoHelper.list(listSelectBuilder(filter,orderBy));
    }
    protected SelectQuery<E> listSelectBuilder(Condition filter, String... orderBy) {
        if (orderBy[0] == "" )
        {
            orderBy[0] = "id";
        }
        if(filter != null  )
        {
            return Query.select(entityClass).where(filter).orderBy(orderBy);
        }
        else
        {
            return Query.select(entityClass).orderBy(orderBy);
        }

    }
    private void initEntityClass(){
        if (entityClass == null) {
            Type persistentType = GenericTypeReflector.getTypeParameter(getClass(), BaseDao.class.getTypeParameters()[0]);
            if (persistentType instanceof Class) {
                this.entityClass = (Class<E>) persistentType;
            } else {
                throw new IllegalStateException("concrete class " + getClass().getName()
                        + " must have a generic Entity and ID types "
                        + BaseDao.class.getName());
            }
        }

    }

}
