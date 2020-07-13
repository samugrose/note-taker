const { nanoid } = require("nanoid");
const express = require("express");
const db = require("./db/db");
var router = express.Router();

router.get("/notes", async function(req,res){
    const freshNotes = await db.readNotes();
    res.json(freshNotes);
});

//  post method
router.post('/notes', async function(req,res) {
    const newNote = req.body;
    //using nanoid to generate random id for note
    newNote.id= nanoid();
    const retrievedNotes = await db.readNotes();
    const freshlyWrittenNotes = await db.writeNotes([...retrievedNotes, newNote]);
    res.json(newNote);
})