// TODO: Set your secret key here. This is a test Stripe API key.
// See your Stripe API keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

export default async function(params) {
  const refund = await stripe.refunds.create({
    charge: params.charge_id,
  });
  
  console.log(refund);

  return [{
    refund_date: refund.created,
    amount: refund.amount,
    charge_id: refund.charge,
    status: refund.status
  }];
}
