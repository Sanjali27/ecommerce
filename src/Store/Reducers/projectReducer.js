const initState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "blah blah blah",
      user: "Ross",
      time: "3rd September, 2am"
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "blah blah blah",
      user: "Rachel",
      time: "4th September, 2am"
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content: "blah blah blah",
      user: "Robin",
      time: "5th September, 2am"
    },
    {
      id: "4",
      title: "twinkle twinkle",
      content: "blah blah blah",
      user: "Monica",
      time: "6th September, 2am"
    }
  ]
};

// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "CREATE_PROJECT":
//       console.log("create project", action.project);
//   }
//   return state;
// };

// export default projectReducer;
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
