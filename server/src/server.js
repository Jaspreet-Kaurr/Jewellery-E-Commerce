const app = require('./index');
const connectDB = require("./config/db");

PORT = process.env.PORT || 8080;
app.listen(PORT, async() => {
    await connectDB();
    console.log("Server running on port :", PORT )
}); 