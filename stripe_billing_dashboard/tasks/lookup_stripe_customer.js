// TODO: this is a test API key
// TODO: replace this with a secret config
const stripe = require('stripe')('sk_test_51J0r7gIbKlxhc230E8jgMy0nXu51u1FeBoBYoYmWEdbhyOo61gXHyek1d66xka180YxsQ2J7YmZ54UTN4cWo6V5N00Tn2JALSU');

export default async function(params) {
  console.log(params);

  const customer = await stripe.customers.retrieve(
    params.customer_id
  );
  
  console.log(customer);

  return [{
    id: customer.id,
    email: customer.email,
    next_invoice_sequence: customer.next_invoice_sequence,
    currency: customer.currency,
    name: customer.name
  }];
}
