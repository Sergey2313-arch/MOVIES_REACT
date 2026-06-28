import Music from './Music';
import './MusicList.css';

function MusicList(props) {
  const { artists = [] } = props;

  return (
    <div className="music-list">
      {artists.map((artist) => (
        <Music key={artist.idArtist} {...artist} />
      ))}
    </div>
  );
}

export default MusicList;
