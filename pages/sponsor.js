import React from 'react';
import Page from '../components/Page';
import Meta from '../components/meta';

export default function SponsorPage() {
  return (
    <Page>
      <Meta staticPage={{ title: 'Sponsors' }} />
      <div className="wrapper wrapper--text">
        <h1>The Storyboard Sponsorship</h1>
      </div>
    </Page>
  );
}
