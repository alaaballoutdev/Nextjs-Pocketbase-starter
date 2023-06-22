import pocket from "lib/PocketBaseSingleton";

type RequestBody = {
  identity: string;
  password: string;
};

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  try {
    const authData = await pocket
      .collection("users")
      .authWithPassword(body.identity, body.password);
    return new Response(JSON.stringify(authData));
  } catch (error) {
    return new Response("Invalid credentials", { status: 401 });
  }
}
