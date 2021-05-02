const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:<password>@cluster0.ql8kr.mongodb.net/OctoBlogDB?retryWrites=true&w=majority";
var connectAsync = async function(dbPassword) {
    return new Promise(resolve => {
        mongoose.connect(uri.replace("<password>", dbPassword), {useNewUrlParser: true });
        const connection = mongoose.connection;
        connection.once('open', ()=> { 
            resolve("DB connection established");
        });
    })
};

const connect =  async (dbPassword) => {
    console.log(await connectAsync(dbPassword));
}
module.exports.connect = connect;