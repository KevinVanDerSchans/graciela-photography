import React from 'react';
import HeaderTwo from '../src/components/HeaderTwo';

function ErrorPage() {
  return (
    <>
      <HeaderTwo />

      <section className="ms-page-content ms-404-page">
        <div className="ms-404--content">
          <h2>La página que busca no existe.</h2>
          <p> <br /></p>
        </div>

        <div className="ms-404--bg">
            <h1>404</h1>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
