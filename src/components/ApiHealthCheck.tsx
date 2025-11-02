import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { HealthResponse } from '../services/api';

const ApiHealthCheck: React.FC = () => {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiService.checkHealth();
      setHealth(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to API');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
        <span>Checking API...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
        <span className="material-symbols-outlined text-base">error</span>
        <span>API Offline</span>
        <button
          onClick={checkHealth}
          className="ml-2 text-xs underline hover:no-underline"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!health) return null;

  return (
    <div className="flex items-center gap-2 text-sm flex-wrap">
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-slate-600 dark:text-slate-400">API Online</span>
      </div>
      <span className="text-slate-400 dark:text-slate-600">•</span>
      <span className="text-slate-500 dark:text-slate-400">
        {health.techniques_count} técnicas carregadas
      </span>
      {health.llm_available && health.llm_model && (
        <>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-blue-500">psychology</span>
            <span className="text-slate-500 dark:text-slate-400">
              LLM: {health.llm_model}
            </span>
          </div>
        </>
      )}
      {!health.llm_available && (
        <>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="text-slate-400 dark:text-slate-500 text-xs">
            LLM não disponível
          </span>
        </>
      )}
      <button
        onClick={checkHealth}
        className="ml-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
        title="Refresh status"
      >
        <span className="material-symbols-outlined text-sm">refresh</span>
      </button>
    </div>
  );
};

export default ApiHealthCheck;
