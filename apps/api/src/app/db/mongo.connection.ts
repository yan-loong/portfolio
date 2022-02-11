import { connect } from "mongoose";
import config from "../../configs/config"


async function startDBServer(port: string = config.DB_PORT, dbName: string = config.DB_NAME) {
    try {
        const mongoose = await connect(`mongodb://localhost:${port}/${dbName}`);
    }
    catch (error) {
        console.log(`error during connection`, error)
    }
}

export default startDBServer;