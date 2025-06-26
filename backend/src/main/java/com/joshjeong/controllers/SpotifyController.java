package com.joshjeong.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.joshjeong.services.SpotifyAuthService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://joshjeong.dev")
public class SpotifyController {

    private final SpotifyAuthService spotifyAuth;

    public SpotifyController(SpotifyAuthService auth) {
        this.spotifyAuth = auth;
    }

    @GetMapping("/songs")
    public List<Song> getSongs() {
        List<Song> songs = new ArrayList<Song>();
        String token = spotifyAuth.getValidToken();
        String url = "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        HttpEntity<Void> req = new HttpEntity<Void>(headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<JsonNode> resp = restTemplate.exchange(
                url,
                HttpMethod.GET,
                req,
                JsonNode.class
        );

        if(resp.getStatusCode() != HttpStatus.OK) {
            System.out.println("Error fetching data from Spotify");
        }
        JsonNode items = resp.getBody().get("items");
        System.out.println(items.size());
        for(JsonNode track : items) {
            String title = track.get("name").asText();

            List<String> artistNames = new ArrayList<String>();
            JsonNode artists = track.get("artists");
            for(JsonNode artist : artists) {
                artistNames.add(artist.get("name").asText());
            }
            String artist = String.join(", ", artistNames);

            String albumImg = track.get("album").get("images").get(0).get("url").asText();
            String albumTitle = track.get("album").get("name").asText();

            String spotifyUrl = track.get("external_urls").get("spotify").asText();
            songs.add(new Song(title, artist, albumImg, albumTitle, spotifyUrl));
        }

        return songs;
    }
    class Song {
        private String title;
        private String artist;
        private String albumImg;
        private String spotifyUrl;
        private String albumTitle;

        public Song(String title, String artist, String albumImg, String albumTitle, String spotifyUrl) {
            this.title = title;
            this.artist = artist;
            this.albumImg = albumImg;
            this.albumTitle = albumTitle;
            this.spotifyUrl = spotifyUrl;
        }

        public String getTitle() {
            return title;
        }
        public String getArtist() {
            return artist;
        }
        public String getAlbumImg() {
            return albumImg;
        }
        public String getSpotifyUrl() {
            return spotifyUrl;
        }
        public String getAlbumTitle() {
            return albumTitle;
        }
    }
}

