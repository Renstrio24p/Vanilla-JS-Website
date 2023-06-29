
const { connect } = require('./mongodb');

export async function startApp() {
  try {
    const db = await connect();
    console.log('Application started');
  } catch (error) {
    console.error('Error starting the application', error);
  }
}

startApp();
