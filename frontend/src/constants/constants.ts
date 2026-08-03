export const options = ["Work", "Personal", "Shopping", "Other"];

export const colors = [
  "#b7abff",
  "#9fffd5",
  "#89d1ff",
  "#fd6cbe",
  "#46deff",
  "#fdc235",
  "#18d4b7",
  ,
];

export const modalZoom = (open: boolean) => ({
  transform: open ? "scale(1)" : "scale(0.95)",
  opacity: open ? "1" : "0",
  transition: "300ms",
  animation: open ? "scale-in 300ms cubic-bezier(0, 0.44, 0, 1.3)" : "none",

  "@keyframes scale-in": {
    "0%": {
      transform: "scale(0.9)",
      opacity: 0,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
});
