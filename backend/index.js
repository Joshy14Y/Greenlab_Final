const express = require('express');
const bodyParser = require('body-parser')
const { Pool } = require('pg')
const cors = require('cors')
const helmet = require('helmet');
const port = process.env.PORT || 3000;
const groundAnalysisCC = require('./routes/groundAnalysisCC')
const groundAnalysisCCTXT = require('./routes/groundAnalysisCCTXT')
const groundAnalysisCCOM = require('./routes/groundAnalysisCCOM')
const foliarAnalysisCC = require('./routes/foliarAnalysisCC')
const foliarAnalysisCCBS = require('./routes/foliarAnalysisCCBS')
const login = require('./routes/login')

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const db_data = {
    db_user: 'postgres',
    db_host: 'localhost',
    db_name: 'lab_fito_tec',
    db_password: '1234',
    db_port: '5432',
};

const pool = new Pool({
    user: db_data.db_user,
    host: db_data.db_host,
    database: db_data.db_name,
    password: db_data.db_password,
    port: db_data.db_port,
})

const groundRoute = '/api/analisis/suelos'
const foliarRoute = '/api/analisis/foliar'
const userRoute = '/api/user'

app.use(groundRoute, groundAnalysisCC(pool))
app.use(groundRoute, groundAnalysisCCTXT(pool))
app.use(groundRoute, groundAnalysisCCOM(pool))
app.use(foliarRoute, foliarAnalysisCC(pool))
app.use(foliarRoute, foliarAnalysisCCBS(pool))
app.use(userRoute, login(pool))

app.get('/', (req, res) => {
    res.send('Bienvenido a la API del Lab Fitosanitario TEC');
})

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})