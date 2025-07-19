import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={144} height={30} />
        </Link>
        {session && session?.user ? (
          <div className="flex items-center gap-5">
            <>
              <Link
                href="/startup/create"
                className="text-black hover:underline"
              >
                Create
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="text-black hover:underline">
                  Log Out
                </button>{" "}
              </form>

              <Link
                href={`/user/${session?.user.id}`}
                className="text-black hover:underline"
              >
                {session?.user?.name}
              </Link>
            </>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";

              await signIn("github");
            }}
            className="text-blue-500 hover:underline"
          >
            <button type="submit">Log In</button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
