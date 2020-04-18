export const getToken = () => {
  try {
    const serializedToken = window.localStorage.getItem("token");
    const token = JSON.parse(serializedToken);
    return token;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const setToken = (token) => {
  try {
    const serializedToken = JSON.stringify(token);
    window.localStorage.setItem("token", serializedToken);
  } catch (error) {
    console.error(error);
  }
};
