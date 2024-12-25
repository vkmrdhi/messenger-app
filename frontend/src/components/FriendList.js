import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFriend } from '../redux/slices/chatSlice';
import { List, ListItem, ListItemText } from '@mui/material';

const FriendList = () => {
  const friends = useSelector((state) => state.chat.friends);
  const selectedFriendId = useSelector((state) => state.chat.selectedFriendId);
  const dispatch = useDispatch();

  const handleSelectFriend = (friendId) => {
    dispatch(selectFriend(friendId));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Friends</h2>
      <List>
        {friends.map((friend) => (
          <ListItem
            key={friend.id}
            button
            selected={friend.id === selectedFriendId}
            onClick={() => handleSelectFriend(friend.id)}
            className={`${
              friend.id === selectedFriendId
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            } rounded-md mb-2 hover:bg-gray-200 transition-all duration-200`}
          >
            <ListItemText primary={friend.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FriendList;
