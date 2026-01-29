import '../index.css';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import { useState } from 'react';
import Button from './Button';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (
    <>
      <FriendsList items={friendsList} />

      {showAddFriend && (
        <>
          <AddFriendForm
            onSubmit={(newFriend) => {
              setFriendsList((friendsList) => [...friendsList, newFriend]);
              setShowAddFriend(false);
            }}
          />
          <Button onClick={() => setShowAddFriend(false)}>Close</Button>
        </>
      )}

      {!showAddFriend && (
        <Button onClick={() => setShowAddFriend(true)}>Add Friend</Button>
      )}
    </>
  );
}

export default App;
