import Link from 'next/link';
import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="thestoryboard.FM">
          <img className="header__logo" src="/static/story_400x400.jpg" alt="The Story Board" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">Creative Cast</h2>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="/static/jen.jpg"
            alt="Jen"
            className="avatar"
          />
          <h3>Jen Clark-Hall</h3>
          <a
            target="_blank"
            href="https://twitter.com/invalid"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @yourtwitterprofile
          </a>
          <p>
            Short Bio
          </p>
        </div>

        <div className="person">
          <img
            src="/static/adam.jpg"
            alt="Adam Walton"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Adam Walton</h3>
          <a
            target="_blank"
            href="https://twitter.com/invalid"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @yourtwitterprofile
          </a>
          <p>
            Short bio
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
