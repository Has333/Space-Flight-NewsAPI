import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
  res.send("Back-end Challenge 2021 🏅 - Space Flight News");
});


router.get("/articles", async (req, res) => {
  try {
    const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
    const data = await response.json();
    res.send(data)
    res.status(200)
  } 
catch (err) {
    console.log(err)
    res.send('Unable to fetch data from API')
    res.status(500)
  }
});


router.get("/articles/:id", async (req, res) => {
try {
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles/?_id=' + req.params.id);
  const data = await response.json();
  res.send(data)
  res.status(200)
} 
catch (err) {
  console.log(err)
  res.send('Unable to fetch data from API')
  res.status(500)
}
});

export default router;
