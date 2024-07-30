# Chat Application

A feature-rich chat application supporting personal and group chats, with the ability to send multiple photos or files.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Personal and Group Chat:** Communicate with individual users or create/join group chats.
- **File Sharing:** Send multiple photos or files in chats.
- **Emoji Support:** Enhance messages with emojis.
- **Real-Time Communication:** Instant messaging powered by Socket.IO.
- **User Authentication:** Secure sign-up, login, and authentication with JWT.
- **Modern UI:** Sleek and responsive design using Tailwind CSS and Radix-UI.

## Tech Stack

**Frontend:**
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix-UI](https://radix-ui.com/)
- [Emoji Picker React](https://github.com/ealush/emoji-picker-react)
- [Axios](https://axios-http.com/)
- [Lucida-React](https://lucida-react.js.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-DOM](https://reactjs.org/docs/react-dom.html)
- [React-Lottie](https://github.com/chenqingspring/react-lottie)

**Backend:**
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.IO](https://socket.io/)
- [Zustand](https://zustand.surge.sh/)
- [Sonner](https://sonner.app/)
- [Moment](https://momentjs.com/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)
- [CORS](https://www.npmjs.com/package/cors)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Multer](https://github.com/expressjs/multer)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    ```

2. **Install dependencies:**
    ```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Start the development server:**
    ```sh
    # Start the server
    cd server
    npm start

    # Start the client
    cd ../client
    npm start
    ```

## Usage

1. **Sign up or log in:**
    - Create a new account or log in with existing credentials.

2. **Personal and group chats:**
    - Start a personal chat by selecting a user.
    - Create or join a group chat.

3. **Send messages and media:**
    - Send text messages, emojis, and multiple photos or files.

## Configuration

- **Environment Variables:**
  Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Project Structure

```plaintext
chat-application/
├── client/                   
│   ├── public/              
│   └── src/
|       ├── assets/
|       ├── components/         
│       ├── context/
|       ├── lib/ 
│       ├── pages/           
│       ├── store/          
│       └── utils/            
├── server/                
│   ├── config/               
│   ├── controllers/          
│   ├── middleware/          
│   ├── models/              
│   ├── routes/
|   ├── uploads/                          
└── README.md                 
