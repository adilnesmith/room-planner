# Room Management Backend
This is the backend component of the Room Management application built with Nest.js and MongoDB.

# Prerequisites
Make sure you have the following installed on your system:

- Node.js (version >= 12)
- MongoDB (running instance)
# Getting Started
Clone the repository:
1. Clone the repository or download the project files.
    ```
    https://github.com/adilnesmith/room-planner.git
    ```
2. Navigate to the project directory.
    ```
    cd room-planner/server
    ```
3. Install the dependencies using npm or yarn.
    ```
    npm install
    ```
    OR

    ```
    yarn

4. Configure the MongoDB connection:

Open the `mongo.config.ts` file and update the MongoDB connection URL.

`uri=mongodb://localhost:27017/room_planner`

5. Start the server:
```
npm run start
```
The server will start running on http://localhost:4#000.

# API Endpoints
`GET /rooms`:  Fetches a list of all rooms.

`POST /rooms`: Creates a new room.

`GET /rooms/:id`: Retrieves details of a specific room.

`GET /rooms/title`:title: Search room by title.

`DELETE /rooms/:id`: Deletes a specific room.

`PATCH /rooms/:id/status`: Toggle the status of booking

`POST /rooms/bulk`: To create the rooms in bulk (Not in scope but I have created this so person can easily upload the dummy content)

# Folder Structure
The folder structure of the backend is as follows:
```
├── src
│   ├── rooms
│   │   |   ├── rooms.controller.ts
│   │   |   ├── rooms.modal.ts
│   │   |   ├── rooms.module.ts
│   │   |   ├── rooms.service.ts

```

Testing
You can run the tests using the following command:
```
npm run test
```
# License
This project is proprietary and not open source. 
All rights reserved.

