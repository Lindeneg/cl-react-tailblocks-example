import React, { useState } from "react";
import { ThemeContextProvider, ThemeContextContent } from "cl-react-tailblocks";
import { Home } from "./Home";

function App() {
  const [cxt, setCxt] = useState<ThemeContextContent>({
    theme: "dark",
    color: "green",
  });

  const onSwitchTheme = () => {
    setCxt((prev) => {
      const light = prev.theme === "light";
      return {
        theme: light ? "dark" : "light",
        color: light ? "green" : "indigo",
      };
    });
  };

  return (
    <ThemeContextProvider
      value={{
        theme: cxt.theme,
        color: cxt.color,
        setContext: onSwitchTheme,
      }}
    >
      <div className="App">
        <Home />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
