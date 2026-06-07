package egovframework.example.sample.service.impl;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface EduNexaMapper {
    List<Map<String, Object>> getData();

    void insertData(Map<String, Object> rowData);

    void updateData(Map<String, Object> rowData);

    void deleteData(Map<String, Object> rowData);
}
