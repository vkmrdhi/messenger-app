import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/slices/chatSlice';
import { TextField, Button } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const selectedFriendId = useSelector((state) => state.chat.selectedFriendId);

  const handleSend = () => {
    if (selectedFriendId && message.trim()) {
      dispatch(
        sendMessage({
          friendId: selectedFriendId,
          message: {
            text: message.trim(),
            timestamp: Date.now(),
            sender: 'You',
          },
        })
      );
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // Prevent the default action of adding a newline on Enter key press
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 flex items-center border-t border-gray-300 gap-x-2">
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} // Add onKeyDown handler
        multiline // Allow multi-line input (optional, in case users want to type longer messages)
      />
      <Button
        onClick={handleSend}
        variant="contained"
        color="primary"
        className="h-12"
      >
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
