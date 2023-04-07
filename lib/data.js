export const getDataFromAPI = async () => {
  const response = await fetch(
    process.env.NEXT_APP_API_BASE_URL + "/api/hello"
  );
  const data = await response.json();
  return data;
};
