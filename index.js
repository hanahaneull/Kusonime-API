/* Module */
const express = require('express');
const helmet = require('helmet');
const cors  = require('cors');

/* ============ */
const PORT = process.env.PORT || 3000;
const general = require('./routers/general');
const link = require('./routers/anime');
const app = express();

/* app */
app.use(cors());
app.use(helmet());
app.use('/kusonime', general);
app.use('/kusonime/anime', link);
app.use(express.static('./public'));

/* Status */
app.use('/kusonime', async (req, res) => {
    
    res.send({
        status: true,
        message: 'Kusonime Scrapper',
        repo: 'KatowProject',
        branch: 'caching experiment'
    });

});

app.use('*', async (req, res) => {

    res.status(404).send({status: false, message: 'api not found'});

});

/* Listener */
app.listen(PORT, async () => {

    console.log('Listening on PORT ' + PORT);

});