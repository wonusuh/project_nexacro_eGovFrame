package egovframework.example.sample.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.example.sample.service.EduNexaService;

@Service
public class EduNexaServiceImpl implements EduNexaService {
    @Resource
    private EduNexaMapper eduNexaMapper;

    @Override
    public List<Map<String, Object>> getData() {
	// TODO Auto-generated method stub
	return eduNexaMapper.getData();
    }
}
