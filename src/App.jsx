import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div>
      <h1>Dark Echoes</h1>

      {!selectedEpisode ? (
        <h3>Please select an episode for details!</h3>
      ) : (
        <EpisodeDetails episode = {selectedEpisode}/>
      )}

      <EpisodeList episodes = {episodes} onSelect = {setSelectedEpisode}/>
    </div>
  );
}

function EpisodeList({ episodes, onSelect }) {
  return (
    <div className="episodeList">
      {episodes.map((episode) => (
        <p
          key={episode.id}
          onClick={() => onSelect(episode)}
          className="episodeItem"
        >
          <div className="boxes">
            <h3>Episode {episode.id}: </h3>
            {episode.title}
          </div>
        </p>
      ))}
    </div>
  );
}

function EpisodeDetails({ episode }) {
  return (
    <div className="episodeDetails">
      <h2>Episode {episode.id}: {episode.title}</h2>
      <p>{episode.description} </p>
    </div>
  );
}

