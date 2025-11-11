const jsonserver=require('json-server')

const server =jsonserver.create()

const middleware =jsonserver.defaults()

const route = jsonserver.router('db.json')

server.use(middleware)
server.use(route)

const PORT =process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log("Server is running Successfully in ",PORT) 
})