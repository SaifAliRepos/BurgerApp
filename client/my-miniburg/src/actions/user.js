import api from "../utils/api";

export const login = async (email, password) => {
  try {
    const body = { email, password };
    const user = await api.post('/users/login', body);
    return user;

  } catch (err) {
    console.log(err);
    return false;
  }
};

export const singUp = async (email, password) => {
  try {
    const body = { email, password };
    const user = await api.post('/users/new', body);
    return user.data;

  } catch (err) {
    console.log(err);
    return false;
  }
};
