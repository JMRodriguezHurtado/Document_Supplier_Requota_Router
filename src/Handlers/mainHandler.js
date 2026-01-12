const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

const lambda = new LambdaClient({ region: "us-east-1" });

const mainHandler = async (tokenBearer, arn, action, method, defaultSet, payload) => {
    console.log(
        `Payload to lambda: ${JSON.stringify({ action, ...defaultSet, ...payload?.params })}, ` +
        `target: ${arn}`
    );

    try {
        const lambdaPayload = {
            Action: action,
            Token: tokenBearer,
            Parameters: {
                ...(defaultSet || {}), 
                ...(payload?.params || {}),
                ...(payload?.body || {})            
            }
        };

        const command = new InvokeCommand({
            FunctionName: arn,
            Payload: Buffer.from(JSON.stringify(lambdaPayload)),
            InvocationType: "RequestResponse"
        });

        const response = await lambda.send(command);

        if (response.FunctionError) {
            throw new Error(`Lambda invocation error: ${response.FunctionError}`);
        }

        const rawResponse = Buffer.from(response.Payload).toString("utf-8");

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(rawResponse);
        } catch {
            throw new Error(`Failed to parse Lambda response: ${rawResponse}`);
        }

        console.log("Invoke response:", parsedResponse);
        return parsedResponse; 

    } catch (error) {
        console.error("Error in mainHandler:", error.message);
        throw error;
    }
};

module.exports = mainHandler;