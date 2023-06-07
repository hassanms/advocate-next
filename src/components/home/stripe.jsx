import React,{useEffect} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Router, useRouter } from 'next/router';
import Image from 'next/image';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function StripePage() {
  return (
    <form action="/api/checkout_sessions" method="POST">
      <section> 
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
        
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}