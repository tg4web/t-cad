import { type NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavMenu from "../components/NavMenu";
import { useUserSession, useHead, useLogin } from "../utils/useHooks";

const Home: NextPage = () => {
  useHead("T-CAD | Home Page");
  const logo = "/logo.svg";
  const discordLogo = "/discord-v2.svg";
  const userProfileIcon = "/user-profile-icon.svg";

  const router = useRouter();
  const user = useUserSession()?.user;

  const login = useLogin();

  if (!user)
    return (
      <>
      <div id="login-popup" className=" hidden justify-center items-center w-full h-screen bg-black bg-opacity-60">
        <div className=" flex w-full items-center justify-center flex-col bg-white h-64 p-6">
          <h1 className="text-2xl font-bold p-1">Login Options</h1>
          <button className="flex items-center text-xl" type="button" onClick={() => signIn('discord')}><Image className="p-1" src={discordLogo} width={32} height={32} />Discord</button>
        </div>
      </div>
        <div className="flex w-full items-center justify-center p-2">
          <Image alt="logo" src={logo} width={32} height={54} />
          <NavMenu />
          <div className="">
            <label id="login-btn" onClick={login} className=" fixed right-1 top-3 flex p-1 cursor-pointer text-xs font-bold">
              Login
              <Image
                alt="logo"
                src={userProfileIcon}
                width={16}
                height={54}
              />
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
