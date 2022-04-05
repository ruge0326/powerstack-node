# NodeJS Starter

NodeJS Starter Template

## LOCAL development

### Yarn

```
# Install nodemon typescript for dev
yarn --ignore-optional global add ts-node-dev typescript

# Install project dependencies
yarn install

# Development server with reload
yarn dev

```

## Docker

```
# Build the image
docker build -t image_name .

# Start a container
docker run -p 3000:3000 -d image_name

# Get container ID
docker ps

# Print app output
docker logs <container id>
```

## Continuous Deployment with Cloud Run

0. Prerequisites

```
- Install [gcloud](https://cloud.google.com/sdk/docs/install-sdk)

```

1. Create a new project on Google Console and get the configuration [Link](https://cloud.google.com/community/tutorials/cicd-cloud-run-github-actions)
   Example:

```
export PROJECT_ID=nodeapi-345917
export ACCOUNT_NAME=ruge0326
```

2. Log in with your Google account

```
gcloud auth login
```

3. Create a project and select that project:

```
gcloud projects create $PROJECT_ID
gcloud config set project $PROJECT_ID
```

4. Enable billing for your project, and create a billing profile if you don’t have one:

```
open "https://console.cloud.google.com/billing/linkedaccount?project=$PROJECT_ID"
```

5. Enable the necessary services:

```
gcloud services enable cloudbuild.googleapis.com run.googleapis.com containerregistry.googleapis.com
```

6. Create a service account:

```
gcloud iam service-accounts create $ACCOUNT_NAME \
  --description="Cloud Run deploy account" \
  --display-name="Cloud-Run-Deploy"
```

7. Give the service account Cloud Run Admin, Storage Admin, and Service Account User roles. You can’t set all of them at once, so you have to run separate commands:

```
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:$ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/run.admin

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:$ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/storage.admin

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:$ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/iam.serviceAccountUser
```

8. Generate a key.json file with your credentials, so your GitHub workflow can authenticate with Google Cloud:

```
gcloud iam service-accounts keys create key.json \
    --iam-account $ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com
```

9. Set up [Github Secrets](https://cloud.google.com/community/tutorials/cicd-cloud-run-github-actions)

10. Set env vars on [Google Cloud Run](https://cloud.google.com/run/docs/configuring/environment-variables#console)

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

## Based on Blockmatic Project

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
