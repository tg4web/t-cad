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

import NavMenu from "../components/common/NavMenu";

import { useHead } from "../utils/useHooks";
import { getServerSideProps } from "../utils/sessionCheck";

// Export the getServerSideProps function
export { getServerSideProps };

// Initialize the component

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home: any = () => {
  // Custom Hooks on the top

  useHead("T-CAD | Home Page");
  // Global variables & constants

  // Check if user is logged in else show home page

  return <NavMenu />;

  // If logged in redirect to profile page
};

// Don't forget to export the component!

export default Home;
