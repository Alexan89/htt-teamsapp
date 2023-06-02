import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import Navigation from "./navigation/Navigation";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      <Navigation />
    </div>
  );
}
