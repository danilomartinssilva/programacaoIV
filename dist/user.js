"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const users_model_1 = require("./users/users.model");
const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0',
});
server.get('/users', (req, resp, next) => {
    users_model_1.User.findAll().then(users => {
        resp.json(users);
        return next();
    });
});
server.get('/users/:id', (req, resp, next) => {
    users_model_1.User.findById(req.params.id).then(user => {
        if (user) {
            resp.json(user);
            return next();
        }
        resp.send(404);
        return next();
    });
    /* resp.json({message:"Teste"});
    return next(); */
});
server.del('/users/:id', (req, resp, next) => {
    users_model_1.User.deleteById(req.params.id).then((r) => {
        resp.json(r);
        return next();
    });
});
server.listen(3000, () => {
    console.log("O serviço está funcionando com sucesso");
});
