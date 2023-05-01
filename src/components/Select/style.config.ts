import { defaultTheme } from "@/styles/themes/default";
import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  dropdownIndicator: () => ({
    color: "white",
  }),
  option: (provided) => ({
    ...provided,
    color: "#ffff",
    padding: 20,
    backgroundBlendMode: defaultTheme.colors.background,
  }),
  control: () => ({
    display: "flex",
    border: "1px solid #D1D5DB",
    width: "100%",
    borderRadius: 4,
    padding: 5,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#FFFFFF",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#FFFFFF",
  }),
  input: (styles) => ({
    ...styles,
    color: "#FFFFFF",
  }),
  menuList: (styles) => ({
    ...styles,
    background: defaultTheme.colors.background,
  }),
};
