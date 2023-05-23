import { Metadata } from "next"

import LoginComponent from "./components/LoginComponent"

export const metadata: Metadata = {
  title: "Login",
}
export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <LoginComponent />
      </div>
    </div>
  )
}
