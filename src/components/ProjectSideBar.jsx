import { useState } from "react";
import Button from "./Button";

export default function ProjectSideBar({ isEditing }) {
  function onClickHandle(value) {
    console.log(value);
    isEditing(value);
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onClickHandle}>+ Add Project</Button>
      </div>
    </aside>
  );
}
// import { useState } from "react";
// import Button from "./Button";
// import NewProject from "./NewProject";
// import noProjectImage from "../assets/no-projects.png";
// export default function ProjectSideBar() {
//   const [isAddProject, setIsAddProject] = useState(false);
//   function onClickHandle(value) {
//     setIsAddProject(value);
//   }
//   return (
//     <section className="flex gap-x-24">
//       <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
//         <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
//           Your Project
//         </h2>
//         <div>
//           <Button onClick={onClickHandle}>+ Add Project</Button>
//         </div>
//       </aside>
//       <div className="mt-16 text-center w-2/3">
//         {!isAddProject && (
//           <div>
//             <img
//               src={noProjectImage}
//               alt="An empty task list"
//               className="w-16 h-16 object-contain mx-auto"
//             />
//             <h2 className="text-xl font-bold text-stone-500 my-4">
//               No Project Selected
//             </h2>
//             <p className="text-stone-400 mb-4">
//               Select a Project or get started with a new one
//             </p>
//             <p className="mt-8">
//               <Button onClick={onClickHandle}>Create a new Project</Button>
//             </p>
//           </div>
//         )}
//         {isAddProject && <NewProject onCancel={onClickHandle} />}
//       </div>
//     </section>
//   );
// }
