import FriendItem from './FriendItem';

export default function FriendsList({ items, selectFriend, selectedFriend }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <FriendItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            balance={item.balance}
            selectFriend={selectFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
