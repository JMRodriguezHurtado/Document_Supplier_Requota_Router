const { getSecret } = require("./getSecrets");
const { config } = require("dotenv");
config({ path: './.env', override: true });

config();

const getKeys = async () => {
  try {
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTO ES PARA PROD >>>>>>>>>>>>>>>>>>>>>>
     const keys = await getSecret();
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTO ES PARA PROD >>>>>>>>>>>>>>>>>>>>>>
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTO ES PARA LOCAL >>>>>>>>>>>>>>>>>>>>>>
    // const keys = process.env;
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ESTO ES PARA LOCAL >>>>>>>>>>>>>>>>>>>>>>
    return keys;
  } catch (error) {
    console.error("Full keys error:", {
      message: error.message,
      code: error.code,
      response: error.response?.data,
      stack: error.stack,
    });
    throw new Error(
      `Keys fetch failed: ${error.response?.data?.message || error.message}`
    );
  }
};
module.exports = { getKeys };
