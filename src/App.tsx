import React, { useState, useMemo } from 'react';
import { allChapters, getAllLessons, getLessonById } from './data';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LessonView } from './components/LessonView';

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState<string>('bai-1');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const allLessons = useMemo(() => getAllLessons(), []);

  const currentLessonIndex = useMemo(() => {
    return allLessons.findIndex(l => l.id === currentLessonId);
  }, [allLessons, currentLessonId]);

  const currentLesson = useMemo(() => {
    return getLessonById(currentLessonId) || allLessons[0];
  }, [currentLessonId, allLessons]);

  const hasPrev = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < allLessons.length - 1;

  const handlePrevLesson = () => {
    if (hasPrev) {
      setCurrentLessonId(allLessons[currentLessonIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setCurrentLessonId(allLessons[currentLessonIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 flex font-sans antialiased">
      {/* Sidebar Navigation */}
      <Sidebar
        chapters={allChapters}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-80">
        <Header
          currentLesson={currentLesson}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onPrevLesson={handlePrevLesson}
          onNextLesson={handleNextLesson}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <LessonView
            key={currentLesson.id}
            lesson={currentLesson}
          />
        </main>
      </div>
    </div>
  );
}
