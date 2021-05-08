const APP = require('./app');
const PORT = 3000;
const HOST = '0.0.0.0';

async function main(PORT, HOST){
  await APP.listen(PORT, HOST);
  console.log(`Server is running on ${HOST}:${PORT}`)
}

main(PORT, HOST);