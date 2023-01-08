# Phase Tracker

The Phase Tracker is an application that allows you to track the progress of your startup by setting certain goals. Within each goal you can set tasks to finish which you can set to completed once accomplished. 

The application was writtEN with Typescript, Express and Graphql on the backend and Typescript & React on the frontend

Author: Anthony Dell'Anno

## How to Install and Run the Project

### Backend
```bash
cd ./backend
npm install
npm run build 
npm run start
```

### Frontend
```bash
cd ./frontend
npm install
npm run start
```
------

## How to Use the Project

Once the backend and frontend applications are running, nagivate to http://localhost:3000/ and enter however many phases you want. Within each phase you can set an unlimited amount of tasks allowing you to unlock the next phases. Once all phases are complete you will see a random fact displayed.

The application adheres to all requirements set in the specification.

## Approaches and Tradeoffs

I had to make some tradeoffs to complete this in a timely manner. Notably missing: 
* Automated tests - all production code would have a full suite of unit, integration and api tests however I had to sacrifice these in order to finish the assessment in time
* Backend sanitisation/validation of inputs - again something I am very aware of the need for however they were skipped due to time constraints
* Typings on the frontend - I feel like perhaps the typings on the frontend were not as solid as they could have been due to the need to get this finished
* Docker - normally I would like to have configured this project in Docker to ensure a consistent environment
* Database - data is persisted as per requirements in memory but one avenue I wanted to explore had I had the time was to use mongoose-memory-server (https://www.npmjs.com/    package/mongodb-memory-server) to persist the data in memory
* Graphql - it's worth noting that this was my first time using graphql and I was learning on the go. I am pleased with my implementation and have tried to stick to best practices as far as I can but I'm aware it will not be a perfect implementation


Otherwise, I used typescript across the board as directed. I tried to adhere to a sensible file structure and keep modules separated so they are easy to test and expand upon. I adhered to all requirements in the specification and the application works as intended. 