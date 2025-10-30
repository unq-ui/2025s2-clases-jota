import { createContext, useContext, useEffect, useState } from "react";

import Api from "../sercices/Api";
import Storage from "../sercices/Storage";

const UserContext = createContext({
  user: {},
  logout: () => null,
  follow: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    const token = Storage.getToken();

    if (token) {
      Api.getUser()
        .then(({ user }) => setUser(user))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    Storage.clearToken();
    setUser(null);
  };

  const follow = (id) => {
    setUser((prevState) => ({
      ...prevState,
      followers: [...prevState.followers, id],
    }));
  };

  const loginUser = (userData) => {
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ user, logout, follow, loginUser }}>
      {loading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default UserProvider;
