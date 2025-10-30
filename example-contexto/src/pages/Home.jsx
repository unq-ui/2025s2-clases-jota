import { useUser } from "../hooks/UserContext";

const Home = () => {
  const { user, logout } = useUser();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home;
