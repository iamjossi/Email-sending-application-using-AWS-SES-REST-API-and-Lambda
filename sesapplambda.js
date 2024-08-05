const AWS = require('aws-sdk')

const ses = new AWS.SES({
  region: 'us-east-1'
})

exports.handler = async(event) => {
  
    
  const params = {
    Destination: {
      ToAddresses: [event.email]
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Dear ${event.name.toUpperCase()},\nThis is a test email.\nThanks.`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Test mail from SES via Lambda @${new Date().toLocaleString()}!`
      }
    },
    Source: 'jossiekush@gmail.com'
  }

  try {
    const data = await ses.sendEmail(params).promise();
    console.log(`Email sent! ${data.MessageId}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully',
        messageId: data.MessageId,
        date: Date.now()
      })
    };
  } catch(err) {
    console.error(`Error sending email: ${err.message}`);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error sending email',
        error: err.message
      })
    }
  }
}