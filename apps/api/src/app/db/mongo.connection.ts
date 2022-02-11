import { connect } from "mongoose";
import config from "../../configs/config"


async function startDBServer(port = config.DB_PORT) {
    try {
        const mongoose = await connect(`mongodb://localhost:${port}/myDb`);
    }
    catch (error) {
        console.log(`error during connection`, error)
    }
}

export default startDBServer;