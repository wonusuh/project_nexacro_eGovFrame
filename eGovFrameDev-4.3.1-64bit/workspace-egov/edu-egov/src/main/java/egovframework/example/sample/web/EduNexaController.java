package egovframework.example.sample.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class EduNexaController {
    private Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "edu/getData.do")
    public NexacroResult getData() {
	log.debug("###############################################################################");
	log.debug("넥사크로 호출");
	log.debug("###############################################################################");

	NexacroResult result = new NexacroResult();
	return result;
    }
}
