import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

export type ProfileData = {
  firstName?: string;
  lastName?: string;
  // an array seperated by comma
  // Do skills.split(',') to get list of skills
  skills?: string[];
  aboutMe?: string;
  linkedin?: string;
  github?: string;

  resume?: File;
  mainMedia?: File;
  medias?: File[];

  resumeUrl?: string;
  mainMediaUrl?: string;
  mediaUrls?: string[];
};

export type ProjectData = {
  id: number;
  title: string;
  shortDescription: string;
  order: number;

  description?: string;
  stack?: string[];
  link?: string;
  repo?: string;
  type?: string;
  purposeAndGoal?: string;
  problems?: string;
  lessonsLearned?: string;
  inProgress?: boolean;

  mainMedia?: File;
  medias?: File[];

  mainMediaUrl?: string;
  mediaUrls?: string[];
};

export type UserData = {
  username: string;
  email: string;
  id: string;
};

export type DataType = {
  user?: UserData;
  profile?: ProfileData;
  projects?: ProjectData[];
};

export const DataContext = createContext<DataType>({} as DataType);
const DataProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [profile, setProfile] = useState<ProfileData>();
  const [projects, setProjects] = useState<ProjectData[]>();

  useEffect(() => {
    // Get data from API
    (async () => {
      try {
        const userRes = await (await axiosInstance()?.get("/user/1")).data;
        setUser(userRes);
        setProfile(userRes.profile);

        const projectRes: ProjectData[] = await (
          await axiosInstance()?.get("/projects/" + userRes.id)
        ).data;
        projectRes.sort((a, b) => a.order - b.order);
        setProjects(projectRes);
      } catch (err: any) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{ user: user, profile: profile, projects: projects }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
