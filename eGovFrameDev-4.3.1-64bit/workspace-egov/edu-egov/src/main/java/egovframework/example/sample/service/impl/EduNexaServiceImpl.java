package egovframework.example.sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.java.xapi.data.DataSet;

import egovframework.example.sample.service.EduNexaService;

@Service
public class EduNexaServiceImpl implements EduNexaService {
    @Resource
    private EduNexaMapper eduNexaMapper;

    @Override
    public List<Map<String, Object>> getData() {
	return eduNexaMapper.getData();
    }

    @Override
    public void saveData(List<Map<String, Object>> dataList) {

	int nSize = dataList.size();

	for (int i = 0; i < nSize; i += 1) {
	    Map<String, Object> rowData = dataList.get(i);

	    int nRowType = (int) rowData.get("DataSetRowType");

	    if (nRowType == DataSet.ROW_TYPE_INSERTED) {
		// insert 쿼리 실행
		eduNexaMapper.insertData(rowData);
	    } else if (nRowType == DataSet.ROW_TYPE_UPDATED) {
		// update 쿼리 실행
		eduNexaMapper.updateData(rowData);
	    } else if (nRowType == DataSet.ROW_TYPE_DELETED) {
		// delete 쿼리 싫행
		eduNexaMapper.deleteData(rowData);
	    }
	}
    }
}
