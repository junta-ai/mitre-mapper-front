import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';
import type { TechniqueMatch } from '../services/api';

interface Technique {
  id: string;
  name: string;
  icon: string;
  tactic: string;
  description: string;
  similarity_score: number;
}

const AttackAnalyzer: React.FC = () => {
  const navigate = useNavigate();
  
  const MITRE_TECHNIQUES = {
    'T1595': { name: 'Varredura Ativa', tactic: 'Reconnaissance', icon: 'radar' },
    'T1592': { name: 'Coleta de Informações sobre Hosts da Vítima', tactic: 'Reconnaissance', icon: 'devices' },
    'T1589': { name: 'Coleta de Informações de Identidade da Vítima', tactic: 'Reconnaissance', icon: 'badge' },
    'T1590': { name: 'Coleta de Informações de Rede da Vítima', tactic: 'Reconnaissance', icon: 'lan' },
    'T1591': { name: 'Coleta de Informações da Organização da Vítima', tactic: 'Reconnaissance', icon: 'business' },
    'T1598': { name: 'Phishing para Informações', tactic: 'Reconnaissance', icon: 'phishing' },
    'T1597': { name: 'Busca em Fontes Fechadas', tactic: 'Reconnaissance', icon: 'lock' },
    'T1596': { name: 'Busca em Bases Técnicas Abertas', tactic: 'Reconnaissance', icon: 'public' },
    'T1593': { name: 'Busca em Sites/Domínios Abertos', tactic: 'Reconnaissance', icon: 'search' },
    'T1594': { name: 'Busca em Sites da Vítima', tactic: 'Reconnaissance', icon: 'website' },
    'T1650': { name: 'Aquisição de Acesso', tactic: 'Resource Development', icon: 'key' },
    'T1583': { name: 'Aquisição de Infraestrutura', tactic: 'Resource Development', icon: 'cloud_queue' },
    'T1586': { name: 'Comprometimento de Contas', tactic: 'Resource Development', icon: 'account_circle' },
    'T1584': { name: 'Comprometimento de Infraestrutura', tactic: 'Resource Development', icon: 'dns' },
    'T1587': { name: 'Desenvolvimento de Capacidades', tactic: 'Resource Development', icon: 'code' },
    'T1585': { name: 'Estabelecimento de Contas', tactic: 'Resource Development', icon: 'person_add' },
    'T1588': { name: 'Obtenção de Capacidades', tactic: 'Resource Development', icon: 'shopping_cart' },
    'T1608': { name: 'Preparação de Capacidades', tactic: 'Resource Development', icon: 'upload' },
    'T1659': { name: 'Injeção de Conteúdo', tactic: 'Initial Access', icon: 'syringe' },
    'T1189': { name: 'Comprometimento por Drive-by', tactic: 'Initial Access', icon: 'web' },
    'T1190': { name: 'Exploração de Aplicação Exposta', tactic: 'Initial Access', icon: 'bug_report' },
    'T1133': { name: 'Serviços Remotos Externos', tactic: 'Initial Access', icon: 'vpn_key' },
    'T1200': { name: 'Adição de Hardware', tactic: 'Initial Access', icon: 'usb' },
    'T1566': { name: 'Phishing', tactic: 'Initial Access', icon: 'phishing' },
    'T1091': { name: 'Replicação via Mídia Removível', tactic: 'Initial Access', icon: 'sd_storage' },
    'T1195': { name: 'Comprometimento da Cadeia de Suprimentos', tactic: 'Initial Access', icon: 'inventory' },
    'T1199': { name: 'Relacionamento Confiável', tactic: 'Initial Access', icon: 'handshake' },
    'T1078': { name: 'Contas Válidas', tactic: 'Initial Access', icon: 'verified_user' },
    'T1669': { name: 'Redes Wi-Fi', tactic: 'Initial Access', icon: 'wifi' },
    'T1651': { name: 'Comando de Administração de Nuvem', tactic: 'Execution', icon: 'cloud' },
    'T1059': { name: 'Interpretador de Comando e Script', tactic: 'Execution', icon: 'terminal' },
    'T1609': { name: 'Comando de Administração de Container', tactic: 'Execution', icon: 'container' },
    'T1610': { name: 'Implantação de Container', tactic: 'Execution', icon: 'deployed_code' },
    'T1675': { name: 'Comando de Administração ESXi', tactic: 'Execution', icon: 'server' },
    'T1203': { name: 'Exploração para Execução no Cliente', tactic: 'Execution', icon: 'laptop' },
    'T1674': { name: 'Injeção de Entrada', tactic: 'Execution', icon: 'keyboard' },
    'T1559': { name: 'Comunicação entre Processos', tactic: 'Execution', icon: 'sync_alt' },
    'T1106': { name: 'API Nativa', tactic: 'Execution', icon: 'api' },
    'T1053': { name: 'Tarefa/Job Agendado', tactic: 'Execution', icon: 'schedule' },
    'T1648': { name: 'Execução Serverless', tactic: 'Execution', icon: 'functions' },
    'T1129': { name: 'Módulos Compartilhados', tactic: 'Execution', icon: 'library_books' },
    'T1072': { name: 'Ferramentas de Implantação de Software', tactic: 'Execution', icon: 'install_desktop' },
    'T1569': { name: 'Serviços do Sistema', tactic: 'Execution', icon: 'settings' },
    'T1204': { name: 'Execução pelo Usuário', tactic: 'Execution', icon: 'person' },
    'T1047': { name: 'Windows Management Instrumentation', tactic: 'Execution', icon: 'monitoring' },
    'T1098': { name: 'Manipulação de Conta', tactic: 'Persistence', icon: 'manage_accounts' },
    'T1197': { name: 'Jobs BITS', tactic: 'Persistence', icon: 'download' },
    'T1547': { name: 'Execução Automática no Boot/Logon', tactic: 'Persistence', icon: 'power_settings_new' },
    'T1037': { name: 'Scripts de Inicialização Boot/Logon', tactic: 'Persistence', icon: 'script' },
    'T1671': { name: 'Integração de Aplicação em Nuvem', tactic: 'Persistence', icon: 'integration_instructions' },
    'T1554': { name: 'Comprometimento de Binário de Software do Host', tactic: 'Persistence', icon: 'computer' },
    'T1136': { name: 'Criação de Conta', tactic: 'Persistence', icon: 'person_add' },
    'T1543': { name: 'Criação/Modificação de Processo do Sistema', tactic: 'Persistence', icon: 'build' },
    'T1546': { name: 'Execução Disparada por Evento', tactic: 'Persistence', icon: 'event' },
    'T1668': { name: 'Controle Exclusivo', tactic: 'Persistence', icon: 'lock_person' },
    'T1574': { name: 'Sequestro de Fluxo de Execução', tactic: 'Persistence', icon: 'alt_route' },
    'T1525': { name: 'Implantação de Imagem Interna', tactic: 'Persistence', icon: 'image' },
    'T1556': { name: 'Modificação do Processo de Autenticação', tactic: 'Persistence', icon: 'password' },
    'T1112': { name: 'Modificação do Registro', tactic: 'Persistence', icon: 'database' },
    'T1137': { name: 'Inicialização de Aplicação Office', tactic: 'Persistence', icon: 'description' },
    'T1653': { name: 'Configurações de Energia', tactic: 'Persistence', icon: 'power' },
    'T1542': { name: 'Boot Pré-SO', tactic: 'Persistence', icon: 'memory' },
    'T1505': { name: 'Componente de Software de Servidor', tactic: 'Persistence', icon: 'dns' },
    'T1176': { name: 'Extensões de Software', tactic: 'Persistence', icon: 'extension' },
    'T1205': { name: 'Sinalização de Tráfego', tactic: 'Persistence', icon: 'traffic' },
    'T1548': { name: 'Abuso de Mecanismo de Controle de Elevação', tactic: 'Privilege Escalation', icon: 'shield' },
    'T1134': { name: 'Manipulação de Token de Acesso', tactic: 'Privilege Escalation', icon: 'token' },
    'T1484': { name: 'Modificação de Política de Domínio/Tenant', tactic: 'Privilege Escalation', icon: 'policy' },
    'T1611': { name: 'Escape para o Host', tactic: 'Privilege Escalation', icon: 'exit_to_app' },
    'T1068': { name: 'Exploração para Escalação de Privilégios', tactic: 'Privilege Escalation', icon: 'trending_up' },
    'T1055': { name: 'Injeção de Processo', tactic: 'Privilege Escalation', icon: 'inject' },
    'T1140': { name: 'Desofuscação/Decodificação de Arquivos', tactic: 'Defense Evasion', icon: 'lock_open' },
    'T1622': { name: 'Evasão de Debugger', tactic: 'Defense Evasion', icon: 'bug_report' },
    'T1006': { name: 'Acesso Direto ao Volume', tactic: 'Defense Evasion', icon: 'storage' },
    'T1672': { name: 'Falsificação de Email', tactic: 'Defense Evasion', icon: 'email' },
    'T1480': { name: 'Guardrails de Execução', tactic: 'Defense Evasion', icon: 'security' },
    'T1211': { name: 'Exploração para Evasão de Defesa', tactic: 'Defense Evasion', icon: 'security' },
    'T1222': { name: 'Modificação de Permissões de Arquivo/Diretório', tactic: 'Defense Evasion', icon: 'folder' },
    'T1564': { name: 'Ocultação de Artefatos', tactic: 'Defense Evasion', icon: 'visibility_off' },
    'T1562': { name: 'Prejuízo de Defesas', tactic: 'Defense Evasion', icon: 'block' },
    'T1656': { name: 'Personificação', tactic: 'Defense Evasion', icon: 'person' },
    'T1070': { name: 'Remoção de Indicadores', tactic: 'Defense Evasion', icon: 'delete_sweep' },
    'T1202': { name: 'Execução Indireta de Comando', tactic: 'Defense Evasion', icon: 'call_split' },
    'T1036': { name: 'Mascaramento', tactic: 'Defense Evasion', icon: 'masks' },
    'T1578': { name: 'Modificação de Infraestrutura de Computação em Nuvem', tactic: 'Defense Evasion', icon: 'cloud_sync' },
    'T1666': { name: 'Modificação de Hierarquia de Recursos em Nuvem', tactic: 'Defense Evasion', icon: 'account_tree' },
    'T1601': { name: 'Modificação de Imagem do Sistema', tactic: 'Defense Evasion', icon: 'system_update' },
    'T1599': { name: 'Ponte de Fronteira de Rede', tactic: 'Defense Evasion', icon: 'router' },
    'T1027': { name: 'Arquivos ou Informações Ofuscados', tactic: 'Defense Evasion', icon: 'blur_on' },
    'T1647': { name: 'Modificação de Arquivo Plist', tactic: 'Defense Evasion', icon: 'edit' },
    'T1620': { name: 'Carregamento Reflexivo de Código', tactic: 'Defense Evasion', icon: 'cached' },
    'T1207': { name: 'Controlador de Domínio Rogue', tactic: 'Defense Evasion', icon: 'dangerous' },
    'T1014': { name: 'Rootkit', tactic: 'Defense Evasion', icon: 'warning' },
    'T1553': { name: 'Subversão de Controles de Confiança', tactic: 'Defense Evasion', icon: 'gpp_bad' },
    'T1218': { name: 'Execução Proxy de Binário do Sistema', tactic: 'Defense Evasion', icon: 'swap_horiz' },
    'T1216': { name: 'Execução Proxy de Script do Sistema', tactic: 'Defense Evasion', icon: 'code' },
    'T1221': { name: 'Injeção de Template', tactic: 'Defense Evasion', icon: 'description' },
    'T1127': { name: 'Execução Proxy de Utilitários de Desenvolvedor Confiáveis', tactic: 'Defense Evasion', icon: 'engineering' },
    'T1535': { name: 'Regiões de Nuvem Não Utilizadas/Não Suportadas', tactic: 'Defense Evasion', icon: 'cloud_off' },
    'T1550': { name: 'Uso de Material de Autenticação Alternativo', tactic: 'Defense Evasion', icon: 'key' },
    'T1497': { name: 'Evasão de Virtualização/Sandbox', tactic: 'Defense Evasion', icon: 'computer' },
    'T1600': { name: 'Enfraquecimento de Criptografia', tactic: 'Defense Evasion', icon: 'no_encryption' },
    'T1220': { name: 'Processamento de Script XSL', tactic: 'Defense Evasion', icon: 'code' },
    'T1557': { name: 'Adversário no Meio', tactic: 'Credential Access', icon: 'person_search' },
    'T1110': { name: 'Força Bruta', tactic: 'Credential Access', icon: 'lock' },
    'T1555': { name: 'Credenciais de Armazenamentos de Senhas', tactic: 'Credential Access', icon: 'vpn_key' },
    'T1212': { name: 'Exploração para Acesso a Credenciais', tactic: 'Credential Access', icon: 'key' },
    'T1187': { name: 'Autenticação Forçada', tactic: 'Credential Access', icon: 'lock_open' },
    'T1606': { name: 'Falsificação de Credenciais Web', tactic: 'Credential Access', icon: 'web' },
    'T1056': { name: 'Captura de Entrada', tactic: 'Credential Access', icon: 'keyboard' },
    'T1111': { name: 'Interceptação de Autenticação Multi-Fator', tactic: 'Credential Access', icon: 'security' },
    'T1621': { name: 'Geração de Solicitação de Autenticação Multi-Fator', tactic: 'Credential Access', icon: 'notifications' },
    'T1040': { name: 'Sniffing de Rede', tactic: 'Credential Access', icon: 'wifi_tethering' },
    'T1003': { name: 'Dump de Credenciais do SO', tactic: 'Credential Access', icon: 'download' },
    'T1528': { name: 'Roubo de Token de Acesso de Aplicação', tactic: 'Credential Access', icon: 'token' },
    'T1649': { name: 'Roubo/Falsificação de Certificados de Autenticação', tactic: 'Credential Access', icon: 'verified' },
    'T1558': { name: 'Roubo/Falsificação de Tickets Kerberos', tactic: 'Credential Access', icon: 'confirmation_number' },
    'T1539': { name: 'Roubo de Cookie de Sessão Web', tactic: 'Credential Access', icon: 'cookie' },
    'T1552': { name: 'Credenciais Inseguras', tactic: 'Credential Access', icon: 'lock_open' },
    'T1087': { name: 'Descoberta de Conta', tactic: 'Discovery', icon: 'account_circle' },
    'T1010': { name: 'Descoberta de Janela de Aplicação', tactic: 'Discovery', icon: 'window' },
    'T1217': { name: 'Descoberta de Informações do Navegador', tactic: 'Discovery', icon: 'web' },
    'T1580': { name: 'Descoberta de Infraestrutura em Nuvem', tactic: 'Discovery', icon: 'cloud' },
    'T1538': { name: 'Dashboard de Serviço em Nuvem', tactic: 'Discovery', icon: 'dashboard' },
    'T1526': { name: 'Descoberta de Serviço em Nuvem', tactic: 'Discovery', icon: 'cloud_queue' },
    'T1619': { name: 'Descoberta de Objeto de Armazenamento em Nuvem', tactic: 'Discovery', icon: 'storage' },
    'T1613': { name: 'Descoberta de Container e Recursos', tactic: 'Discovery', icon: 'inventory' },
    'T1652': { name: 'Descoberta de Driver de Dispositivo', tactic: 'Discovery', icon: 'device_hub' },
    'T1482': { name: 'Descoberta de Confiança de Domínio', tactic: 'Discovery', icon: 'domain' },
    'T1083': { name: 'Descoberta de Arquivo e Diretório', tactic: 'Discovery', icon: 'folder' },
    'T1615': { name: 'Descoberta de Política de Grupo', tactic: 'Discovery', icon: 'policy' },
    'T1654': { name: 'Enumeração de Logs', tactic: 'Discovery', icon: 'list' },
    'T1046': { name: 'Descoberta de Serviço de Rede', tactic: 'Discovery', icon: 'lan' },
    'T1135': { name: 'Descoberta de Compartilhamento de Rede', tactic: 'Discovery', icon: 'folder_shared' },
    'T1201': { name: 'Descoberta de Política de Senha', tactic: 'Discovery', icon: 'password' },
    'T1120': { name: 'Descoberta de Dispositivo Periférico', tactic: 'Discovery', icon: 'devices_other' },
    'T1069': { name: 'Descoberta de Grupos de Permissão', tactic: 'Discovery', icon: 'group' },
    'T1057': { name: 'Descoberta de Processo', tactic: 'Discovery', icon: 'process' },
    'T1012': { name: 'Consulta ao Registro', tactic: 'Discovery', icon: 'database' },
    'T1018': { name: 'Descoberta de Sistema Remoto', tactic: 'Discovery', icon: 'computer' },
    'T1518': { name: 'Descoberta de Software', tactic: 'Discovery', icon: 'apps' },
    'T1082': { name: 'Descoberta de Informações do Sistema', tactic: 'Discovery', icon: 'info' },
    'T1614': { name: 'Descoberta de Localização do Sistema', tactic: 'Discovery', icon: 'location_on' },
    'T1016': { name: 'Descoberta de Configuração de Rede do Sistema', tactic: 'Discovery', icon: 'settings_ethernet' },
    'T1049': { name: 'Descoberta de Conexões de Rede do Sistema', tactic: 'Discovery', icon: 'cable' },
    'T1033': { name: 'Descoberta de Proprietário/Usuário do Sistema', tactic: 'Discovery', icon: 'person' },
    'T1007': { name: 'Descoberta de Serviço do Sistema', tactic: 'Discovery', icon: 'settings' },
    'T1124': { name: 'Descoberta de Hora do Sistema', tactic: 'Discovery', icon: 'schedule' },
    'T1673': { name: 'Descoberta de Máquina Virtual', tactic: 'Discovery', icon: 'virtual_machine' },
    'T1210': { name: 'Exploração de Serviços Remotos', tactic: 'Lateral Movement', icon: 'bug_report' },
    'T1534': { name: 'Spearphishing Interno', tactic: 'Lateral Movement', icon: 'phishing' },
    'T1570': { name: 'Transferência Lateral de Ferramenta', tactic: 'Lateral Movement', icon: 'swap_horiz' },
    'T1563': { name: 'Sequestro de Sessão de Serviço Remoto', tactic: 'Lateral Movement', icon: 'screen_share' },
    'T1021': { name: 'Serviços Remotos', tactic: 'Lateral Movement', icon: 'remote_desktop' },
    'T1080': { name: 'Contaminação de Conteúdo Compartilhado', tactic: 'Lateral Movement', icon: 'folder_shared' },
    'T1560': { name: 'Arquivamento de Dados Coletados', tactic: 'Collection', icon: 'archive' },
    'T1123': { name: 'Captura de Áudio', tactic: 'Collection', icon: 'mic' },
    'T1119': { name: 'Coleta Automatizada', tactic: 'Collection', icon: 'auto_mode' },
    'T1185': { name: 'Sequestro de Sessão do Navegador', tactic: 'Collection', icon: 'web' },
    'T1115': { name: 'Dados da Área de Transferência', tactic: 'Collection', icon: 'content_paste' },
    'T1530': { name: 'Dados de Armazenamento em Nuvem', tactic: 'Collection', icon: 'cloud' },
    'T1602': { name: 'Dados de Repositório de Configuração', tactic: 'Collection', icon: 'settings' },
    'T1213': { name: 'Dados de Repositórios de Informação', tactic: 'Collection', icon: 'storage' },
    'T1005': { name: 'Dados do Sistema Local', tactic: 'Collection', icon: 'computer' },
    'T1039': { name: 'Dados de Drive Compartilhado de Rede', tactic: 'Collection', icon: 'folder_shared' },
    'T1025': { name: 'Dados de Mídia Removível', tactic: 'Collection', icon: 'usb' },
    'T1074': { name: 'Dados Preparados', tactic: 'Collection', icon: 'inventory' },
    'T1114': { name: 'Coleta de Email', tactic: 'Collection', icon: 'email' },
    'T1113': { name: 'Captura de Tela', tactic: 'Collection', icon: 'screenshot' },
    'T1125': { name: 'Captura de Vídeo', tactic: 'Collection', icon: 'videocam' },
    'T1071': { name: 'Protocolo de Camada de Aplicação', tactic: 'Command and Control', icon: 'layers' },
    'T1092': { name: 'Comunicação via Mídia Removível', tactic: 'Command and Control', icon: 'usb' },
    'T1132': { name: 'Codificação de Dados', tactic: 'Command and Control', icon: 'code' },
    'T1001': { name: 'Ofuscação de Dados', tactic: 'Command and Control', icon: 'blur_on' },
    'T1568': { name: 'Resolução Dinâmica', tactic: 'Command and Control', icon: 'dns' },
    'T1573': { name: 'Canal Criptografado', tactic: 'Command and Control', icon: 'lock' },
    'T1008': { name: 'Canais de Fallback', tactic: 'Command and Control', icon: 'alt_route' },
    'T1665': { name: 'Ocultação de Infraestrutura', tactic: 'Command and Control', icon: 'visibility_off' },
    'T1105': { name: 'Transferência de Ferramenta de Entrada', tactic: 'Command and Control', icon: 'download' },
    'T1104': { name: 'Canais Multi-Estágio', tactic: 'Command and Control', icon: 'stairs' },
    'T1095': { name: 'Protocolo de Camada Não-Aplicação', tactic: 'Command and Control', icon: 'network_check' },
    'T1571': { name: 'Porta Não-Padrão', tactic: 'Command and Control', icon: 'settings_ethernet' },
    'T1572': { name: 'Tunelamento de Protocolo', tactic: 'Command and Control', icon: 'vpn_lock' },
    'T1090': { name: 'Proxy', tactic: 'Command and Control', icon: 'vpn_key' },
    'T1219': { name: 'Ferramentas de Acesso Remoto', tactic: 'Command and Control', icon: 'remote_desktop' },
    'T1102': { name: 'Serviço Web', tactic: 'Command and Control', icon: 'public' },
    'T1020': { name: 'Exfiltração Automatizada', tactic: 'Exfiltration', icon: 'auto_mode' },
    'T1030': { name: 'Limites de Tamanho de Transferência de Dados', tactic: 'Exfiltration', icon: 'data_usage' },
    'T1048': { name: 'Exfiltração por Protocolo Alternativo', tactic: 'Exfiltration', icon: 'swap_horiz' },
    'T1041': { name: 'Exfiltração por Canal C2', tactic: 'Exfiltration', icon: 'arrow_upward' },
    'T1011': { name: 'Exfiltração por Outra Mídia de Rede', tactic: 'Exfiltration', icon: 'wifi' },
    'T1052': { name: 'Exfiltração por Mídia Física', tactic: 'Exfiltration', icon: 'usb' },
    'T1567': { name: 'Exfiltração por Serviço Web', tactic: 'Exfiltration', icon: 'cloud_upload' },
    'T1029': { name: 'Transferência Agendada', tactic: 'Exfiltration', icon: 'schedule' },
    'T1537': { name: 'Transferência de Dados para Conta em Nuvem', tactic: 'Exfiltration', icon: 'cloud_sync' },
    'T1531': { name: 'Remoção de Acesso à Conta', tactic: 'Impact', icon: 'no_accounts' },
    'T1485': { name: 'Destruição de Dados', tactic: 'Impact', icon: 'delete_forever' },
    'T1486': { name: 'Dados Criptografados para Impacto', tactic: 'Impact', icon: 'enhanced_encryption' },
    'T1565': { name: 'Manipulação de Dados', tactic: 'Impact', icon: 'edit' },
    'T1491': { name: 'Desfiguração', tactic: 'Impact', icon: 'broken_image' },
    'T1561': { name: 'Limpeza de Disco', tactic: 'Impact', icon: 'cleaning_services' },
    'T1667': { name: 'Bombardeio de Email', tactic: 'Impact', icon: 'mark_email_unread' },
    'T1499': { name: 'Negação de Serviço no Endpoint', tactic: 'Impact', icon: 'block' },
    'T1657': { name: 'Roubo Financeiro', tactic: 'Impact', icon: 'account_balance' },
    'T1495': { name: 'Corrupção de Firmware', tactic: 'Impact', icon: 'memory' },
    'T1490': { name: 'Inibição de Recuperação do Sistema', tactic: 'Impact', icon: 'restore' },
    'T1498': { name: 'Negação de Serviço de Rede', tactic: 'Impact', icon: 'network_check' },
    'T1496': { name: 'Sequestro de Recursos', tactic: 'Impact', icon: 'currency_bitcoin' },
    'T1489': { name: 'Parada de Serviço', tactic: 'Impact', icon: 'stop_circle' },
    'T1529': { name: 'Desligamento/Reinicialização do Sistema', tactic: 'Impact', icon: 'power_settings_new' },
  };
  const [description, setDescription] = useState('');
  const [techniques, setTechniques] = useState<Technique[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [humanResponse, setHumanResponse] = useState<string | null>(null);
  const [llmMetadata, setLlmMetadata] = useState<{
    model?: string;
    language?: string;
    generation_time?: number;
    error?: string;
  } | null>(null);
  const [processingTime, setProcessingTime] = useState<number | null>(null);
  const [useLlm, setUseLlm] = useState(false);
  const [language, setLanguage] = useState('pt-br');
  const [belowThreshold, setBelowThreshold] = useState(false);

  const getTechniqueIcon = (techniqueId: string): string => {
    const technique = MITRE_TECHNIQUES[techniqueId as keyof typeof MITRE_TECHNIQUES];
    return technique?.icon || 'help';
  };

  const handleAnalyze = async () => {
    if (!description.trim()) {
      setError('Por favor, insira uma descrição do ataque.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setTechniques([]);
    setHumanResponse(null);
    setLlmMetadata(null);
    setProcessingTime(null);
    setBelowThreshold(false);

    try {
      const result = await apiService.classifyNarrative(description, 10, useLlm, language);
      
      const mappedTechniques: Technique[] = result.techniques.map((tech: TechniqueMatch) => ({
        id: tech.technique_id,
        name: tech.technique_name,
        icon: getTechniqueIcon(tech.technique_id),
        tactic: tech.tactic,
        description: tech.description,
        similarity_score: tech.similarity_score,
      }));

      setTechniques(mappedTechniques);
      setHumanResponse(result.human_response || null);
      setLlmMetadata(result.llm_metadata || null);
      setProcessingTime(result.processing_time);
      setBelowThreshold(result.below_threshold || false);
    } catch (err) {
      console.error('Error analyzing narrative:', err);
      setError(err instanceof Error ? err.message : 'Erro ao analisar o cenário. Verifique se a API está rodando.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
  };

  const handleClear = () => {
    setDescription('');
  };

  return (
    <div className="flex w-full max-w-5xl flex-col gap-8">
      {/* Back Button and Page Heading */}
      <div className="w-full">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 text-sm font-semibold text-slate-600 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10 transition-colors"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>Voltar</span>
          </button>
        </div>
        <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
          Análise de Cenários de Ataque Cibernético
        </h1>
      </div>

      {/* Input Card */}
      <div className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
        <div className="p-6">
          <label className="sr-only" htmlFor="attack-description">
            Descrição do Ataque
          </label>
          <textarea
            className="form-input w-full resize-none rounded-lg border-slate-300 bg-slate-50 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:border-primary-light focus:ring-primary-light dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200 dark:placeholder:text-slate-400 dark:focus:border-primary dark:focus:ring-primary"
            id="attack-description"
            placeholder="Descreva a sequência do ataque, comportamentos observados ou cole um relatório de ameaças aqui..."
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 px-6 py-4 dark:border-slate-800">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-md h-9 px-3 text-sm font-semibold text-slate-600 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10"
              >
                <span className="material-symbols-outlined text-base">content_copy</span>
                <span>Copiar</span>
              </button>
              <button
                onClick={handleClear}
                className="flex items-center justify-center gap-2 rounded-md h-9 px-3 text-sm font-semibold text-slate-600 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10"
              >
                <span className="material-symbols-outlined text-base">delete</span>
                <span>Limpar</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useLlm}
                  onChange={(e) => setUseLlm(e.target.checked)}
                  className="rounded border-slate-300 text-primary-light focus:ring-primary-light dark:border-slate-700 dark:bg-slate-800"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Usar LLM
                </span>
              </label>
              {useLlm && (
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="rounded-md border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <option value="pt-br">Português</option>
                  <option value="en">English</option>
                </select>
              )}
            </div>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={isLoading || !description.trim()}
            className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-light dark:bg-primary px-5 text-base font-bold text-white shadow-sm hover:bg-primary-light/90 dark:hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light dark:focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span>
                <span className="truncate">Analisando...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">hub</span>
                <span className="truncate">Analisar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="w-full rounded-xl border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-red-600 dark:text-red-400">error</span>
            <p className="text-red-800 dark:text-red-300">{error}</p>
          </div>
        </div>
      )}

      {/* LLM Analysis */}
      {humanResponse && (
        <div className="w-full rounded-xl border border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="p-6">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">psychology</span>
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200">Análise do LLM</h3>
              </div>
              {llmMetadata && (
                <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                  {llmMetadata.model && (
                    <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                      {llmMetadata.model}
                    </span>
                  )}
                  {llmMetadata.generation_time && (
                    <span className="bg-blue-200 dark:bg-blue-800 px-2 py-1 rounded">
                      {llmMetadata.generation_time.toFixed(2)}s
                    </span>
                  )}
                </div>
              )}
            </div>
            {llmMetadata?.error ? (
              <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <span className="material-symbols-outlined">error</span>
                <p>Erro ao gerar resposta: {llmMetadata.error}</p>
              </div>
            ) : (
              <p className="text-blue-800 dark:text-blue-300 whitespace-pre-wrap">{humanResponse}</p>
            )}
          </div>
        </div>
      )}

      {/* Low Similarity Warning */}
      {belowThreshold && techniques.length > 0 && (
        <div className="w-full rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="p-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 mt-0.5">warning</span>
              <div>
                <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                  Baixa Similaridade Detectada
                </h3>
                <p className="text-amber-800 dark:text-amber-300">
                  Não foram encontradas técnicas com alta similaridade (acima de 70%) na base de dados. 
                  O resultado abaixo mostra a técnica mais próxima encontrada, mas pode não ser uma correspondência precisa. 
                  Considere reformular a descrição ou adicionar mais detalhes sobre o cenário de ataque.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Display Card */}
      {techniques.length > 0 && (
        <div className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-6 dark:border-slate-800">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
              Técnicas MITRE ATT&CK® Identificadas
            </h2>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary-light/10 dark:bg-primary/10 px-3 py-1 text-sm font-semibold text-primary-light dark:text-primary">
                {techniques.length} Técnicas Encontradas
              </span>
              {processingTime !== null && (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {processingTime.toFixed(2)}s
                </span>
              )}
            </div>
          </div>

          {/* Techniques List */}
          <div className="flex flex-col">
            {techniques.map((technique, index) => (
              <React.Fragment key={technique.id}>
                <div className="grid grid-cols-[auto,1fr,auto] items-center gap-x-4 p-6 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                      {technique.icon}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="truncate font-semibold text-slate-800 dark:text-slate-200">
                        {technique.name}
                      </p>
                      <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                        {(technique.similarity_score * 100).toFixed(1)}%
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{technique.id} • {technique.tactic}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{technique.description}</p>
                  </div>
                  <a
                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10"
                    href={`https://attack.mitre.org/techniques/${technique.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-xl">open_in_new</span>
                  </a>
                </div>
                {index < techniques.length - 1 && (
                  <div className="mx-6 border-t border-slate-200 dark:border-slate-800" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50 p-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="material-symbols-outlined text-5xl text-primary-light dark:text-primary animate-spin">
              progress_activity
            </span>
            <p className="text-slate-600 dark:text-slate-400">Analisando cenário de ataque...</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && techniques.length === 0 && !error && (
        <div className="w-full rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50 p-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="material-symbols-outlined text-5xl text-slate-400">search</span>
            <div>
              <p className="text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Nenhuma análise realizada
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Descreva um cenário de ataque e clique em "Analisar" para identificar as técnicas MITRE ATT&CK
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttackAnalyzer;
