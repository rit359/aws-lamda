const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();


AWS.config.update({ region: 'us-east-1' });

module.exports.handler = async (event) => {
  const params = {
    TableName: 'Users',
    Key:{s:'namee'}
};

    try {
       const data = await dynamoDb.scan(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error})
        };
    }
};
