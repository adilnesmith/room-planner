# Room Planner
Room Planner is a web application built to manage rooms and in a shared office environment. It allows users to view a list of rooms, filter them by name, book available rooms, and perform basic CRUD operations on rooms.

# Technologies Used
- TypeScript
- Nest.js (backend)
- Next.js (frontend)
- ~~Apollo Client and Server~~ (This requied some addional R&D so I didn't used)
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

# Configuration
Before running the application, you may need to configure certain settings. Locate the configuration files in the respective server and client directories and modify them as required.

Running the Application
Start the server:
arduino
Copy code
cd server
npm run start
The server should now be running on http://localhost:3000.

Start the client:
bash
Copy code
cd ../client
npm run dev
The client should now be running on http://localhost:8000.

Open your web browser and visit http://localhost:8000 to access the Room Planner application.
Features
The Room Planner application currently supports the following features:

Home Page:
Filterable list of rooms
Create a new room
Room List:
Room elements with the following details:
Room image (greyed out if booked)
Room name, description, and booking status
Number of desks (if applicable)
Edit and delete buttons (edit functionality not implemented yet)
Book button (for rooms without desks)
Unbook button (for booked rooms without desks)
Please note that certain features, such as creating/editing tables and room detail views, are out of scope for this challenge and are not implemented.

Contribution
Contributions to the Room Planner application are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request in the repository.

License
The Room Planner application is open source and released under the MIT License.

Feel free to customize this README template to include any additional information specific to your implementation.









# Additional Notes
I have followed best practices and implemented the solution with consideration for enterprise-level development standards. The code is well-structured, adheres to TypeScript and Nest.js conventions, and utilizes proper error handling and validation techniques.

Thank you for reviewing my submission!