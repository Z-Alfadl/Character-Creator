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

// This is supposed to be a comment route, but I don't think it's working. 
// Notice that characterData is not being used here.
router.post ('/:id', async (req, res) => {
  try {
    const characterData = await Avatar.findOne({
      include: [
        {
          model: 'comment',
          foreignKey: comment_id
        }
      ],
    });

    const newComment = await Comment.create({
      ...req.body,
      character_id: req.session.character_id,
    });

    res.status(400).json(newComment)
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

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