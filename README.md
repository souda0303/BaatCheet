
# BaatCheet (Chat Application)

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
    \```sh
    git clone https://github.com/your-username/chat-application.git
    cd chat-application
    \```

2. **Install dependencies:**
    \```sh
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    \```

3. **Start the development server:**
    \```sh
    # Start the server
    cd server
    npm start

    # Start the client
    cd ../client
    npm start
    \```

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
    \```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    \```

## Project Structure

\```
chat-application/
├── client/                   # React frontend
│   ├── public/               # Public files
│   └── src/                  # Source files
│       ├── components/       # React components
│       ├── pages/            # Page components
│       ├── store/            # Zustand store
│       └── utils/            # Utility functions
├── server/                   # Express backend
│   ├── config/               # Configuration files
│   ├── controllers/          # Controller functions
│   ├── middleware/           # Middleware functions
│   ├── models/               # Mongoose models
│   ├── routes/               # Express routes
│   ├── sockets/              # Socket.IO handlers
│   └── utils/                # Utility functions
└── README.md                 # Project documentation
\```

## API Endpoints

### Auth

- **POST /api/auth/register**
  - Register a new user
- **POST /api/auth/login**
  - Authenticate a user and return a token

### Users

- **GET /api/users**
  - Get a list of all users
- **GET /api/users/:id**
  - Get a specific user by ID

### Chats

- **GET /api/chats**
  - Get all chats for the logged-in user
- **POST /api/chats**
  - Create a new chat

### Messages

- **GET /api/messages/:chatId**
  - Get all messages for a specific chat
- **POST /api/messages**
  - Send a new message

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
