import express, {type Express, type Request, type Response} from 'express';

// establishing backend express server
const app: Express = express();

// port number backend is going to be running on
const PORT: number = 3000;


// healthcheck endpoint -- just an endpoint checking to see if backend is up and running
app.get('/', (req: Request, res: Response) => {
    res.send("Hello hello from the back!")
})

// tells the express backend to be active on the given port, and logs message to terminal
app.listen(PORT, () => {
    console.log(`Listening from localhost:${PORT}`)
})


