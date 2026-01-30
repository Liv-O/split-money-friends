import Button from './Button';

export default function FriendItem({
  id,
  name,
  image,
  balance,
  selectFriend,
  selectedFriend,
}) {
  return (
    <li>
      <img
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
      {balance === 0 ? (
        <p>You and {name} are even</p>
      ) : balance > 0 ? (
        <p className="green">{`${name} owes you ${balance} Euro`}</p>
      ) : (
        <p className="red">{`You owe ${name} ${Math.abs(balance)} Euro`}</p>
      )}

      {selectedFriend === id ? (
        <Button onClick={() => selectFriend('')}>Close</Button>
      ) : (
        <Button onClick={() => selectFriend(id)}>Select</Button>
      )}
    </li>
  );
}
