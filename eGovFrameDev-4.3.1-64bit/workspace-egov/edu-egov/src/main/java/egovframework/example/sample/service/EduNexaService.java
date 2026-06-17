package egovframework.example.sample.service;

import java.util.List;
import java.util.Map;

public interface EduNexaService {
    List<Map<String, Object>> getData();

    void saveData(List<Map<String, Object>> dataList);

    List<Map<String, Object>> getEmp(String deptCode, String empName);

    void saveEmp(List<Map<String, Object>> inEmp);

    List<Map<String, Object>> getDept();

    List<Map<String, Object>> getPosition();

    List<Map<String, Object>> getHobby();

    List<Map<String, Object>> getSkill();
}
