import mongoose, { connection } from "mongoose";

const dbConnection =  async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default dbConnection;