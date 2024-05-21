export function getToken() {
  if (localStorage.getItem("userToken")) {
    return localStorage.getItem("userToken");
  }
  return null;
}