import React, { createContext, useContext, useState, useEffect } from 'react';

interface PaymentContextType {
  isPaid: boolean;
  purchasedCourses: string[];
  setPaid: (paid: boolean, courses?: string[]) => void;
  hasCourseAccess: (courseId: string) => boolean;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [isPaid, setIsPaid] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]);

  // Load payment status from localStorage on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem('expertpath_paid');
    const savedCourses = localStorage.getItem('expertpath_courses');
    
    if (savedStatus === 'true') {
      setIsPaid(true);
    }
    
    if (savedCourses) {
      setPurchasedCourses(JSON.parse(savedCourses));
    }
  }, []);

  const setPaid = (paid: boolean, courses: string[] = ['git-expert', 'python-expert', 'english-expert']) => {
    setIsPaid(paid);
    if (paid) {
      setPurchasedCourses(courses);
      localStorage.setItem('expertpath_paid', 'true');
      localStorage.setItem('expertpath_courses', JSON.stringify(courses));
    } else {
      setPurchasedCourses([]);
      localStorage.removeItem('expertpath_paid');
      localStorage.removeItem('expertpath_courses');
    }
  };

  const hasCourseAccess = (courseId: string): boolean => {
    return isPaid && purchasedCourses.includes(courseId);
  };

  return (
    <PaymentContext.Provider value={{ isPaid, purchasedCourses, setPaid, hasCourseAccess }}>
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within PaymentProvider');
  }
  return context;
}
