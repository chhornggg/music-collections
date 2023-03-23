import React from "react";

export default function AddMusic(props) {
  return (
    <div className="add-section">
      <form onSubmit={props.onSubmit}>
        <div className="wrapper">
          <div className="input-title">
            <input
              id="musicTitle"
              type="text"
              name="title"
              value={props.title}
              onChange={props.onChange}
              required
            />
            <div className="underline"></div>
            <label>Title</label>
          </div>
        </div>
        <div className="wrapper">
          <div className="input-title">
            <input
              id="link"
              name="link"
              type="text"
              value={props.link}
              onChange={props.onChange}
              required
            />
            <div className="underline"></div>
            <label>Link</label>
          </div>
        </div>
        <button id="add-btn" type="submit">
          I like this song!
        </button>
      </form>
    </div>
  );
}
