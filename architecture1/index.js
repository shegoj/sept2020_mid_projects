console.log ("Techbleat function")

var AWS = require ("aws-sdk")
AWS.config.region = 'eu-west-1'

exports.handler = function (event, context ) {
    
    console.log ("\n\n Loading handler\n\n")
    var sns = new AWS.SNS();
    sns.publish ({
        Message: 'This is a simple message from Techbleat',
        TopicArn: 'xxxxxxxxxxxxxxxxxxxxx'
    }, function (err , data ) {
        if (err) {
            console.log (err.stack);
            return;
        }
        console.log ('push sent');
        console.log (data);
        context.done (null, "Function finished");
        });
};

