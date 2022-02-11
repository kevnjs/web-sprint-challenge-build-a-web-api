const server = require('./api/server')
const dotenv = require('dotenv')
const port = process.env.port || 9000

dotenv.config()
server.listen(port, () => {
    console.log("Server is running on port ::",port)
})
