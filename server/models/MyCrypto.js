module.exports = (sequelize, Sequelize) => {
    const MyCrpyto = sequelize.define(
        "MyCrpyto",
        {
            ID: {
                type: Sequelize.INTEGER,
                field: "ID",
                primaryKey: true,
            },
            NameCoin: {
                type: Sequelize.STRING,
                field: "NameCoin",
              
            },
            Amount: {
                type: Sequelize.FLOAT,
                field: "Amount",
                
            },
            Price: {
                type: Sequelize.FLOAT,
                field: "Price",
               
            },
        },
        {
            timestamps: false,
        }
    );
    return MyCrpyto;
};
