import Stripe from "stripe";
// Remove the test Stripe API key below and replace with your own from a config variable
// How to use config variables in Airplane: https://docs.airplane.dev/platform/configs
const stripeAPIKey = process.env.STRIPE_SECRET_KEY ?? 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
const stripe = Stripe(stripeAPIKey);

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
