import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

const Landing: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <TopNavBar />
      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          {/* Logo */}
          <div className="size-16 text-primary-light dark:text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Identificador ATT&CK
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              Identifique técnicas MITRE ATT&CK® a partir de descrições de ataques cibernéticos
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Transforme relatórios de inteligência de ameaças e cenários de ataque em mapeamentos 
            acionáveis de técnicas MITRE ATT&CK®. Aproveite análises com IA para aprimorar suas 
            operações de segurança e capacidades de caça a ameaças.
          </p>

          {/* CTA Button */}
          <Link
            to="/analyzer"
            className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-light dark:bg-primary px-6 text-base font-bold text-white shadow-lg hover:bg-primary-light/90 dark:hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light dark:focus-visible:outline-primary transition-all hover:shadow-xl"
          >
            <span className="material-symbols-outlined text-xl">rocket_launch</span>
            <span>Começar</span>
          </Link>

          {/* Features */}
          <div className="mt-12 grid w-full gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">science</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Análise com IA</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Processamento avançado de linguagem natural para identificar técnicas com precisão
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">speed</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Resultados Instantâneos</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Obtenha mapeamentos de técnicas em segundos, não horas de análise manual
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">shield</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">MITRE ATT&CK®</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                Integração direta com o framework de ameaças padrão da indústria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-6 sm:px-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2025 Identificador ATT&CK. Desenvolvido por{' '}
            <a 
              href="https://junta.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary-light dark:text-primary hover:text-primary-light/80 dark:hover:text-primary/80 transition-colors"
            >
              junta.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
