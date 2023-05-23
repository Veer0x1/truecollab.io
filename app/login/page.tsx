import LoginComponent from "../../components/Login"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <LoginComponent />
      </div>
    </div>
  )
}
