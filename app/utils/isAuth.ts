import { auth } from "@/auth";

export const isAuth = async () => {
  const session = await auth();
  if(!session) {
    return false;
  } else {
    return true;
  }
}