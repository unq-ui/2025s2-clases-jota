import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loading, error, email, password, handleChangeEmail, handleChangePassword, login } = useLogin();

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={handleChangeEmail} placeholder="Email" />
      <input value={password} onChange={handleChangePassword} placeholder="Password" type="password" />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={login} disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
    </div>
  )
}

export default Login;
