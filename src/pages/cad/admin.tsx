import { useUserSession } from "../../utils/useHooks";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import push from "../../utils/push";

const AdminPanel = () => {
  const userQuery = trpc.get.users.useQuery();
  const users = userQuery.data;
  const user = useUserSession();

  const [selectedRole, setSelectedRole] = useState<string>("civilian");

  const removeUserMutation = trpc.users.remove.useMutation();
  const promoteUserMutation = trpc.users.promote.useMutation();

  const deleteUser = (id: string) => async () => {
    await removeUserMutation.mutateAsync({ UserId: id });
  };

  const promoteUser = async (id: string, role: string) => {
    await promoteUserMutation.mutateAsync({ UserId: id, Role: role });
  };

  useEffect(() => {
    const promoteDropdown = document.getElementById("promoteDropdown");

    promoteDropdown?.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      console.log(target.value);
    });
  }, []);

  if (user?.isAdmin) {
    if (userQuery.data) {
      return (
        <>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1 className="p-2 text-2xl font-bold">Active Registered Users</h1>
            <table className="bg-slate-700">
              <thead>
                <tr>
                  <th>Del</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Promote</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr
                    onClick={() => push(`/profile/${user.id}`)}
                    className="border-collapse cursor-pointer border border-b-black border-opacity-40 bg-slate-200"
                    key={user.id}
                  >
                    <td className="p-2">
                      <button
                        onClick={deleteUser(user.id as string)}
                        className="text-xs"
                        type="submit"
                      >
                        ❌
                      </button>
                    </td>
                    <td className="p-2">{user.id}</td>
                    <td className="p-2">{user.name}</td>

                    <td className="p-2">{user.email}</td>

                    <td className="p-2">{user.role}</td>
                    <td className="p-2">
                      <form id="promoteDropdown">
                        <select
                          onChange={(e) => {
                            setSelectedRole(e.currentTarget.value);
                          }}
                          id="selector"
                          className="w-min text-xs"
                          title="promote role"
                        >
                          <option value="civilian">Civilian</option>
                          <option value="police">Police</option>
                          <option value="fireEms">Fire/EMS</option>
                          <option value="communications">Communications</option>
                        </select>
                        <button
                          onClick={() =>
                            promoteUser(
                              user.id as string,
                              selectedRole as string
                            )
                          }
                          className="text-xs"
                          type="submit"
                        >
                          ✅
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
    }
    return null;
  }
};

export default AdminPanel;
