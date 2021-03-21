const Sequelize = require("sequelize");
const env = require("./env");
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    // operatorsAliases: false,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle,
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// //import model
db.MyCrypto = require("../models/MyCrypto.js")(sequelize, Sequelize);
// db.ChatRooms = require("../models/ChatRooms.js")(sequelize, Sequelize);
// db.Friends = require("../models/Friends.js")(sequelize, Sequelize);
// db.ChatHistories = require("../models/ChatHistories.js")(sequelize, Sequelize);

// //Relations
// db.ChatRooms.belongsTo(db.Users, { foreignKey: "Member" });
// db.Friends.belongsTo(db.Users, { foreignKey: "FriendID" });
// db.ChatHistories.belongsTo(db.Users, {
//     foreignKey: "UpdatedBy",
// });

module.exports = db;
