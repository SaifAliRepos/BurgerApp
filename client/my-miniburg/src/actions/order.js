import api from "../utils/api";

export const getOrders = async () => {
  try {
    const res = await api.get('/orders/all');
    console.log(res)
    return res.data;

  } catch (err) {
    console.log(err)
    return false
  }
};

export const submitOrder = async (name, address, payemntMethod) => {
  try {
    const body = { user: name, details: address, paymentMethod: payemntMethod };
    await api.post('/order/new', body);
    return true;

  } catch (err) {
    console.log(err);
    return false;
  }
};
