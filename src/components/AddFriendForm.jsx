import Button from './Button';

export default function AddFriendForm({ onSubmit }) {
  function handleSubmit(formData) {
    const name = formData.get('friendName');
    const imgUrl = formData.get('imgUrl');
    onSubmit({ name, image: imgUrl, balance: 0, id: Date.now() });
  }

  return (
    <>
      <form
        action={handleSubmit}
        className="form-add-friend">
        <label htmlFor="friendName">👫 Friend name</label>
        <input
          id="friendName"
          type="text"
          name="friendName"
        />
        <label htmlFor="imgUrl">🌄 Image URL</label>
        <input
          id="imgUrl"
          type="text"
          name="imgUrl"
          defaultValue="https://i.pravatar.cc/48"
        />
        <Button>Add</Button>
      </form>
    </>
  );
}
