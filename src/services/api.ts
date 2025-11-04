/**
 * API Service for MITRE ATT&CK Classifier
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export interface TechniqueMatch {
  technique_id: string;
  technique_name: string;
  tactic: string;
  description: string;
  similarity_score: number;
  activity_description?: string;
  correction?: string;
}

export interface ClassificationRequest {
  narrative: string;
  top_k?: number;
  use_llm?: boolean;
  language?: string;
}

export interface ClassificationResponse {
  narrative: string;
  techniques: TechniqueMatch[];
  processing_time: number;
  human_response?: string;
  llm_metadata?: {
    model?: string;
    language?: string;
    generation_time?: number;
    error?: string;
  };
  below_threshold?: boolean;
}

export interface HealthResponse {
  status: string;
  rag_loaded: boolean;
  techniques_count: number;
  llm_available: boolean;
  llm_model?: string;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Check API health status
   */
  async checkHealth(): Promise<HealthResponse> {
    const response = await fetch(`${this.baseURL}/health`);
    if (!response.ok) {
      throw new Error('API health check failed');
    }
    return response.json();
  }

  /**
   * Classify a security narrative into MITRE ATT&CK techniques
   */
  async classifyNarrative(
    narrative: string,
    topK: number = 10,
    useLlm: boolean = false,
    language: string = 'pt-br'
  ): Promise<ClassificationResponse> {
    const payload: ClassificationRequest = {
      narrative,
      top_k: topK,
      use_llm: useLlm,
      language: language,
    };

    const response = await fetch(`${this.baseURL}/classify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || 'Classification failed');
    }

    return response.json();
  }

  /**
   * Search for MITRE ATT&CK techniques
   */
  async searchTechniques(query: string, topK: number = 10): Promise<TechniqueMatch[]> {
    const response = await fetch(`${this.baseURL}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        top_k: topK,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || 'Search failed');
    }

    const data = await response.json();
    // Ensure we always return an array
    return data.results || [];
  }
}

export const apiService = new ApiService();
export default apiService;
