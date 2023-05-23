// in this file we will create a user in our database
import * as bcrypt from "bcrypt"
import mongoose from "mongoose"
import express from "express"

const app = express()

interface RequestBody {
  username: string
  password: string
  email: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  //create a document in your database with the user's information

  const user = await mongoose.model("User").create({
    username: body.username,
    email: body.email,
    password: await bcrypt.hash(body.password, 10),
  })

  const { password, ...userWithoutPassword } = user
  return new Response(JSON.stringify(userWithoutPassword))
}
