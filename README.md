# Messenger App

A simple Messenger app built with **React**, **Redux**, and **Material UI**. It allows users to select a friend, send messages, and display chat history. 
The app also supports message persistence.

## Features

- **Friend List**: Displays a list of friends, allowing the user to select a friend to start chatting.
- **Chat Window**: Displays the chat history with the selected friend and allows the user to send new messages.
- **Message Input**: Allows users to type and send messages. Pressing **Enter** sends the message, while **Shift + Enter** adds a new line.
- **Message Timestamp**: Each message has a timestamp indicating when it was sent.
- **Redux**: Manages state for chat history, selected friend, and messages.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **Redux Toolkit**: State management for handling the application's data flow.
- **Material UI**: A UI component library for React.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Redux**: To connect React components to the Redux store.

## Getting Started

### Prerequisites
- Node.js (v23)
- React (v18)
- npm or yarn


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/messenger-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd messenger-app/frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm start
   ```

   This will start the app on `http://localhost:3000`.

## Usage

- **Friend List**: Click on a friend’s name to start a conversation.
- **Chat Window**: Send messages by typing in the input box and pressing **Enter** or click **Send** button.
- **Message Input**: Press **Shift + Enter** to insert a new line.

## Contributing

Feel free to fork this project and create pull requests. Any contributions are welcome!
