class TokenStorageService {
  storageKeys = {
    access: "token-access",
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

export default new TokenStorageService();
