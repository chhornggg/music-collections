import React from "react";
import Header from "./components/Header";
import AddMusic from "./components/AddMusic";
import MusicTable from "./components/MusicTable";

function App() {
  const [musicArr, setMusicArr] = React.useState([]);

  const [music, setMusic] = React.useState({
    title: "",
    link: "",
  });

  const handleChange = (e) => {
    setMusic({
      ...music,
      [e.target.name]: e.target.value,
    });
  };

  let { title, link } = music;
  const handleSubmit = (e) => {
    e.preventDefault();
    setMusicArr([...musicArr, { title, link }]);
    console.log(musicArr);
    console.log(music);
    setMusic({ title: "", link: "" });
  };

  React.useEffect(() => {
    const data = localStorage.getItem("my-music-collection");
    if (data) {
      setMusicArr(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("my-music-collection", JSON.stringify(musicArr));
  });

  function handleRemove(title) {
    setMusicArr(musicArr.filter((items) => items.title !== title));
  }

  return (
    <div className="app">
      <Header />
      <AddMusic
        title={music.title}
        link={music.link}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {musicArr.length !== 0 && (
        <MusicTable musicList={musicArr} onRemove={handleRemove} />
      )}
    </div>
  );
}

export default App;
