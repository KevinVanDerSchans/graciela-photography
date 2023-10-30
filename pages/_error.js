export default function Error({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>

      <p>
        {statusCode
          ? 'This page could not be found'
          : 'This page could not be loaded'}
      </p>
    </div>
  );
};

export async function getServerSideProps({ res, err }) {
  res.statusCode = 404;
  return { props: { statusCode: 404 } };
};
