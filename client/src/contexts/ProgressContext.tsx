import React, { createContext, useContext, useState, useEffect } from 'react';

interface ModuleProgress {
  courseId: string;
  moduleId: string;
  completed: boolean;
  completedAt?: Date;
  quizScore?: number;
}

interface CourseProgress {
  courseId: string;
  totalModules: number;
  completedModules: number;
  percentage: number;
  lastAccessedModule?: string;
  startedAt: Date;
  certificateEarned?: boolean;
}

interface ProgressContextType {
  moduleProgress: ModuleProgress[];
  courseProgress: CourseProgress[];
  markModuleComplete: (courseId: string, moduleId: string, quizScore?: number) => void;
  isModuleComplete: (courseId: string, moduleId: string) => boolean;
  getCourseProgress: (courseId: string) => CourseProgress | null;
  getLearningStreak: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([]);
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('expertpath_module_progress');
    const savedCourseProgress = localStorage.getItem('expertpath_course_progress');
    
    if (savedProgress) {
      setModuleProgress(JSON.parse(savedProgress));
    }
    
    if (savedCourseProgress) {
      setCourseProgress(JSON.parse(savedCourseProgress));
    }
  }, []);

  const markModuleComplete = (courseId: string, moduleId: string, quizScore?: number) => {
    const newProgress: ModuleProgress = {
      courseId,
      moduleId,
      completed: true,
      completedAt: new Date(),
      quizScore,
    };

    const updatedProgress = [
      ...moduleProgress.filter(p => !(p.courseId === courseId && p.moduleId === moduleId)),
      newProgress,
    ];

    setModuleProgress(updatedProgress);
    localStorage.setItem('expertpath_module_progress', JSON.stringify(updatedProgress));

    // Update course progress
    updateCourseProgress(courseId, updatedProgress);
  };

  const updateCourseProgress = (courseId: string, progress: ModuleProgress[]) => {
    const courseModules = progress.filter(p => p.courseId === courseId && p.completed);
    const totalModules = 15; // Each course has 15 modules
    const completedModules = courseModules.length;
    const percentage = Math.round((completedModules / totalModules) * 100);

    const existingCourse = courseProgress.find(c => c.courseId === courseId);
    
    const updatedCourse: CourseProgress = {
      courseId,
      totalModules,
      completedModules,
      percentage,
      lastAccessedModule: courseModules[courseModules.length - 1]?.moduleId,
      startedAt: existingCourse?.startedAt || new Date(),
      certificateEarned: percentage === 100,
    };

    const updatedCourses = [
      ...courseProgress.filter(c => c.courseId !== courseId),
      updatedCourse,
    ];

    setCourseProgress(updatedCourses);
    localStorage.setItem('expertpath_course_progress', JSON.stringify(updatedCourses));
  };

  const isModuleComplete = (courseId: string, moduleId: string): boolean => {
    return moduleProgress.some(
      p => p.courseId === courseId && p.moduleId === moduleId && p.completed
    );
  };

  const getCourseProgress = (courseId: string): CourseProgress | null => {
    return courseProgress.find(c => c.courseId === courseId) || null;
  };

  const getLearningStreak = (): number => {
    const completedDates = moduleProgress
      .filter(p => p.completed && p.completedAt)
      .map(p => new Date(p.completedAt!).toDateString());

    const uniqueDates = [...new Set(completedDates)].sort();
    
    let streak = 0;
    
    for (let i = uniqueDates.length - 1; i >= 0; i--) {
      const date = new Date(uniqueDates[i]);
      const expectedDate = new Date();
      expectedDate.setDate(expectedDate.getDate() - streak);
      
      if (date.toDateString() === expectedDate.toDateString()) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const resetProgress = () => {
    setModuleProgress([]);
    setCourseProgress([]);
    localStorage.removeItem('expertpath_module_progress');
    localStorage.removeItem('expertpath_course_progress');
  };

  return (
    <ProgressContext.Provider
      value={{
        moduleProgress,
        courseProgress,
        markModuleComplete,
        isModuleComplete,
        getCourseProgress,
        getLearningStreak,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}
