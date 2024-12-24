import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>Form submission failed 🥲!</h1>
      <Link to="/success" className="btn">
        go to success page
      </Link>
    </div>
  );
}

export default ErrorPage;
