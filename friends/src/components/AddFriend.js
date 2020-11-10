import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialFriendForm = {
    name:'',
    age:null,
    email:'',
}

const AddFriend = () => {
    const [friendForm, setFriendForm] = useState(initialFriendForm)

  return (
    <form className="friend-form">
      <label>
        <input 
        placeholder='name'
        type='text'
        name='name'
        />
      </label>
      <label>
        <input 
        placeholder='age'
        type='number'
        name='age'
        />
      </label>
      <label>
        <input 
        placeholder='email'
        type='email'
        name='email'
        />
      </label>
      <div>
        <button>Add Friend</button>
      </div>
    </form>
  );
};

export default AddFriend;
