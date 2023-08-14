export const saveToLocalStoreygh = (key, state) => {
  window.localStorage.setItem(key, JSON.stringify(state));
};

export const getToLocalStoreygh = key => {
  const lsValue = window.localStorage.getItem(key);

  if (lsValue) {
    return JSON.parse(lsValue);
  }

  return null;
};
