# Rent-a-VM to Process Earthquake Data GSP008
## Run in cloudshell
```cmd
gcloud compute instances create instance-1 --zone=us-central1-a --machine-type=e2-medium --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default --metadata=enable-oslogin=true --maintenance-policy=MIGRATE --provisioning-model=STANDARD --scopes=https://www.googleapis.com/auth/cloud-platform --create-disk=auto-delete=yes,boot=yes,device-name=instance-1,image=projects/debian-cloud/global/images/debian-10-buster-v20230809,mode=rw,size=10,type=projects/$DEVSHELL_PROJECT_ID/zones/us-central1-a/diskTypes/pd-balanced --no-shielded-secure-boot --shielded-vtpm --shielded-integrity-monitoring --labels=goog-ec-src=vm_add-gcloud
gsutil mb -l us-central1 -c regional gs://$DEVSHELL_PROJECT_ID
gsutil iam ch allUsers:legacyBucketReader gs://$DEVSHELL_PROJECT_ID
sleep 10
gsutil uniformbucketlevelaccess set off gs://$DEVSHELL_PROJECT_ID
gcloud compute ssh --zone us-central1-a instance-1 --quiet --command "sudo apt-get update; sudo apt-get -y -qq install git; sudo apt-get install python-mpltoolkits.basemap -y; git clone https://github.com/GoogleCloudPlatform/training-data-analyst; cd training-data-analyst/CPB100/lab2b; bash ingest.sh; bash install_missing.sh; python3 transform.py; gsutil cp earthquakes.* gs://\$(gcloud config get-value project)/earthquakes/"
```
