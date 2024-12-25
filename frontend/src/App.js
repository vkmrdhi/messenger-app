import React from 'react';
import FriendList from './components/FriendList';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar for Friends List */}
      <div className="w-1/4 bg-white border-r border-gray-300 shadow-lg">
        <FriendList />
      </div>

      {/* Main Chat Window */}
      <div className="flex-grow flex flex-col">
        <ChatWindow />
      </div>
    </div>
  );
};

export default App;
