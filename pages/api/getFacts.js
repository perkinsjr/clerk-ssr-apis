import { requireAuth } from '@clerk/nextjs/api';

export default requireAuth(async (req, res) => {
  const request = await fetch('https://catfact.ninja/fact');
  const catFacts = await request.json();
  const facts = await catFacts.fact;
  res.status(200).json({ fact: facts });
});
