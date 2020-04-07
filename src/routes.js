const express = require('express');

const RepositoryCtrl = require("./controllers/RepositoryCtrl");
const LikeCtrl = require("./controllers/LikeCtrl");

const routes = express.Router();

routes.get("/repositories", RepositoryCtrl.index);
routes.post("/repositories", RepositoryCtrl.store);
routes.put("/repositories/:id", RepositoryCtrl.update);
routes.delete("/repositories/:id", RepositoryCtrl.remove);

routes.post("/repositories/:id/like", LikeCtrl.store);

module.exports = routes;