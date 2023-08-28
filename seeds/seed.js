const sequelize = require('../config/connection');
const {User, Avatar} = require('../models')

const userData = require('./userData.json');
const avatarData = require('./avatarData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    //Creates all users from userData.json
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- Users Created -----\n')
    //Creates all avatars from avatarData.json
    const chars = await Avatar.bulkCreate(avatarData);
    console.log('\n----- Avatars Created -----\n')
    //Ends connection to server
    process.exit(0)
}

seedDatabase()