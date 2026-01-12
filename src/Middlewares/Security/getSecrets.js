const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const secretName = process.env.SECRET_NAME;
const client = new SecretsManagerClient({ region: "us-east-1" });

async function getSecret() {
    try {
        const command = new GetSecretValueCommand({ SecretId: secretName });
        const response = await client.send(command);
 
    if (response.SecretString) {
        const secret = JSON.parse(response.SecretString)
        return secret;
    }
} catch (error) {
    console.error("Error recuperando el secreto:", error);
}
}

module.exports = { getSecret };