import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold">
        Oops ! Sorry the page you are looking for does not exist
      </h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
