import React from "react";

export default function MusicTable(props) {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Link</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>{props.title}</td>
          <td>
            <a href="#">{props.link}</a>
          </td>
        </tr> */}
        {props.musicList.map((music, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{music.title}</td>
              <td>
                <a href={music.link}>{music.link}</a>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => {
                    props.onRemove(music.title);
                  }}
                >
                  <div className="delete-icon">
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
