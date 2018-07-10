package com.example.hack07.SimplifiedSearch.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by a-7288 on 7/9/18.
 */
@Controller
public class FISController {

    @RequestMapping("/fisTest")
    public String index() throws Exception{
        Thread.sleep(1500);
        return "fis.html";
    }
}
