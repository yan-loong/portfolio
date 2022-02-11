import startAPIServer from "./app/app";
import startDBServer from "./app/db/mongo.connection"

startDBServer();
startAPIServer();