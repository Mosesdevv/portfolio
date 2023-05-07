


import Forkify from "../assets/images/portfolio/Forkify.jpeg";

import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";


const ProjectsPreviewData = [
  
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "forkify",
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/catherineisonline/forkify",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: "bankist",
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },
  
];

const ProjectsData = [
  
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "forkify",
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/catherineisonline/forkify",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: "bankist",
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },
  
];

export { ProjectsData, ProjectsPreviewData };
