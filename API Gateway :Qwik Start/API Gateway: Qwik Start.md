Task 1 

```
export REGION=
export PROJECT_ID=
export API_KEY=

```

```
gcloud config set compute/region $REGION

git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git

cd nodejs-docs-samples/functions/helloworld/helloworldGet

gcloud functions deploy helloGET --runtime nodejs14 --trigger-http --allow-unauthenticated --region $REGION

```

Task 2

```
gcloud functions describe helloGET --region $REGION

curl -v https://$REGION-$PROJECT_ID.cloudfunctions.net/helloGET
```

## Upload _openapi2-functions.yaml_ File on cloud Shell

```
cd ~

export API_ID="hello-world-$(cat /dev/urandom | tr -dc 'a-z' | fold -w ${1:-8} | head -n 1)"

sed -i "s/API_ID/${API_ID}/g" openapi2-functions.yaml
sed -i "s/PROJECT_ID/$PROJECT_ID/g" openapi2-functions.yaml

```

## Task 3

Create API GatewaY

```
export API_ID="hello-world-$(cat /dev/urandom | tr -dc 'a-z' | fold -w ${1:-8} | head -n 1)"
echo $API_ID
```

Testing API
```
export GATEWAY_URL=$(gcloud api-gateway gateways describe hello-gateway --location $REGION --format json | jq -r .defaultHostname)

echo $GATEWAY_URL

curl -s -w "\n" https://$GATEWAY_URL/hello

```

## Task 4 

Create API Key

```
MANAGED_SERVICE=$(gcloud api-gateway apis list --format json | jq -r .[0].managedService | cut -d'/' -f6)
echo $MANAGED_SERVICE

gcloud services enable $MANAGED_SERVICE

```

modify openAPI file (Manual)

```
sed -i "s/API_ID/${API_ID}/g" openapi2-functions2.yaml
sed -i "s/PROJECT_ID/$PROJECT_ID/g" openapi2-functions2.yaml

cloudshell download $HOME/openapi2-functions2.yaml
```

## Task 5 
Edit existing Gateway

## Task 6

```
export GATEWAY_URL=$(gcloud api-gateway gateways describe hello-gateway --location "REGION" --format json | jq -r .defaultHostname)
curl -sL $GATEWAY_URL/hello

curl -sL -w "\n" $GATEWAY_URL/hello?key=$API_KEY

```

