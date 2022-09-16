export const setLocalStorage = (
  key: string,
  {
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }
) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    })
  );
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
