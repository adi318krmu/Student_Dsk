const express = require('express')
const router= express.Router();

const {createNote, getNote, updateNote, deleteNote}= require('../controller')

const protect= require('../middleware/notesMiddle')
router.post('/', protect , createNote)
router.get('/', protect , getNote)
router.put('/:id', protect , updateNote)
router.delete('/:id', protect , deleteNote)
module.exports= router;