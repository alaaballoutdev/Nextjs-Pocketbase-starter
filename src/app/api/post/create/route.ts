import pocket from "lib/PocketBaseSingleton";

interface RequestBody {
  title: string;
  body: string;
  author: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const data = {
    title: body.title,
    body: body.body,
    author: pocket.authStore.model?.id,
  };
  try {
    await pocket.collection("users").authRefresh();
    if (pocket.authStore.isValid) {
      const record = await pocket.collection("posts").create(data);
      return new Response(JSON.stringify(record));
    }
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Bad Request" }), {
      status: 400,
    });
  }
}
