import React from 'react'
import express from 'express';
import compression from 'compression';
import fs from 'fs'
import https from "https";
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import helmet from 'helmet';
import {App} from "../App"
import {indexTemplate} from "./indexTemplate";

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = IS_DEV ? process.env.PORT || 3000 : process.env.PORT || 3002

const reqHandler = async (req, res) => {
    res.send(
        indexTemplate(
            ReactDOMServer.renderToString(<StaticRouter location={req.url}>{App()}</StaticRouter>),
        ),
    )
}

const app = express();
if (!IS_DEV) {
    app.use(helmet({contentSecurityPolicy: false}))
}
app.use(compression());
app.use('/static', express.static('./dist/client'))
app.use('/img-src', express.static('./dist/img-src'))
app.get('*', reqHandler)

    // https.createServer(
    //     {
    //         key: fs.readFileSync('.cert/key.pem'),
    //         cert: fs.readFileSync('.cert/cert.pem'),
    //     },
    //     app
    // )
    app.listen(PORT, () => {
    IS_DEV && console.log(`Server started on http://localhost:${PORT} `)
})


