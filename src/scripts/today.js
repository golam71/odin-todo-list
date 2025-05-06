let array = [];

Object.keys(localStorage).forEach((key) => {
  let keys = JSON.parse(localStorage.getItem(key));
  array = array.concat(keys);
});

const todayDate = new Date().toISOString().split("T")[0];

const filtered = array.filter((item) => item.date === todayDate);
filtered.forEach((item) => {
  console.log(item);
});
