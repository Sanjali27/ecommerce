export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFiretore }) => {
    // make async call to database

    const firestore = getFiretore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Hello",
        authorLatName: "World",
        authorId: "1234",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
