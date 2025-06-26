package com.joshjeong.controllers;

import com.joshjeong.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://joshjeong.dev")
public class ContactController {

    @Autowired
    private MailService mailService;

    @PostMapping("/contact")
    public String sendEmail(@RequestBody ContactRequestModel request) {
        String emailBody = "New message on contact form from " + request.getName() + " (" + request.getEmail() + "):\n" + request.getBody();
        mailService.sendMail(request.getSubject(), emailBody);
        return "Email sent!";
    }

    public static class ContactRequestModel {
        private String name;
        private String subject;
        private String email;
        private String body;

        public String getName() {
            return name;
        }
        public String getSubject() {
            return subject;
        }
        public String getEmail() {
            return email;
        }
        public String getBody() {
            return body;
        }
    }
}
