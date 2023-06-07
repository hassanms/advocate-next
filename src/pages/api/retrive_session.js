const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async function RetriveSession (req,res){
    try {
    const session = await stripe.checkout.sessions.retrieve(
        req.body.session_id
      );
         res.send(session)  
    } catch (error) {
        
    } 

}