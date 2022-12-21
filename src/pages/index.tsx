/* 



WAIT!!



NOT JUST YET!!



BEFORE YOU EDIT THIS APPLICATION, PLEASE READ THE FOLLOWING:




This file is the home page of the website.

You can use this file as a reference template for other pages.
Read the comments and follow the instructions to create your own page.
If you have any questions, please ask in the discord server.



DO NOT CHANGE THIS FILE UNELSS YOU KNOW WHAT YOU ARE DOING!



*/




// Imports

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavMenu from "../components/NavMenu";
import { useUserSession, useHead, useLogin } from "../utils/useHooks";

// Initialize the component

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: any = () => {
  // Custom Hooks on the top

  useHead("T-CAD | Home Page");
  useLogin();

  // Global variables & constants

  const logo = "/logo.svg";
  const discordLogo = "/discord-v2.svg";
  const userProfileIcon = "/user-profile-icon.svg";

  const router = useRouter();
  const user = useUserSession()?.user;

  // Check if user is logged in else show home page

  if (!user)
    return (
      <>
        <div
          id="loginPopup"
          className="hidden h-screen w-full items-center justify-center bg-black bg-opacity-60"
        >
          <div className=" flex h-64 w-full flex-col items-center justify-center bg-white p-6">
            <h1 className="p-1 text-2xl font-bold">Login Options</h1>
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
        <div className="flex w-full items-center justify-center p-2">
          <Image alt="logo" src={logo} width={32} height={54} />
          <NavMenu />
          <div id="login-btn" className="">
            <label className=" fixed right-1 top-3 flex cursor-pointer p-1 text-xs font-bold">
              Login
              <Image alt="logo" src={userProfileIcon} width={16} height={54} />
            </label>
          </div>
        </div>
      </>
    );

  // If logged in redirect to profile page

  return router.push(`/profile/${user.id}`);
};

// Don't forget to export the component!

export default Home;
