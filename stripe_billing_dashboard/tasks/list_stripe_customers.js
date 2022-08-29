// TODO: this is a test API key
// TODO: replace this with a secret config
const stripe = require('stripe')('sk_test_51J0r7gIbKlxhc230E8jgMy0nXu51u1FeBoBYoYmWEdbhyOo61gXHyek1d66xka180YxsQ2J7YmZ54UTN4cWo6V5N00Tn2JALSU');

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
