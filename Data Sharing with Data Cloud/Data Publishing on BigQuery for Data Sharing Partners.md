# GSP1032
>🚨 [PLEASE SUBSCRIBE OUR CHANNEL CLOUDHUSTLER](https://www.youtube.com/@cloudhustlers) **&** [JOIN OUR COMMUNITY](https://chat.whatsapp.com/KBfUcSleGGEFf2Xvvm8FW3)
### Run in Cloudshell
```cmd
bq mk demo_dataset
echo "PROJECT_ID=$DEVSHELL_PROJECT_ID"
```
### Copy the project id (From last line in terminal) and Store it
### IAM & Admin > IAM > + GRANT ACCESS
>copy both the ids paste in new principal > Role ```BigQuery User``` > save

### Bigquery > + Add > Public Datasets 
> Search ```Google Trends``` > View dataset 

> Copy > Destination dataset type ```demo_dataset``` and select it > click copy and authorize it

### From drop down of demo_dataset > top_terms 
> Share > ADD PRINCIPAL

> copy both the ids paste in new principal > Role ```BigQuery Data Viewer``` > save

### demo_dataset > + Sharing > Authorize Datasets
> dataset type ```demo_dataset``` and select it > Add Authorization > close

>Sharing > Permissions > Add Principal

>copy both the ids paste in new principal > Role ```BigQuery User``` > save
### Login Customer Project 1 Console
```cmd
PROJECT_ID=
```
```cmd
bq mk customer_1_dataset
bq mk --use_legacy_sql=false --view 'SELECT * FROM `'$PROJECT_ID'.demo_dataset.top_terms`' customer_1_dataset.customer_1_table
```  

### Login Customer Project 2 Console
```cmd
PROJECT_ID=
```
```cmd
bq mk customer_2_dataset
bq mk --use_legacy_sql=false --view 'SELECT * FROM `'$PROJECT_ID'.demo_dataset.top_terms`' customer_2_dataset.customer_2_table
```  
