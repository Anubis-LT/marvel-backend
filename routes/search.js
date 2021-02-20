const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/display", async (req, res) => {
   try {
      console.log(req.fields.source, req.fields.request);
      const response = await axios.get(
         req.fields.request != undefined
            ? `https://lereacteur-marvel-api.herokuapp.com/${req.fields.source}?apiKey=${process.env.API_KEY}${req.fields.request}`
            : `https://lereacteur-marvel-api.herokuapp.com/${req.fields.source}?apiKey=${process.env.API_KEY}`
      );

      res.json(response.data);
   } catch (error) {
      console.log("request search error", error.message);
      res.status(400).json({ message: error.message });
   }
});

module.exports = router;
