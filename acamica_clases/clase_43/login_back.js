// Clase 43
const express = require('express');
const server = express();
server.use(express.json()); //si llega una solicitud del tipo body lo parsea a json en funcion
server.use(express.urlencoded({extended:true}))// body-parse 

let usuarios=[{username:'rodrigo',password:'1234',mail:'rodrigo@test.com',loged:false}
,{username:'test',password:'test',mail:'test@test.com',loged:false}];

server.get('/login/usuario/:username/:password',(req,res)=>{
    //console.log(req.params);
    
    const userinfo = {
        username: req.params.username,
        mail: req.params.mail,
        password: req.params.password
    }

    var esUsuarioExistente = false;
    var esPasswordOk =false;

    if(userinfo.username!="")
    {
        for(i=0;i<usuarios.length;i++)
        {
            if(usuarios[i].username == userinfo.username)
            { 
                esUsuarioExistente = true;
                if(usuarios[i].password == userinfo.password)
                {
                   usuarios[i].loged=true;
                   //res.json({status:'ok'});
                   esPasswordOk = true;
                }
            }/*else{
                //res.json({status:'Usuario Inexistente'});
                esUsuarioExistente = false;
            }*/
             
        }
        
        //console.log(esPasswordOk, esUsuarioExistente);

        if(esUsuarioExistente)
        {
            if(esPasswordOk)
            {
                res.json({status:'ok'});
            }else{
                res.json({status:'Password Incorrecto'}); 
            }
        }else{
            res.json({status:'Usuario Inexistente'});
        }

    }else if(userinfo.mail!=""){
        for(i=0;i<usuarios.length;i++)
        {
            if(usuarios[i].mail == userinfo.mail)
            { 
                if(usuarios[i].password == userinfo.password)
                {
                    usuarios[i].loged=true;
                    res.json({status:'ok'});
                
                }else{
                    res.json({status:'error'});
                }
            }else{
                    res.json({status:'Usuario Inexistente'});
            } 
        }
    }
});

server.listen(3000, ()=>{ 
    console.log('Server iniciado');
});

// const express = require('express');
// const server = express();

// server.use(express.json()); // middleware


// // en consola 'npm install express'

// let usuarios = [{
// 	username: 'jose',
// 	password: '123',
// 	mail: 'test@test.com',
// 	loged: false
// },
// {
// 	username: 'pau',
// 	password: '123',
// 	mail: 'test@pau.com',
// 	loged: false
// }];

// var esUsuarioExistente = false;
// var ePasswordOk = false;

// server.get('/login/usuario',(req,res)=>{
// 	const userinfo ={
// 		username: req.body.username,
// 		password: req.body.mail,
// 		mail: req.body.mail
// 	} // acá estamos recibiendo lo que escribió el usuario en el index.html

// 	if(userinfo.username!=""){
// 		for(i=0;i<usuarios.lenght;i++){
// 			if(usuarios[i].username == userinfo.username) {
// 				esUsuarioExistente = true;
// 				if(usarios[i].password == userinfo.password) {
// 					usuarios[i].loged=true;
// 					//res.json({status:'ok'});
// 					esUsuarioExistente = true;
// 				} else {
// 					res.json({status:'error'});
// 				}
// 			}else{
// 				//res.json({status:'Usuario inexistente'});
// 				esUsuarioExistente = false;
// 			}
// 		}
// 		if(esUsuarioExistente==true){
// 			if(esPasswordOk==true){
// 				res.json({status:'ok'});
// 			}else{
// 				res.json({status:'password incorrecto'});
// 			}
// 		}else{
// 			res.json({status:'usuario incorrecto'});
// 		}
// 	} else if (userinfo.mail!=""){
// 		for(i=0;i<usuarios.lenght;i++){
// 			if(usuarios[i].mail == userinfo.mail) {
// 				if(usarios[i].password == userinfo.password) {
// 					usuarios[i].loged=true;
// 					res.json({status:'ok'})
// 				} else {
// 					res.json({status:'error'});	
// 				}
// 			}
// 			else{
// 				res.json({status:'Mail inexistente'});
// 			}
// 		}

// 	}
// })

// server.listen(3000, ()=> {
// 	console.log('servidor iniciado...')
// })