import ccme from "../assets/ccme.jpeg";
import finallyforever from "../assets/finallyforever.jpeg";
import ttt from "../assets/ttt.jpeg";
import tetrachrome from "../assets/tetrachrome.jpeg";
import watch from "../assets/watch.jpeg";

export const projContent = [
  {
    title: "CCME",
    text:
      "A website built to allow people or businesses to easily accept cryptocurrency payments. The user creates an account, adds their various crypto wallets, and create their own profile. The profile is customizable and allows the user to list their public addresses along with a button to easily copy the address for payment. Users can also generate a QR code that links directly to their profile, to be printed or displayed for easy use.",
    image: ccme,
    site: "https://www.ccme.io",
    github: "https://github.com/ydocsgnillats/ccme",
    path: "/1",
    technologies: ["react", "redux", "MongoDB", "Express", "Sass"],
  },
  {
    title: "Old School Watches",
    text:
      "A website built from an api for different popular watch brands and models.",
    image: watch,
    site: "https://www.oldschoolwatches.com",
    github: "https://github.com/ydocsgnillats/",
    path: "/2",
    technologies: ["react", "tailwind", "api for watch database"],
  },
  {
    title: "Finally Forever",
    text:
      "A website for a company specializing in personalized gift baskets and decoration setups. Users can read about the company, choose from their different packages, and add them to cart, as well as contact the owners for more personalized options.",
    image: finallyforever,
    site: "https://itsfinallyforever.com",
    github: "https://github.com/ydocsgnillats/finallyforever",
    path: "/3",
    technologies: ["react", "typescript", "Sass"],
  },
  {
    title: "Teens Tutor Teens App",
    text:
      "An app built in react-native for the 501(c)3 charity 'Teens Tutor Teens'. It allows users to sign up and explain what they are looking for in a tutor, or what subjects they provide tutoring in.",
    image: ttt,
    site: "https://github.com/ydocsgnillats/teenstutorteensapp",
    github: "https://github.com/ydocsgnillats/teenstutorteensapp",
    path: "/4",
    technologies: ["react-native"],
  },
  {
    title: "Tetrachrome",
    text: "A website for a business",
    image: tetrachrome,
    site: "https://www.tetrachrome.org",
    github: "https://www.tetrachrome.org",
    path: "/5",
    technologies: ["react", "tailwind"],
  },
];
