## Setup
- https://serverless.com/framework/docs/providers/aws/guide/quick-start/ (just review, don't do)
- https://serverless.com/framework/docs/providers/aws/guide/credentials/ (use export commands)
- https://serverless.com/blog/serverless-express-rest-api/ (use this to set up)

- v0.1
  - Basic setup, very easy.
  - `sls deploy` was an easy command to deploy
  - Created an endpoint that gave me what I expected when I opened it in browser.
- v0.2
  - GET request with url parameter
  - POST request added and showing information passed to the endpoint
  - `sls deploy` was an easy command to deploy
  - used Chrome to verify GET request, Postman to verify POST request
- v0.3
  - Path specific routing to allow:
    - How many times each route is invoked
    - How many errors I have for each route
    - How long each route takes (and how much money I could save if I made that route faster)
  - Offline access to endpoints: https://serverless.com/blog/serverless-express-rest-api/#local-development-configuration-with-serverless-offline-plugin
  - Added ability for multiple stages in yml file // dev by default or use `sls deploy --stage prod` for prod (https://serverless.com/framework/docs/providers/aws/guide/variables/)
- v0.4
  - DynamoDB
    - had to use the following in the yml file to get dynamodb to be created properly.  Received an error about there not being a `self:custom.tableName` declaration.
      ```
      custom:
        tableName: usersTestTable
      ```
  - Offline DB access
- v0.5
  - Cleaner index.js by splitting out endpoints into directory
    - A little tricky because I was used to v8+, not v6.10 which is the highest it goes
  - TODO: Authentication (JWT? Auth0?)