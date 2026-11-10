/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LearningJourney } from './components/LearningJourney';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { Course } from './types';
import { COURSES } from './data/courses';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('generative-ai');
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegisterClick = () => {
    scrollToSection('register');
  };

  const handleExplorePrograms = () => {
    scrollToSection('programs');
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    scrollToSection('register');
  };

  const handleOpenDetails = (course: Course) => {
    setActiveModalCourse(course);
  };

  const handleCloseModal = () => {
    setActiveModalCourse(null);
  };

  const handleEnrollFromModal = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActiveModalCourse(null);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* 1. Navbar */}
      <Navbar onRegisterClick={handleRegisterClick} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onRegisterClick={handleRegisterClick}
        />

        {/* 3. Popular Programs */}
        <Programs
          onSelectCourse={handleSelectCourse}
          onOpenDetails={handleOpenDetails}
          selectedCourseId={selectedCourseId}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Learning Journey */}
        <LearningJourney />

        {/* 6. Student Testimonials */}
        <Testimonials />

        {/* 7. Registration Section */}
        <RegistrationForm
          selectedCourseId={selectedCourseId}
          onCourseChange={(id) => setSelectedCourseId(id)}
        />

        {/* 8. FAQ Section */}
        <FAQ />
      </main>

      {/* 9. Footer */}
      <Footer onSelectCourse={handleSelectCourse} />

      {/* Interactive Course Details Modal */}
      <CourseModal
        course={activeModalCourse}
        onClose={handleCloseModal}
        onEnroll={handleEnrollFromModal}
      />
    </div>
  );
}
