// TODO: this is a test API key
// TODO: replace this with a secret config
const stripe = require('stripe')('sk_test_51J0r7gIbKlxhc230E8jgMy0nXu51u1FeBoBYoYmWEdbhyOo61gXHyek1d66xka180YxsQ2J7YmZ54UTN4cWo6V5N00Tn2JALSU');

export default async function(params) {
  const charges = await stripe.charges.search({
    query: 'customer:\'' + params.customer_id + '\'',
  });

  var charge_data = [];
  for(var i = 0; i < charges.data.length; i++) {
    charge_data.push({
      created_at: new Date(charges.data[i].created*1000).toDateString(),
      id: charges.data[i].id,
      amount: charges.data[i].amount,
      amount_refunded: charges.data[i].amount_refunded,
      currency: charges.data[i].currency,
      paid: charges.data[i].paid,
      status: charges.data[i].status,
      description: charges.data[i].description
    })
  }

  return charge_data;
}
