const express = require("express");
const router = express.Router();
const axios = require("axios");

// 2request characters & comics

// list charaters
router.get("/characters", async (req, res) => {
   try {
      // filters
      const skip = req.query.skip;
      const limit = req.query.limit || 100; //req.query.limit ;
      // requests
      const request = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
      );
      res.json(request.data);
   } catch (error) {
      console.log("characters error", error.message);
      res.status(400).json({ message: error.message });
   }
});

router.get("/comics", async (req, res) => {
   try {
      const skip = req.query.skip;
      const limit = req.query.limit || 100;
      const request = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}`
      );
      res.json(request.data);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

// Search Id Character
router.get("/comics/:Id", async (req, res) => {
   try {
      const characterId = req.params.characterId;
      const request = await axios.get(
         `https://lereacteur-marvel-api.herokuapp.com/comics/${Id}?apiKey=${process.env.API_KEY}`
      );
      res.json(request.data);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
});

module.exports = router;
