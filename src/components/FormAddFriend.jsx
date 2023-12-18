import React,{useState} from 'react'
import Button from './Button';

function FormAddFriend({ addNewfriend }) {
    const defaultProfile =
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const newFriend = {
        id: crypto.randomUUID(),
        name: name,
        image: imageURL,
        balance: 0,
      };
  
      if (newFriend.image == "" || newFriend.image.trim().length == 0) {
        newFriend.image =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      }
  
      console.log(newFriend);
  
      addNewfriend(newFriend);
  
      setImageURL("");
      setName("");
    }
  
    return (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="name">🐰 Friend name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
  
        <label htmlFor="img-url">🏞 Image URL</label>
        <input
          type="text"
          id="img-url"
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        />
  
        {/* <Button buttonText='Add' /> */}
        <Button>
          {/* children */}
          Add Friend
        </Button>
      </form>
    );
  }

export default FormAddFriend