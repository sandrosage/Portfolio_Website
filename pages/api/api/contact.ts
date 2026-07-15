import type { NextApiRequest, NextApiResponse } from "next";

// Simple contact endpoint — logs to console by default.
// To send real emails: install nodemailer, add SMTP env vars, and replace the body below.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  // TODO: replace with nodemailer when you have SMTP credentials
  console.log("Contact form submission:", { name, email, message });

  return res.status(200).json({ ok: true });
}
