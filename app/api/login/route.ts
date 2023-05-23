import * as bcrypt from "bcrypt"

interface RequestBody {
  password: string
  email: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  //   const user = await will find user in database with email or username
  const user = {
    id: "1",
    username: "J Smith",
    email: "example.com",
    password: "0x1234sdfg",
  }

  //now we will check if the provided password matches the hashed password in the database
  if (user && (await bcrypt.compare(body.password, user.password))) {
    //if the password matches, we will return the user object
    const { password, ...userWithoutPassword } = user

    return new Response(JSON.stringify(userWithoutPassword))
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }))
  }
}
