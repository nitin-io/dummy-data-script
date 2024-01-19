function generateRandomData(n = 1) {
  let data = [];
  const products = ["register", "book", "sheet", "timetable", "envelop", "pen"];
  const units = ["cm", "in"];
  const statuses = ["A", "B", "C", "P", "D"];

  for (let i = 0; i < n; i++) {
    let obj = {
      product: products[Math.floor(Math.random() * 6)],
      quantity: Math.round(Math.random() * (80 - 19 + 1) + 19),
      // We are using round here intead of floor because we want
      // number higher than 19 not 19 itself
      size: {
        height: Math.round(Math.random() * (40 - 4 + 1) + 4),
        weight: Math.round(Math.random() * (40 - 4 + 1) + 4),
        unit: units[Math.floor(Math.random() * 2)],
      },
      status: statuses[Math.floor(Math.random() * 5)],
    };

    data.push(obj);
  }
  return data;
}

export default generateRandomData;
