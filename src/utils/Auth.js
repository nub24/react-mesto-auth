export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(`Ошибка регистрации: ${res.status}`);
      } return res.json()
    })
};
