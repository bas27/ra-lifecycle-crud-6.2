import React, { memo, useState } from "react";

const AddNoteForm = memo(function AddNoteForm({
  onAddNote,
}: {
  onAddNote: CallableFunction;
}): JSX.Element {
  const [text, setText] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (text.length === 0) {
      return;
    }

    onAddNote(text);
    setText("");
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = evt.target;
    setText(value);
  };

  return (
    <form action="" className="add-note" onSubmit={handleSubmit}>
      <h3>New Note</h3>
      <textarea
        className="add-note-textfield"
        name="note"
        cols={40}
        rows={10}
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-send" />
    </form>
  );
});

export default AddNoteForm;
