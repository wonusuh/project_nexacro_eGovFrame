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

    List<Map<String, Object>> getEmp();

    void insertEmp(Map<String, Object> row);

    void updateEmp(Map<String, Object> row);

    void deleteEmp(Map<String, Object> row);

    List<Map<String, Object>> getDept();

    List<Map<String, Object>> getPosition();

    List<Map<String, Object>> getHobby();

    List<Map<String, Object>> getSkill();
}
