/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Link from "next/link";
import Image from "next/image";
import { useUserSession } from "../../utils/useHooks";
import { useEffect } from "react";
import { signIn, signOut } from "next-auth/react";

const NavMenu = () => {
  const logo = "/logo.svg";
  const userProfileIcon = "/user-profile-icon.svg";
  const discordLogo = "/discord-v2.svg";

  const user = useUserSession();

  useEffect(() => {
    if (user) {
      document.getElementById("login-btn")!.style.display = "none";
      document.getElementById("logout-btn")!.style.display = "flex";
    } else {
      document.getElementById("logout-btn")!.style.display = "none";

      document.getElementById("login-btn")!.addEventListener("click", () => {
        document.getElementById("loginPopup")!.classList.remove("hidden");
        document.getElementById("loginPopup")!.classList.add("flex");
      });
    }
    document.getElementById("logout-btn")?.addEventListener("click", () => {
      return signOut();
    });
  });

  return (
    <>
      <nav className="flex w-full items-center justify-between p-2">
        <Image alt="logo" src={logo} width={32} height={32} />
        <ul className="flex w-56 justify-between">
          <li>
            <Link href="/">About T-CAD</Link>
          </li>
          <li>
            <Link href="https://github.com/tg4web/t-cad">GitHub</Link>
          </li>
          <li>
            <Link href="/contact">Docs</Link>
          </li>
        </ul>
        <div id="login-btn" className="">
          <label className="right-1 top-3 flex cursor-pointer p-1 text-xs font-bold">
            <Image
              className="mx-1"
              alt="logo"
              src={userProfileIcon}
              width={16}
              height={16}
            />
            Login
          </label>
        </div>
        <div id="logout-btn" className="">
          <label className="right-1 top-3 flex cursor-pointer p-1 text-xs font-bold">
            <Image
              className="mx-1"
              alt="logo"
              src={userProfileIcon}
              width={16}
              height={16}
            />
            Logout
          </label>
        </div>
      </nav>
      <div
        id="loginPopup"
        className="hidden h-screen w-full items-center justify-center"
      >
        <div className=" flex h-64 w-full max-w-lg flex-col items-center justify-between bg-white p-10">
          <h1 className="text-2xl font-bold">Login Options</h1>
          <div className="h-24">
            <button
              className="flex items-center text-xl"
              type="button"
              onClick={() => signIn("discord")}
            >
              <Image
                alt="discord logo"
                className="p-1"
                src={discordLogo}
                width={32}
                height={32}
              />
              Discord
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
