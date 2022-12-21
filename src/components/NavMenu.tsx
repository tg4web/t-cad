import Link from "next/link";
import Image from "next/image";

const NavMenu = () => {
  const logo = "/logo.svg";
  const userProfileIcon = "/user-profile-icon.svg";

  return (
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
    </nav>
  );
};

export default NavMenu;
