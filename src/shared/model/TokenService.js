class TokenService {
  storageKeys = {
    access: "token-access-is",
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
}

export default new TokenService();
