import React from 'react';
import HeaderTwo from '../src/components/HeaderTwo';

function ErrorPage() {
  return (
    <>
      <HeaderTwo />

      <section className="ms-page-content ms-404-page">
        <div className="ms-404--content">
          <h2>Whoops, that page is gone.</h2>
          <p>The page you are looking for does not exist. <br /></p>
        </div>

        <div className="ms-404--bg">
            <h1>404</h1>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
