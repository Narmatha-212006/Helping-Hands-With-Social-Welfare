package com.helpinghands.controller;

import com.helpinghands.model.*;
import com.helpinghands.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173", "http://localhost:8080", "http://localhost:8081"})
@RestController
@RequestMapping("/api/public")
public class ApiController {

    @Autowired
    EventRepository eventRepository;
    
    @Autowired
    HelpRequestRepository helpRequestRepository;
    
    @Autowired
    ContactMessageRepository contactMessageRepository;

    @GetMapping("/events")
    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

    @PostMapping("/events")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @GetMapping("/requests")
    public List<HelpRequest> getRequests() {
        return helpRequestRepository.findAll();
    }

    @PostMapping("/requests")
    public HelpRequest createRequest(@RequestBody HelpRequest request) {
        if(request.getStatus() == null) request.setStatus("PENDING");
        return helpRequestRepository.save(request);
    }

    @PostMapping("/contact")
    public ContactMessage submitContact(@RequestBody ContactMessage msg) {
        return contactMessageRepository.save(msg);
    }

    @GetMapping("/dashboard-stats")
    public Map<String, Long> getStats() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("activeRequests", helpRequestRepository.count());
        stats.put("upcomingEvents", eventRepository.count());
        stats.put("totalVolunteers", 15L); // Mock or actual query
        stats.put("totalDonations", 5000L); // Mock or actual query
        return stats;
    }
}
