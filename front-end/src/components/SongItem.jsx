import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{Number(index) + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            className="song-item__image"
            alt={`Imagem da Musica ${name}`}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
