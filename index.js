// <<<<<<<<<<<<<<<<ESTO ES PARA PRODUCCION Y LAMBDA>>>>>>>>>>>>>>>>>>>>>> //

const { config } = require("dotenv");
config();
const server = require("./src/app");
const awsServerlessExpress = require('aws-serverless-express');
const serverless = awsServerlessExpress.createServer(server);

exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  try {
    const result = await awsServerlessExpress.proxy(serverless, event, context, 'PROMISE' ).promise;
    return result;
  } catch (err) {
    console.error('Proxy error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};

// <<<<<<<<<<<<<<<<ESTO ES PARA PRODUCCION Y LAMBDA>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<ESTO ES PARA DESARROLLO LOCAL>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const { config } = require("dotenv");
// config({ path: './.env', override: true });

// const server = require("./src/app");
// const port = process.env.PORT;

// try {
//   server.listen(port, () => {
//     console.log(`Servidor activo en: ${port}`);
//   });
//     //console.log(`process.env: ${JSON.stringify(process.env)}`);
// } catch (error) {
//   console.log(error);
// }

// <<<<<<<<<<<<<ESTO ES PARA DESARROLLO LOCAL>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
