export const getStafffromLS = () => {
  const data = localStorage.getItem("Staff");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

// export const carts = JSON.parse(localStorage.getItem("Staff")).getOne();
// export const cart = JSON.parse(localStorage.getItem("Staff")).findOne();
