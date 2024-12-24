import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("hey!");

    navigate("/error");
  };

  return (
    <div>
      <h1>Successfully submitted the form 😀!</h1>
      <button onClick={handleClick} className="btn">
        Go to error page
      </button>
    </div>
  );
}

export default SuccessPage;
