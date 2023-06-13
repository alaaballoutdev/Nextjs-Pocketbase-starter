import pocket from "lib/PocketBaseSingleton";
//admin
interface RequestBody {
  email: string;
  password: string;
  passwordConfirm: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const data = {
    email: body.email,
    password: body.password,
    passwordConfirm: body.passwordConfirm,
  };
  try {
    await pocket.admins.authRefresh();
    if (pocket.authStore.isValid) {
      const record = await pocket.admins.create(data);
      return new Response(
        JSON.stringify({ record, authStore: pocket.authStore })
      );
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
