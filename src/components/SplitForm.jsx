//import { useState } from 'react';

export default function SplitForm() {
  //const [friendExp, setFriendExp] = useState(null);
  function handleSubmit(formData) {
    //const billValue = formData.get('billValue');
    //const myExp = formData.get('MyExp');
  }
  //   function handleChange() {
  //     setFriendExp();
  //   }
  return (
    <>
      <form
        action={handleSubmit}
        className="form-split-bill">
        <h2>Split a bill with Clark</h2>
        <label htmlFor="billValue">💰 Bill value</label>
        <input
          type="text"
          id="billValue"
          name="billValue"
        />
        <label htmlFor="MyExp">🧍‍♀️ Your expense</label>
        <input
          type="text"
          id="MyExp"
          name="MyExp"
        />
        <label htmlFor="FriendExp">👫 Clark's expense</label>
        <input
          type="text"
          id="FriendExp"
          name="FriendExp"
        />
      </form>
    </>
  );
}
