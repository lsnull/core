package com.dotcms.contenttype.business;

import java.util.List;

import com.dotcms.contenttype.model.field.Field;
import com.dotcms.contenttype.model.field.FieldVariable;
import com.dotcms.contenttype.model.type.ContentType;
import com.dotmarketing.exception.DotDataException;

public interface FieldFactory {
	default FieldFactory instance(){
		return new FieldFactoryImpl();
	}
	

	Field byId(String id) throws DotDataException;

	List<Field> byContentType(ContentType type) throws DotDataException;

	List<Field> byContentTypeVar(String var) throws DotDataException;


	Field save(Field field) throws DotDataException;


	void delete(Field field) throws DotDataException;


	List<FieldVariable> loadVariables(Field field) throws DotDataException;


	List<Field> byContentTypeId(String id) throws DotDataException;


	void deleteByContentType(ContentType type) throws DotDataException;





}
