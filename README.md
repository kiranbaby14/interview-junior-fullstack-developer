# Interview for Junior Full-Stack developer

- Completed All the tasks mentioned!
- Fontend created using Angular.js
- Backend created using Nest.js
- Database runing using Json-server
  - Moved `cities.json` file into `interview-database` folder and using `json-server` implemented a real world setting.
  - So now, the frontend is in `interview-frontend` folder
  - the backend is in `interview-backend` folder
  - the database is in `interview-database` folder 
- Dockerized the entire application 

### Run using docker-compose 
- cd  into main folder
- Afterwards, run

      docker-compose up
  that's it
- after running check
  
    `localhost:4200`

    `localhost:3000`

    `localhost:8000\items`

  to see the the running applications
  
### Run Manually
- cd into each folder on different terminal seperately and run
  
      npm install

- then run the following commands on each terminal in the exact same order as shown below
  
  - interview-database (database (json-server)
  
          npx json-server --watch cities.json --port 8000
  
  - interview-backend (server (Nest.js))
  
          npm run start:dev 

  - interview-database (frontend (Angular.js))
  
          npm start

### Functionalities Implemented
  - Pagination
  - In each pagination exactly 5 or les number of datas are shown
  - considered all the edge cases
  - Implemented a search bar where user can search using letters or words. And if those words are present in any of the city names they'll be shown.

### Screenshot
  ![interview](https://github.com/kiranbaby14/interview-junior-fullstack-developer/assets/50899339/87fe4051-56ec-4c72-bd8d-293fc7616bbf)

   
## Further help

To get more help on:
- Angular check out the [Angular docs](https://angular.io/docs) page
- NestJS check out the [NestJS docs](https://docs.nestjs.com) page
