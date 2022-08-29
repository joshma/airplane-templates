// TODO: Set your secret key here. This is a test Stripe API key.
// See your Stripe API keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
