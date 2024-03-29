## Stream Processing with Cloud Pub/Sub and Dataflow: Qwik Start

```
PROJECT_ID=$(gcloud config get-value project)
BUCKET_NAME="${PROJECT_ID}-bucket"
TOPIC_ID=my-id
REGION=us-central1
gcloud config set compute/region us-central1
gcloud services disable dataflow.googleapis.com
gcloud services enable dataflow.googleapis.com
gsutil mb gs://$BUCKET_NAME
gcloud pubsub topics create $TOPIC_ID
gcloud app create --region=us-central
echo "y" | gcloud scheduler jobs create pubsub publisher-job \
    --schedule="* * * * *" \
    --topic=$TOPIC_ID \
    --message-body="Hello!"
gcloud scheduler jobs run publisher-job
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
cd java-docs-samples/pubsub/streaming-analytics
mvn compile exec:java \
-Dexec.mainClass=com.examples.pubsub.streaming.PubSubToGcs \
-Dexec.cleanupDaemonThreads=false \
-Dexec.args=" \
    --project=$PROJECT_ID \
    --region=$REGION \
    --inputTopic=projects/$PROJECT_ID/topics/$TOPIC_ID \
    --output=gs://$BUCKET_NAME/samples/output \
    --runner=DataflowRunner \
    --windowSize=2"
```
