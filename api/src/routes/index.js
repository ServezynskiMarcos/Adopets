const { Router } = require("express");
const { Pet, User } = require("../db");
const router = Router();


router.post("/newpost", async (req, res) => {
  try {
    const { name, age, species, description, picture, coexistence, ubication } =
      req.body;
    if (!name || !age || !species) {
      throw { status: 400, message: "Faltan datos obligatorios" };
    }
    const newPost = await Pet.create({
      name,
      age,
      species,
      description,
      picture,
      coexistence,
      ubication,
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(error.status).send({ msg: error.message });
  }
});

router.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.findAll();
    return res.status(200).send(pets);
  } catch (error) {
    res.status(error.status).send({ msg: error.message });
  }
});

router.get("/pets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const petId = await Pet.findOne({
      where: { id: id },
    });
    if (petId) {
      return res.status(200).send(petId);
    } else {
      res.status(404).send("No se encuentra la mascota");
    }
  } catch (error) {
    res.status(error.status).send({ msg: error.message });
  }
});

//USER

router.post("/newuser", async (req, res) => {
  try {
    const { name, email, password, phone } =
      req.body;
    if (!name || !email || !password ) {
      throw { status: 400, message: "Faltan datos obligatorios" };
    }
    const newUser = await User.create({
      name,
      email,
      password,
      phone,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(error.status).send({ msg: error.message });
  }
});

router.get("/login/:email/:password", async (req, res) =>{
  const { email, password } = req.params;
  try {
    const userValidate = await User.findOne({
      where: { email: email, password: password},
    });
    if (userValidate) {
      return res.status(200).send(userValidate);
    } else {
      res.status(404).send("el usuario no esta registrado");
    }
  } catch (error) {
    res.status(error.status).send({ msg: error.message });
  }
})

module.exports = router;
