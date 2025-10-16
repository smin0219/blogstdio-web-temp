import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import colors from "./colors";
import textStyles from "./text-style";

const config = defineConfig({
  globalCss: {
    html: {
      fontSize: "16px",
      overscrollBehavior: "none",
    },
    body: {
      overscrollBehavior: "none",
      fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    },
  },
  theme: {
    tokens: {
      ...colors,
    },
    textStyles,
  },
});

export const system = createSystem(defaultConfig, config);
