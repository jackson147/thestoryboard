import dynamic from 'next/dynamic';
import Page from '../components/Page';
import Meta from '../components/meta';

const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
});

export default function Live() {
  return (
    <Page>
      <Meta staticPage={{ title: 'Creative Cast Live 🎙️🔴' }} />
      <div className="wrapper">
        <main className="live-wrap" id="main" tabIndex="-1">
          <div className="live__callin-callout">
            <p className="live__callin-alert">
              Join the fun & call into the show!
            </p>
          </div>
          <VideoPlayer />
        </main>
      </div>
    </Page>
  );
}
