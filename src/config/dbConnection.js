import mongoose from "mongoose";

async function connectDataBase(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.dvsjfas.mongodb.net/livraria?retryWrites=true&w=majority");

    return mongoose.connection;
};

export default connectDataBase;


