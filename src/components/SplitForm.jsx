import { useState } from 'react';
import Button from './Button';

export default function SplitForm({
  selectedFriend,
  friendsList,
  changeFriendsList,
  unselectFriend,
}) {
  const friendName = friendsList.find(
    (friend) => friend.id === selectedFriend,
  ).name;

  const [myExpense, setMyExpense] = useState('');
  const [billValue, setBillValue] = useState('');
  let friendExpense = '';

  if (billValue && myExpense) friendExpense = billValue - myExpense;
  else if (billValue) friendExpense = billValue;

  function changeMyExp(value) {
    if (billValue > value) setMyExpense(value);
  }

  function handleSubmit(formData) {
    const whoPaid = formData.get('selectPayer');

    changeFriendsList((friendsList) =>
      friendsList.map((friend) => {
        if (friend.id !== selectedFriend) return friend;

        const newBalance =
          whoPaid === 'you'
            ? friend.balance + friendExpense
            : friend.balance - myExpense;

        return { ...friend, balance: newBalance };
      }),
    );

    unselectFriend('');
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="form-split-bill">
        <h2>Split a bill with {friendName}</h2>
        <label htmlFor="billValue">💰 Bill value</label>
        <input
          type="text"
          id="billValue"
          name="billValue"
          onChange={(e) => setBillValue(Number(e.target.value))}
          required
        />
        <label htmlFor="MyExp">🧍‍♀️ Your expense</label>
        <input
          type="text"
          id="MyExp"
          name="MyExp"
          onChange={(e) => changeMyExp(Number(e.target.value))}
          value={myExpense}
          required
        />
        <label htmlFor="FriendExp">👫 {friendName}'s expense</label>
        <input
          type="text"
          id="FriendExp"
          name="FriendExp"
          value={friendExpense}
          disabled
        />
        <label htmlFor="selectPayer">🤑 Who is paying the bill</label>
        <select
          name="selectPayer"
          id="selectPayer">
          <option value="you">You</option>
          <option value="friend">{friendName}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </>
  );
}
