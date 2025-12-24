import { useRoute, Link } from 'wouter';
import { getCourseById, getModuleById } from '@/lib/courseContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Target, Award, Download } from 'lucide-react';
import { usePayment } from '@/contexts/PaymentContext';
import { Paywall } from '@/components/Paywall';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

export default function ModuleDetail() {
  const { isPaid } = usePayment();
  const [match, params] = useRoute('/course/:courseId/module/:moduleId');

  if (!match || !params) {
    return <div className="min-h-screen flex items-center justify-center">Module not found</div>;
  }
  
  if (!isPaid) {
    return <Paywall title="Unlock This Module" description="Purchase access to view course content" />;
  }

  const { courseId, moduleId } = params as { courseId: string; moduleId: string };
  const course = getCourseById(courseId);
  const module = getModuleById(courseId, moduleId);

  if (!course || !module) {
    return <div className="min-h-screen flex items-center justify-center">Module not found</div>;
  }

  const moduleIndex = course.modules.findIndex(m => m.id === moduleId);
  const previousModule = moduleIndex > 0 ? course.modules[moduleIndex - 1] : null;
  const nextModule = moduleIndex < course.modules.length - 1 ? course.modules[moduleIndex + 1] : null;

  // Helper function to get the course folder name from course ID
  const getCourseFolderName = (courseId: string): string => {
    const folderMap: Record<string, string> = {
      'git-expert': 'git',
      'python-expert': 'python',
      'english-expert': 'english',
      'outlier-tips': 'outlier',
      'one-day-course': 'one-day',
    };
    return folderMap[courseId] || courseId;
  };

  // Construct the path to the module markdown file
  const courseFolder = getCourseFolderName(courseId);
  const markdownFilePath = `/course-materials/${courseFolder}/modules/day-${String(module.day).padStart(2, '0')}-module.md`;

  // Helper function to download files
  const handleDownload = (type: 'exercises' | 'answers' | 'project') => {
    const day = String(module.day).padStart(2, '0');
    let filePath = '';
    
    if (type === 'exercises') {
      filePath = `/course-materials/${courseFolder}/modules/day-${day}-module.md`;
    } else if (type === 'answers') {
      filePath = `/course-materials/${courseFolder}/answer-keys/day-${day}-answers.md`;
    } else if (type === 'project') {
      filePath = `/course-materials/${courseFolder}/projects/day-${day}-project.md`;
    }

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'download.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container py-4 flex justify-between items-center">
          <Link href="/dashboard">
            <a className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ChevronLeft className="w-5 h-5" />
              Back to Dashboard
            </a>
          </Link>
          <div className="text-sm text-gray-600">
            {course.title} • Day {module.day}
          </div>
        </div>
      </header>

      <div className="container py-12">
        {/* Module Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              Day {module.day}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{module.duration}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">{module.difficulty}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{module.title}</h1>
          <p className="text-xl text-gray-600">{module.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{moduleIndex + 1} of {course.modules.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((moduleIndex + 1) / course.modules.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            {/* Learning Objectives */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Learning Objectives</h2>
              </div>
              <ul className="space-y-3">
                {module.objectives.map((objective, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold flex-shrink-0 mt-1">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Learning Outcomes</h2>
              </div>
              <ul className="space-y-3">
                {module.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
              </div>
              <MarkdownRenderer 
                filePath={markdownFilePath}
                fallback={module.content}
              />
            </div>

            {/* Topics */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Topics Covered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {module.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Exercises */}
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Exercises & Materials</h2>
              <p className="text-gray-700 mb-4">This module includes:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Comprehensive module content</li>
                <li>✓ Practical exercises and projects</li>
                <li>✓ Complete answer key and solutions</li>
                <li>✓ Step-by-step instructions</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => handleDownload('exercises')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Module
                </Button>
                <Button 
                  onClick={() => handleDownload('project')}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Project
                </Button>
                <Button 
                  onClick={() => handleDownload('answers')}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Answers
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Module Navigation */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Module Navigation</h3>

              {previousModule && (
                <Link href={`/course/${courseId}/module/${previousModule.id}`}>
                  <a className="block mb-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition">
                    <div className="text-xs text-gray-600 mb-1">← Previous</div>
                    <div className="text-sm font-semibold text-gray-900 truncate">{previousModule.title}</div>
                  </a>
                </Link>
              )}

              {nextModule && (
                <Link href={`/course/${courseId}/module/${nextModule.id}`}>
                  <a className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition border border-blue-200">
                    <div className="text-xs text-blue-600 mb-1">Next →</div>
                    <div className="text-sm font-semibold text-gray-900 truncate">{nextModule.title}</div>
                  </a>
                </Link>
              )}

              {!nextModule && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm font-semibold text-green-700">🎉 Course Complete!</div>
                </div>
              )}

              {/* Course Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Course Progress</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Completion</span>
                      <span className="font-semibold text-gray-900">{Math.round(((moduleIndex + 1) / course.modules.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${((moduleIndex + 1) / course.modules.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {moduleIndex + 1} of {course.modules.length} modules completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between gap-4">
          {previousModule ? (
            <Link href={`/course/${courseId}/module/${previousModule.id}`}>
              <a>
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Previous Module
                </Button>
              </a>
            </Link>
          ) : (
            <div></div>
          )}

          {nextModule ? (
            <Link href={`/course/${courseId}/module/${nextModule.id}`}>
              <a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                  Next Module
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              ✓ Course Complete!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
