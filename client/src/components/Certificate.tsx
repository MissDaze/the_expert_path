import { Award } from 'lucide-react';
import { Button } from './ui/button';

interface CertificateProps {
  courseName: string;
  userName: string;
  completionDate: Date;
  score: number;
}

export function Certificate({ courseName, userName, completionDate, score }: CertificateProps) {
  return (
    <div className="bg-white border-8 border-blue-600 rounded-lg p-12 text-center max-w-4xl mx-auto">
      <div className="mb-6">
        <Award className="w-24 h-24 text-yellow-500 mx-auto" />
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Certificate of Completion
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        This certifies that
      </p>
      
      <h2 className="text-5xl font-bold text-blue-600 mb-8">
        {userName}
      </h2>
      
      <p className="text-xl text-gray-600 mb-4">
        has successfully completed
      </p>
      
      <h3 className="text-3xl font-bold text-gray-900 mb-8">
        {courseName}
      </h3>
      
      <p className="text-gray-600 mb-2">
        Date: {new Date(completionDate).toLocaleDateString()}
      </p>
      
      <p className="text-gray-600 mb-8">
        Final Score: {score}%
      </p>
      
      <div className="border-t-2 border-gray-300 pt-6 mt-8">
        <p className="text-sm text-gray-500">ExpertPath • Outlier Expert Training Platform</p>
      </div>
      
      <Button onClick={() => window.print()} className="mt-8">
        Download Certificate
      </Button>
    </div>
  );
}
