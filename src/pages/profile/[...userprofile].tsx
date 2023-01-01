import { useHead, useUserSession } from "../../utils/useHooks";
import NavMenu from "../../components/common/NavMenu";
import Image from "next/image";
import alert from "../../utils/alert";
import { getServerSideProps } from "../../utils/sessionCheck";
export { getServerSideProps };

const UserProfile = () => {
  const user = useUserSession();
  const userProfileIcon = user?.image || "/user-profile-icon.svg";

  useHead(user?.name + `'s Profile` || "User Profile");

  if (user) {
    return (
      <div className="h-full w-full">
        <NavMenu />
        <div className="flex flex-wrap items-center justify-between pt-8 xl:flex-nowrap">
          <div className="flex w-full flex-col items-center xl:max-w-xs xl:p-4">
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                alt="user profile icon"
                className="p-1"
                src={userProfileIcon}
                width={48}
                height={48}
              />
              <h1 className="text-2xl font-bold">{user?.name}</h1>
            </div>
            <div className="w-full max-w-lg border border-black border-opacity-10"></div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="">
                <h1 className="w-full text-sm font-bold">
                  User ID: {user?.id}
                </h1>
                <h1 className="text-sm font-bold">Email: {user?.email}</h1>
                <div
                  onClick={() => alert("Profile editing is coming soon!")}
                  id="edit-profile-btn"
                  className="flex w-full cursor-pointer items-center justify-center text-sm"
                >
                  Edit
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1 className="mt-10 p-4 text-lg font-bold xl:mt-0">
              Recent Posts
            </h1>
            <div
              onClick={() => alert("Posts are coming soon!")}
              id="edit-profile-btn"
              className="mb-4 flex w-full cursor-pointer items-center justify-center text-sm"
            >
              Create New Post
            </div>
            <div className="h-full w-full max-w-6xl rounded-md bg-white">
              <ul>
                <li className="p-2">Posts Coming Soon!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfile;
