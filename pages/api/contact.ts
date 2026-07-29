export const runtime = 'edge';

export default async function handler(req: Request) {
  if (req.method !== "POST") return new Response(null, { status: 405 });

  const { name, email, message } = await req.json();
  if (!name || !email || !message)
    return Response.json({ error: "Missing fields" }, { status: 400 });

  console.log("Contact form submission:", { name, email, message });

  return Response.json({ ok: true });
}
