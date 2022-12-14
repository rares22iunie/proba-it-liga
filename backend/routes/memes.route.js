const router = require("express").Router();
const Memes = require("../models/memes.model");

//post /api/memes
router.post("/", async (req, res) => {
  try {
    const memes = new Memes({
      description: req.body.description,
    });

    // User.find() -> returneaza TOTI userii
    // User.findByID(_id) -> returneaza un user cu id-ul _id, daca exista

    memes.save();

    return res.send({
      success: true,
    });
  } catch (e) {
    return res.send({
      success: false,
      message: "Error: " + e.message,
    });
  }
});

//post /api/memes/:id
router.post("/:id", async (req, res) => {
  try {
    const description = req.body.description;
    if (description) {
      await Memes.findById(req.params.id).then((memes) => {
        memes.description = description;
        memes.save((err) => {
          if (err) {
            res.status("400").json({ message: "Error" + err.message });
          }
          res.json({ message: "Update successful", memes });
        });
      });
    } else res.json({ message: "Nu a fost introdusa o descriere" });
  } catch (e) {
    return res.status(404).json({
      message: "Nu s-a gasit memeul",
    });
  }
});

//get /api/memes/:id
router.get("/:id", async (req, res) => {
  try {
    const data = await Memes.findById(req.params.id);
    if (data) res.json(data);
    else {
      return res.status(404).json({
        message: "Nu s-a gasit memeul",
      });
    }
  } catch (e) {
    return res.status(404).json({
      message: "Nu s-a gasit memeul",
    });
  }
});

//get /api/memes
router.get("/", async (req, res) => {
  try {
    Memes.find({}, function (err, memes) {
      if (err) {
        res.send("Error" + err.message);
        next();
      }
      res.json(memes);
    });
  } catch (e) {
    return res.send({
      success: false,
      message: "Error: " + e.message,
    });
  }
});

//delete /memes/:id
router.delete("/:id", async (req, res) => {
  try {
    Memes.findOneAndDelete({ _id: req.params.id }).then(() => {
      res.json({ message: "Delete succesful" });
    });
  } catch (e) {
    return res.status(404).json({
      message: "Nu s-a gasit memeul",
    });
  }
});

module.exports = router;
