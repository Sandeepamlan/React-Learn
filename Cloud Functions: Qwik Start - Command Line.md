```
export PROJECT_ID=
export REGION=
```

## STep 1

```bash
gcloud config set compute/region $REGION
mkdir gcf_hello_world
cd gcf_hello_world
touch index.js
tee index.js <<EOF
/**
* Background Cloud Function to be triggered by Pub/Sub.
* This function is exported by index.js, and executed when
* the trigger topic receives a message.
*
* @param {object} data The event payload.
* @param {object} context The event metadata.
*/
exports.helloWorld = (data, context) => {
const pubSubMessage = data;
const name = pubSubMessage.data
    ? Buffer.from(pubSubMessage.data, 'base64').toString() : "Hello World";
console.log(`My Cloud Function: ${name}`);
};
EOF
```

## Next

```bash
gsutil mb -p $PROJECT_ID gs://$PROJECT_ID

gcloud functions deploy helloWorld \
  --stage-bucket $PROJECT_ID \
  --trigger-topic hello_world \
  --runtime nodejs20

gcloud functions describe helloWorld

```
