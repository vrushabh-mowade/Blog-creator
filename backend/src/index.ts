import { Hono } from 'hono';
import { userroute } from './Routes/user';
import { blogroute } from './Routes/blog';
import { cors } from 'hono/cors';

// Create the main Hono app

const app = new Hono();

app.use('/api/*', cors())
app.route('/api/v1/user', userroute );
app.route('/api/v1/blog' , blogroute); 



export default app;
