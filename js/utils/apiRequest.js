import { modalAlertError } from "./alerts";

const api = {
  get: async (url) => {
    if (url)
      return await fetch(url)
        .then(async (data) => {
          if (data.status === 200) return await data.json();
          else {
            data.text().then((text) => modalAlertError(text));
            return null;
          }
        })
        .catch((error) => console.log("error", error));
  },
  delete: async (url) => {
    if (url)
      return await fetch(url, {
        method: "DELETE",
      })
        .then(async (data) => {
          if (data.status === 202) return true;
          else {
            data.text().then((text) => modalAlertError(text));
            return null;
          }
        })
        .catch((error) => console.log("error", error));
  },
  post: async (url, body) => {
    if (body)
      return await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then(async (data) => {
          if (data.status === 201) return true;
          else {
            data.text().then((text) => modalAlertError(text));
            return null;
          }
        })
        .catch((error) => console.log("error", error));
    else return null;
  },
  put: async (url, body) => {
    if (body)
      return await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then(async (data) => {
          if (data.status === 201) return true;
          else {
            data.text().then((text) => modalAlertError(text));
            return null;
          }
        })
        .catch((error) => console.log("error", error));
    else return null;
  },
};

export default api;
