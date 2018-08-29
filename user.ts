import * as restify from 'restify';
import { User } from './users/users.model';
const server = restify.createServer({
    name:'meat-api', //nom do servidor
    version:'1.0.0', //versao 
});
server.get('/users',(req,resp,next)=>{
    User.findAll().then(users=>{
        resp.json(users);
        return next();
    })

})
server.get('/users/:id',(req,resp,next)=>{

     User.findById(req.params.id).then(user=>{
        if(user){
            resp.json(user);
            return next();
        }
            resp.send(404);
            return next();
    }) 
    /* resp.json({message:"Teste"});
    return next(); */

})
 server.del('/users/:id',(req,resp,next)=>{
    User.deleteById(req.params.id).then((r)=>{
        resp.json(r);
        return next();
    })

})
 
server.listen(3000,()=>{
    console.log("O serviço está funcionando com sucesso");
})
