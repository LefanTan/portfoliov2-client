import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";
import profileJson from "../../assets/profile.json";
import projectsJson from "../../assets/projects.json";

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
  repo?: string | null;
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
  error?: string;
};

export const DataContext = createContext<DataType>({} as DataType);
const DataProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [profile, setProfile] = useState<ProfileData>();
  const [projects, setProjects] = useState<ProjectData[]>();
  const [error, setError] = useState();

  useEffect(() => {
    setUser({
      id: "1",
      username: "lefan",
      email: "lefantan@hotmail.com",
    });

    setProfile(profileJson.profile);
    setProjects(projectsJson as ProjectData[]);
  }, []);

  return (
    <DataContext.Provider
      value={{ user: user, profile: profile, projects: projects, error: error }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
