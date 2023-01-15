class Auth {
  isAuthenticated = (): boolean => !!localStorage.getItem('token');

  logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  setUsername = (username: string) => {
    localStorage.setItem('username', username);
  };

  getToken = (): string => localStorage.getItem('token') ?? '';

  getUsername = (): string => localStorage.getItem('username') ?? '';
}

export default new Auth();
