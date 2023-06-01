import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';

import router from './router/router';


import morgan from 'morgan';
import {engine} from 'express-handlebars'


dotenv.config();
validateEnv();

const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;

const app = express();
app.use(router);


app.use(morgan('short'));

app.use('/css', express.static(`${publicPath}/public/css`));
app.use('/js', express.static(`${publicPath}/public/js`));
app.use('/img', express.static(`${publicPath}/public/img`));




app.get("/", (req: Request, res: Response) => {
res.send("Hello world!");
});

//acrescentou 
app.engine(
    'handlebars', 
    engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`)
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);



//

app.listen(PORT, () => {
console.log(`Express app iniciada na porta ${PORT}.`);
});