const { Movie, validate } = require("../models/Movie");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.send(movies);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let movie = new Movie({
    Name: req.body.Name,
    Director: req.body.Director,
    Geners: req.body.Geners,
    Release: req.body.Release,
    PlayTime: req.body.PlayTime,
    Cast: req.body.Cast,
    Description: req.body.Description,
    Rating: req.body.Rating,
    Picture: req.body.Picture
  });
  movie = await movie.save();

  res.send(movie);
});
