## Analytics as a Service for Data Sharing Partners [GSP1042]
## Run in cloudshell
```cmd
bq mk \
--use_legacy_sql=false \
--description "DESCRIPTION" \
--view 'SELECT * FROM `bigquery-public-data.geo_us_boundaries.zip_codes`
WHERE state_code="TX"
LIMIT 4000' \
--project_id $DEVSHELL_PROJECT_ID \
demo_dataset.authorized_view_a
bq mk \
--use_legacy_sql=false \
--description "DESCRIPTION" \
--view 'SELECT * FROM `bigquery-public-data.geo_us_boundaries.zip_codes`
WHERE state_code="CA"
LIMIT 4000' \
--project_id $DEVSHELL_PROJECT_ID \
demo_dataset.authorized_view_b
echo "PROJECT ID=$DEVSHELL_PROJECT_ID"
```
## Copy the project id (From last line in terminal) and Store it
## Bigquery > demo_dataset 
> sharing > Authorize Views > ```demo_dataset``` > select a > add authorization

> Then again > ```demo_dataset``` > select b > add authorization > close

## authorized_view_a > Share
> Add Principal > Paste username 1 from lab > Role ```BigQuery Data Viewer``` > save
## authorized_view_b > Share
> Add Principal > Paste username 2 from lab > Role ```BigQuery Data Viewer``` > save
## Close the incognito window
## Login to Project A Console 
```cmd
PROJECT_ID=
```
```cmd
bq mk --use_legacy_sql=false --view 'SELECT geos.zip_code, geos.city, cust.last_name, cust.first_name
FROM `'$DEVSHELL_PROJECT_ID'.customer_a_dataset.customer_info` as cust
JOIN `'$PROJECT_ID'.demo_dataset.authorized_view_a` as geos
ON geos.zip_code = cust.postal_code;' customer_a_dataset.customer_a_table
```

> Open in incognito [Looker](https://lookerstudio.google.com/) > Blank report > Country ```India``` > Company ```GoogleLab```

> Agree and continue > Yes to all > Continue > Bigquery > Authorize 

> GCP ID > customer_a_dataset > customer_a_table > ADD > add to report

> Close the incognito window
### Login to Project B Console 
```cmd
PROJECT_ID=
```
```cmd
bq mk --use_legacy_sql=false --view 'SELECT geos.zip_code, geos.city, cust.last_name, cust.first_name
FROM `'$DEVSHELL_PROJECT_ID'.customer_b_dataset.customer_info` as cust
JOIN `'$PROJECT_ID'.demo_dataset.authorized_view_b` as geos
ON geos.zip_code = cust.postal_code;' customer_b_dataset.customer_b_table
```

> Open in incognito [Looker](https://lookerstudio.google.com/) > Blank report > Country ```India``` > Company ```GoogleLab```

> Agree and continue > Yes to all > Continue > Bigquery > Authorize 

> GCP ID > customer_b_dataset > customer_b_table > ADD > add to report
