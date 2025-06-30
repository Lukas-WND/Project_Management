import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <SignIn
         path="/sign-in"
         routing="path"
         signUpUrl="/sign-up"
         afterSignInUrl="/project"
      />
    </div>
  )
}
