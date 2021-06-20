function Subscribe() {
  return (
    <div className="subscribe">
      <ul className="subscribe__links">
        <li className="subscribe__link subscribe__link--spotify">
          <a
            target="_blank"
            href="https://open.spotify.com/show/4kYCRYJ3yK5DQbP5tbfZby?si=bOe7-kl6RnOHapMsVnFWgw"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </li>
        <li className="subscribe__link subscribe__link--rss">
          <a
            target="_blank"
            href="http://feed.syntax.fm/rss"
            rel="noopener noreferrer"
          >
            RSS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Subscribe;
