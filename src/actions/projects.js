import database from "../firebase/firebase";

export const createProject = (project) => ({
  type: "CREATE_PROJECT",
  project,
});

export const startCreateProject = (projectData = {}) => {
  return (dispatch, getState) => {
    const {
      name = "",
      description = "",
      technology = "",
      url = "",
    } = projectData;
    const project = { name, description, technology, url };
    return database
      .ref("projects")
      .push(project)
      .then((ref) => {
        dispatch(createProject({ id: ref.key, ...project }));
      });
  };
};

export const setProjects = (projects) => ({
  type: "SET_PROJECTS",
  projects,
});
