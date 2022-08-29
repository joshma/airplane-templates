// TODO: this is a test API key
// TODO: replace this with a secret config
const stripe = require('stripe')('sk_test_51J0r7gIbKlxhc230E8jgMy0nXu51u1FeBoBYoYmWEdbhyOo61gXHyek1d66xka180YxsQ2J7YmZ54UTN4cWo6V5N00Tn2JALSU');

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
