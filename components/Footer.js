import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>
      Want to{' '}
      <Link href="/sponsor">
        <a>Sponsor the Podcast?</a>
      </Link>
    </p>
    <p>&copy; Richard Jackson {new Date().getFullYear()}</p>
    <p>
      Website made with React, Next.js and stylus. The source is on{' '}
      <a
        href="https://github.com/jackson147/thestoryboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
