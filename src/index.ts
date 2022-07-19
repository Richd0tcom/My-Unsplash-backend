import express from 'express';
import connection from './db.config';
import dotenv from 'dotenv'
import router from './routes/imageRoutes';
const cors = require('cors')


dotenv.config()

const app = express();
connection();

app.use(cors({
    origin:'https://localhost:3000'
}))
//json parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//image routes
app.use('/api/v1/images', router)


const PORT = process.env.PORT || 5701




app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);

})
