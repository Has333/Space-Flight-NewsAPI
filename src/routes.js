import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200);
  res.send("Back-end Challenge 2021 🏅 - Space Flight News");
});

router.get("/articles", (req, res) => {

});

router.get("/articles/{id}", (req, res) => {});

export default router;
