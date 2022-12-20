import { type NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavMenu from "../components/NavMenu";
import { useUserSession, useHead } from "../utils/useHooks";

const Home: NextPage = () => {
  useHead("T-CAD | Home Page");
  const logo = "/logo.svg";
  const discordLogo = "/discord-v2.svg";
  const userProfileIcon = "/user-profile-icon.svg";

  const router = useRouter();
  const user = useUserSession()?.user;

  if (!user)
    return (
      <>
        <div
          id="login-popup"
          className=" hidden h-screen w-full items-center justify-center bg-black bg-opacity-60"
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
          <div className="">
            <label
              id="login-btn"
              className=" fixed right-1 top-3 flex cursor-pointer p-1 text-xs font-bold"
            >
              Login
              <Image alt="logo" src={userProfileIcon} width={16} height={54} />
            </label>
          </div>
        </div>
      </>
    );

  const handleViewProfile = () => {
    router.push(`/profile/${user.id}`);
  };

  return (
    <>
      <h1>Hello {user.name}</h1>
      <button type="button" onClick={handleViewProfile}>
        View Profile
      </button>
      <button type="button" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
};

export default Home;
