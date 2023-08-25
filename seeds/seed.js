const sequelize = require('../config/connection');
const {User, Character} = require('../models')

const userData = require('./userData.json');
const charData = require('./charData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- Users Created -----\n')
    const chars = await Character.bulkCreate(charData);
    console.log('\n----- Characters Created -----\n')
}

seedDatabase()