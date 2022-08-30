import Stripe from "stripe";
// TODO: Set your secret key here. This is a test Stripe API key.
// See your Stripe API keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
