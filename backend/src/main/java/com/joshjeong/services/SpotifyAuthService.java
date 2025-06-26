package com.joshjeong.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Service
public class SpotifyAuthService {
    @Value("${spotify.client-id}")
    private String clientId;

    @Value("${spotify.client-secret}")
    private String clientSecret;

    @Value("${spotify.refresh-token}")
    private String refreshToken;

    private String currentToken = "";
    private long expiresAt = 0;

    public String getValidToken() {
        if(System.currentTimeMillis() >= expiresAt) {
            try {
                refreshToken();
            }
            catch (Exception e) {
                System.out.println("Failed refresh with error: " + e);
            }
        }
        else {
            System.out.println("Token should still be valid!");
        }
        return currentToken;
    }

    private void refreshToken() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        RestTemplate restTemplate = new RestTemplate();

        String body = "grant_type=refresh_token" + "&refresh_token=" + URLEncoder.encode(refreshToken, StandardCharsets.UTF_8);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String auth = clientId + ":" + clientSecret;
        String encoded = Base64.getEncoder().encodeToString(auth.getBytes());
        headers.set("Authorization", "Basic " + encoded);

        HttpEntity<String> req = new HttpEntity<>(body, headers);

        ResponseEntity<JsonNode> resp = restTemplate.postForEntity(
            "https://accounts.spotify.com/api/token",
                req,
                JsonNode.class
        );

        if (resp.getStatusCode() != HttpStatus.OK) {
            System.out.println("Spotify token request failed");
        }

        JsonNode respBody = resp.getBody();
        currentToken = respBody.get("access_token").asText();
        long expiresIn = respBody.get("expires_in").asLong();
        expiresAt = System.currentTimeMillis() + (expiresIn * 1000);
    }
}
