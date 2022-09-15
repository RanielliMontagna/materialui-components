import { GlobalStyles as GlobalStylesMui } from "@mui/material";

const GlobalStyles = () => {
  return (
    <GlobalStylesMui
      styles={(theme) => ({
        "*": {
          margin: 0,
          padding: 0,
        },
      })}
    />
  );
};

export { GlobalStyles };
