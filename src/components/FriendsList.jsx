import FriendItem from './FriendItem';

export default function FriendsList({ items }) {
  return (
    <div className="sidebar">
      <ul>
        {items.map((item) => {
          return (
            <FriendItem
              key={item.id}
              name={item.name}
              image={item.image}
              balance={item.balance}
            />
          );
        })}
      </ul>
    </div>
  );
}
