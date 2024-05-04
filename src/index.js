const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {PORT} = require('./config/serverConfig');
//const PORT= process.env.PORT;
//const apiRoutes = require('./routes/index');
//const db = require('./models/index');
const {sendBasicEmail} = require('./services/email-service');

const setupAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        // if(process.env.DB_SYNC) {
        //     db.sequelize.sync({alter: true});
        // }
        sendBasicEmail(
            'saikat12test@gmail.com',
            'ksaikat009@gmail.com',
            'This is a test email',
            'hey,how are you,i hope you like the support'
        )
    });
}

setupAndStartServer();