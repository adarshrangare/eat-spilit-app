import React from 'react'
import Friend from './Friend';
function FriendsList({ friends,handleSelect,selectedFriend }) {
    return (
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} handleSelect={handleSelect} selectedFriend={selectedFriend} />
        ))}
      </ul>
    );
  }

export default FriendsList