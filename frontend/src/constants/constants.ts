export const categories = ["Work", "Personal", "Shopping", "Other", "Ideas", "Project", "Car", "Travel"];

export const colors = [
  "#b7abff",
  "#9fffd5",
  "#89d1ff",
  "#fd6cbe",
  "#46deff",
  "#fdc235",
  "#18d4b7",
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

/*
const db = [
  {
    title: "Weekly Groceries",
    description:
      "Buy veggies, fruit, milk, bread, and ingredients for Sunday lunch. Don't forget coffee.",
    categories: ["Personal", "Home"],
    color: "#9fffd5",
  },
  {
    title: "Project Standup",
    description:
      "Summarize last week's results, prepare blockers, and plan tasks for the backend team.",
    categories: ["Work", "Project"],
    color: "#b7abff",
  },
  {
    title: "Gift Ideas",
    description:
      "A book by her favorite author, a painting class, or a weekend spa getaway for Mom.",
    categories: ["Personal", "Ideas"],
    color: "#fd6cbe",
  },
  {
    title: "Workout Plan",
    description:
      "Mon: Chest/Triceps, Wed: Back/Biceps, Fri: Legs/Shoulders. Cardio after every session.",
    categories: ["Fitness"],
    color: "#18d4b7",
  },
  {
    title: "Car Service",
    description:
      "Call the garage to schedule an oil change, filter replacements, and a brake inspection.",
    categories: ["Home", "Car"],
    color: "#fdc235",
  },
  {
    title: "Italy Trip",
    description:
      "Check passport expiration dates, book seaside accommodation, and plan a Rome day trip.",
    categories: ["Travel", "Personal"],
    color: "#46deff",
  },
  {
    title: "Reading List",
    description:
      "Atomic Habits, Clean Code, The Daily Stoic, and The Psychology of Money.",
    categories: ["Ideas", "Learning"],
    color: "#89d1ff",
  },
  {
    title: "Sourdough Recipe",
    description:
      "500g flour, 350ml water, 150g starter, 10g salt. Bake at 230 °C for the first 15 mins.",
    categories: ["Recipes", "Home"],
    color: "#fdc235",
  },
  {
    title: "API Bug Fix",
    description:
      "Resolve unauthorized access error during user login. Check JWT token expiration logic.",
    categories: ["Work", "Project"],
    color: "#89d1ff",
  },
  {
    title: "Monthly Budget",
    description:
      "Review standing orders, pay utility bills, and move 15% of salary to savings.",
    categories: ["Finance", "Home"],
    color: "#18d4b7",
  },
];

*/