import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Back-end Challenge 2021 🏅 - Space Flight News");
});


router.get("/articles", async (req, res) => {
  try {
    const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
    const data = await response.json();
    res.status(200).send(data)
  } 
catch (err) {
    console.log(err)
    res.status(500).send('Unable to fetch data from API')
  }
});


router.get("/articles/:id", async (req, res) => {
try {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles/?_id=' + req.params.id);
  const data = await response.json();

  res.status(200).send(data)
} 
catch (err) {
  console.log(err)
  res.status(500).send('Unable to fetch data from API')
}
});

export default router;
