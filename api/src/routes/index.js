const { Router } = require("express");
const { Pet } = require("../db");
const router = Router();

router.post("/newpost", async (req, res) => {
  try {
    const { name, age, species, description, picture, coexistence } = req.body;
    if (!name || !age || !species) {
      throw { status: 400, message: "missing data" };
    }
    const newPost = await Pet.create({
      name,
      age,
      species,
      description,
      picture,
      coexistence,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

router.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.findAll();
    return res.status(200).send(pets);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

module.exports = router;
