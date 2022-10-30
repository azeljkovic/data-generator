import {Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error  = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>
        <div>Sorry, there was an error or the desired page does not exist.</div>
        <Link to="/">Click here to go back to the homepage.</Link>
      </h2>
    </div>
  );
}

export default ErrorPage;
