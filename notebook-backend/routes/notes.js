const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchUser");
const Notes = require("../models/Note");
const { body, validationResult } = require("express-validator");

//authorize User fetch their notes using POST method: "/api/v1/notes/show-notes".
router.get("/show-notes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  if (!notes) {
    return res
      .status(404)
      .send({ error: "Not found.", message: "Notes are not available." });
  }
  res.json(notes);
});

//authorize User create their notes using POST method: "/api/v1/notes/create-notes".
router.post(
  "/create-notes",
  fetchuser,
  [
    body("title")
      .isLength({ min: 3 })
      .withMessage("Title must be at leasst 3 characters"),
    body("description").exists().withMessage("Write something in description"),
    body("slug").exists().withMessage("something in wrong!!! Please try again..."),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    try {

      const alpha = "QWERTYUIOPasdfghjklZXCVBNMqwertyuiopASDFGHJKLzxcvbnm"
      let newalpha = req.body.title.replace(/[^a-zA-Z]/g, '')


      let note = ""

      async function SaveData(){
        const note = new Notes({
          user: req.user.id,
          title: req.body.title,
          description: req.body.description,
          slug: newalpha.substring(0,24),
        });
        const SavedNotes = await note.save();
        res.json({
          status: 200,
          message: "Notes created successfully",
          notes: SavedNotes,
        });
      }

      async function CreateSlug(){
          for (let i = 0; i < 10; i++) {
            newalpha += alpha[Math.floor(Math.random() * alpha.length)]
              }
          note = await Notes.findOne({ user: req.user.id, slug:newalpha });
          if(!note){
            SaveData()
          }
          }

          
      note = await Notes.findOne({ user: req.user.id, slug:newalpha });
      

      if(!note){
        SaveData()
      }else{
        CreateSlug()
      }
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Bad request" });
    }
  }
);

//authorize User update their existing notes using POST method: "/api/v1/notes/update-notes/:id".
router.put("/update-notes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }

    const notes = await Notes.findById(req.params.id);
    console.log(notes);
    if (!notes) {
      return res.status(404).send({ error: "Notes not found" });
    }
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send({ error: "Not authorized" });
    }
    const Updatednotes = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.json({
      status: 200,
      message: "Notes updated successfully",
      notes: Updatednotes,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "Bad request" });
  }
});

//authorize User delete their notes using POST method: "/api/v1/notes/delete-notes/:id".
router.delete("/delete-notes/:slug", fetchuser, async (req, res) => {
 
  try {
    // const notes = await Notes.findById(req.params.id);
    const notes = await Notes.findOne({slug:req.params.slug})
    if (!notes) {
      return res.status(404).send({ error: "Notes not found" });
    }
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send({ error: "Not authorized" });
    }
    const deletednotes = await Notes.findOneAndDelete({slug:req.params.slug})

    res.json({
      status: 200,
      message: "Below note has been delete successfully",
      notes: deletednotes,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: "Bad request" });
  }
});

module.exports = router;
