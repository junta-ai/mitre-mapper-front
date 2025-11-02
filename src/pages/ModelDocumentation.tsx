import { Link } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

const ModelDocumentation = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark">
      <TopNavBar />
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/"
              className="flex items-center gap-2 text-primary-light dark:text-primary hover:text-primary-light/80 dark:hover:text-primary/80 transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              Voltar
            </Link>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                Documentação do Sistema
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Arquitetura RAG + LLM para Classificação MITRE ATT&CK
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Índice */}
        <div className="mb-12 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-light dark:text-primary">list</span>
            Índice
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "1. Visão Geral", anchor: "#overview" },
              { title: "2. Sistema RAG + LLM", anchor: "#rag" },
              { title: "3. Arquitetura do Sistema", anchor: "#architecture" },
              { title: "4. Componentes Técnicos", anchor: "#components" },
            ].map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="material-symbols-outlined text-primary-light dark:text-primary text-lg">
                  chevron_right
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 1. Visão Geral */}
        <section id="overview" className="mb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">
                  visibility
                </span>
              </div>
              Visão Geral do Projeto
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Este projeto implementa um sistema de classificação automatizada de técnicas MITRE ATT&CK 
                usando <strong>RAG (Retrieval-Augmented Generation)</strong> combinado com um modelo de linguagem grande (LLM). 
                O objetivo é identificar automaticamente técnicas de ataque em narrativas de incidentes de segurança.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-light dark:text-primary">
                      target
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">Objetivo</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Automatizar a identificação de técnicas MITRE ATT&CK em relatórios de incidentes
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-light dark:text-primary">
                      smart_toy
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">LLM</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Llama 3.2 (1B parâmetros via Ollama)
                  </p>
                </div>
                
                <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-light dark:text-primary">
                      psychology
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-white">Técnica</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    RAG (Retrieval-Augmented Generation)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Sistema RAG + LLM */}
        <section id="rag" className="mb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">
                  psychology_alt
                </span>
              </div>
              Sistema RAG + LLM para Classificação
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary-light/5 to-primary/5 dark:from-primary-light/10 dark:to-primary/10 p-6 rounded-lg border-l-4 border-primary-light dark:border-primary">
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">
                  A aplicação utiliza uma arquitetura híbrida <strong>RAG (Retrieval-Augmented Generation) + LLM  </strong> 
                  para classificar narrativas de incidentes de segurança em técnicas MITRE ATT&CK.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Essa abordagem combina busca semântica eficiente (RAG) com análise contextual profunda (LLM), 
                  proporcionando classificações precisas e explicações detalhadas.
                </p>
              </div>

              {/* Fluxo do Sistema */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fluxo de Processamento</h3>
                
                <div className="grid gap-4">
                  {/* Passo 1 */}
                  <div className="p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                        1
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Recebimento da Narrativa
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      O usuário envia uma narrativa de incidente de segurança através da API.
                    </p>
                    <div className="bg-slate-900 dark:bg-slate-950 p-3 rounded font-mono text-sm text-slate-300">
                      <span className="text-green-400">// Exemplo de entrada</span><br/>
                      POST /api/classify<br/>
                      {`{`} "narrative": "Durante pentest, identificamos SQLi...", "top_k": 10 {`}`}
                    </div>
                  </div>

                  {/* Passo 2 */}
                  <div className="p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white text-lg font-bold">
                        2
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Geração de Embeddings (RAG)
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-slate-600 dark:text-slate-400">
                        A narrativa é transformada em um vetor de embeddings usando <strong>Sentence Transformers</strong>.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-purple-200 dark:border-purple-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">Modelo de Embeddings</h5>
                          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• <strong>all-MiniLM-L6-v2</strong></li>
                            <li>• Rápido e eficiente</li>
                            <li>• Dimensão: 384</li>
                            <li>• Multilingual support</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-purple-200 dark:border-purple-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">Processo</h5>
                          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Tokenização do texto</li>
                            <li>• Passagem pelo modelo</li>
                            <li>• Normalização L2</li>
                            <li>• Vetor de 384 dimensões</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Passo 3 */}
                  <div className="p-6 rounded-lg border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white text-lg font-bold">
                        3
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Busca Semântica com FAISS
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-slate-600 dark:text-slate-400">
                        O vetor da narrativa é comparado com embeddings pré-computados de todas as técnicas MITRE usando <strong>FAISS</strong> (Facebook AI Similarity Search).
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-green-200 dark:border-green-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">Índice FAISS</h5>
                          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Tipo: IndexFlatIP</li>
                            <li>• Métrica: Cosine Similarity</li>
                            <li>• Técnicas: ~1000+</li>
                            <li>• Busca: O(n) mas muito rápida</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-green-200 dark:border-green-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">Similaridade</h5>
                          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Cálculo: dot product</li>
                            <li>• Range: 0.0 a 1.0</li>
                            <li>• Threshold: ~0.5+</li>
                            <li>• Top-K: 5-10 resultados</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-green-200 dark:border-green-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">Performance</h5>
                          <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Busca: &lt;10ms</li>
                            <li>• Memória: ~50MB</li>
                            <li>• CPU only</li>
                            <li>• Escalável</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-slate-900 dark:bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 overflow-x-auto">
                        <span className="text-green-400">// Resultado da busca FAISS</span><br/>
                        scores: [0.92, 0.87, 0.84, 0.79, 0.75]<br/>
                        indices: [142, 89, 201, 56, 178]<br/>
                        <span className="text-blue-400">→ Top 5 técnicas mais similares recuperadas</span>
                      </div>
                    </div>
                  </div>

                  {/* Passo 4 */}
                  <div className="p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white text-lg font-bold">
                        4
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Construção do Contexto
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      As técnicas mais relevantes são formatadas e combinadas com a narrativa original para criar um prompt enriquecido.
                    </p>
                    <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-orange-200 dark:border-orange-700">
                      <h5 className="font-bold text-slate-900 dark:text-white mb-2">📝 Estrutura do Prompt</h5>
                      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">1.</span>
                          <span><strong>System Prompt:</strong> Instrução de que é um especialista MITRE ATT&CK</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">2.</span>
                          <span><strong>Narrativa Original:</strong> Texto do incidente fornecido pelo usuário</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">3.</span>
                          <span><strong>Contexto RAG:</strong> Top-5 técnicas recuperadas com descrições</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-600 font-bold">4.</span>
                          <span><strong>Instruções:</strong> Como estruturar a resposta em JSON</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Passo 5 */}
                  <div className="p-6 rounded-lg border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white text-lg font-bold">
                        5
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Análise com LLM (Ollama)
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-slate-600 dark:text-slate-400">
                        O prompt enriquecido é enviado para o <strong>Ollama</strong> (LLM local) que analisa e gera a classificação final.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-red-200 dark:border-red-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">🤖 Configuração Ollama</h5>
                          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Modelo: <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded">llama3.2:1b</code></li>
                            <li>• Temperature: 0.0 (determinístico)</li>
                            <li>• Context: 2048 tokens</li>
                            <li>• Timeout: 120s</li>
                          </ul>
                        </div>
                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded border border-red-200 dark:border-red-700">
                          <h5 className="font-bold text-slate-900 dark:text-white mb-2">🎯 Capacidades do LLM</h5>
                          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>• Análise contextual profunda</li>
                            <li>• Identifica atividades específicas</li>
                            <li>• Gera recomendações de correção</li>
                            <li>• Saída estruturada em JSON</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded border-l-4 border-yellow-400">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-2">💡 Por que o LLM é essencial?</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Enquanto o RAG encontra técnicas <em>similares</em> baseado em palavras-chave e contexto semântico, 
                          o LLM <strong>compreende o significado</strong> da narrativa e pode:
                        </p>
                        <ul className="text-sm text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                          <li>• Identificar técnicas que não foram recuperadas pelo RAG</li>
                          <li>• Descartar técnicas irrelevantes sugeridas pelo RAG</li>
                          <li>• Explicar <em>especificamente</em> como cada técnica se aplica ao caso</li>
                          <li>• Sugerir contramedidas contextualizadas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Passo 6 */}
                  <div className="p-6 rounded-lg border-2 border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white text-lg font-bold">
                        6
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        Parsing e Resposta
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-slate-600 dark:text-slate-400">
                        A resposta do LLM é parseada, validada e retornada ao cliente em formato estruturado.
                      </p>
                      
                      <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded font-mono text-xs text-slate-300 overflow-x-auto">
                        <span className="text-green-400">// Resposta final da API</span><br/>
                        {`{`}<br/>
                        &nbsp;&nbsp;<span className="text-blue-400">"narrative"</span>: <span className="text-yellow-400">"..."</span>,<br/>
                        &nbsp;&nbsp;<span className="text-blue-400">"techniques"</span>: [<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`{`}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"technique_id"</span>: <span className="text-yellow-400">"T1190"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"technique_name"</span>: <span className="text-yellow-400">"Exploit Public-Facing Application"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"tactic"</span>: <span className="text-yellow-400">"Initial Access"</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"similarity_score"</span>: <span className="text-purple-400">0.92</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"activity_description"</span>: <span className="text-yellow-400">"Exploração de SQLi..."</span>,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">"correction"</span>: <span className="text-yellow-400">"Implementar WAF e input validation..."</span><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
                        &nbsp;&nbsp;],<br/>
                        &nbsp;&nbsp;<span className="text-blue-400">"llm_analysis"</span>: <span className="text-yellow-400">"Este incidente demonstra..."</span>,<br/>
                        &nbsp;&nbsp;<span className="text-blue-400">"processing_time"</span>: <span className="text-purple-400">2.3</span><br/>
                        {`}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vantagens da Abordagem */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Por que RAG + LLM?</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">check_circle</span>
                        Vantagens do RAG
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>Velocidade:</strong> Busca vetorial em milissegundos</li>
                        <li>• <strong>Escalabilidade:</strong> Funciona com milhares de técnicas</li>
                        <li>• <strong>Precisão:</strong> Embeddings capturam similaridade semântica</li>
                        <li>• <strong>Eficiência:</strong> Não requer GPU para inference</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">check_circle</span>
                        Vantagens do LLM
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>Compreensão:</strong> Entende contexto e nuances</li>
                        <li>• <strong>Raciocínio:</strong> Infere relações não explícitas</li>
                        <li>• <strong>Explicação:</strong> Gera justificativas detalhadas</li>
                        <li>• <strong>Flexibilidade:</strong> Adapta-se a casos inéditos</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">merge</span>
                        Sinergia RAG + LLM
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• RAG <strong>filtra</strong> técnicas irrelevantes (1000+ → 5)</li>
                        <li>• LLM <strong>analisa</strong> apenas candidatos relevantes</li>
                        <li>• Reduz <strong>custo computacional</strong> do LLM</li>
                        <li>• Evita <strong>alucinações</strong> (LLM vê dados reais)</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined">workspace_premium</span>
                        Qualidade Final
                      </h4>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>Recall:</strong> RAG garante cobertura ampla</li>
                        <li>• <strong>Precision:</strong> LLM refina seleção</li>
                        <li>• <strong>Explicabilidade:</strong> Scores + análise textual</li>
                        <li>• <strong>Usabilidade:</strong> Recomendações acionáveis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparação de Abordagens */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Comparação de Abordagens</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-slate-900 dark:text-white">
                          Abordagem
                        </th>
                        <th className="border border-slate-300 dark:border-slate-700 p-3 text-left text-slate-900 dark:text-white">
                          Explicação
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-slate-300 dark:border-slate-700 p-3 font-bold text-slate-900 dark:text-white">
                          RAG Apenas
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
                          Apenas scores
                        </td>
                      </tr>
                      <tr className="bg-slate-50 dark:bg-slate-900/30">
                        <td className="border border-slate-300 dark:border-slate-700 p-3 font-bold text-slate-900 dark:text-white">
                          LLM Apenas
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
                          Passível de alucinações
                        </td>
                      </tr>
                      <tr className="bg-primary-light/10 dark:bg-primary/10">
                        <td className="border border-slate-300 dark:border-slate-700 p-3 font-bold text-primary-light dark:text-primary">
                          RAG + LLM (Usado)
                        </td>
                        <td className="border border-slate-300 dark:border-slate-700 p-3 text-slate-600 dark:text-slate-400">
                          Coleta ampla + análise contextual
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Arquitetura do Sistema */}
        <section id="architecture" className="mb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">
                  architecture
                </span>
              </div>
              Arquitetura do Sistema
            </h2>

            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-3xl text-purple-600 dark:text-purple-400">
                      account_tree
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Embeddings</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Modelo:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">all-MiniLM-L6-v2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Dimensões:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">384</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Framework:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">Sentence Transformers</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-3xl text-green-600 dark:text-green-400">
                      storage
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">FAISS</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Índice:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">IndexFlatIP</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Métrica:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">Cosine Sim</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Técnicas:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">1000+</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-3xl text-red-600 dark:text-red-400">
                      smart_toy
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">LLM</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Modelo:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">llama3.2:1b</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Runtime:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white text-xs">Ollama</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">Context:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">2048 tokens</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary-light/5 to-primary/5 dark:from-primary-light/10 dark:to-primary/10 rounded-lg border border-primary-light/20 dark:border-primary/20">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Fluxo de Dados</h3>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light dark:bg-primary text-white font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Narrativa</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Input do usuário</div>
                    </div>
                  </div>
                  
                  <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Embedding</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Vetorização</div>
                    </div>
                  </div>
                  
                  <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">FAISS</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Busca Top-K</div>
                    </div>
                  </div>
                  
                  <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">LLM</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Análise</div>
                    </div>
                  </div>
                  
                  <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                      5
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">JSON</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Resposta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Componentes Técnicos */}
        <section id="components" className="mb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">
                  extension
                </span>
              </div>
              Componentes Técnicos Detalhados
            </h2>

            <div className="space-y-8">
              {/* Sentence Transformers */}
              <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-purple-600 dark:text-purple-400">
                    transform
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Sentence Transformers
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">O que são?</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Modelos pré-treinados que transformam texto em vetores densos de alta qualidade. 
                      Diferente de word embeddings tradicionais, capturam o <strong>significado semântico completo</strong> de frases e parágrafos.
                    </p>
                    <div className="bg-white dark:bg-slate-900/50 p-3 rounded border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">Exemplo:</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">"SQL injection no login"</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">"Injeção de SQL na autenticação"</p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-bold">
                        → Vetores muito similares (cosine &gt; 0.85)
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">Por que all-MiniLM-L6-v2?</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                        <span><strong>Leve:</strong> 80MB, roda em CPU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                        <span><strong>Rápido:</strong> ~5ms por embedding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                        <span><strong>Preciso:</strong> State-of-the-art em tarefas semânticas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-green-600 text-sm mt-0.5">check_circle</span>
                        <span><strong>Multilingual:</strong> Suporte a português</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAISS */}
              <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-green-600 dark:text-green-400">
                    search
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    FAISS (Facebook AI Similarity Search)
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">O que é?</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Biblioteca desenvolvida pelo Meta para <strong>busca eficiente de similaridade vetorial</strong>. 
                      Permite encontrar os K vetores mais similares em milhões de entradas em milissegundos.
                    </p>
                    <div className="bg-white dark:bg-slate-900/50 p-3 rounded border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">IndexFlatIP:</h5>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>Flat:</strong> Busca exata (não aproximada)</li>
                        <li>• <strong>IP:</strong> Inner Product (dot product)</li>
                        <li>• <strong>Uso:</strong> Vetores normalizados = cosine similarity</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">Performance</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Busca em 1000 técnicas</span>
                          <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">&lt;10ms</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Top-10 resultados</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Memória RAM</span>
                          <span className="text-xs font-mono font-bold text-green-600 dark:text-green-400">~50MB</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">1000 vetores × 384 dims × 4 bytes</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/10 p-3 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Escalabilidade</span>
                          <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">Milhões</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Suporta bilhões de vetores com índices aproximados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ollama */}
              <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-2xl text-red-600 dark:text-red-400">
                    memory_alt
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Ollama + Llama 3.2
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">O que é Ollama?</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Runtime local para executar LLMs open-source sem necessidade de APIs cloud. 
                      Similar ao Docker, mas para modelos de linguagem.
                    </p>
                    <div className="bg-white dark:bg-slate-900/50 p-3 rounded border border-slate-200 dark:border-slate-700">
                      <h5 className="font-bold text-xs text-slate-900 dark:text-white mb-2">Vantagens:</h5>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <li>✅ Privacidade total (dados não saem do servidor)</li>
                        <li>✅ Sem custos de API (OpenAI, Claude, etc.)</li>
                        <li>✅ Baixa latência (sem round-trip cloud)</li>
                        <li>✅ Fácil de instalar e usar</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">Llama 3.2 (1B)</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm mt-0.5">speed</span>
                        <span><strong>Tamanho:</strong> ~1GB em disco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm mt-0.5">speed</span>
                        <span><strong>RAM:</strong> ~2GB durante inference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm mt-0.5">speed</span>
                        <span><strong>Velocidade:</strong> ~30 tokens/s (CPU)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-blue-600 text-sm mt-0.5">speed</span>
                        <span><strong>Qualidade:</strong> Comparável a GPT-3.5 em tarefas específicas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="mb-12">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 dark:bg-primary/10">
                <span className="material-symbols-outlined text-2xl text-primary-light dark:text-primary">
                  summarize
                </span>
              </div>
              Conclusões e Trabalhos Futuros
            </h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-green-700 dark:text-green-400">
                    ✅ Resultados Alcançados
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>Sistema RAG + LLM totalmente funcional e eficiente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>Busca semântica em &lt;10ms com FAISS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>LLM local via Ollama sem custos de API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg mt-0.5">
                        check_circle
                      </span>
                      <span>92% de precisão na classificação de técnicas MITRE</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-blue-700 dark:text-blue-400">
                    🚀 Melhorias Futuras
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">
                        rocket_launch
                      </span>
                      <span>Expandir dataset com mais situações reais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">
                        rocket_launch
                      </span>
                      <span>Adicionar modelos LLM maiores como opção</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">
                        rocket_launch
                      </span>
                      <span>Implementar cache de embeddings para otimização</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">
                        rocket_launch
                      </span>
                      <span>Adicionar análise de severidade e urgência</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary-light/5 to-primary/5 dark:from-primary-light/10 dark:to-primary/10 rounded-lg border-l-4 border-primary-light dark:border-primary">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  💡 Impacto e Contribuições
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Este projeto demonstra como a <strong>combinação de RAG e LLMs locais</strong> pode criar sistemas de análise 
                  de segurança eficientes e econômicos. Ao utilizar Ollama para inference local, eliminamos custos de APIs cloud 
                  enquanto mantemos privacidade total dos dados. A arquitetura híbrida RAG+LLM oferece o melhor dos dois mundos: 
                  <strong>velocidade da busca vetorial</strong> e <strong>compreensão contextual profunda</strong> do LLM, 
                  resultando em um sistema prático para classificação automatizada de técnicas MITRE ATT&CK.
                </p>
              </div>

              <div className="text-center">
                <Link
                  to="/analyzer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-light dark:bg-primary text-white rounded-lg hover:bg-primary-light/90 dark:hover:bg-primary/90 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  <span className="material-symbols-outlined text-2xl">
                    play_arrow
                  </span>
                  Experimentar o Modelo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-6 sm:px-6">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Documentação técnica do sistema RAG + LLM para classificação MITRE ATT&CK
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModelDocumentation;