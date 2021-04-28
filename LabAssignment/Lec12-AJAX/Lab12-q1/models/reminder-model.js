const dbConnection = require('../resources/dbConnection.js'); 
class reminder {
    async getAllReminder() {
        // Get the connection
        let connection = await dbConnection(); try {
            let sql = "SELECT * FROM reminders ";
            let results = await connection.query(sql); 
            return results;
        }
        catch (error) {
            throw error;
        }
    }
    /* More SQL Methods here */
}
module.exports.reminder = reminder;