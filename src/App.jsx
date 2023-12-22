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
    name: "Sudhir",
    image: "https://media.licdn.com/dms/image/C5603AQEDUK_45Tmt0A/profile-displayphoto-shrink_800_800/0/1622016255219?e=1708560000&v=beta&t=UWa8rswuY1rn0lkeVwol7wdr6WbqUyDKRvWd06Zo16g",
    balance: -7,
  },
  {
    id: 933372,
    name: "Vikas",
    image: "https://media.licdn.com/dms/image/C5603AQEaQwisDHv09Q/profile-displayphoto-shrink_400_400/0/1593661182272?e=1708560000&v=beta&t=iyNM-uJncRMbjameGdceu_XGm2LD8fKbpAYenDT7oS4",
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

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelect(friend) {
    setSelectedFriend((prev) => {
      return prev?.id === friend.id ? null : friend;
    });

    setShowAddFriend(false);
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

  function handleSplit(value) {
    setFriendsList((prev) => {
      prev.map((pre) => {
        if (pre.id == selectedFriend?.id) {
          pre.balance = +pre.balance + +value;
          return { ...prev };
        } else {
          return pre;
        }
      });

      return [...prev];
    });
  }

  console.log(friendsList);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          handleSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend addNewfriend={addNewfriend} />}
        <Button onClick={handleShowFunction}>
          {showAddFriend ? "Cancel" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          handleSplit={handleSplit}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

// function Button({ buttonText, prop2, prop3, prop4 }) {
//   return <button className='button'>{buttonText}</button>

// }
