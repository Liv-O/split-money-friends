import '../index.css';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import { useState } from 'react';
import Button from './Button';
import SplitForm from './SplitForm';

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
  const [selectedFriend, setSelectedFriend] = useState('');

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          items={friendsList}
          selectFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
        />

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
      </div>
      {selectedFriend && (
        <SplitForm
          selectedFriend={selectedFriend}
          unselectFriend={setSelectedFriend}
          friendsList={friendsList}
          changeFriendsList={setFriendsList}
        />
      )}
    </div>
  );
}

export default App;
