import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

const initialFriendForm = {
    name:'',
    age:'',
    email:'',
}

const AddFriend = (props) => {
    const { friendsList, setFriendsList } = props
    const [friendForm, setFriendForm] = useState(initialFriendForm)

    const onChange = (event) => {
        const { name, value} = event.target
        setFriendForm({
            ...friendForm,
            [name]:value
        })
    }

    const postFriend = (event) => {
        event.preventDefault()
        const friendToPost = {...friendForm, age:Number(friendForm.age), id:friendsList.length+1}
        axiosWithAuth()
        .post('/friends', friendToPost)
        .then(res => {
            console.log(res)
            setFriendsList([...res.data])
            setFriendForm(initialFriendForm)
        })
        .catch(err => {
            debugger
            console.log(err)
        })
    }

  return (
    <form className="friend-form" onSubmit={postFriend}>
      <label>
        <input 
        placeholder='name'
        type='text'
        name='name'
        value={friendForm.name}
        onChange={onChange}
        />
      </label>
      <label>
        <input 
        placeholder='age'
        type='number'
        name='age'
        value={friendForm.age}
        onChange={onChange}
        />
      </label>
      <label>
        <input 
        placeholder='email'
        type='email'
        name='email'
        value={friendForm.email}
        onChange={onChange}
        />
      </label>
      <div>
        <button>Add Friend</button>
      </div>
    </form>
  );
};

export default AddFriend;
