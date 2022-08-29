import { Column, Stack, Table, Text, Title, TextInput, useComponentState } from "@airplane/views";

const Dashboard = () => {
  const searchKeyword = useComponentState("searchKeyword");
  const stripeCustomers = useComponentState("stripeCustomers");
  const selectedCustomer = stripeCustomers.selectedRow;

  return (
    <Stack>
      <Title>Stripe Billing Dashboard</Title>
      <Text>Lookup customers by their name or email, view all charges for that customer, and refund a charge if needed.</Text>
      <TextInput id="searchKeyword" label="Search for a customer" />
      <Table
        id="stripeCustomers"
        title="Stripe Customers" 
        task={{ slug: "list_stripe_customers", params: { search_keyword: searchKeyword.value } }}
        rowSelection="single"
        showFilter={false}
      />
      {selectedCustomer &&
        <Stack>
          <Table 
            id="customerDetails"
            title="Customer Details"
            task={{ slug: "lookup_stripe_customer", params: { customer_id: selectedCustomer.id } }}
            showFilter={false}
          />
          <Table 
            id="customerCharges"
            title="Charges for This Customer"
            task={{ slug: "lookup_charges_for_stripe_customer", params: { customer_id: selectedCustomer.id } }}
            columns={[
              {
                label: "Charge Date",
                accessor: "created_at",
                type: "date"
              },
              {
                label: "Amount",
                accessor: "amount",
                type: "number"
              }
            ]}
            rowActions={[
              {
                slug: "refund_stripe_charge",
                label: "Refund",
                rowTransform: (r) => ({charge_id: r.id})
              }
            ]}
          />
        </Stack>
      }
    </Stack>
  );
};

export default Dashboard;
