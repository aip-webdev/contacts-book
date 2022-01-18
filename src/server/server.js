import React from 'react'
import express from 'express';
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
import {StaticRouter} from "react-router-dom/server";
import helmet from 'helmet';
import {App} from "../App"
import {indexTemplate} from "./indexTemplate";

const port = 3000 || 3003
const app = express()
const jsFiles = []

fs.readdirSync('./public/assets')
    .forEach(file => {
        if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
    })

const app = express();
if (!IS_DEV) {
    app.use(helmet({contentSecurityPolicy: false}))
}
app.use('/db', middlewares, router)
app.use('/assets', express.static('./public/assets'))
app.use('/resources', express.static('./src/Html'))
app.use(helmet({contentSecurityPolicy: false}))
app.get('*', async (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(
                <StaticRouter location={req.url}>
                    <App/>
                </StaticRouter>
            ),
            ReactDOM.renderToString(
                jsFiles.map((script, index) => <script src={script} key={index}/>)
            )
        ))
})

app.listen(PORT, () => {
    IS_DEV && console.log(`Server started on http://localhost:${PORT} `)
})


