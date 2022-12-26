import type { NextPage } from "next";
import { useHead } from "../../utils/useHooks";
import NavMenu from "../../components/common/NavMenu";

const About: NextPage = () => {
  useHead("T-CAD | About Page");

  return (
    <>
      <NavMenu />
      <h1>About</h1>
    </>
  );
};

export default About;
