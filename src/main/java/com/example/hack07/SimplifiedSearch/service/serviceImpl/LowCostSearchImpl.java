package com.example.hack07.SimplifiedSearch.service.serviceImpl;

import com.example.hack07.SimplifiedSearch.model.SearchResults;
import com.example.hack07.SimplifiedSearch.service.service.LowCostSearch;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LowCostSearchImpl implements LowCostSearch{


    @Override
    public List<SearchResults> getLowestPrice() {

            

        return new ArrayList<>();
    }
}
