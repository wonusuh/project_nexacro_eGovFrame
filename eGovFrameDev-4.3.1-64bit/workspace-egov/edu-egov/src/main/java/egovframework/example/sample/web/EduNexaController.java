package egovframework.example.sample.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import egovframework.example.sample.service.EduNexaService;

@Controller
public class EduNexaController {
    private Logger log = LoggerFactory.getLogger(this.getClass());

    @Resource
    private EduNexaService eduNexaService; // 서비스 의존성 주입

    @RequestMapping(value = "edu/getData.do")
    public NexacroResult getData(@ParamDataSet(name = "dsSearch") Map<String, Object> searchMap,
	    @ParamVariable(name = "userId") String userId) {
	log.debug("###############################################################################");
	log.debug("넥사크로 호출");
	log.debug("searchMap : " + searchMap);
	log.debug("userId : " + userId);
	log.debug("searchMap : {}", searchMap);
	log.debug("userId : {}", userId);
	log.debug("###############################################################################");

	List<Map<String, Object>> resultData = eduNexaService.getData();

	NexacroResult result = new NexacroResult();
	result.addDataSet("dsData", resultData); // Java -> 넥사크로 데이터셋
	return result;
    }

    @RequestMapping(value = "edu/savaData.do")
    public NexacroResult saveData(@ParamDataSet(name = "dsData") List<Map<String, Object>> dataList) {
	NexacroResult result = new NexacroResult();
	return result;
    }
}
