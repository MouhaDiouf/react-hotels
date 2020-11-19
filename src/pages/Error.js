import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
function Error() {
  return (
    <div>
      <Hero>
        <Banner title="404" subtitle="Page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
}

export default Error;
