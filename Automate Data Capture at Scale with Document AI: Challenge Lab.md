## Task 2

```
export PROJECT_ID=$(gcloud config get-value core/project)
export BUCKET_LOCATION=us-central1
gsutil mb -c standard -l ${BUCKET_LOCATION} -b on \
 gs://${PROJECT_ID}-input-invoices
gsutil mb -c standard -l ${BUCKET_LOCATION} -b on \
 gs://${PROJECT_ID}-output-invoices
gsutil mb -c standard -l ${BUCKET_LOCATION} -b on \
 gs://${PROJECT_ID}-archived-invoices
```


## Task 3
```
  bq --location=US mk  -d \
     --description "Form Parser Results" \
     ${PROJECT_ID}:invoice_parser_results
  cd ~/documentai-pipeline-demo/scripts/table-schema/
  bq mk --table \
    invoice_parser_results.doc_ai_extracted_entities \
    doc_ai_extracted_entities.json
  bq mk --table \
    invoice_parser_results.geocode_details \
    geocode_details.json

```





## Task 5
```
   export PROJECT_ID=$(gcloud config get-value core/project)
  gsutil -m cp -r gs://cloud-training/gsp367/* \
    ~/document-ai-challenge/invoices gs://${PROJECT_ID}-input-invoices/

```

