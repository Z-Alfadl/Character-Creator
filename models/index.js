const Character = require('./Character');
const User = require('./User');
// TODO: Once we get the inventory model: 
// const Inventory = require('./Inventory') 
const Comment = require('./Comment');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id'
});

// TODO: Once we get an inventory model, uncomment lines 21 - 25 below. 
// *! Right now, User has onDelete: CASCADE which is good for deleting characters,
// *! but we don't want any of the items to be deleted (just removed from the character)
// *! Since inventory belongs to characters, will inventory be affected with CASCADE? 
// *! If so, we need to find a solution. 
// Character.hasMany(Inventory, {
//   foreignKey: 'character_id'
// });

// Inventory.belongsTo(Character);

Character.hasMany(Comment, {
  foreignKey: 'character_id'
});

Comment.belongsTo(Character);

// TODO: Add inventory below once we have it
module.exports = { User, Character, Comment }