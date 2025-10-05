import json

def lambda_handler(event, context):
    body = {
        "message": "Hello from Lambda!",
        "input": event
    }
    return {
        "statusCode": 200,
        "body": json.dumps(body)
    }

