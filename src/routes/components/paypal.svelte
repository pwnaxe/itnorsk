import { loadScript } from '@paypal/paypal-js';

let amount = 50;

    const CLIENT_ID = import.meta.env.PAYPAL_CLIENT_API;

onMount(() => {
  loadScript({ 'client-id': CLIENT_ID }).then((paypal) => {
    paypal.Buttons({
        style: {
            color: 'blue',
            shape: 'pill'
        },
        createOrder: function (data, actions) {
            // Set up the transaction
            return actions.order.create({
                purchase_units: [
                    {
                        amount: {
                            value: amount
                        }
                    }
                ]
            });
        },
        onApprove: async function (data, actions) {
            // Capture order after payment approved
            const details = await actions.order.capture();
            alert('Payment successful!');
        },
        onError: function (err) {
            // Log error if something goes wrong during approval
            alert('Something went wrong');
            console.log('Something went wrong', err);
        }
    }).render("#paypal-button-container");
});
});