const connectDB = require('./db/index');
const { app } = require('./app');
const { PORT } = require('./constants');

(async () => {
  try {
    const mongoConnection = await connectDB.MongoDB();

    app.on('error', (error) => {
      console.log('Error :', error);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`app is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error : ', error);
    throw err;
  }
})();
