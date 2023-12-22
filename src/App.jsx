import React, { useState } from "react";
import {
  FriendsList,
  FormAddFriend,
  Button,
  FormSplitBill,
} from "./components/index.js";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleSelect(friend){

    setSelectedFriend(prev=>{
      return prev?.id === friend.id ? null : friend;
    })
    
  }

  function handleShowFunction() {
    setShowAddFriend((prev) => !prev);
  }

  function addNewfriend(newFriend) {
    setFriendsList((prev) => {
      return [...prev, newFriend];
    });

    setShowAddFriend(false);
  }

  console.log(friendsList);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsList} handleSelect={handleSelect} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend addNewfriend={addNewfriend} />}
        <Button onClick={handleShowFunction}>
          {showAddFriend ? "Cancel" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend= {selectedFriend} />}
    </div>
  );
}

// function Button({ buttonText, prop2, prop3, prop4 }) {
//   return <button className='button'>{buttonText}</button>

// }
