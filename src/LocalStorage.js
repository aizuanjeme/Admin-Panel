export const getStafffromLS = () => {
  const data = localStorage.getItem("Staff");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
