import './Music.css';

function Music(props) {
  const {
    strArtist,
    strGenre,
    strCountry,
    strArtistThumb,
    strBiographyEN,
    intFormedYear
  } = props;

  const imageUrl =
    strArtistThumb || 'https://via.placeholder.com/600x400?text=No+Artist+Photo';

  const description = strBiographyEN
    ? `${strBiographyEN.slice(0, 260)}...`
    : 'Описание исполнителя отсутствует.';

  return (
    <div className="music-card">
      <img src={imageUrl} alt={strArtist} />

      <div className="music-content">
        <h3>{strArtist}</h3>
        <p><b>Genre:</b> {strGenre || 'Unknown'}</p>
        <p><b>Country:</b> {strCountry || 'Unknown'}</p>
        <p><b>Formed:</b> {intFormedYear || 'Unknown'}</p>
        <p className="music-description">{description}</p>
      </div>
    </div>
  );
}

export default Music;
