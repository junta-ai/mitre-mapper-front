import React from 'react';
import TopNavBar from '../components/TopNavBar';
import AttackAnalyzer from '../components/AttackAnalyzer';

const Home: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <TopNavBar />
      <main className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
        <AttackAnalyzer />
      </main>
    </div>
  );
};

export default Home;
