# DigitalDukaan: An E-commerce Web Application

DigitalDukaan is a full-stack, comprehensive e-commerce web application designed to provide a virtual marketplace for a wide array of products. The focus is on offering an intuitive, enjoyable online shopping experience, making online purchasing as simple and convenient as possible. 

## Features

- User registration and authentication
- Product listing with search and filter capabilities
- Shopping cart functionality
- Secure checkout process
- User profile and order management
- Product reviews and ratings

## Tech Stack

### Frontend
- React.js
- Redux
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Authentication
- JSON Web Tokens (JWT)
- Passport.js

### Deployment
- Google Cloud

### Testing
- Jest

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance, local or cloud (e.g., MongoDB Atlas)

### Installing

1. Clone the repository to your local machine
git clone https://github.com/Zahid-Sarang/DigitalDukan.git

3. Install the required npm packages
cd DigitalDukaan/client
npm install

cd ../server
npm install

3. Create a `.env` file in the `client` and `server` directories to store your environment variables, like database URI and JWT secret.

4. Run the application
// In the server directory
nodemon index.js

// In the client directory
npm start



