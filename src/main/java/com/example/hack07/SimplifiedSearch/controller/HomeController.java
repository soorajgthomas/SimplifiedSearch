package com.example.hack07.SimplifiedSearch.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by a-6281 on 7/9/18.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "homepage.html";
    }
}
