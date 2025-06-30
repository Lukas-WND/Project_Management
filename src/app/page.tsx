import SignIn from "@/components/sign-in"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/30 mix-blend-overlay" />
        <Image
          width={200}
          height={200}
          src="/assets/project_management.svg"
          alt="Login background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Login content */}
      
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Simple Pmbok</CardTitle>
            <CardDescription>Faça o login para acessar</CardDescription>
          </CardHeader>
          <CardContent>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </CardContent>
          <CardFooter className="flex justify-center text-center text-sm text-muted-foreground">
            <p>Continuando você aceita os nossos termos de serviço e de privacidade.</p>
          </CardFooter>
        </Card>

        {/* <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Simple Pmbok</CardTitle>
            <CardDescription>Faça o login para acessar</CardDescription>
          </CardHeader>
          <CardContent>
            <SignIn/>
          </CardContent>
          <CardFooter className="flex justify-center text-center text-sm text-muted-foreground">
            <p>Continuando você aceita os nossos termos de serviço e de privacidade.</p>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  )
}
