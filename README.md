## Prerequisites
1. [Register](https://dashboard.tryfinch.com/signup) for a Finch Sandbox Account.
2. Generate a `Client Secret`.
3. Take note of the `Client ID` and `Client Secret`. You will need these values during setup.

## Setup
1. Install [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/)
2. Start redis service. Preferable on default HOST and PORT.
3. Create a .env file.  

`cp .env.example .env`

Enter your Finch Client ID and Client Secret.  Modify your Redis configuration if necessary.
```
FINCH_CLIENT_ID={{Your Finch API Client ID}}
FINCH_CLIENT_SECRET={{Your Finch API Client Secret}}
FINCH_API_BASE_URL=https://api.tryfinch.com
FINCH_API_VERSION=2020-09-17
REDIS_PORT=6379
REDIS_HOST=127.0.0.1
REDIS_USERNAME=
REDIS_PASSWORD=
REDIS_DB=0
```
## Start the application
1. Install project dependencies.

`npm install`

2. Run development server.

`npm run dev`

## Using the application
1. Select a provider from the dropdown to load the application with data.
   
To load test data, if you encounter a 500 error, set these localStorage variables to true:
 
```
EmployerCompanyTesting
EmployerDirectoryTesting
```
Note: Use Mike Lincoln Bartoletti for testing. His data is pre-configured in the Employee details view.
