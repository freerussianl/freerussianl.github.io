import { useEffect } from "react";
import Aside from "./components/settings/Aside";

const SettingsLayout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("settingsBody");
    return () => {
      document.body.classList.remove("settingsBody");
    };
  }, []);

  return (
    <main id="root" className="settings">
      <Aside />
      {children}
    </main>
  );
};

export default SettingsLayout;
