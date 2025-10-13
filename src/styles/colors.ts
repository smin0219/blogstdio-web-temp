import { defineTokens } from "@chakra-ui/react";

const colors = defineTokens({
  colors: {
    bs: {
      black: { value: "#00000A" },
      white: { value: "#FFFFFF" },
      orange: {
        600: { value: "#FE5000" },
        500: { value: "#FE6700" },
        400: { value: "#FE7A00" },
        100: { value: "#FFEBE0" },
      },

      gray: {
        900: { value: "#222222" },
        800: { value: "#424242" },
        700: { value: "#616161" },
        600: { value: "#757575" },
        500: { value: "#9E9E9E" },
        400: { value: "#BDBDBD" },
        300: { value: "#E0E0E0" },
        200: { value: "#EEEEEE" },
        100: { value: "#F5F5F5" },
        50: { value: "#FBFBFB" },
      },

      red: {
        600: { value: "#BF0500" },
        500: { value: "#E10600" },
        400: { value: "#F6423D" },
        300: { value: "#FF5A56" },
        200: { value: "#FFA199" },
        100: { value: "#FFECEC" },
      },
      yellow: {
        600: { value: "#D49500" },
        500: { value: "#FDB202" },
        400: { value: "#FFC033" },
        300: { value: "#FFD066" },
        200: { value: "#FFE099" },
        100: { value: "#FEF8E8" },
      },
      green: {
        600: { value: "#004632" },
        500: { value: "#006400" },
        400: { value: "#13A913" },
        300: { value: "#54D254" },
        200: { value: "#7BE67B" },
        100: { value: "#EBFAF0" },
      },
      blue: {
        600: { value: "#002FA0" },
        500: { value: "#003BC9" },
        400: { value: "#1258FF" },
        300: { value: "#3772FF" },
        200: { value: "#85A9FF" },
        100: { value: "#EDF2FF" },
      },
      purple: {
        600: { value: "#510899" },
        500: { value: "#5B2AE3" },
        400: { value: "#7442FF" },
        300: { value: "#8D68F2" },
        200: { value: "#AD8FFF" },
        100: { value: "#E8EBFF" },
      },
      skyBlue: {
        800: { value: "#003F66" },
        700: { value: "#005F99" },
        600: { value: "#007ECC" },
        500: { value: "#009EFF" },
        400: { value: "#33B1FF" },
        300: { value: "#66C5FF" },
        200: { value: "#99D8FF" },
        100: { value: "#CCECFF" },
        50: { value: "#E5F5FF" },
      },
    },
  },
});

export default colors;
