
import { signIn, auth, signOut } from "@/auth"
 
const SignIn = async () => {

  const session = await auth()
  console.log(session?.user)

  return (
    <>
      <form
        action={async () => {
          "use server"
          await signIn("google",
            {
              redirectTo: '/home'
            })
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async () => {
          "use server"
          await signIn("github",
            {
              redirectTo: '/home'
            })
        }}
      >
        <button type="submit">Signin with Github</button>
      </form>
      <p>{session?.user?.email || "undefined"}</p>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">SignOut</button>
      </form>
    </>
  )
}
export default SignIn