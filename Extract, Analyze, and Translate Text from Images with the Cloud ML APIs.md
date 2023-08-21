## Step-1

```bash
export API_KEY=<YOUR_API_KEY>
export PROJECT_ID=

gs://$PROJECT_ID/sign.jpg
```

## Step-2
## Cloud Storage  > Create Bucket Next next 
## Uncheck Enforce and select fine graded and CREATE
## Upload Image and give the Public Access Done

##Step 3 Edit the JSON File

```bash
touch ocr-request.json
tee ocr-request.json <<EOF
{
  "requests": [
      {
        "image": {
          "source": {
              "gcsImageUri": "gs://$PROJECT_ID/sign.jpg"
          }
        },
        "features": [
          {
            "type": "TEXT_DETECTION",
            "maxResults": 10
          }
        ]
      }
  ]
}
EOF
```

##Step 4

```bash
curl -s -X POST -H "Content-Type: application/json" --data-binary @ocr-request.json  https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}
curl -s -X POST -H "Content-Type: application/json" --data-binary @ocr-request.json  https://vision.googleapis.com/v1/images:annotate?key=${API_KEY} -o ocr-response.json
```

##Step 5 

```bash
touch translation-request.json
tee translation-request.json <<EOF
{
  "q": "your_text_here",
  "target": "en"
}
EOF
STR=$(jq .responses[0].textAnnotations[0].description ocr-response.json) && STR="${STR//\"}" && sed -i "s|your_text_here|$STR|g" translation-request.json
curl -s -X POST -H "Content-Type: application/json" --data-binary @translation-request.json https://translation.googleapis.com/language/translate/v2?key=${API_KEY} -o translation-response.json
cat translation-response.json
```

##Step 6

```bash
touch nl-request.json.json
tee nl-request.json <<EOF
{
  "document":{
    "type":"PLAIN_TEXT",
    "content":"your_text_here"
  },
  "encodingType":"UTF8"
}
EOF
STR=$(jq .data.translations[0].translatedText  translation-response.json) && STR="${STR//\"}" && sed -i "s|your_text_here|$STR|g" nl-request.json
curl "https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEY}" \
  -s -X POST -H "Content-Type: application/json" --data-binary @nl-request.json

```


