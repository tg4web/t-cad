import type { NextPage } from "next";
import { getServerSideProps } from "../../utils/sessionCheck";
import CadWrapper from "../../components/cad/CadWrapper";
import CadNavMenu from "../../components/cad/CadNavMenu";
import { useEffect, useState } from "react";
import { useUserSession } from "../../utils/useHooks";
import alert from "../../utils/alert";
export { getServerSideProps };

const Cad: NextPage = () => {
  const user = useUserSession();
  const [selectedDepartment, setSelectedDepartment] = useState("1");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const departmentSelector = document.getElementById("departmentSelector");
    const civMenu = document.getElementById("civMenu");
    const leoMenu = document.getElementById("leoMenu");
    const fireEmsMenu = document.getElementById("fireEmsMenu");
    const commsMenu = document.getElementById("commsMenu1");
    const option0 = document.getElementById("option0");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");

    if (user) {
      if (user.isAdmin) {
        setIsAdmin(true);
        document.getElementById("adminBtn")?.classList.remove("hidden");
      }
      if (user.role.includes("civilian") || isAdmin) {
        option0?.classList.remove("hidden");
      }
      if (user.role.includes("police") || isAdmin) {
        option1?.classList.remove("hidden");
      }
      if (user.role.includes("fireEms") || isAdmin) {
        option2?.classList.remove("hidden");
      }
      if (user.role.includes("communications") || isAdmin) {
        option3?.classList.remove("hidden");
      }
      if (
        selectedDepartment === "1" &&
        (user.role.includes("civilian") || isAdmin)
      ) {
        civMenu?.classList.remove("hidden");
        leoMenu?.classList.add("hidden");
        fireEmsMenu?.classList.add("hidden");
        commsMenu?.classList.add("hidden");
      }
      if (
        selectedDepartment === "2" &&
        (user.role.includes("police") || isAdmin)
      ) {
        leoMenu?.classList.remove("hidden");
        civMenu?.classList.add("hidden");
        fireEmsMenu?.classList.add("hidden");
        commsMenu?.classList.add("hidden");
      }
      if (
        selectedDepartment === "3" &&
        (user.role.includes("fireEms") || isAdmin)
      ) {
        fireEmsMenu?.classList.remove("hidden");
        civMenu?.classList.add("hidden");
        leoMenu?.classList.add("hidden");
        commsMenu?.classList.add("hidden");
      }
      if (
        selectedDepartment === "4" &&
        (user.role.includes("communications") || isAdmin)
      ) {
        commsMenu?.classList.remove("hidden");
        civMenu?.classList.add("hidden");
        leoMenu?.classList.add("hidden");
        fireEmsMenu?.classList.add("hidden");
      }

      departmentSelector?.addEventListener("change", (e) => {
        const target = e.target as HTMLSelectElement;

        setSelectedDepartment(target.value);
        return alert(
          "You have changed your department to " +
            target.options[target.selectedIndex]?.text
        );
      });
    }
  }, [selectedDepartment, user, isAdmin]);
  return (
    <CadWrapper>
      <CadNavMenu />
    </CadWrapper>
  );
};

export default Cad;
