import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server';
import {StaticRouter} from "react-router-dom/server";
import {App} from '../App'
import {indexTemplate} from './indexTemplate'
import helmet from "helmet";

const PORT = process.env.PORT || 3003
const app = express()
const jsFiles = []

fs.readdirSync('./public/assets')
    .forEach(file => {
        if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
    })

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

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))
