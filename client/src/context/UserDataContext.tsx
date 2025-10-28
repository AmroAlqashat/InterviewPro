import { createContext, useContext, useState, ReactNode } from "react";

interface CV {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  position: string;
  isActive: boolean;
}

interface Career {
  id: string;
  title: string;
  level: string;
  isActive: boolean;
  interviewsCompleted: number;
  avgScore: number;
}

interface UserDataContextType {
  cvs: CV[];
  careers: Career[];
  activeCv: CV | null;
  activeCareer: Career | null;
  setCvs: (cvs: CV[]) => void;
  setCareers: (careers: Career[]) => void;
  setActiveCv: (id: string) => void;
  setActiveCareer: (id: string) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const [cvs, setCvsState] = useState<CV[]>([
    {
      id: "1",
      name: "John_Doe_Resume.pdf",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      position: "Frontend Developer",
      isActive: true
    },
    {
      id: "2",
      name: "Senior_Developer_CV.pdf",
      size: "1.8 MB",
      uploadDate: "2023-12-15",
      position: "Senior Developer",
      isActive: false
    },
    {
      id: "3",
      name: "Fullstack_Resume_2024.pdf",
      size: "3.1 MB",
      uploadDate: "2023-11-05",
      position: "Full Stack Developer",
      isActive: false
    }
  ]);

  const [careers, setCareersState] = useState<Career[]>([
    {
      id: "1",
      title: "Frontend Developer",
      level: "Mid-Level",
      isActive: true,
      interviewsCompleted: 12,
      avgScore: 85
    },
    {
      id: "2",
      title: "Full Stack Engineer",
      level: "Senior",
      isActive: false,
      interviewsCompleted: 8,
      avgScore: 78
    },
    {
      id: "3",
      title: "Backend Developer",
      level: "Junior",
      isActive: false,
      interviewsCompleted: 5,
      avgScore: 72
    }
  ]);

  const activeCv = cvs.find(cv => cv.isActive) || null;
  const activeCareer = careers.find(career => career.isActive) || null;

  const setCvs = (newCvs: CV[]) => {
    setCvsState(newCvs);
  };

  const setCareers = (newCareers: Career[]) => {
    setCareersState(newCareers);
  };

  const setActiveCv = (id: string) => {
    setCvsState(cvs.map(cv => ({ ...cv, isActive: cv.id === id })));
  };

  const setActiveCareer = (id: string) => {
    setCareersState(careers.map(career => ({ ...career, isActive: career.id === id })));
  };

  return (
    <UserDataContext.Provider
      value={{
        cvs,
        careers,
        activeCv,
        activeCareer,
        setCvs,
        setCareers,
        setActiveCv,
        setActiveCareer
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within UserDataProvider");
  }
  return context;
};
