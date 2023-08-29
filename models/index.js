const Avatar = require('./Avatar');
const User = require('./User');
// TODO: Once we get the inventory model: 
const Comment = require('./Comment');
const Item = require('./Item');

User.hasMany(Avatar, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Avatar.belongsTo(User);

// TODO: Once we get an inventory model, uncomment lines 21 - 25 below. 
// *! Right now, User has onDelete: CASCADE which is good for deleting characters,
// *! but we don't want any of the items to be deleted (just removed from the character)
// *! Since inventory belongs to characters, will inventory be affected with CASCADE? 
// *! If so, we need to find a solution. 
// Character.hasMany(Inventory, {
//   foreignKey: 'character_id'
// });

Avatar.hasMany(Comment, {
  foreignKey: 'character_id'
});



Avatar.hasMany(Item);

Comment.belongsTo(Avatar);

// TODO: Add inventory below once we have it
module.exports = { User, Avatar, Comment }