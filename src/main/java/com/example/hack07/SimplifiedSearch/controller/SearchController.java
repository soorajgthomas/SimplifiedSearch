package com.example.hack07.SimplifiedSearch.controller;

import com.example.hack07.SimplifiedSearch.service.service.LowCostSearch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SearchController {

    @Autowired
    LowCostSearch lowCostSearch;

    @GetMapping(value = "getSearchResults")
    public String getSearchResults(HttpServletRequest hrequest) {

        lowCostSearch.getLowestPrice();
        return "1";
    }


}
