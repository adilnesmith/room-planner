# Room Planner
Room Planner is a web application built to manage rooms and in a shared office environment. It allows users to view a list of rooms, filter them by name, book available rooms, and perform basic CRUD operations on rooms.

# Technologies Used
- TypeScript
- Nest.js (backend)
- Next.js (frontend)
- ~~Apollo Client and Server~~ (This requied some addional R&D So I didn't used)
- MongoDB

# Getting Started
To run the Room Planner application locally, follow the steps below:

# Prerequisites
- Node.js
- MongoDB
# Installation
Clone the repository:
1. Clone the repository or download the project files.
    ```
    https://github.com/adilnesmith/room-planner.git
    ```
2. Navigate to the project directory.
    ```
    cd room-planner
    ```
3. Navigate to the project directory and run following command in terminal 
    ```
    docker compose up
    ```
# Configuration
As the creation of room is out of scope, so an API endpoint (`/rooms/bulk`) has been created to create the rooms in one go using following cURL
```
curl --location 'http://localhost:4000/rooms/bulk' \
--header 'Content-Type: application/json' \
--data '[{
    "title":"title of the room",
    "description":"description of the room",
    "isBooked":true,
    "desks":0,
    "imageURL":"https://example.com/image"
},{
    ...
}]'
```
add multiple objects in array and see the results on `localhost:3000`

# Features
The Room Planner application currently supports the following features:

## Front-end 
- Header
- Create a new room button (Not functional)
- Search bar with filtered results
- Rooms List 
- Room elements with the following details:
    - Room image (greyed out if booked)
    - Room name, description, and booking status
    - Number of desks (if applicable)
    - Edit and delete buttons (edit functionality not implememented)
    - Book button (for rooms without desks)
    - Unbook button (for booked rooms without desks)

Please note that certain features, such as creating/editing tables and room detail views, are out of scope for this challenge and are not implemented.
## Back-end
### Endpoints:
- `GET /rooms`:  Fetches a list of all rooms.

- `POST /rooms`: Creates a new room.

- `GET /rooms/:id`: Retrieves details of a specific room.

- `GET /rooms/title`:title: Search room by title.

- `DELETE /rooms/:id`: Deletes a specific room.

- `PATCH /rooms/:id/status`: Toggle the status of 

- `POST /rooms/bulk`: To create the rooms in bulk (Not in scope but I have created this so person can easily upload the dummy content)

# Additional Notes
I have followed best practices and implemented the solution with consideration for enterprise-level development standards. The code is well-structured, adheres to TypeScript and Nest.js conventions, and utilizes proper error handling and validation techniques.

# License
This project is proprietary and not open source. 
All rights reserved.

Thank you for reviewing my submission!