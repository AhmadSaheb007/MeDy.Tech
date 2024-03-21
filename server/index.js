const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
app.use(express.json())
app.use(cors());
require('./DB/config')
const route = require( './routes/apiRoutes' )
app.use(route)
const port = 3000;


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// 	console.log("Request received");
	
// });

// const port = process.env.PORT || 3001;  

app.listen(port, () => {
    console.log(`Server running on port ${port}/`)
}); 
