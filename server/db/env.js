const env = {
    database: "dev",
    username: "admin",
    password: "bosskungz0121410",
    host : "mycrypto.cjm07gq2vx2s.ap-southeast-1.rds.amazonaws.com",
    dialect: "mariadb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

module.exports = env;
