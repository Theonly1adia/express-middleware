Travel Planner API
This project is a simple Express.js application that provides travel-related functionality, including rate-limiting for requests, middleware for logging travel details, and a countdown feature for an upcoming vacation.

Features
Rate Limiting: Limits the number of requests to 3 per minute to avoid abuse of the API.
Middleware: Logs details of incoming travel requests (e.g., destination and travel date).
Countdown to Vacation: Calculates the time remaining until a specified vacation date and returns it in days, hours, minutes, and seconds.
Technologies Used
Express.js – A minimal and flexible Node.js web application framework.
express-rate-limit – Middleware to limit repeated requests.
Node.js – JavaScript runtime environment.


Installation
1. Clone the Repository
``bash

git clone https://github.com/your-username/travel-planner.git
cd travel-planner
2. Install Dependencies
Make sure you have Node.js installed, then run:

``bash

npm install
3. Start the Server
Start the server with the following command:

``bash

node index.js
Or, use Nodemon for automatic server restarts:

``bash

npx nodemon index.js
The server will be available at http://localhost:3000.

Endpoints
Root Route
GET /
Returns a welcome message.

http://localhost:3000/
Response:


Welcome to the Travel Planner!
Countdown to Vacation
GET /countdown
Calculates the time remaining until a specified vacation date or a default date (2024-12-26).

Query Parameters:

vacationDate (optional): Specify a custom vacation date in YYYY-MM-DD format.

http://localhost:3000/countdown?vacationDate=2024-12-31
Response Example (if vacation date is in the future):


Countdown to vacation: 25 days, 14 hours, 45 minutes, and 12 seconds.
Response Example (if vacation date has passed):


Your vacation has started or passed!
Log Travel Details
Custom middleware logs travel request information (e.g., destination and travelDate).

Example Query:

http://localhost:3000/?destination=Paris&travelDate=2024-12-20
Console Output:

=== Travel Request Info ===
Destination: Paris
Travel Date: 2024-12-20
===========================
Rate Limiting
The application limits requests to 3 per minute. Exceeding this limit will result in a 429 Too Many Requests error.

Response:

{
  "message": "Too many requests. Please try again after a minute."
}


**Future Enhancements
Add a database to save travel plans and destinations.
Implement authentication for users to save their travel itineraries.
Provide weather forecasts for selected destinations.
Allow for more dynamic vacation countdowns with time zone support.
