import { cookies } from "next/headers";

export async function POST() {
  const cookieHeader = cookies().toString();
  
  const res = await fetch(`${process.env.API_URL}/auth/logout`, {
    method: "POST",
    headers: { cookie: cookieHeader },
    credentials: "include"
  });

  const response = new Response(null, { status: res.status });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) response.headers.set("set-cookie", setCookie);

  return response;
}