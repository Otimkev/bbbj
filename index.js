const server = require('./app');

const PORT = process.env.PORT||3887;


server.listen(PORT,()=>{
    console.log(`connected to ${PORT}`)
});