class TokenService {
  storageKeys = {
    access: "token-access-is",
    userData: "user",
  };

  getToken() {
    return localStorage.getItem(this.storageKeys.access) || "";
  }

  setToken(access) {
    localStorage.setItem(this.storageKeys.access, access);
  }

  clearToken() {
    localStorage.removeItem(this.storageKeys.access);
  }

  getUser() {
    return localStorage.getItem(this.storageKeys.userData) || {};
  }

  setUser(user) {
    localStorage.setItem(this.storageKeys.userData, user);
  }
}

export default new TokenService();
