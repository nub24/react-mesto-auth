export const BASE_URL = "https://auth.nomoreparties.co";

const request = (url, options) => {
  const fetchAddress = `${BASE_URL}/${url}`;

  return fetch(fetchAddress, options)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(`Ошибка ${res.status}`);
      }
  })
}

export const register = (password, email) => {
  return request('signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
}

export const authorize = (password, email) => {
  return request('signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
}

export const checkToken = (token) => {
  return request('users/me', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
}