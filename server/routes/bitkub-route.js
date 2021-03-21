const express = require("express");
const db = require("../db/db.config");
const sequelize = db.sequelize;
const MyCrypto = db.MyCrypto;
const route = express.Router();

const keys = require("../config/keys");

// Ping
route.get("/ping", async (req, res, next) => {
    res.json({ message: "Ping" });
});

// Ping
route.get("/ping", async (req, res, next) => {
    res.json({ message: "Ping" });
});

// GetMyCoin
route.get("/getcoin", async (req, res, next) => {
    const response = await MyCrypto.findAll();
    res.json(response);
});

// AddCoin
route.post("/addcoin", async (req, res, next) => {
   
    const namecoin = req.body.namecoin;
    const price = req.body.price;
    const amount = req.body.amount;
    await MyCrypto.create({
        NameCoin: namecoin,
        Price: price,
        Amount: amount,
    })
        .then((response) => {
            console.log(response);
            res.json({ message: "Successful" });
        })
        .catch((err) => {
            res.status(500);
            res.json(err.errors[0]);
        });
});

// DeleteCoin
route.post("/deletecoin", async (req, res, next) => {
   
    const id = req.body.id;

    await MyCrypto.destroy({
        where: { ID: id },
    })
        .then((response) => {
            console.log(response);
            res.json({ message: "Successful" });
        })
        .catch((err) => {
            res.status(500);
            res.json(err.errors[0]);
        });
});


// GetMybalance
route.get("/getMybalance", async (req, res, next) => {
    const response = await MyCrypto.findAll({
        attributes: [[db.sequelize.literal('SUM(price * Amount)'), 'balance']],
      });
    res.json(response);
});

// UpdateCoin
route.post("/updatecoin", async (req, res, next) => {

    const result = await MyCrypto.update(
        { Amount: req.body.Amount , Price : req.body.Price },
        { where: { ID: req.body.ID } }
      )
    res.json(result);
});


module.exports = route;
