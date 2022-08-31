import Stripe from "stripe";
// Remove the test Stripe API key below and replace with your own from a config variable
// How to use config variables in Airplane: https://docs.airplane.dev/platform/configs
const stripeAPIKey = process.env.STRIPE_SECRET_KEY ?? 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
const stripe = Stripe(stripeAPIKey);

export default async function(params) {
  const customers = await stripe.customers.search({
    query: 'email~\'' + params.search_keyword + '\''
  });


  var customer_data = [];
  for(var i = 0; i < customers.data.length; i++) {
    customer_data.push({
      id: customers.data[i].id,
      email: customers.data[i].email,
      name: customers.data[i].name
    })
  }

  return customer_data;
}
