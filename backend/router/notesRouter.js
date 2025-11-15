const express = require('express')
const router= express.Router();

const {createNote, getNote,  deleteNote, updateNote}= require('../controller/notesController')

const protect= require('../middleware/authMiddle')
router.post('/', protect , createNote)
router.get('/', protect , getNote)
router.put('/:id', protect , updateNote)
router.delete('/:id', protect , deleteNote)
module.exports= router;