```
gsutil mb gs://$DEVSHELL_PROJECT_ID-bucket/
gcloud services enable dataflow.googleapis.com
docker run -it -e DEVSHELL_PROJECT_ID=$DEVSHELL_PROJECT_ID python:3.9 /bin/bash -c '
pip install "apache-beam[gcp]"==2.42.0 && \
python -m apache_beam.examples.wordcount --output OUTPUT_FILE && \
HUSTLER=gs://$DEVSHELL_PROJECT_ID-bucket && \
python -m apache_beam.examples.wordcount --project $DEVSHELL_PROJECT_ID \
  --runner DataflowRunner \
  --staging_location $HUSTLER/staging \
  --temp_location $HUSTLER/temp \
  --output $HUSTLER/results/output \
  --region us-east1
'
```
