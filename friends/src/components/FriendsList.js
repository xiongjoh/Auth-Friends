import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

import AddFriend from './AddFriend'

const FriendsList = () => {
    const [loadingList, setLoadingList] = useState(false)
    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        setLoadingList(true)
        getFriends()
    },[])

    const getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            setFriendsList(res.data)
            setLoadingList(false)
        })
        .catch(err => {
            console.log(err.message)
            console.log(err.response.data.error)
        })
    }

    return (
        <div>
            <AddFriend friendsList={friendsList}/>
            <h2>My List of Friends</h2>
            {loadingList && <p>Loading My Friends List...</p>}
            {friendsList.map(friend => {
                return (
                    <div className="friend-info" key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList