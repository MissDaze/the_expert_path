import { useProgress } from '@/contexts/ProgressContext';
import { Trophy, Target, Flame, Award } from 'lucide-react';

export function ProgressDashboard() {
  const { courseProgress, getLearningStreak } = useProgress();
  const streak = getLearningStreak();

  const totalCompleted = courseProgress.reduce((sum, c) => sum + c.completedModules, 0);
  const totalModules = courseProgress.reduce((sum, c) => sum + c.totalModules, 0);
  const overallPercentage = totalModules > 0 
    ? Math.round((totalCompleted / totalModules) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-blue-600">{overallPercentage}%</div>
          <div className="text-sm text-gray-600">Overall Progress</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-green-600">{totalCompleted}</div>
          <div className="text-sm text-gray-600">Modules Completed</div>
        </div>
        
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <Flame className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-orange-600">{streak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-3xl font-bold text-purple-600">
            {courseProgress.filter(c => c.certificateEarned).length}
          </div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
      </div>

      {/* Course Progress Bars */}
      {courseProgress.length > 0 && (
        <div className="space-y-4">
          {courseProgress.map(course => (
            <div key={course.courseId}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">
                  {course.courseId.replace(/-/g, ' ').toUpperCase()}
                </span>
                <span className="text-gray-600">
                  {course.completedModules}/{course.totalModules} modules
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${course.percentage}%` }}
                />
              </div>
              {course.certificateEarned && (
                <div className="mt-2 text-sm text-green-600 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certificate Earned!
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
