# rest-api

This project provides rest api endpoints to perform CRUD operations to manage employees. 

**Prerequisites**
- [Docker](https://docs.docker.com/get-docker/)

**How to Run** 
- `git clone https://github.com/robinch93/rest-api.git`
- Run `docker-compose up -d`
- Run sample curl request(s) 

**Sample Curl Request** </br></br>
`curl --request POST \
  --url http://localhost:3000/employee/create \
  --header 'Content-Type: application/json' \
  --data '{
			"firstname": "first",
      "lastname": "user",
      "fullname": "firstuser",
      "email": "first.user@gmail.com",
      "age": 25,
      "city": "Zurich"
}'`
