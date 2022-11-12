import ccme from "../assets/ccme.jpeg";
import finallyforever from "../assets/finallyforever.jpeg";
import tetrachrome from "../assets/tetrachrome.jpeg";
import watch from "../assets/watch.jpeg";
import jolly from "../assets/jollyswapper.jpeg";
import weirdo from "../assets/weirdoswarm.jpeg";

export const projContent = [
  {
    title: "Weirdo Swarm",
    text:
      "A fan website built for the band King Gizzard and the Lizard Wizard, showing their live sets, songs played live (and times played live), games, artists, etc.",
    image: weirdo,
    site: "https://weirdoswarm.org",
    github: "https://github.com/ydocsgnillats/weirdoswarm",
    path: "/1",
    technologies: [
      "react",
      "Sass",
      "SetlistFM Api",
      "Firebase",
      "Web Scraping",
    ],
  },
  {
    title: "Jolly Swapper",
    text:
      "A website made for hosting gift exchanges for different groups. Currently hosting a gift exchange for fans of King Gizzard and the Lizard Wizard. Users sign up, enter relevant information, and are randomly matched with another user based on location + shipping preferences. Emails are sent to each group of matches introducing them to each other. Total users this year: 201.",
    image: jolly,
    site: "https://www.jollyswapper.com/gatorgang",
    github: "https://github.com/ydocsgnillats/",
    path: "/2",
    technologies: ["react", "Sass", "Firebase"],
  },
  {
    title: "CCME",
    text:
      "A website built to allow people or businesses to easily accept cryptocurrency payments. The user creates an account, adds their various crypto wallets, and create their own profile. The profile is customizable and allows the user to list their public addresses along with a button to easily copy the address for payment. Users can also generate a QR code that links directly to their profile, to be printed or displayed for easy use.",
    image: ccme,
    site: "https://www.ccme.io",
    github: "https://github.com/ydocsgnillats/ccme",
    path: "/3",
    technologies: ["react", "Moralis", "Tailwind"],
  },
  {
    title: "Old School Watches",
    text:
      "A website built from an api for different popular watch brands and models.",
    image: watch,
    site: "https://www.oldschoolwatches.com",
    github: "https://github.com/ydocsgnillats/",
    path: "/4",
    technologies: ["react", "tailwind", "api for watch database"],
  },
  {
    title: "Finally Forever",
    text:
      "A website for a company specializing in personalized gift baskets and decoration setups. Users can read about the company, choose from their different packages, and add them to cart, as well as contact the owners for more personalized options.",
    image: finallyforever,
    site: "https://itsfinallyforever.com",
    github: "https://github.com/ydocsgnillats/finallyforever",
    path: "/5",
    technologies: ["react", "redux", "typescript", "Sass"],
  },
  {
    title: "Tetrachrome",
    text: "A website for a business",
    image: tetrachrome,
    site: "https://www.tetrachrome.org",
    github: "https://www.tetrachrome.org",
    path: "/7",
    technologies: ["react", "tailwind"],
  },
];
