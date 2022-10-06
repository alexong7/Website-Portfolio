import { Project } from "../typings";

export const fetchProjects = async () => {
  console.log("in here");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  console.log(res);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
