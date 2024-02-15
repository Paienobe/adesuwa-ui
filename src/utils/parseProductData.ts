export const parseProductData = (data: {
  name: string;
  price: string;
  amount_available: string;
  category: string;
  discount: string;
  description: string;
}) => {
  const parsedData = {
    ...data,
    price: Number(data.price),
    amount_available: Number(data.amount_available),
    discount: Number(data.discount),
  };
  return parsedData;
};
