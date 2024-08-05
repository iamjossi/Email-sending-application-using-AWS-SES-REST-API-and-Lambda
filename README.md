# Email-sending-application-using-AWS-SES-REST-API-and-Lambda

Here are the steps to create an email sending application using AWS SES, REST API, and Lambda:

Step 1: Set up AWS SES
Navigate to the AWS Management Console and select SES
Under Configuration, click on Identities and create a new identity
Select Email identity and enter the email address you want to send emails from
Submit and verify the email address with AWS

Step 2: Create an IAM Role
Navigate to the IAM dashboard and create a new role
Grant the role full access to SES
Name the role and save it

Step 3: Build a Lambda Function
Navigate to the Lambda dashboard and create a new function
Choose the IAM role created in Step 2 as the execution role
Write the Lambda function code to send an email using SES
Save and deploy the function

Step 4: Create a REST API
Navigate to the API Gateway dashboard and create a new REST API
Define a resource 'send' with a POST method
Integrate the Lambda function created in Step 3 with the API
Save and deploy the API

Step 5: Deploy the API
Create a new stage 
Deploy the API to the stage

Step 6: Test the Application
Used Postman to send a POST request to the API
Verify that the email is sent successfully using SES

The node.js lambda function code is available in ths repository
