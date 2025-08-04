import { cookies } from "next/headers";

export async function POST() {
  console.log('refresh')
    const cookieHeader = cookies().toString();
  
  const res = await fetch(`${process.env.API_URL}/auth/refresh`, {
    method: "POST",
    headers: { cookie: cookieHeader },
    credentials: "include"
  });

  const data = await res.json();
  
  const response = new Response(JSON.stringify(data), { status: res.status });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) response.headers.set("set-cookie", setCookie);

  return response;
}