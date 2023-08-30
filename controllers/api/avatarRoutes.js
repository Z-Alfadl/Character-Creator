const router = require('express').Router();
const { Avatar } = require('../../models');

// This creates a new character
router.post('/create', async (req, res) => {
  try {
    const newCharacter = await Avatar.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCharacter);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Comment Routes - Makes comments
router.post ('/:id', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      avatar_id: req.session.avatar_id,
    });

    res.status(400).json(newComment)
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Update a character.
router.put('/:id', async (req, res) => {
  try {
    const characterData = await Avatar.update(
      {
        ...req.body,
      }, 
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        }
      }
    )
    res.status(200).json(characterData)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Deletes a character. 
router.delete('/:id', async (req, res) => {
  try {
    const characterData = await Avatar.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(characterData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;