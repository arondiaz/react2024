const product = {
  brand: "Iphone",
  model: "12 Pro",
  memory: 128,
  price: 400,
};

const product2 = {
  brand: "Samsung",
  model: "23",
  memory: 128,
  price: 600,
};

console.log(product);
console.log(product.model);

const { brand, model, memory, price } = product;

console.log(`El ${brand} ${model} cuesta ${price}`);

const {
  brand: company,
  model: modelo,
  memory: storage,
  price: cost,
} = product2;

console.log(`El ${company} ${modelo} cuesta ${cost}`);
