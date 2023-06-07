const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function StripeHandler(req, res) {

      const start_time = `${req.body.date}T${req.body.times}`
        try {
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create({ 
            line_items: [
              {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1Mb2FnSCfWQoKPBruUy0hdfQ',
                quantity: 1,
              },
            ],
            payment_method_types:['card'],
            customer_email:req.body.email,
            mode: 'subscription',
            success_url: `${req.headers.origin}/zoomlink/?success=true&session_id={CHECKOUT_SESSION_ID}&email=${req.body.email}
            &name=${req.body.name}&phone=${req.body.phone}&start_time=${start_time}&topic=${req.body.topic}`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
          });
          res.redirect(303, session.url);
          // return res.status(201).json(session)
        } catch (err) {
          res.status(err.statusCode || 500).json(err.message);
        }

      // if(req.method === 'GET'){
        
      //   try {
      //     const session = await stripe.checkout.sessions.retrieve(
      //       process.env.STRIPE_SECRET_KEY
      //     );
      //     return res.status(201).json(session)
      //   } catch (err) {
      //       return res.status(404).json(err)
      //   }
      // }
  
}