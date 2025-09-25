import { Link, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the application.</p>
      <Link to="/">Go to Home</Link>
      <button onClick={() => navigate("/")}>Click Me</button>
    </div>
  );
}

export default About;