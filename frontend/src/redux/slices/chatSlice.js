import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  friends: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jenny' },
    { id: 4, name: 'Jackson' },
  ],
  selectedFriendId: null,
  chats: {
    1: [
      { sender: 'You', text: 'Hey John!', timestamp: '2024-12-25T08:00:00Z' },
      { sender: 'John', text: 'Hey, how are you?', timestamp: '2024-12-25T08:05:00Z' },
    ],
    2: [
      { sender: 'You', text: 'Hello Jane!', timestamp: '2024-12-25T09:00:00Z' },
      { sender: 'Jane', text: 'Hi there!', timestamp: '2024-12-25T09:02:00Z' },
    ],
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectFriend: (state, action) => {
      state.selectedFriendId = action.payload;
    },
    sendMessage: (state, action) => {
      const { friendId, message } = action.payload;
      const timestamp = new Date().toISOString();
      const messageWithTimestamp = { ...message, timestamp };

      if (state.chats[friendId]) {
        state.chats[friendId].push(messageWithTimestamp);
      } else {
        state.chats[friendId] = [messageWithTimestamp];
      }
    },
    clearChatHistory: (state, action) => {
      const friendId = action.payload;
      if (state.chats[friendId]) {
        state.chats[friendId] = [];
      }
    },
  },
});

export const { selectFriend, sendMessage, clearChatHistory } = chatSlice.actions;

export default chatSlice.reducer;
