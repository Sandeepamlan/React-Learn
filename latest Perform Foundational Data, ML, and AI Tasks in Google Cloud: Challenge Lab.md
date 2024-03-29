## latest Perform Foundational Data, ML, and AI Tasks in Google Cloud: Challenge Lab
```
REGION=
dataset_name=
table_name=
TASK_3_BUCKET_NAME=
TASK_4_BUCKET_NAME=
```

```
PROJECT_ID=$(gcloud config get-value project)
target=$dataset_name.$table_name
bucket_name=$PROJECT_ID-marking

bq mk $dataset_name
gsutil mb gs://$bucket_name

cat > table.py <<EOF
from google.cloud import bigquery

# Construct a BigQuery client object.
client = bigquery.Client()


table_id = "$PROJECT_ID.$dataset_name.$table_name"

schema = [
    bigquery.SchemaField("guid", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("isActive", "BOOLEAN", mode="NULLABLE"),
    bigquery.SchemaField("firstname", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("surname", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("company", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("email", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("phone", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("address", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("about", "STRING", mode="NULLABLE"),
    bigquery.SchemaField("registered", "TIMESTAMP", mode="NULLABLE"),
    bigquery.SchemaField("latitude", "FLOAT", mode="NULLABLE"),
    bigquery.SchemaField("longitude", "FLOAT", mode="NULLABLE"),
]

table = bigquery.Table(table_id, schema=schema)
table = client.create_table(table)  # Make an API request.
print(
    "Created table {}.{}.{}".format(table.project, table.dataset_id, table.table_id)
)
EOF

python3 table.py

gcloud dataflow jobs run lab-transform --gcs-location gs://dataflow-templates-$REGION/latest/GCS_Text_to_BigQuery --worker-machine-type e2-standard-2 --region $REGION --staging-location gs://$PROJECT_ID-marking/temp --parameters javascriptTextTransformGcsPath=gs://cloud-training/gsp323/lab.js,JSONPath=gs://cloud-training/gsp323/lab.schema,javascriptTextTransformFunctionName=transform,outputTable=$PROJECT_ID:$dataset_name.$table_name,inputFilePattern=gs://cloud-training/gsp323/lab.csv,bigQueryLoadingTemporaryDirectory=gs://$PROJECT_ID-marking/bigquery_temp

#-------Create Cluster-------------
gcloud dataproc clusters create cluster-f357 --region $REGION --zone $REGION-a --master-machine-type e2-standard-2 --master-boot-disk-size 500 --num-workers 2 --worker-machine-type e2-standard-2 --worker-boot-disk-size 500 --image-version 2.0-debian10 --project $PROJECT_ID

gcloud beta compute ssh cluster-f357-w-0 -- -vvv

#-------SSH-------
hdfs dfs -cp gs://cloud-training/gsp323/data.txt /data.txt
exit

#----TERMINAL AGAIN--------
gcloud config set dataproc/region $REGION
gcloud dataproc jobs submit spark --cluster cluster-f357 \
  --class org.apache.spark.examples.SparkPageRank \
  --cluster=cluster-f357 \
  --jars file:///usr/lib/spark/examples/jars/spark-examples.jar -- /data.txt 

gcloud services enable apikeys.googleapis.com
gcloud alpha services api-keys create --display-name="testname" 
KEY_NAME=$(gcloud alpha services api-keys list --format="value(name)" --filter "displayName=testname")
API_KEY=$(gcloud alpha services api-keys get-key-string $KEY_NAME --format="value(keyString)")
echo $API_KEY


gcloud iam service-accounts create quicklab \
  --display-name "my natural language service account"
gcloud iam service-accounts keys create ~/key.json \
  --iam-account quicklab@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS="/home/$USER/key.json"
gcloud auth activate-service-account quicklab@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com --key-file=$GOOGLE_APPLICATION_CREDENTIALS
gcloud ml language analyze-entities --content="Old Norse texts portray Odin as one-eyed and long-bearded, frequently wielding a spear named Gungnir and wearing a cloak and a broad hat." > result.json
gcloud auth login --no-launch-browser

#-----AUTHENTICATE BY CLICKING LINK IN TERMINAL > SELECT STUDENT ACCOUNT > COPY CODE > AND PASTE IN TERMINAL

gsutil cp result.json $TASK_4_BUCKET_NAME
cat > request.json <<EOF 
{
  "config": {
      "encoding":"FLAC",
      "languageCode": "en-US"
  },
  "audio": {
      "uri":"gs://cloud-training/gsp323/task3.flac"
  }
}
EOF
curl -s -X POST -H "Content-Type: application/json" --data-binary @request.json \
"https://speech.googleapis.com/v1/speech:recognize?key=${API_KEY}" > result.json
gsutil cp result.json $TASK_3_BUCKET_NAME
gcloud iam service-accounts create quickstart
gcloud iam service-accounts keys create key.json --iam-account quickstart@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
gcloud auth activate-service-account --key-file key.json
export ACCESS_TOKEN=$(gcloud auth print-access-token)
cat > request.json <<EOF 
{
   "inputUri":"gs://spls/gsp154/video/train.mp4",
   "features": [
       "TEXT_DETECTION"
   ]
}
EOF
curl -s -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $ACCESS_TOKEN" \
    'https://videointelligence.googleapis.com/v1/videos:annotate' \
    -d @request.json
curl -s -H 'Content-Type: application/json' -H "Authorization: Bearer $ACCESS_TOKEN" 'https://videointelligence.googleapis.com/v1/operations/OPERATION_FROM_PREVIOUS_REQUEST' > result1.json
```
