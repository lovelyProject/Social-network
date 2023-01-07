export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log("Error getting data from localStorage", e);
    return null;
  }
};

export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("Error saving data in localStorage", e);
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(JSON.stringify(key));
  } catch (error) {
    console.log("Error removing data", error);
  }
};
