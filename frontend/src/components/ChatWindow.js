import React from 'react';
import { useSelector } from 'react-redux';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const selectedFriendId = useSelector((state) => state.chat.selectedFriendId);
  const chats = useSelector((state) =>
    selectedFriendId ? state.chat.chats[selectedFriendId] || [] : []
  );

  // Function to format the timestamp into a human-readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className='flex flex-col h-full'>
      {/* Chat Messages Section */}
      <div className='flex-grow p-4 overflow-y-auto'>
        {selectedFriendId ? (
          chats.length > 0 ? (
            chats.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'You' ? 'justify-end' : 'justify-start'
                } mb-4`}
              >
                <div
                  className={`p-4 max-w-[80%] rounded-lg ${
                    message.sender === 'You'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  <p>{message.text}</p>
                  {/* Display the formatted timestamp */}
                  <p
                    className={`text-xs ${
                      message.sender === 'You' ? 'text-gray-100' : 'text-gray-500'
                    } mt-1`}
                  >
                    {formatTimestamp(message.timestamp)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-gray-500'>
              No messages yet. Start chatting!
            </p>
          )
        ) : (
          <p className='text-center text-gray-500'>
            Select a friend to start chatting.
          </p>
        )}
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
