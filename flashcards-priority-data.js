/* Versa Concursos — flashcards estratégicos v1.9.1. */
(() => {
  'use strict';
  const basisByCourse = {
  "dataprev": {
    "label": "Histórico FGV + edital 2026",
    "evidence": "mista",
    "methodology": "Seleção baseada nas 30 questões específicas da prova FGV/DATAPREV de 2024 e na permanência dos temas no edital retificado de 2026. É tendência histórica, não previsão de questão.",
    "sample": "FGV 2024: 6 questões de redes, 12 de segurança/privacidade, 3 de governança e 9 de nuvem no bloco específico analisado.",
    "sources": [
      {
        "label": "Prova oficial FGV/DATAPREV 2024",
        "url": "https://conhecimento.fgv.br/sites/default/files/concursos/ati-seguranca-cibernetica-e-protecao-de-dados-cns005-tipo-01.pdf"
      },
      {
        "label": "Edital retificado DATAPREV 2026",
        "url": "https://conhecimento.fgv.br/sites/default/files/concursos/edital-retificado-dataprev.pdf"
      }
    ]
  },
  "ason": {
    "label": "Prova e programa oficiais ASON 2026",
    "evidence": "edital-e-prova",
    "methodology": "A prova oficial distribui igualmente as 40 questões: 10 de Português, 10 de Inglês, 10 de Matemática e 10 de Física. Dentro de cada disciplina, os cartões priorizam fundamentos de maior poder de resolução previstos no Anexo II.",
    "sample": "20 cartões equilibrados: 5 por disciplina. Não há alegação de ranking estatístico interno entre os tópicos de cada matéria.",
    "sources": [
      {
        "label": "Processo seletivo ASON 2026",
        "url": "https://www.marinha.mil.br/ciaga/node/2475"
      },
      {
        "label": "Prova oficial ASON 2026",
        "url": "https://assets.marinha.mil.br/ciaga/sites/www.marinha.mil.br.ciaga/files/Processos%20Seletivos/PROVA%20BRANCA_0.pdf"
      }
    ]
  },
  "ibge": {
    "label": "Peso oficial do edital IBGE 2026",
    "evidence": "edital",
    "methodology": "Distribuição aproximada ao peso oficial da prova: 15 questões de Português, 10 de Raciocínio Lógico Quantitativo e 35 de Conhecimentos Específicos. A banca de 2026 é diferente da prova histórica de 2019, por isso não se apresenta uma falsa frequência por tópico.",
    "sample": "20 cartões: 5 de Português, 3 de Raciocínio Lógico e 12 de Conhecimentos Específicos.",
    "sources": [
      {
        "label": "Conteúdo programático IBGE 2026",
        "url": "https://ftp.ibge.gov.br/edital/PSS_Censo_Agro/2026_02/Edital_2_2026_AC_ACQ_Conteudos_Programaticos.pdf"
      },
      {
        "label": "1ª retificação IBGE 2026",
        "url": "https://ftp.ibge.gov.br/edital/PSS_Censo_Agro/2026_02/02_2026_1a_Retificacao.pdf"
      }
    ]
  },
  "cfaq": {
    "label": "Incidência histórica da base CFAQ-MOC",
    "evidence": "historica-interna",
    "methodology": "Ranking calculado sobre as 406 questões ativas, organizadas em 11 conjuntos históricos de 2023 a 2026 já importados na plataforma. O resultado representa a amostra reunida e não uma garantia para uma Capitania específica.",
    "sample": "Destaques da amostra: geometria plana (34), termos da oração e períodos (27), verbos/tempos/vozes (23), volumes/escalas/unidades (20) e substantivos/artigos/adjetivos (19).",
    "sources": [
      {
        "label": "Provas e gabaritos CFAQ-MOC 2026 — CPES",
        "url": "https://www.marinha.mil.br/cpes/node/472"
      }
    ]
  },
  "transpetro-cyber": {
    "label": "Edital Transpetro 2026.4 + Prova CESGRANRIO 2023.2",
    "evidence": "edital-e-prova",
    "methodology": "Seleção baseada no programa integral da Ênfase 7 do edital 2026.4 e nas 50 questões específicas da Prova 5 de 2023.2 fornecida com gabarito oficial. A amostra histórica orienta prioridade, sem pretender prever a prova de 2026.",
    "sample": "20 cartões estratégicos: 18 específicos e 2 de conhecimentos gerais; forte ênfase em criptografia/PKI/TLS/IPsec, ataques de rede, ATT&CK, normas ISO, privacidade, OT e hardening.",
    "sources": [
      {
        "label": "Edital Transpetro 2026.4 — fonte fornecida pelo usuário",
        "url": "https://www.cesgranrio.org.br/"
      },
      {
        "label": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "MITRE ATT&CK",
        "url": "https://attack.mitre.org/"
      },
      {
        "label": "OWASP Top 10",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ]
  },
  "pnd-historia": {
    "label": "Duas aplicações oficiais PND História 2025",
    "evidence": "provas-oficiais",
    "methodology": "Seleção de 20 cartões estratégicos a partir da incidência das 159 questões oficiais válidas catalogadas nas duas aplicações de 2025, com balanceamento entre Formação Geral Docente e Componente Específico de História. Frequência histórica não é previsão de cobrança futura.",
    "sample": "20 cartões: 8 de Formação Geral Docente e 12 de História, preservando aproximadamente o peso relativo dos blocos e priorizando lições com maior incidência no banco oficial.",
    "sources": [
      {
        "label": "PND — Provas e Gabaritos",
        "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente/provas-e-gabaritos"
      },
      {
        "label": "PND — página institucional",
        "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente"
      }
    ]
  }
};
  const cardsByCourse = {
  "dataprev": [
    {
      "id": "dataprev-hi-001",
      "lessonId": "red-019",
      "front": "Em qual camada do modelo OSI opera o HTTP e o que isso indica?",
      "back": "O HTTP é protocolo da camada de aplicação. Ele define a troca de mensagens entre cliente e servidor e normalmente usa TCP como transporte.",
      "details": [
        "Aplicação não significa “programa do usuário”, mas o nível de serviços de rede.",
        "HTTPS é HTTP protegido por TLS."
      ],
      "incidence": "Redes foi cobrada em 6 das 30 questões específicas FGV de 2024; HTTP/OSI apareceu diretamente.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-002",
      "lessonId": "red-035",
      "front": "Qual família IEEE padroniza redes Wi-Fi?",
      "back": "A família IEEE 802.11 padroniza redes locais sem fio. Em modo infraestrutura, as estações se associam a um ponto de acesso.",
      "details": [
        "IEEE 802.3 está ligado a Ethernet.",
        "SSID nomeia a rede; BSSID identifica um conjunto básico de serviço."
      ],
      "incidence": "Tema cobrado diretamente na prova FGV/DATAPREV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-003",
      "lessonId": "red-037",
      "front": "Qual é a relação entre SNMP e RMON?",
      "back": "O SNMP gerencia e consulta dispositivos por meio de agentes e MIBs; o RMON amplia a observação remota do tráfego e do comportamento de segmentos de rede.",
      "details": [
        "SNMP usa operações como GET e SET.",
        "RMON não substitui o SNMP: usa sua estrutura de gerenciamento."
      ],
      "incidence": "SNMP/RMON apareceu diretamente na prova FGV/DATAPREV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-004",
      "lessonId": "red-024",
      "front": "O que significa anycast no IPv6 e qual campo substitui o TTL?",
      "back": "Anycast atribui o mesmo endereço a interfaces diferentes e o roteamento entrega ao destino considerado mais próximo. No IPv6, Hop Limit cumpre a função do TTL.",
      "details": [
        "Anycast é diferente de multicast: chega a um membro, não ao grupo inteiro.",
        "O Hop Limit é reduzido a cada salto."
      ],
      "incidence": "Anycast e Hop Limit foram cobrados juntos pela FGV em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-005",
      "lessonId": "dsg-005",
      "front": "Qual é o papel do IKE no IPsec?",
      "back": "O IKE autentica os pares, negocia algoritmos e estabelece as associações de segurança e chaves usadas pelo IPsec.",
      "details": [
        "ESP fornece confidencialidade e pode fornecer integridade.",
        "AH protege integridade/autenticidade, mas não cifra o conteúdo."
      ],
      "incidence": "IPsec/IKE apareceu diretamente na prova específica de 2024 e permanece no edital 2026.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-006",
      "lessonId": "sec-012",
      "front": "Por que hash não é sinônimo de criptografia reversível?",
      "back": "Hash produz um resumo de tamanho definido e foi projetado para ser unidirecional; criptografia reversível transforma dados que podem ser recuperados com a chave adequada.",
      "details": [
        "Hash apoia integridade.",
        "Senhas devem usar função apropriada, salt e custo, não hash rápido isolado."
      ],
      "incidence": "Funções hash foram cobradas diretamente pela FGV em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-007",
      "lessonId": "sec-019",
      "front": "Qual diferença de prova entre IDS e IPS?",
      "back": "O IDS detecta e alerta; o IPS fica em linha e pode bloquear ou modificar o tráfego malicioso automaticamente.",
      "details": [
        "IDS fora de banda tende a não interromper o fluxo.",
        "NIPS é um IPS voltado ao tráfego de rede."
      ],
      "incidence": "IDS e NIPS ocuparam questões específicas na prova FGV/DATAPREV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-008",
      "lessonId": "sec-024",
      "front": "Para que serve uma plataforma BAS?",
      "back": "Breach and Attack Simulation automatiza simulações controladas de técnicas de ataque para validar continuamente controles, detecções e respostas.",
      "details": [
        "BAS não é um pentest completo.",
        "O valor está em medir lacunas de forma repetível."
      ],
      "incidence": "BAS foi objeto direto de questão FGV em 2024 e continua no edital 2026.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-009",
      "lessonId": "sec-032",
      "front": "No modelo STRIDE, o que é Tampering?",
      "back": "Tampering é adulteração indevida de dados ou código e ameaça principalmente a integridade.",
      "details": [
        "Spoofing ameaça autenticação.",
        "Repudiation relaciona-se à possibilidade de negar uma ação."
      ],
      "incidence": "STRIDE/Tampering apareceu diretamente na prova FGV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-010",
      "lessonId": "sec-025",
      "front": "Quais fatores orientam a priorização de incidentes no NIST SP 800-61?",
      "back": "A priorização considera impacto funcional, impacto sobre as informações e capacidade de recuperação, combinados com o contexto da organização.",
      "details": [
        "Severidade técnica isolada não basta.",
        "Contenção deve equilibrar dano, evidência e continuidade."
      ],
      "incidence": "NIST SP 800-61 e priorização de incidentes foram cobrados pela FGV em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-011",
      "lessonId": "sec-035",
      "front": "Qual diferença entre anonimização e pseudonimização?",
      "back": "Anonimização busca impedir associação direta ou indireta ao titular com meios razoáveis disponíveis; pseudonimização substitui identificadores, mas permite reversão com informação adicional separada.",
      "details": [
        "Dado anonimizado pode deixar de ser dado pessoal se a reversão não for razoável.",
        "Pseudônimo continua sujeito à proteção de dados."
      ],
      "incidence": "Técnicas de anonimização apareceram na prova de 2024 e no edital 2026.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-012",
      "lessonId": "dlw-007",
      "front": "Quais categorias a LGPD trata como dados pessoais sensíveis?",
      "back": "Origem racial ou étnica, convicção religiosa, opinião política, filiação sindical ou religiosa/filosófica/política, saúde, vida sexual, dados genéticos e biométricos vinculados a pessoa natural.",
      "details": [
        "O tratamento exige hipótese legal específica do art. 11.",
        "Nem todo dado pessoal é sensível."
      ],
      "incidence": "Dados sensíveis foram cobrados diretamente na prova FGV/DATAPREV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-013",
      "lessonId": "dgv-002",
      "front": "Qual é a responsabilidade central do Product Owner no Scrum?",
      "back": "Maximizar o valor do produto e gerir eficazmente o Product Backlog, deixando claros objetivo, itens, ordem e entendimento.",
      "details": [
        "É uma pessoa, não um comitê.",
        "Não distribui tarefas técnicas ao time."
      ],
      "incidence": "Scrum/Product Owner foi cobrado diretamente no bloco específico FGV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-014",
      "lessonId": "dgv-006",
      "front": "Qual é o propósito da prática Change Enablement no ITIL 4?",
      "back": "Maximizar mudanças bem-sucedidas por avaliação de riscos, autorização e gestão do cronograma de mudanças.",
      "details": [
        "Mudança padrão pode ser pré-autorizada.",
        "O objetivo não é impedir toda mudança."
      ],
      "incidence": "Change Enablement foi cobrado diretamente pela FGV em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-015",
      "lessonId": "dcl-007",
      "front": "O que caracteriza Infrastructure as Code?",
      "back": "Provisionar e configurar infraestrutura por definições legíveis por máquina, versionáveis, reproduzíveis e automatizadas.",
      "details": [
        "Reduz configuração manual e divergência entre ambientes.",
        "Pode ser declarativa ou imperativa."
      ],
      "incidence": "IaC apareceu diretamente na prova de 2024 e permanece expresso no edital 2026.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-016",
      "lessonId": "dcl-002",
      "front": "Como diferenciar nuvem pública, privada e híbrida?",
      "back": "Pública usa infraestrutura compartilhada de provedor; privada é dedicada a uma organização; híbrida integra ambientes distintos com portabilidade ou orquestração.",
      "details": [
        "Privada pode ser on-premises ou hospedada.",
        "Híbrida exige integração, não mera coexistência."
      ],
      "incidence": "Modelos de implantação foram cobrados na prova FGV de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-017",
      "lessonId": "dcl-001",
      "front": "No PaaS, o que normalmente fica com o cliente e com o provedor?",
      "back": "O provedor gerencia infraestrutura, sistema operacional e plataforma; o cliente responde por aplicações, dados, identidades e configurações sob seu controle.",
      "details": [
        "Responsabilidade compartilhada varia pelo serviço.",
        "PaaS reduz gestão da plataforma, não elimina segurança."
      ],
      "incidence": "PaaS e responsabilidade compartilhada apareceram diretamente em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-018",
      "lessonId": "dcl-008",
      "front": "O que é um Resource Group no Azure?",
      "back": "É um contêiner lógico que reúne recursos relacionados para gerenciamento, controle de acesso, políticas e ciclo de vida.",
      "details": [
        "Um recurso pertence a um grupo por vez.",
        "O grupo não é uma região nem uma rede."
      ],
      "incidence": "Azure Resource Group foi cobrado diretamente pela FGV em 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-019",
      "lessonId": "dcl-005",
      "front": "Por que MFA é prioritário no acesso à nuvem?",
      "back": "Porque exige fatores de categorias diferentes e reduz o risco de uma senha comprometida ser suficiente para assumir a conta.",
      "details": [
        "Senha + PIN são dois segredos, não dois fatores distintos.",
        "MFA deve ser reforçado para contas privilegiadas."
      ],
      "incidence": "Controle de acesso com MFA foi cobrado no bloco de nuvem de 2024.",
      "priority": "high"
    },
    {
      "id": "dataprev-hi-020",
      "lessonId": "dcl-003",
      "front": "Como regiões e zonas de disponibilidade ajudam na alta disponibilidade?",
      "back": "Regiões separam áreas geográficas; zonas são domínios de falha independentes dentro de uma região. Distribuir componentes entre zonas reduz falhas de ponto único.",
      "details": [
        "Alta disponibilidade não é o mesmo que recuperação em outra região.",
        "A arquitetura deve considerar latência e replicação."
      ],
      "incidence": "Alta disponibilidade e arquitetura de nuvem constam do edital 2026; cartão de aderência programática.",
      "priority": "high"
    }
  ],
  "ason": [
    {
      "id": "ason-hi-001",
      "lessonId": "ason-p01",
      "front": "Como distinguir tema, ideia central e inferência em um texto?",
      "back": "Tema é o assunto amplo; ideia central é a afirmação principal sobre ele; inferência é uma conclusão sustentada por pistas, sem estar literalmente escrita.",
      "details": [
        "Volte ao texto para localizar evidência.",
        "Evite inferência baseada apenas em conhecimento externo."
      ],
      "incidence": "Português vale 10 das 40 questões oficiais do ASON 2026; compreensão sustenta várias habilidades.",
      "priority": "high"
    },
    {
      "id": "ason-hi-002",
      "lessonId": "ason-p03",
      "front": "Como reconhecer o referente de um pronome ou expressão coesiva?",
      "back": "Procure o termo compatível em sentido, número e gênero e teste se a substituição preserva a progressão lógica do texto.",
      "details": [
        "Referente pode ser uma ideia inteira.",
        "Distância gráfica não decide sozinha."
      ],
      "incidence": "Prioridade de fundamento transversal no programa oficial de Português.",
      "priority": "high"
    },
    {
      "id": "ason-hi-003",
      "lessonId": "ason-p05",
      "front": "Qual teste rápido separa sujeito de objeto direto?",
      "back": "Pergunte quem ou o que concorda com o verbo para localizar o sujeito; o objeto direto completa verbo transitivo direto sem preposição obrigatória.",
      "details": [
        "Sujeito não é necessariamente o primeiro termo.",
        "Na voz passiva, o objeto direto da ativa tende a virar sujeito paciente."
      ],
      "incidence": "Sintaxe é fundamento para concordância, pontuação e reescrita.",
      "priority": "high"
    },
    {
      "id": "ason-hi-004",
      "lessonId": "ason-p06",
      "front": "Qual é a diferença entre concordância e regência?",
      "back": "Concordância ajusta flexões entre palavras; regência determina a relação exigida por um termo, inclusive a presença ou ausência de preposição.",
      "details": [
        "“Haver” impessoal fica no singular.",
        "A regência pode alterar o sentido do verbo."
      ],
      "incidence": "Conteúdo expresso no programa oficial de Português do ASON.",
      "priority": "high"
    },
    {
      "id": "ason-hi-005",
      "lessonId": "ason-p08",
      "front": "Qual erro de vírgula deve ser eliminado primeiro?",
      "back": "Não se separa por vírgula o sujeito de seu verbo nem o verbo de complemento essencial, salvo quando há termo intercalado devidamente isolado.",
      "details": [
        "Vocativo e aposto explicativo pedem isolamento.",
        "A pontuação deve ser lida pela estrutura, não só pela pausa."
      ],
      "incidence": "Pontuação é conteúdo programático e depende da análise sintática.",
      "priority": "high"
    },
    {
      "id": "ason-hi-006",
      "lessonId": "ason-e01",
      "front": "What is the safest way to identify the main idea of an English text?",
      "back": "Combine the title, repeated concepts, topic sentences and conclusion; reject options that are too broad, too narrow or unsupported.",
      "details": [
        "Do not translate every word first.",
        "Mark contrast words such as however and although."
      ],
      "incidence": "English accounts for 10 of the 40 official ASON 2026 questions.",
      "priority": "high"
    },
    {
      "id": "ason-hi-007",
      "lessonId": "ason-e04",
      "front": "What do modal verbs express in exam questions?",
      "back": "They express meanings such as ability, permission, possibility, probability, obligation or advice; the context decides the intended force.",
      "details": [
        "Must often signals strong obligation or deduction.",
        "Should commonly indicates advice or expectation."
      ],
      "incidence": "Modal verbs are explicit in the official English syllabus.",
      "priority": "high"
    },
    {
      "id": "ason-hi-008",
      "lessonId": "ason-e05",
      "front": "How do zero, first and second conditionals differ?",
      "back": "Zero states general truths; first presents a real future possibility; second presents a hypothetical or unlikely present/future situation.",
      "details": [
        "Zero: if + present, present.",
        "First: if + present, will; second: if + past, would."
      ],
      "incidence": "Conditionals are explicit in the ASON program.",
      "priority": "high"
    },
    {
      "id": "ason-hi-009",
      "lessonId": "ason-e06",
      "front": "How is an active sentence changed into the passive voice?",
      "back": "Move the object to subject position, use the appropriate form of be plus past participle and add the agent with by only when relevant.",
      "details": [
        "Keep the original tense in the auxiliary.",
        "Only transitive verbs normally form a passive."
      ],
      "incidence": "Voice transformation is an explicit grammar topic in the program.",
      "priority": "high"
    },
    {
      "id": "ason-hi-010",
      "lessonId": "ason-e07",
      "front": "Why are connectors decisive in reading questions?",
      "back": "They reveal the logical relation between clauses: addition, contrast, cause, consequence, condition or concession.",
      "details": [
        "However signals contrast.",
        "Therefore signals consequence; because introduces cause."
      ],
      "incidence": "High-yield reading strategy within the 10-question English block.",
      "priority": "high"
    },
    {
      "id": "ason-hi-011",
      "lessonId": "ason-m04",
      "front": "Como localizar candidatos a máximo ou mínimo de uma função?",
      "back": "Encontre pontos críticos resolvendo f′(x)=0 ou onde a derivada não existe, verifique extremos do domínio e classifique pelos sinais ou pela segunda derivada.",
      "details": [
        "f′(x)=0 não garante extremo.",
        "Problemas aplicados exigem traduzir a restrição antes de derivar."
      ],
      "incidence": "Cálculo diferencial e aplicações integram o Anexo II oficial.",
      "priority": "high"
    },
    {
      "id": "ason-hi-012",
      "lessonId": "ason-m05",
      "front": "Qual é a ligação central do Teorema Fundamental do Cálculo?",
      "back": "Ele conecta derivação e integração: a integral definida pode ser calculada por uma primitiva F, usando F(b)−F(a).",
      "details": [
        "A constante desaparece na diferença.",
        "Área geométrica pode exigir separar trechos com sinal."
      ],
      "incidence": "Integração e aplicações são núcleo do programa oficial de Matemática.",
      "priority": "high"
    },
    {
      "id": "ason-hi-013",
      "lessonId": "ason-m16",
      "front": "Quando um sistema linear quadrado tem solução única?",
      "back": "Quando a matriz dos coeficientes é invertível, equivalendo a determinante não nulo, posto completo e ausência de zero entre seus autovalores.",
      "details": [
        "Determinante zero exige analisar inexistência ou infinitas soluções.",
        "Operações elementares preservam o conjunto solução."
      ],
      "incidence": "Álgebra Linear e sistemas integram o programa oficial.",
      "priority": "high"
    },
    {
      "id": "ason-hi-014",
      "lessonId": "ason-m14",
      "front": "Qual é a forma-padrão de uma EDO linear de primeira ordem?",
      "back": "y′ + p(x)y = q(x). O fator integrante é μ(x)=e^(∫p(x)dx), permitindo escrever o lado esquerdo como derivada de μy.",
      "details": [
        "Integre e depois divida por μ.",
        "A condição inicial determina a constante."
      ],
      "incidence": "Equações diferenciais são conteúdo expresso do Anexo II.",
      "priority": "high"
    },
    {
      "id": "ason-hi-015",
      "lessonId": "afx-cn-002",
      "front": "Como funciona uma iteração de Newton-Raphson?",
      "back": "A partir de xₙ, calcula-se xₙ₊₁=xₙ−f(xₙ)/f′(xₙ), repetindo até o erro ou resíduo atender ao critério.",
      "details": [
        "Pode falhar se a derivada for zero ou o chute for inadequado.",
        "Bisseção é mais robusta quando há mudança de sinal."
      ],
      "incidence": "Métodos numéricos e zeros de funções integram o programa oficial.",
      "priority": "high"
    },
    {
      "id": "ason-hi-016",
      "lessonId": "ason-f01",
      "front": "Qual é a sequência segura para resolver um problema pelas Leis de Newton?",
      "back": "Isole o corpo, desenhe as forças reais, escolha eixos, projete as forças e aplique ΣF=ma em cada direção.",
      "details": [
        "Normal não é sempre igual ao peso.",
        "Ação e reação atuam em corpos diferentes."
      ],
      "incidence": "Física vale 10 das 40 questões oficiais; mecânica é fundamento do programa.",
      "priority": "high"
    },
    {
      "id": "ason-hi-017",
      "lessonId": "ason-f02",
      "front": "Quando usar o teorema trabalho–energia?",
      "back": "Use quando o problema relaciona forças ao deslocamento e às velocidades: o trabalho resultante é igual à variação da energia cinética.",
      "details": [
        "Força conservativa pode ser tratada por energia potencial.",
        "Atrito geralmente transforma energia mecânica em energia interna."
      ],
      "incidence": "Trabalho e energia são conteúdos centrais do programa oficial.",
      "priority": "high"
    },
    {
      "id": "ason-hi-018",
      "lessonId": "ason-f11",
      "front": "Quais relações resolvem a maioria dos problemas de fluido ideal?",
      "back": "Continuidade conserva vazão, A₁v₁=A₂v₂, e Bernoulli relaciona pressão, velocidade e altura ao longo de uma linha de corrente.",
      "details": [
        "Maior velocidade costuma corresponder a menor pressão no mesmo nível.",
        "Arquimedes: empuxo igual ao peso do fluido deslocado."
      ],
      "incidence": "Mecânica dos fluidos aparece explicitamente no programa ASON.",
      "priority": "high"
    },
    {
      "id": "ason-hi-019",
      "lessonId": "ason-f13",
      "front": "Como calcular o rendimento de uma máquina térmica?",
      "back": "η=W/Qₕ=1−Q𝚌/Qₕ, respeitando que nenhuma máquina cíclica converte integralmente calor recebido em trabalho.",
      "details": [
        "Rendimento de Carnot depende das temperaturas absolutas.",
        "Use kelvin em razões termodinâmicas."
      ],
      "incidence": "Termodinâmica e máquinas térmicas integram o programa oficial.",
      "priority": "high"
    },
    {
      "id": "ason-hi-020",
      "lessonId": "ason-f16",
      "front": "Quais são as duas leis de Kirchhoff?",
      "back": "Nos nós, a soma algébrica das correntes é zero; em uma malha fechada, a soma algébrica das diferenças de potencial é zero.",
      "details": [
        "Defina sentidos antes de montar as equações.",
        "Sinal negativo ao final indica sentido oposto ao adotado."
      ],
      "incidence": "Circuitos elétricos são conteúdo expresso do programa oficial de Física.",
      "priority": "high"
    }
  ],
  "ibge": [
    {
      "id": "ibge-hi-001",
      "lessonId": "ib-l001",
      "front": "Como evitar alternativas “quase certas” em interpretação?",
      "back": "Compare cada opção com a tese e com os limites do texto; descarte generalizações, inversões de causa, informações externas e detalhes apresentados como ideia principal.",
      "details": [
        "A resposta precisa ser sustentada pelo texto.",
        "Palavras absolutas merecem verificação cuidadosa."
      ],
      "incidence": "Português representa 15 das 60 questões oficiais do IBGE 2026.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-002",
      "lessonId": "ib-l003",
      "front": "O que diferencia coesão de coerência?",
      "back": "Coesão são mecanismos linguísticos que conectam partes do texto; coerência é a unidade de sentido construída pela compatibilidade das ideias e do contexto.",
      "details": [
        "Um texto pode ter conectores e ainda ser incoerente.",
        "Pronomes e elipses são mecanismos coesivos."
      ],
      "incidence": "Fundamento transversal do bloco de Português.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-003",
      "lessonId": "ib-l008",
      "front": "Como localizar uma oração subordinada?",
      "back": "Identifique o verbo da oração principal e verifique qual trecho com outro verbo exerce função dependente — substantiva, adjetiva ou adverbial — em relação a ela.",
      "details": [
        "Conjunção ajuda, mas a função sintática decide.",
        "Oração adjetiva normalmente retoma um nome."
      ],
      "incidence": "Sintaxe integra o conteúdo oficial de Português.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-004",
      "lessonId": "ib-l011",
      "front": "Qual diferença prática entre regência e crase?",
      "back": "Regência define se o termo exige a preposição a; crase ocorre quando essa preposição se funde com outro a, geralmente artigo feminino ou início de aquele/aquela/aquilo.",
      "details": [
        "Troque por termo masculino: ao sugere à.",
        "Não há crase antes de verbo."
      ],
      "incidence": "Regência e crase são tópicos programáticos próximos e frequentemente combinados.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-005",
      "lessonId": "ib-l007",
      "front": "Quando a vírgula muda o sentido de uma oração adjetiva?",
      "back": "Sem vírgulas, a oração é restritiva e delimita o referente; entre vírgulas, é explicativa e acrescenta informação sobre todo o grupo referido.",
      "details": [
        "A pontuação altera o alcance semântico.",
        "Não separe sujeito e verbo sem intercalação."
      ],
      "incidence": "Pontuação e efeitos de sentido pertencem ao bloco de 15 questões de Português.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-006",
      "lessonId": "ib-l016",
      "front": "Como negar “P e Q” e “P ou Q” pelas leis de De Morgan?",
      "back": "¬(P∧Q) equivale a ¬P∨¬Q; ¬(P∨Q) equivale a ¬P∧¬Q.",
      "details": [
        "Ao negar, troque o conectivo e negue cada parcela.",
        "Negar “todos” produz “existe pelo menos um que não”."
      ],
      "incidence": "Raciocínio Lógico Quantitativo vale 10 das 60 questões.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-007",
      "lessonId": "ib-l017",
      "front": "Quando um argumento é logicamente válido?",
      "back": "Quando não existe situação em que todas as premissas sejam verdadeiras e a conclusão falsa.",
      "details": [
        "Validade não garante premissas verdadeiras.",
        "Procure um contraexemplo para testar invalidade."
      ],
      "incidence": "Inferência e validade são fundamentos do conteúdo oficial.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-008",
      "lessonId": "ibge-l022",
      "front": "Como calcular variação percentual sem confundir base e resultado?",
      "back": "Use (valor novo−valor antigo)/valor antigo ×100%. Em alterações sucessivas, multiplique fatores como 1,10 e 0,90; não some percentuais automaticamente.",
      "details": [
        "Aumento de 10% e queda de 10% não se anulam.",
        "Regra de três exige identificar grandezas diretas ou inversas."
      ],
      "incidence": "Porcentagem e proporcionalidade integram o bloco quantitativo de 10 questões.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-009",
      "lessonId": "ibge-l026",
      "front": "Como diferenciar cultura popular, cultura de massa e cultura nacional?",
      "back": "Popular refere-se a práticas produzidas e transmitidas por grupos; de massa, à produção e circulação em escala industrial; nacional, a uma construção simbólica de pertencimento coletivo.",
      "details": [
        "As categorias podem se sobrepor.",
        "Evite tratar cultura como estática ou homogênea."
      ],
      "incidence": "Cultura abre o conteúdo programático específico, que vale 35 das 60 questões.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-010",
      "lessonId": "ibge-l031",
      "front": "Como Weber distingue classe, status e partido/poder?",
      "back": "Classe relaciona-se à posição econômica e às oportunidades de mercado; status, ao prestígio social; partido, à organização voltada à influência e ao poder.",
      "details": [
        "As dimensões podem não coincidir.",
        "Estratificação é multidimensional."
      ],
      "incidence": "Estratificação e mobilidade constam expressamente do Anexo III.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-011",
      "lessonId": "ibge-l039",
      "front": "Quais etapas organizam o ciclo de políticas públicas?",
      "back": "Formação de agenda, formulação, decisão, implementação, monitoramento e avaliação, entendidas como processo iterativo e sujeito a atores e conflitos.",
      "details": [
        "Etapas não são rigidamente lineares.",
        "Avaliação pode redefinir o problema e a agenda."
      ],
      "incidence": "Estado, federalismo e políticas públicas formam um eixo amplo do edital específico.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-012",
      "lessonId": "ibge-l044",
      "front": "O que caracteriza um movimento social?",
      "back": "Ação coletiva relativamente continuada que constrói identidades, demandas e repertórios para disputar reconhecimento, direitos, recursos ou mudanças sociais.",
      "details": [
        "Não se reduz a evento espontâneo isolado.",
        "Pode atuar dentro e fora de instituições."
      ],
      "incidence": "Movimentos sociais clássicos e contemporâneos constam expressamente do programa.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-013",
      "lessonId": "ibge-l051",
      "front": "O que torna a etnografia diferente de uma simples visita de campo?",
      "back": "Imersão sistemática, observação participante, registro reflexivo, relação prolongada com interlocutores e interpretação contextualizada das práticas e categorias locais.",
      "details": [
        "Descrição densa articula ação e contexto.",
        "A posição do pesquisador também deve ser examinada."
      ],
      "incidence": "Etnografia e método de campo formam eixo central do conteúdo antropológico.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-014",
      "lessonId": "ibge-l062",
      "front": "O que é uma fronteira étnica na abordagem de Fredrik Barth?",
      "back": "É o limite social mantido por critérios de pertencimento e interação; a persistência do grupo não depende de isolamento nem de um inventário cultural imutável.",
      "details": [
        "Contato pode reforçar fronteiras.",
        "O foco recai sobre identificação e relações."
      ],
      "incidence": "Etnicidade, contato e relações interétnicas aparecem em sequência no edital.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-015",
      "lessonId": "ibge-l067",
      "front": "Qual é a ideia central da territorialização quilombola?",
      "back": "É um processo político, histórico e identitário de constituição e reconhecimento de um território coletivo ligado à reprodução social, cultural e econômica da comunidade.",
      "details": [
        "Território não é apenas área física.",
        "Autodefinição e memória coletiva são relevantes."
      ],
      "incidence": "Territorialização indígena e quilombola é eixo explícito do programa.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-016",
      "lessonId": "ibge-l072",
      "front": "Como diferenciar pobreza absoluta, relativa e multidimensional?",
      "back": "Absoluta usa um limiar de necessidades básicas; relativa compara posição dentro da sociedade; multidimensional combina privações em várias dimensões além da renda.",
      "details": [
        "Vulnerabilidade inclui exposição a riscos e baixa capacidade de resposta.",
        "Indicadores dependem do conceito adotado."
      ],
      "incidence": "Pobreza e exclusão social formam tópico próprio no edital.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-017",
      "lessonId": "ibge-l076",
      "front": "Quais componentes explicam a dinâmica demográfica?",
      "back": "Fecundidade, mortalidade e migração alteram tamanho, estrutura etária e distribuição espacial da população.",
      "details": [
        "Crescimento vegetativo é nascimentos menos óbitos.",
        "Saldo migratório é entradas menos saídas."
      ],
      "incidence": "Demografia e grupos sociodemográficos constam do conteúdo específico.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-018",
      "lessonId": "ibge-l080",
      "front": "O que variância e desvio padrão medem?",
      "back": "Medem dispersão em torno da média. A variância usa desvios ao quadrado; o desvio padrão é sua raiz e volta à unidade original da variável.",
      "details": [
        "Maior dispersão implica maior heterogeneidade.",
        "Compare grupos de escalas diferentes com cautela."
      ],
      "incidence": "Estatística descritiva e medidas de concentração fazem parte do programa.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-019",
      "lessonId": "ibge-l088",
      "front": "Qual princípio-chave da Convenção OIT 169 deve ser lembrado?",
      "back": "Povos interessados devem ser consultados, por procedimentos apropriados e instituições representativas, quando medidas legislativas ou administrativas possam afetá-los diretamente.",
      "details": [
        "A consulta deve ser de boa-fé e adequada às circunstâncias.",
        "O programa também exige CF, ADCT 68 e legislação correlata."
      ],
      "incidence": "A Convenção OIT 169 está nominalmente listada no conteúdo programático.",
      "priority": "high"
    },
    {
      "id": "ibge-hi-020",
      "lessonId": "ibge-l094",
      "front": "Por que a coleta censitária em Povos e Comunidades Tradicionais exige abordagem diferenciada?",
      "back": "Para adequar acesso, comunicação, territorialidade, calendários, interlocução e protocolos às especificidades locais, reduzindo omissão e erro de cobertura.",
      "details": [
        "Padronização operacional não dispensa adaptação responsável.",
        "Confiança e liderança local afetam a qualidade do dado."
      ],
      "incidence": "PCTs, cobertura e abordagem censitária diferenciada integram o conteúdo específico.",
      "priority": "high"
    }
  ],
  "transpetro-cyber": [
    {
      "id": "trc-hi-001",
      "lessonId": "trc-l040",
      "front": "Por que AES e SHA-256 não devem ser confundidos?",
      "back": "AES é cifra de bloco simétrica com bloco de 128 bits; SHA-256 é função hash que gera resumo de 256 bits.",
      "details": [
        "AES oferece cifragem reversível com chave; hash é unidirecional.",
        "Na prova histórica, criptografia ocupou várias questões consecutivas."
      ],
      "incidence": "Questões 22, 23, 25, 26 e 28 da prova específica de 2023 exploraram fundamentos criptográficos.",
      "priority": "high"
    },
    {
      "id": "trc-hi-002",
      "lessonId": "trc-l044",
      "front": "Qual mapa mental resolve TLS, SSL, IPsec e IKE?",
      "back": "TLS protege sessões de comunicação; SSLv3 é legado/obsoleto; IPsec protege na camada IP; IKE negocia associações de segurança e chaves para IPsec.",
      "details": [
        "HTTPS usa TLS.",
        "POODLE é referência histórica ligada ao SSLv3."
      ],
      "incidence": "Questões 27, 29, 30, 43 e 60 da prova de 2023 tocaram TLS/IPsec/SSL.",
      "priority": "high"
    },
    {
      "id": "trc-hi-003",
      "lessonId": "trc-l042",
      "front": "Quem assina um certificado e como o titular prova posse?",
      "back": "A AC emissora assina o certificado; o titular demonstra controle por meio da chave privada correspondente à chave pública certificada.",
      "details": [
        "A chave privada não é publicada no certificado.",
        "Validade, cadeia e revogação também importam."
      ],
      "incidence": "Questões 24 e 62 da prova histórica cobraram PKI e prova de posse.",
      "priority": "high"
    },
    {
      "id": "trc-hi-004",
      "lessonId": "trc-l017",
      "front": "O que caracteriza ARP spoofing?",
      "back": "Induzir associações falsas entre endereços IP e MAC em uma rede local, podendo desviar tráfego e favorecer MITM.",
      "details": [
        "ARP não possui autenticação nativa robusta.",
        "Proteções incluem segmentação, inspeção e controles de camada 2."
      ],
      "incidence": "Questão 31 da prova de 2023 cobrou ARP spoofing diretamente.",
      "priority": "high"
    },
    {
      "id": "trc-hi-005",
      "lessonId": "trc-l034",
      "front": "Quais são os três papéis de 802.1X e onde entram EAP e RADIUS?",
      "back": "Suplicante pede acesso; autenticador controla a porta; servidor AAA valida. EAP participa da autenticação e RADIUS é comum entre autenticador e servidor.",
      "details": [
        "O switch pode atuar como autenticador.",
        "A porta controlada permanece limitada antes da autorização."
      ],
      "incidence": "Questões 34 e 63 da prova histórica cobraram EAP e RADIUS.",
      "priority": "high"
    },
    {
      "id": "trc-hi-006",
      "lessonId": "trc-l026",
      "front": "No MITRE ATT&CK, o que uma tática representa?",
      "back": "A tática representa o objetivo do adversário — o “porquê” de executar uma técnica ou sub-técnica.",
      "details": [
        "Técnica representa o “como”.",
        "Procedimento é a implementação concreta observada."
      ],
      "incidence": "Questões 42 e 47 cobraram ATT&CK; o edital 2026 amplia para matrizes, TTPs e mitigations.",
      "priority": "high"
    },
    {
      "id": "trc-hi-007",
      "lessonId": "trc-l036",
      "front": "Como estudar OWASP Top 10 para 2026 sem errar questões históricas?",
      "back": "Use a versão indicada no enunciado para questões históricas e acompanhe a versão corrente para o edital 2026, que não fixa edição.",
      "details": [
        "A prova 2023 citou explicitamente OWASP Top 10 2021.",
        "A versão corrente é uma camada de atualização, não motivo para reescrever o gabarito antigo."
      ],
      "incidence": "Questão 44 cobrou OWASP Top 10 2021; o programa 2026 mantém OWASP Top 10 sem versão.",
      "priority": "high"
    },
    {
      "id": "trc-hi-008",
      "lessonId": "trc-l014",
      "front": "Qual diferença de prova entre flooding, Slowloris e SYN flood?",
      "back": "Flooding enfatiza volume; Slowloris mantém muitas conexões HTTP incompletas/lentas; SYN flood explora o estabelecimento de conexões TCP para exaurir recursos.",
      "details": [
        "Todos afetam disponibilidade, por mecanismos diferentes.",
        "Identifique a camada e o recurso que está sendo consumido."
      ],
      "incidence": "Questões 33, 39 e 50 da prova histórica exploraram DoS por mecanismos distintos.",
      "priority": "high"
    },
    {
      "id": "trc-hi-009",
      "lessonId": "trc-l022",
      "front": "O que distingue spear-phishing de phishing genérico?",
      "back": "Spear-phishing é direcionado e usa contexto do alvo para aumentar credibilidade; phishing genérico tende a ser mais amplo.",
      "details": [
        "Pretexting constrói uma narrativa plausível.",
        "Verificação fora de banda reduz risco."
      ],
      "incidence": "A prova histórica cobrou ferramenta de spear-phishing/engenharia social na questão 38.",
      "priority": "high"
    },
    {
      "id": "trc-hi-010",
      "lessonId": "trc-l024",
      "front": "Que associação deve ficar automática para keylogger?",
      "back": "Keylogger registra entradas de teclado e pode capturar credenciais; screenlogger captura conteúdo visual da tela.",
      "details": [
        "Rootkit se liga a ocultação/persistência.",
        "Botnet é um conjunto de dispositivos controlados."
      ],
      "incidence": "Questão 40 da prova histórica cobrou keylogger diretamente.",
      "priority": "high"
    },
    {
      "id": "trc-hi-011",
      "lessonId": "trc-l052",
      "front": "Qual item clássico pertence à avaliação de desempenho do SGSI?",
      "back": "Auditoria interna. O SGSI também exige monitoramento, medição, análise crítica e melhoria orientada a risco.",
      "details": [
        "27001 contém requisitos do sistema de gestão.",
        "27002 orienta controles."
      ],
      "incidence": "Questão 51 da prova histórica cobrou auditoria interna na ISO 27001.",
      "priority": "high"
    },
    {
      "id": "trc-hi-012",
      "lessonId": "trc-l054",
      "front": "O que caracteriza uma análise qualitativa de risco?",
      "back": "Uso de categorias ou escalas descritivas, como baixo/médio/alto, para probabilidade e impacto conforme critérios definidos.",
      "details": [
        "Quantitativa busca valores numéricos conforme o método.",
        "Avaliação compara resultados com critérios de risco."
      ],
      "incidence": "Questão 54 da prova histórica cobrou análise qualitativa na ISO 27005.",
      "priority": "high"
    },
    {
      "id": "trc-hi-013",
      "lessonId": "trc-l060",
      "front": "O que é PIA na ISO/IEC 29134?",
      "back": "Avaliação de impacto de privacidade: identifica impactos/riscos de privacidade e documenta medidas para tratá-los em processos, sistemas ou iniciativas.",
      "details": [
        "Deve ser feita cedo o bastante para influenciar decisões.",
        "Complementa governança e proteção de dados."
      ],
      "incidence": "Questão 58 da prova histórica cobrou PIA diretamente.",
      "priority": "high"
    },
    {
      "id": "trc-hi-014",
      "lessonId": "trc-l059",
      "front": "O que significa minimização de dados?",
      "back": "Limitar coleta, acesso, retenção e tratamento ao que é necessário para finalidades legítimas e definidas.",
      "details": [
        "Need-to-know reforça minimização.",
        "Anonimização é conceito diferente."
      ],
      "incidence": "Questões 57 e 59 exploraram privacidade, anonimização e minimização.",
      "priority": "high"
    },
    {
      "id": "trc-hi-015",
      "lessonId": "trc-l048",
      "front": "Por que segurança de OT não pode copiar mecanicamente controles de TI?",
      "back": "OT interage com processos físicos; controles precisam preservar disponibilidade, confiabilidade e safety além de reduzir risco cibernético.",
      "details": [
        "IEC 62443 é referência central de segurança industrial.",
        "Stuxnet é referência histórica de ameaça a ICS."
      ],
      "incidence": "Questões 61, 67 e 70 concentraram OT, Stuxnet, NIST 800-82 e IEC 62443.",
      "priority": "high"
    },
    {
      "id": "trc-hi-016",
      "lessonId": "trc-l046",
      "front": "Qual diferença entre chmod e chown no Linux?",
      "back": "chmod altera permissões; chown altera proprietário/grupo. Em octal, 640 corresponde a rw- r-- ---.",
      "details": [
        "Inode armazena metadados do arquivo.",
        "No Windows, BitLocker e Firewall são controles nativos relevantes."
      ],
      "incidence": "Questões 64, 66, 68 e 69 cobraram Linux e Windows na prova histórica.",
      "priority": "high"
    },
    {
      "id": "trc-hi-017",
      "lessonId": "trc-l062",
      "front": "Quais são as seis funções do NIST CSF 2.0?",
      "back": "Govern, Identify, Protect, Detect, Respond e Recover.",
      "details": [
        "Govern ganhou destaque como função no CSF 2.0.",
        "As funções descrevem resultados e não uma sequência rígida."
      ],
      "incidence": "NIST CSF 2.0 consta expressamente do edital 2026; é atualização posterior à prova de 2023.",
      "priority": "high"
    },
    {
      "id": "trc-hi-018",
      "lessonId": "trc-l063",
      "front": "O que é o IG1 nos CIS Controls v8.1?",
      "back": "É o conjunto de salvaguardas de higiene cibernética essencial recomendado como ponto de partida para todas as organizações.",
      "details": [
        "IG2 e IG3 ampliam profundidade conforme perfil de risco e capacidade.",
        "v8.1 incorporou alinhamentos modernos de governança."
      ],
      "incidence": "CIS Controls 8.1 consta expressamente do edital 2026.",
      "priority": "high"
    },
    {
      "id": "trc-hi-019",
      "lessonId": "trc-l001",
      "front": "Qual é a regra de ouro para inferência na CESGRANRIO?",
      "back": "A conclusão precisa decorrer de pistas do texto e não pode contradizer informação explícita.",
      "details": [
        "Volte ao trecho e valide a alternativa.",
        "Evite extrapolação e opinião externa."
      ],
      "incidence": "Português vale 10 das 70 questões no modelo 2026 e é matéria eliminatória dentro de Conhecimentos Gerais.",
      "priority": "high"
    },
    {
      "id": "trc-hi-020",
      "lessonId": "trc-l007",
      "front": "How should you approach the main idea in an English text?",
      "back": "Use recurring ideas, topic sentences, paragraph relationships and the author’s purpose; do not depend on translating every word.",
      "details": [
        "Context can support vocabulary inference.",
        "Reference words and connectors are central clues."
      ],
      "incidence": "Inglês vale 10 das 70 questões no modelo 2026 e é matéria eliminatória dentro de Conhecimentos Gerais.",
      "priority": "high"
    }
  ],
  "cfaq": [
    {
      "id": "cfaq-hi-001",
      "lessonId": "cfaq-p13",
      "front": "Como separar período simples de período composto?",
      "back": "Período simples tem uma oração; período composto tem duas ou mais. Como regra inicial, conte verbos e locuções verbais que funcionam como núcleos de oração.",
      "details": [
        "Coordenação liga orações sintaticamente independentes.",
        "Subordinação cria dependência sintática."
      ],
      "incidence": "27 questões da amostra histórica: 2º tema mais frequente da base CFAQ-MOC.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-002",
      "lessonId": "cfaq-p12",
      "front": "Como transformar voz ativa em voz passiva analítica?",
      "back": "O objeto direto vira sujeito paciente; use ser no mesmo tempo verbal mais o particípio; o sujeito da ativa pode virar agente da passiva.",
      "details": [
        "“A tripulação conferiu a carga” → “A carga foi conferida pela tripulação”.",
        "Verbos sem objeto direto normalmente não admitem essa transformação."
      ],
      "incidence": "23 questões da amostra histórica: 3º tema mais frequente.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-003",
      "lessonId": "cfaq-p10",
      "front": "Como reconhecer o valor de um adjetivo no texto?",
      "back": "Verifique qual substantivo ele caracteriza e que qualidade, estado, origem ou relação acrescenta; a posição pode alterar ênfase ou sentido.",
      "details": [
        "“Grande homem” e “homem grande” não são equivalentes.",
        "Artigo pode substantivar outra classe: “o importante”."
      ],
      "incidence": "19 questões da amostra histórica: 5º tema mais frequente.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-004",
      "lessonId": "cfaq-p05",
      "front": "Qual relação lógica expressam “embora”, “portanto” e “porque”?",
      "back": "“Embora” indica concessão; “portanto”, conclusão ou consequência; “porque”, em uso explicativo/causal, apresenta motivo ou causa conforme o contexto.",
      "details": [
        "Trocar conector pode mudar o argumento.",
        "Leia as duas orações antes de classificar."
      ],
      "incidence": "17 questões da amostra histórica; conectores estão entre os temas mais recorrentes.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-005",
      "lessonId": "cfaq-p01",
      "front": "Qual é o procedimento mais seguro para localizar informação explícita?",
      "back": "Marque palavras-chave do comando, volte ao trecho correspondente e compare as alternativas sem acrescentar suposições externas.",
      "details": [
        "Informação explícita pode vir parafraseada.",
        "Tema amplo não substitui resposta pontual."
      ],
      "incidence": "17 questões da amostra histórica; leitura estratégica é recorrente.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-006",
      "lessonId": "cfaq-p15",
      "front": "Quando a vírgula não pode separar termos?",
      "back": "Não separe sujeito e verbo, verbo e complemento essencial ou nome e complemento, salvo se houver elemento intercalado devidamente isolado.",
      "details": [
        "Vocativo pede vírgula.",
        "Enumerações usam vírgula entre itens equivalentes."
      ],
      "incidence": "14 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-007",
      "lessonId": "cfaq-p11",
      "front": "Como identificar o referente de um pronome?",
      "back": "Procure o termo ou ideia que o pronome retoma e verifique compatibilidade de sentido, pessoa, gênero e número.",
      "details": [
        "Pronome pode antecipar um termo posterior.",
        "O referente não é necessariamente o substantivo mais próximo."
      ],
      "incidence": "14 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-008",
      "lessonId": "cfaq-p08",
      "front": "Qual regra explica as proparoxítonas?",
      "back": "Todas as palavras proparoxítonas são acentuadas graficamente.",
      "details": [
        "Oxítonas e paroxítonas dependem da terminação.",
        "Identifique primeiro a sílaba tônica."
      ],
      "incidence": "13 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-009",
      "lessonId": "cfaq-p04",
      "front": "Como a repetição por sinônimo ajuda a coesão?",
      "back": "Retoma o mesmo referente com outra expressão, evitando repetição mecânica e mantendo a continuidade temática.",
      "details": [
        "Retomada precisa preservar o referente.",
        "Elipse também pode criar coesão sem repetir a palavra."
      ],
      "incidence": "10 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-010",
      "lessonId": "cfaq-p06",
      "front": "Qual é a diferença entre denotação e conotação?",
      "back": "Denotação usa sentido mais literal e convencional; conotação acrescenta sentido figurado, afetivo ou associado ao contexto.",
      "details": [
        "Polissemia é a pluralidade de sentidos de uma palavra.",
        "O contexto decide o sentido ativado."
      ],
      "incidence": "10 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-011",
      "lessonId": "cfaq-m11",
      "front": "Quais fórmulas de área devem estar automáticas para a prova?",
      "back": "Retângulo: b·h; triângulo: b·h/2; trapézio: (B+b)·h/2; círculo: πr².",
      "details": [
        "Perímetro mede contorno; área mede superfície.",
        "Mantenha todas as medidas na mesma unidade."
      ],
      "incidence": "34 questões da amostra: tema mais frequente de toda a base CFAQ-MOC.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-012",
      "lessonId": "cfaq-m12",
      "front": "Como converter unidades cúbicas sem errar o fator?",
      "back": "Ao mudar uma unidade linear por fator 10, a unidade cúbica muda por 10³. Assim, 1 m³=1.000 dm³=1.000 L.",
      "details": [
        "1 L=1 dm³.",
        "Em escalas, volume varia com o cubo do fator linear."
      ],
      "incidence": "20 questões da amostra histórica: 4º tema mais frequente.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-013",
      "lessonId": "cfaq-m06",
      "front": "Como calcular percentuais sucessivos?",
      "back": "Transforme cada variação em fator e multiplique: aumento de 20% e desconto de 10% dão 1,20×0,90=1,08, isto é, aumento líquido de 8%.",
      "details": [
        "Percentuais sucessivos não se somam em geral.",
        "A base percentual muda após cada etapa."
      ],
      "incidence": "18 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-014",
      "lessonId": "cfaq-m04",
      "front": "Quando usar MMC e quando usar MDC?",
      "back": "Use MMC para encontrar a primeira coincidência de ciclos ou denominadores comuns; use MDC para dividir em partes iguais do maior tamanho possível.",
      "details": [
        "MMC usa maiores expoentes na fatoração.",
        "MDC usa menores expoentes comuns."
      ],
      "incidence": "16 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-015",
      "lessonId": "cfaq-m10",
      "front": "Quais relações angulares aparecem com retas paralelas cortadas por transversal?",
      "back": "Ângulos correspondentes e alternos são congruentes; colaterais internos são suplementares, somando 180°.",
      "details": [
        "Opostos pelo vértice são congruentes.",
        "Adjacentes sobre uma reta somam 180°."
      ],
      "incidence": "15 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-016",
      "lessonId": "cfaq-m03",
      "front": "Como somar frações com denominadores diferentes?",
      "back": "Encontre um denominador comum, preferencialmente o MMC, transforme as frações em equivalentes, some os numeradores e simplifique.",
      "details": [
        "Não some denominadores.",
        "Para dividir frações, multiplique pela inversa da segunda."
      ],
      "incidence": "14 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-017",
      "lessonId": "cfaq-m09",
      "front": "Como resolver uma equação do 2º grau?",
      "back": "Coloque na forma ax²+bx+c=0, calcule Δ=b²−4ac e use x=(−b±√Δ)/(2a).",
      "details": [
        "Δ>0: duas raízes reais; Δ=0: uma raiz dupla; Δ<0: sem raízes reais.",
        "Verifique a pergunta antes de escolher qual raiz usar."
      ],
      "incidence": "13 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-018",
      "lessonId": "cfaq-m05",
      "front": "Como distinguir regra de três direta de inversa?",
      "back": "Na direta, as grandezas crescem ou diminuem juntas; na inversa, uma cresce enquanto a outra diminui na mesma proporção.",
      "details": [
        "Organize unidades equivalentes na mesma coluna.",
        "Teste a direção antes de montar a proporção."
      ],
      "incidence": "12 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-019",
      "lessonId": "cfaq-m13",
      "front": "Qual é a fórmula da inclusão-exclusão para dois conjuntos?",
      "back": "|A∪B|=|A|+|B|−|A∩B|. A interseção é subtraída porque foi contada duas vezes.",
      "details": [
        "“Somente A” é |A|−|A∩B|.",
        "Leia se o universo inclui pessoas fora dos dois conjuntos."
      ],
      "incidence": "11 questões da amostra histórica.",
      "priority": "high"
    },
    {
      "id": "cfaq-hi-020",
      "lessonId": "cfaq-m02",
      "front": "Quais propriedades de potências mais resolvem questões?",
      "back": "Mesma base: na multiplicação somam-se expoentes; na divisão subtraem-se; potência de potência multiplica expoentes.",
      "details": [
        "a⁰=1 para a≠0.",
        "Expoente negativo indica o inverso: a⁻ⁿ=1/aⁿ."
      ],
      "incidence": "10 questões da amostra histórica.",
      "priority": "high"
    }
  ],
  "pnd-historia": [
    {
      "id": "pnd-hi-001",
      "lessonId": "pnd-l016",
      "front": "O que você precisa dominar sobre “EJA como direito e modalidade de educação” para a PND?",
      "back": "A EJA integra o direito à educação e deve reconhecer trabalho, identidades, vivências e conhecimentos construídos ao longo da vida.",
      "details": [
        "A EJA integra o direito à educação e deve reconhecer trabalho, identidades, vivências e conhecimentos construídos ao longo da vida",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 12 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-002",
      "lessonId": "pnd-l012",
      "front": "O que você precisa dominar sobre “Acessibilidade, Libras e responsabilidade docente” para a PND?",
      "back": "Recursos e profissionais de apoio ampliam acesso, mas o professor regente continua responsável pelo planejamento e pela aprendizagem da turma.",
      "details": [
        "Recursos e profissionais de apoio ampliam acesso, mas o professor regente continua responsável pelo planejamento e pela aprendizagem da turma",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 4 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-003",
      "lessonId": "pnd-l005",
      "front": "O que você precisa dominar sobre “Erro, feedback e desenvolvimento” para a PND?",
      "back": "Avaliar o erro ajuda a diagnosticar raciocínios e orientar feedback; punição ou padronização não substituem intervenção formativa.",
      "details": [
        "Avaliar o erro ajuda a diagnosticar raciocínios e orientar feedback",
        "punição ou padronização não substituem intervenção formativa",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 2 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-004",
      "lessonId": "pnd-l014",
      "front": "O que você precisa dominar sobre “Nome social, identidade e respeito institucional” para a PND?",
      "back": "O uso do nome social integra políticas de respeito à identidade e requer tratamento institucional coerente, não mera tolerância informal.",
      "details": [
        "O uso do nome social integra políticas de respeito à identidade e requer tratamento institucional coerente, não mera tolerância informal",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 2 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-005",
      "lessonId": "pnd-l018",
      "front": "O que você precisa dominar sobre “Educação escolar quilombola” para a PND?",
      "back": "Currículos quilombolas articulam identidade, memória, território, participação comunitária e conhecimentos escolares.",
      "details": [
        "Currículos quilombolas articulam identidade, memória, território, participação comunitária e conhecimentos escolares",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 2 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-006",
      "lessonId": "pnd-l001",
      "front": "O que você precisa dominar sobre “Wallon: integração emoção, cognição e motricidade” para a PND?",
      "back": "Emoção, cognição e ação corporal se articulam; a mediação docente considera o estudante em sua integralidade.",
      "details": [
        "Emoção, cognição e ação corporal se articulam",
        "a mediação docente considera o estudante em sua integralidade",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 1 questão oficial nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-007",
      "lessonId": "pnd-l006",
      "front": "O que você precisa dominar sobre “Currículo como construção social” para a PND?",
      "back": "Currículos selecionam conhecimentos e expressam escolhas sociais, culturais e políticas que precisam ser contextualizadas.",
      "details": [
        "Currículos selecionam conhecimentos e expressam escolhas sociais, culturais e políticas que precisam ser contextualizadas",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 1 questão oficial nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-008",
      "lessonId": "pnd-l007",
      "front": "O que você precisa dominar sobre “Currículo prescrito, apresentado e moldado” para a PND?",
      "back": "O professor interpreta referenciais e materiais e os articula ao contexto escolar, sem tratar o currículo como mera execução mecânica.",
      "details": [
        "O professor interpreta referenciais e materiais e os articula ao contexto escolar, sem tratar o currículo como mera execução mecânica",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 1 questão oficial nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-009",
      "lessonId": "pnd-l041",
      "front": "O que você precisa dominar sobre “Memória coletiva e disputas de narrativa” para a PND?",
      "back": "Memórias selecionam e atribuem sentido ao passado; diferentes grupos disputam reconhecimento, silêncios e formas de comemoração.",
      "details": [
        "Memórias selecionam e atribuem sentido ao passado",
        "diferentes grupos disputam reconhecimento, silêncios e formas de comemoração",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 11 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-010",
      "lessonId": "pnd-l094",
      "front": "O que você precisa dominar sobre “História global e conexões entre escalas” para a PND?",
      "back": "História global investiga conexões, circulações e comparações sem apagar assimetrias de poder ou especificidades locais.",
      "details": [
        "História global investiga conexões, circulações e comparações sem apagar assimetrias de poder ou especificidades locais",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 10 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-011",
      "lessonId": "pnd-l027",
      "front": "O que você precisa dominar sobre “Crítica externa e interna das fontes” para a PND?",
      "back": "Toda fonte é situada; sua análise exige verificar origem, contexto, linguagem, interesses, silêncios e relação com outras evidências.",
      "details": [
        "Toda fonte é situada",
        "sua análise exige verificar origem, contexto, linguagem, interesses, silêncios e relação com outras evidências",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 9 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-012",
      "lessonId": "pnd-l062",
      "front": "O que você precisa dominar sobre “Era Vargas e trabalho” para a PND?",
      "back": "Políticas trabalhistas ampliaram direitos e controle estatal, em contexto de centralização, propaganda e disputas sociais.",
      "details": [
        "Políticas trabalhistas ampliaram direitos e controle estatal, em contexto de centralização, propaganda e disputas sociais",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 8 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-013",
      "lessonId": "pnd-l063",
      "front": "O que você precisa dominar sobre “Ditadura civil-militar e repressão” para a PND?",
      "back": "A ditadura envolveu censura, perseguições, tortura, projetos econômicos e resistências; fontes oficiais e testemunhais ajudam a analisar diferentes dimensões.",
      "details": [
        "A ditadura envolveu censura, perseguições, tortura, projetos econômicos e resistências",
        "fontes oficiais e testemunhais ajudam a analisar diferentes dimensões",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 8 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-014",
      "lessonId": "pnd-l093",
      "front": "O que você precisa dominar sobre “África em perspectiva histórica plural” para a PND?",
      "back": "Histórias africanas envolvem sociedades, estados, redes comerciais, colonialismos e experiências pós-coloniais diversas.",
      "details": [
        "Histórias africanas envolvem sociedades, estados, redes comerciais, colonialismos e experiências pós-coloniais diversas",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 6 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-015",
      "lessonId": "pnd-l037",
      "front": "O que você precisa dominar sobre “Fontes imagéticas como documentos históricos” para a PND?",
      "back": "Imagens devem ser interrogadas historicamente e articuladas aos objetivos didáticos, não tratadas como simples ilustração.",
      "details": [
        "Imagens devem ser interrogadas historicamente e articuladas aos objetivos didáticos, não tratadas como simples ilustração",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-016",
      "lessonId": "pnd-l042",
      "front": "O que você precisa dominar sobre “Patrimônio material e imaterial” para a PND?",
      "back": "Bens e práticas tornam-se patrimônio por processos de reconhecimento, disputa e salvaguarda; seu valor não é natural nem imutável.",
      "details": [
        "Bens e práticas tornam-se patrimônio por processos de reconhecimento, disputa e salvaguarda",
        "seu valor não é natural nem imutável",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-017",
      "lessonId": "pnd-l048",
      "front": "O que você precisa dominar sobre “História Cultural: representações e práticas” para a PND?",
      "back": "História cultural investiga como sujeitos produzem e disputam significados em práticas, textos, imagens, ritos e objetos.",
      "details": [
        "História cultural investiga como sujeitos produzem e disputam significados em práticas, textos, imagens, ritos e objetos",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-018",
      "lessonId": "pnd-l064",
      "front": "O que você precisa dominar sobre “Povos indígenas durante a ditadura” para a PND?",
      "back": "Relatórios e investigações documentam violações contra povos indígenas, permitindo ampliar narrativas sobre repressão e direitos humanos.",
      "details": [
        "Relatórios e investigações documentam violações contra povos indígenas, permitindo ampliar narrativas sobre repressão e direitos humanos",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-019",
      "lessonId": "pnd-l075",
      "front": "O que você precisa dominar sobre “Território, contato e resistência indígena” para a PND?",
      "back": "Expansão estatal, frentes econômicas e missões produziram conflitos, negociações e resistências, com forte impacto territorial.",
      "details": [
        "Expansão estatal, frentes econômicas e missões produziram conflitos, negociações e resistências, com forte impacto territorial",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    },
    {
      "id": "pnd-hi-020",
      "lessonId": "pnd-l077",
      "front": "O que você precisa dominar sobre “Relações de gênero como categoria histórica” para a PND?",
      "back": "Gênero ajuda a investigar relações de poder, normas, instituições e identidades, sem pressupor papéis sociais naturais e imutáveis.",
      "details": [
        "Gênero ajuda a investigar relações de poder, normas, instituições e identidades, sem pressupor papéis sociais naturais e imutáveis",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa.",
        "Relacione conceito, contexto e evidências antes de escolher uma alternativa."
      ],
      "incidence": "Tema associado a 5 questãoões oficialis nas duas aplicações de 2025 catalogadas na trilha.",
      "priority": "high"
    }
  ]
};
  window.VERSA_PRIORITY_FLASHCARDS = Object.freeze({version:'1.9.1',basisByCourse:Object.freeze(basisByCourse),cardsByCourse:Object.freeze(cardsByCourse)});
})();
