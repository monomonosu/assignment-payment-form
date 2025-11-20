export async function POST(request: Request) {
  const data = await request.json();
  console.log("受信:", data);

  return new Response("成功", { status: 200 });
}
