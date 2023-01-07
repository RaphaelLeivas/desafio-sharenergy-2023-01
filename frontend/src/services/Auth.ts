class Auth {
  isAuthenticated = (): boolean => !!localStorage.getItem("token");
  
  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("lastSession");
  };
  
  setToken = (authToken: string) => {
    localStorage.setItem("token", authToken);
  };
  
  setLastSession = (lastSession: string) => {
    localStorage.setItem("lastSession", lastSession);
  };
  
  getToken = (): string => localStorage.getItem("token") ?? '';
  
  getLastSession = (): string => localStorage.getItem("lastSession") ?? "";
}

export default new Auth();
