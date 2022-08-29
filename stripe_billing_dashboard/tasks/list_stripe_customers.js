// TODO: Set your secret key here. This is a test Stripe API key.
// See your Stripe API keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
