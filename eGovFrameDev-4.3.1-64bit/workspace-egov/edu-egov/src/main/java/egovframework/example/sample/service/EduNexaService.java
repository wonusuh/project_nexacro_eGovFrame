package egovframework.example.sample.service;

import java.util.List;
import java.util.Map;

public interface EduNexaService {
    List<Map<String, Object>> getData();

    void saveData(List<Map<String, Object>> dataList);
}
