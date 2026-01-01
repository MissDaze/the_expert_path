import { useState } from 'react';
import { allCourses } from '@/lib/courseContent';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Clock, Zap, CheckCircle } from 'lucide-react';
import { usePayment } from '@/contexts/PaymentContext';
import { useProgress } from '@/contexts/ProgressContext';
import { Paywall } from '@/components/Paywall';
import { ProgressDashboard } from '@/components/ProgressDashboard';

export default function CourseDashboard() {
  const { isPaid } = usePayment();
  const { isModuleComplete } = useProgress();
  
  if (!isPaid) {
    return <Paywall title="Access Your Courses" description="Purchase the complete bundle to unlock all courses" />;
  }
  
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const course = selectedCourse ? allCourses.find(c => c.id === selectedCourse) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
              EP
            </div>
            <span className="text-xl font-bold text-gray-900">ExpertPath</span>
          </div>
          <Link href="/">
            <a className="text-gray-600 hover:text-gray-900">Back to Home</a>
          </Link>
        </div>
      </header>

      <div className="container py-12">
        {!selectedCourse ? (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Learning Path</h1>
            <p className="text-xl text-gray-600 mb-12">Start with free courses, then unlock the complete bundle</p>

            {/* Progress Dashboard */}
            <ProgressDashboard />

            {/* Free Courses Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">FREE</div>
                <h2 className="text-3xl font-bold text-gray-900">Start Your Journey</h2>
              </div>
              <p className="text-gray-600 mb-8">Get started with these free introductory courses</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {allCourses.slice(0, 2).map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer"
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    <div className={`bg-gradient-to-br ${course.color} h-32 flex items-center justify-center text-5xl`}>
                      {course.icon}
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">FREE</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="space-y-2 mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{course.totalDays} day{course.totalDays > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.modules.length} modules</span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Start Free <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paid Courses Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">PREMIUM</div>
                <h2 className="text-3xl font-bold text-gray-900">Complete Mastery</h2>
              </div>
              <p className="text-gray-600 mb-8">Unlock the full 15-day expert courses (you have access)</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {allCourses.slice(2).map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg border border-blue-200 overflow-hidden hover:shadow-lg transition cursor-pointer bg-gradient-to-br from-blue-50 to-white"
                    onClick={() => setSelectedCourse(course.id)}
                  >
                    <div className={`bg-gradient-to-br ${course.color} h-32 flex items-center justify-center text-5xl`}>
                      {course.icon}
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">PREMIUM</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="space-y-2 mb-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{course.totalDays} days</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.modules.length} modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span>{course.difficulty}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Start Course <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : course ? (
          <>
            <button
              onClick={() => setSelectedCourse(null)}
              className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-2"
            >
              ← Back to Courses
            </button>

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-xl text-gray-600">{course.description}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-blue-600">{course.totalDays}</div>
                <div className="text-gray-600">Days to Complete</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-teal-600">{course.modules.length}</div>
                <div className="text-gray-600">Total Modules</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-orange-600">60+</div>
                <div className="text-gray-600">Exercises & Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Lifetime Access</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Modules</h2>
            <div className="space-y-4">
              {course.modules.map((module) => {
                const isComplete = isModuleComplete(course.id, module.id);
                return (
                  <Link key={module.id} href={`/course/${course.id}/module/${module.id}`}>
                    <a className="block bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {isComplete && (
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            )}
                            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                              Day {module.day}
                            </span>
                            <span className="text-gray-500 text-sm">{module.duration}</span>
                            <span className="text-gray-500 text-sm">•</span>
                            <span className="text-gray-500 text-sm">{module.difficulty}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                          <p className="text-gray-600 mb-3">{module.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.slice(0, 3).map((topic, i) => (
                              <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {topic}
                              </span>
                            ))}
                            {module.topics.length > 3 && (
                              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                +{module.topics.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
