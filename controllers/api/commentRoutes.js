const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      commentId: req.session.commentId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err)
  };
});

module.exports = router;