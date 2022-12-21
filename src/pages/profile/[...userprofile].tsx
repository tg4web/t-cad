import { useUserSession } from "../../utils/useHooks";
import NavMenu from "../../components/NavMenu";
import Image from "next/image";
import { signOut } from "next-auth/react";

const UserProfile = () => {
    const userProfileIcon = "/user-profile-icon.svg";
    const user = useUserSession()?.user;
    
    if (!user) return <div>Not logged in</div>;
    
    return (
        <div>
            <NavMenu />
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                <Image
                    alt="user profile icon"
                    className="p-1"
                    src={userProfileIcon}
                    width={128}
                    height={128}
                />
                <h1 className="text-2xl font-bold">{user.name}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold">User ID: {user.id}</h1>
                <h1 className="text-xl font-bold">Email: {user.email}</h1>
                <button onClick={() => signOut()}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;