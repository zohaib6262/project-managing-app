import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [isAddProject, setIsAddProject] = useState(false);
  function onClickHandle(value) {
    setIsAddProject(value);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar isEditing={onClickHandle} />
      {(!isAddProject && <NoProjectSelected isEditing={onClickHandle} />) ||
        (isAddProject && <NewProject onCancel={onClickHandle} />)}
    </main>
  );
}

export default App;
