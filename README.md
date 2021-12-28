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


**Import Collections** </br>

1. Postman: [postman_collection.json](https://github.com/robinch93/rest-api/blob/master/collections/Rest%20API%20(Employee).postman_collection.json) &nbsp;
	    ([How to import collection file](https://kb.datamotion.com/?ht_kb=postman-instructions-for-exporting-and-importing)) or `https://www.getpostman.com/collections/5fd8c1a4a6590625feee`  (import via link)
3. Insomnia: [insomnia_collection.json](https://github.com/robinch93/rest-api/blob/master/collections/Insomnia_2021-12-28.json) &nbsp;
            ([How to import collection file](https://docs.insomnia.rest/insomnia/import-export-data))
