const Avatar = require('./Avatar');
const User = require('./User');
const Comment = require('./Comment');
const Item = require('./Item');

User.hasMany(Avatar, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Avatar.belongsTo(User);

// Is CASCADE the right choice here? Do we need an onDelete? 
Avatar.hasMany(Comment, {
  foreignKey: 'avatar_id',
});

Comment.belongsTo(Avatar);

// Is CASCADE the right choice here? Do we need an onDelete? 
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User);

// Is CASCADE the right choice here? Do we need an onDelete? 
Avatar.hasMany(Item, {
  foreignKey: 'avatar_id',
});

Item.belongsTo(Avatar);


module.exports = { User, Avatar, Comment, Item }