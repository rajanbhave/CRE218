package com.dm.hackathon2k18.cre.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dm.hackathon2k18.cre.model.CREData;
import com.dm.hackathon2k18.cre.model.Category;
import com.dm.hackathon2k18.cre.service.CREService;
import com.dm.hackathon2k18.cre.service.CREServiceImpl;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@RestController
public class CRERestController {

	@RequestMapping(value = "/submit/", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<String> submitCREForm(@RequestBody String json) {
		System.out.println("JSON : " + json);
		json = "{\"types\":[{\"categoryType\":\"storage\",\"quesChoiceMap\":{\"q1\":\"1\",\"q2\":\"1\",\"q3\":\"1\",\"q4\":\"1\",\"q5\":\"1\",\"q6\":\"1\",\"q7\":\"1\",\"q8\":\"1\",\"q9\":\"1\",\"q10\":\"1\",\"q11\":\"1\",\"q12\":\"1\"}},{\"categoryType\":\"compute\",\"quesChoiceMap\":{\"q1\":\"1\",\"q2\":\"1\",\"q3\":\"1\",\"q4\":\"1\",\"q5\":\"1\",\"q6\":\"1\",\"q7\":\"1\",\"q8\":\"1\",\"q9\":\"1\",\"q10\":null,\"q11\":\"1\",\"q12\":\"1\",\"q13\":\"1\",\"q14\":\"1\",\"q15\":\"1\",\"q16\":\"1\",\"q17\":\"1\",\"q18\":\"1\"}},{\"categoryType\":\"ingest\",\"quesChoiceMap\":{\"q1\":\"1\",\"q2\":\"1\",\"q3\":\"1\",\"q4\":\"1\",\"q5\":\"1\",\"q6\":\"1\",\"q7\":\"1\",\"q8\":\"1\"}}]}";
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		CREData creData = gson.fromJson(json, CREData.class);
		CREService creService = new CREServiceImpl();
		Map<String, Map> catCompDescMap = creService.compare(creData);
		String outputJSON = creService.convertToJSON(catCompDescMap);
		System.out.println("outputJSON===" + outputJSON);
		try {
			Thread.sleep(5000);
		} catch (InterruptedException exception) {
			exception.printStackTrace();
		}
		List<Category> categoryList = creData.getCategories();
		return new ResponseEntity<String>(outputJSON, HttpStatus.OK);
	}
}