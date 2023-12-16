const { httpStatus } = require('../constants/http.constant');
const authRouter = require('../routes/auth.routes');

module.exports = (app) => {
    app.get('/', async (req, res, next) => {
        res.status(httpStatus.OK).send('STATUS OK');
    });

    app.use('/api/v1/auth', authRouter);
}