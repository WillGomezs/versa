/* Versa Concursos — catálogo de flashcards v1.8.7: resposta direta + aprofundamento. */
(() => {
  'use strict';

  const clean = (value) => String(value || '').trim();

  const EXACT_DIRECT_ANSWERS = Object.freeze({
    "O repetidor examina endereços IP?": "Não. O repetidor atua na camada física: regenera e retransmite sinais, sem interpretar endereços IP.",
    "Qual informação principal orienta o roteamento: MAC ou IP?": "IP. Roteadores examinam endereços IP e usam tabelas de roteamento para escolher caminhos entre redes.",
    "Em qual camada do OSI está o HTTP?": "Na camada de Aplicação, a camada 7 do modelo OSI.",
    "Quais camadas OSI são reunidas no acesso à rede do TCP/IP?": "Enlace (camada 2) e Física (camada 1).",
    "IKE é usado principalmente para transportar dados da aplicação ou negociar chaves?": "Negociar chaves e parâmetros de segurança para o IPsec; IKE não transporta os dados da aplicação.",
    "Porta lógica e porta física são a mesma coisa?": "Não. Porta lógica é um número da camada de transporte que identifica serviços/processos; porta física é uma interface ou conector do equipamento.",
    "HTTPS é um protocolo completamente diferente do HTTP ou HTTP sobre uma camada de segurança?": "HTTPS é HTTP protegido por TLS; não é um protocolo de aplicação totalmente diferente do HTTP.",
    "Ordene mentalmente: configuração, resolução de nome, conexão, proteção e solicitação web.": "DHCP → DNS → TCP → TLS → HTTP/HTTPS.",
    "Trap é solicitada periodicamente pelo gerente ou enviada pelo agente diante de um evento?": "É enviada espontaneamente pelo agente diante de um evento; não é uma consulta periódica do gerente.",
    "Por que VLAN e firewall cumprem papéis diferentes?": "Porque a VLAN segmenta logicamente a rede, enquanto o firewall aplica regras de filtragem e controle do tráfego entre origens e destinos.",
    "Qual estratégia evita decorar o gabarito sem aprender o conceito?": "Explique e registre o motivo de cada resposta e de cada erro, em vez de memorizar apenas a letra do gabarito.",
    "O que diferencia conclusão de conteúdo de domínio real?": "Conclusão significa ter percorrido o conteúdo; domínio real exige recuperar e aplicar o conceito, inclusive depois de um intervalo e em questões novas.",
    "Associe um exemplo real a cada elemento da tríade CIA.": "Confidencialidade: só usuários autorizados acessam os dados; Integridade: alterações indevidas são impedidas ou detectadas; Disponibilidade: o serviço permanece acessível quando necessário.",
    "Classifique três controles como preventivos, detectivos ou corretivos.": "Preventivo: MFA; detectivo: IDS/monitoramento; corretivo: restauração de backup após um incidente.",
    "Explique por que transferir risco não significa eliminá-lo.": "Porque transferir ou compartilhar um risco pode deslocar parte do impacto, mas permanece risco residual e responsabilidades que a organização ainda precisa gerir.",
    "Explique por que codificação Base64 não protege confidencialidade.": "Porque Base64 é apenas uma codificação reversível, sem segredo criptográfico; qualquer pessoa pode decodificá-la.",
    "Por que a gestão de nonce é importante em modos autenticados?": "Porque reutilizar ou gerenciar incorretamente nonces/IVs pode quebrar as garantias de confidencialidade e autenticidade do modo criptográfico.",
    "Quais verificações devem ser feitas antes de confiar em um certificado?": "Verifique a cadeia até uma raiz confiável, o período de validade, a identidade/nome esperado e o status de revogação, por exemplo via CRL ou OCSP.",
    "Quais fatores, além do CVSS, devem influenciar a prioridade?": "Exposição, explorabilidade, criticidade e impacto de negócio, além do contexto e dos controles compensatórios do ativo.",
    "Explique o modelo de responsabilidade compartilhada em IaaS e SaaS.": "Em IaaS, o cliente gerencia mais camadas, como sistema operacional, aplicações, dados e configurações; em SaaS, o provedor gerencia quase toda a pilha, mas o cliente ainda responde por dados, identidades, acessos e configurações sob seu controle.",
    "Qual é o risco operacional de um IPS com regra excessivamente ampla?": "Bloquear tráfego legítimo e causar indisponibilidade ou queda de serviço por falsos positivos.",
    "Por que uma anomalia comportamental precisa de investigação contextual?": "Porque uma anomalia é apenas um desvio da linha de base; ela pode ser legítima e não prova, sozinha, que houve ataque.",
    "Explique como as lições aprendidas alteram o risco futuro.": "Elas revelam causas e falhas de controle, permitindo ajustar processos, detecções e controles para reduzir a probabilidade ou o impacto de incidentes futuros.",
    "Quando isolar em vez de desligar imediatamente um equipamento?": "Isole quando for preciso conter o incidente sem destruir evidências voláteis ou interromper desnecessariamente o sistema; desligar pode apagar dados em memória.",
    "Por que segurança não deve ser uma etapa única no final do projeto?": "Porque falhas podem surgir em requisitos, código, dependências, implantação e operação; a segurança precisa acompanhar todo o ciclo de vida.",
    "Escolha uma categoria OWASP e descreva causa, impacto e controle.": "Exemplo — Injeção: causa: entrada não confiável incorporada a comandos ou consultas; impacto: leitura, alteração ou execução não autorizada; controle: consultas parametrizadas e validação contextual.",
    "Por que autorização e regras de engajamento são essenciais?": "Porque a autorização torna o teste legítimo e as regras de engajamento definem escopo, horários, limites e impactos permitidos, evitando ações fora do combinado.",
    "Cite três controles para containers e três para IoT.": "Containers: imagem mínima e assinada; segredos fora da imagem; execução com menor privilégio. IoT: identidade de dispositivo; atualização segura; segmentação de rede.",
    "Dê um exemplo de gênero predominantemente expositivo.": "Um relatório técnico.",
    "Qual função uma oração substantiva pode exercer?": "Pode exercer funções próprias de substantivo, como sujeito, objeto direto, objeto indireto, complemento nominal, predicativo ou aposto.",
    "Use o teste de substituir o termo feminino por um masculino para verificar a crase.": "Se, no masculino, aparecer “ao”, no feminino tende a ocorrer “à”. Ex.: “vou ao setor” → “vou à sala”.",
    "Explain the difference between skimming and scanning.": "Skimming busca a ideia geral e a organização do texto; scanning procura uma informação específica.",
    "Give one example of a false cognate.": "Exemplo: “actually” significa “na verdade”, e não “atualmente”.",
    "What is the difference between must and might?": "“Must” normalmente indica obrigação forte ou dedução; “might” indica possibilidade.",
    "Why are absolute words dangerous in reading questions?": "Because words such as “always”, “never”, “all” and “only” strengthen a claim and may go beyond what the passage actually supports.",
    "Quantas linhas possui uma tabela com quatro proposições simples?": "16 linhas, pois 2⁴ = 16.",
    "Diferencie validade e veracidade das premissas.": "Validade é a correção da forma lógica do argumento; veracidade é a verdade factual das premissas. Um argumento pode ser válido mesmo com premissas falsas.",
    "Negue: “Existe um usuário com acesso privilegiado”.": "Nenhum usuário tem acesso privilegiado.",
    "Quais sinais aumentam a confiabilidade de uma notícia?": "Fonte identificável e confiável, data e contexto, distinção entre fato e opinião e confirmação por outras evidências ou fontes.",
    "Dê um exemplo de aprendizado não supervisionado.": "Exemplo: agrupar automaticamente logs ou usuários em clusters semelhantes sem rótulos prévios.",
    "Por que fluência textual não prova exatidão factual?": "Porque fluência mede plausibilidade linguística, não verificação de fatos; uma resposta pode soar convincente e ainda estar incorreta ou sem suporte confiável.",
    "Como privacidade e qualidade de dados se relacionam em IA?": "Dados de baixa qualidade ou enviesados prejudicam os resultados, mas melhorar a base não autoriza coletar dados em excesso: é preciso qualidade com minimização e proteção da privacidade.",
    "O requerente precisa apresentar a motivação do pedido?": "Não. A LAI não permite exigir justificativa sobre o motivo do pedido; o requerente deve identificar-se e especificar a informação solicitada.",
    "O que significa necessidade de conhecer?": "É conceder acesso a informação restrita somente a quem realmente precisa dela para exercer sua função, além do credenciamento aplicável.",
    "Por que autorização e escopo são essenciais em testes de segurança?": "Porque testes sem autorização ou fora do escopo podem causar dano e caracterizar acesso indevido; autorização define a legitimidade e o escopo define os limites permitidos.",
    "Quais fatores devem ser avaliados após um incidente com dados pessoais?": "Avalie o risco e o possível dano aos titulares, a natureza e sensibilidade dos dados, o alcance do incidente, as medidas de contenção e a necessidade de comunicação e resposta.",
    "Qual é a diferença entre risco e issue?": "Risco é um evento ou condição incerta que pode afetar objetivos; issue é um problema que já ocorreu e precisa ser tratado.",
    "O que significa focar em valor?": "Significa priorizar atividades e decisões que contribuam para resultados úteis e valor percebido pelas partes interessadas.",
    "Compare a responsabilidade do cliente em IaaS e SaaS.": "Em IaaS, o cliente administra mais da pilha, como sistema operacional, aplicações e configurações; em SaaS, o provedor administra a aplicação e a infraestrutura, mas o cliente continua responsável por dados, identidades, acessos e configurações sob seu controle.",
    "Quais requisitos podem levar a uma arquitetura híbrida?": "Latência, localização ou soberania de dados, conformidade, custo, integração com legado e necessidade de manter parte do ambiente privado.",
    "Por que backup e alta disponibilidade não são sinônimos?": "Porque alta disponibilidade reduz interrupções mantendo o serviço operacional, enquanto backup preserva cópias para recuperação de dados; um não substitui o outro.",
    "Por que uma certificação do provedor não garante conformidade da aplicação?": "Porque a certificação cobre o escopo e os controles do provedor, não as configurações, dados, identidades, aplicações e obrigações específicas do cliente.",
    "Cite um serviço de object storage de cada provedor.": "AWS: Amazon S3; Azure: Blob Storage; Google Cloud: Cloud Storage.",
    "Qual é a finalidade de um Target Profile?": "Descrever o estado de segurança desejado para compará-lo ao Current Profile e identificar lacunas e prioridades.",
    "O que significa perfect forward secrecy?": "Significa que o comprometimento posterior de uma chave de longo prazo não revela as chaves de sessões passadas, normalmente graças ao uso de chaves efêmeras.",
    "Quais propriedades tornam uma evidência digital mais confiável?": "Autenticidade, integridade, contexto e proveniência documentados, além de preservação e cadeia de custódia.",
    "Por que concatenar entrada do usuário em um comando de shell é perigoso?": "Porque a entrada pode ser interpretada como parte do comando, permitindo command injection e execução de ações não autorizadas.",
    "Qual classe de falha é comum em C/C++ por acesso fora dos limites?": "Falhas de segurança de memória, como buffer overflow ou acesso fora dos limites (out-of-bounds).",
    "O que significa anycast no IPv6 e qual campo substitui o TTL?": "Anycast usa o mesmo endereço em múltiplas interfaces e o roteamento entrega ao destino considerado mais próximo; no IPv6, Hop Limit substitui o TTL.",
    "Crie uma locução adverbial de modo e outra de tempo.": "Modo: “com cuidado”. Tempo: “à noite”.",
    "Reescreva “Me informaram o resultado” segundo a norma formal em início de frase.": "“Informaram-me o resultado.”",
    "Por que há crase em “à noite”?": "Porque “à noite” é uma locução adverbial feminina: ocorre a fusão da preposição “a” com o artigo “a”.",
    "Give a contextual synonym for “halt” in a port-operations text.": "“Stop” ou “cease”, conforme o contexto.",
    "Form a question asking the time of departure.": "“What time does the vessel depart?”",
    "Choose between much and many for “___ equipment” and explain.": "“Much equipment”, porque “equipment” é incontável.",
    "Quais condições definem continuidade em x=a?": "f(a) deve existir, o limite limₓ→ₐ f(x) deve existir e esse limite deve ser igual a f(a).",
    "Quando a integração por partes é especialmente útil?": "Quando a integral contém um produto em que derivar um fator o simplifica e integrar o outro é viável, como polinômio × exponencial, logaritmo ou função trigonométrica.",
    "Converta o ponto polar (2, π/2) para coordenadas cartesianas.": "(0, 2).",
    "Qual é a interpretação geométrica do vetor velocidade r′(t)?": "É um vetor tangente à trajetória, apontando no sentido do movimento; seu módulo é a rapidez.",
    "Por que a condição an→0 é necessária, mas não suficiente, para a série convergir?": "Porque toda série convergente precisa ter aₙ→0, mas aₙ→0 sozinho não garante convergência; a série harmônica é um contraexemplo.",
    "Por que uma transformação linear sempre envia o vetor zero ao vetor zero?": "Porque, pela linearidade, T(0)=T(0+0)=T(0)+T(0), logo T(0)=0.",
    "Qual vantagem de robustez a bisseção possui em relação ao método de Newton?": "Com função contínua e mudança de sinal, a bisseção mantém a raiz enquadrada e garante convergência; Newton pode divergir ou falhar conforme o chute inicial e a derivada.",
    "Qual é a diferença entre interpolar dados e ajustar uma regressão?": "Interpolação constrói uma função que passa pelos pontos fornecidos; regressão ajusta um modelo aos dados minimizando erro e, em geral, não passa por todos os pontos.",
    "Como o aumento do amortecimento altera o pico de ressonância?": "Aumentar o amortecimento reduz a altura do pico de ressonância e o torna mais largo.",
    "Como pressão e velocidade se relacionam em um tubo horizontal ideal?": "Em um tubo horizontal ideal, maior velocidade corresponde a menor pressão, e vice-versa, pela equação de Bernoulli.",
    "Quando um corpo flutua em equilíbrio, como se relacionam peso e empuxo?": "O empuxo é igual ao peso do corpo.",
    "Por que nenhuma máquina térmica real tem rendimento de 100%?": "Porque a segunda lei da Termodinâmica exige rejeição de parte do calor para uma fonte fria; uma máquina cíclica não converte todo o calor recebido em trabalho.",
    "Por que uma parede mais espessa tende a reduzir a taxa de condução?": "Porque, pela lei de Fourier, a taxa de condução é inversamente proporcional à espessura; aumentando L, o fluxo de calor diminui para o mesmo ΔT.",
    "Por que um refrigerador precisa receber trabalho externo?": "Porque ele transfere calor da região fria para a quente, sentido oposto ao fluxo espontâneo, e isso exige trabalho externo.",
    "Qual é o ângulo entre linhas de campo e uma superfície equipotencial?": "90°. As linhas de campo elétrico são perpendiculares às superfícies equipotenciais.",
    "O que acontece com a capacitância de placas paralelas quando a distância diminui?": "A capacitância aumenta, pois C=εA/d.",
    "Qual é o significado físico da constante de tempo RC?": "τ=RC é a escala de tempo do carregamento ou descarregamento; após uma constante de tempo, a grandeza percorre cerca de 63% da variação até o valor final.",
    "O que determina o sentido da corrente induzida?": "A Lei de Lenz: a corrente induzida cria um campo que se opõe à variação do fluxo magnético que a produziu.",
    "Quando a Lei de Ampère é especialmente útil?": "Quando há alta simetria do campo magnético, como em fio retilíneo longo, solenoide ou toroide, permitindo simplificar a integral de linha.",
    "Qual é a função de um filtro passa-banda?": "Permitir a passagem de frequências entre dois limites de corte e atenuar frequências abaixo e acima dessa faixa.",
    "Responda com concordância: “I have never sailed abroad.”": "“Neither have I.”",
    "Por que Cp é maior que Cv em um gás ideal?": "Porque, a pressão constante, parte do calor também realiza trabalho de expansão; para gás ideal, Cp=Cv+R.",
    "Compare transformações isotérmica e adiabática.": "Isotérmica: temperatura constante, com troca de calor possível. Adiabática: Q=0 e a temperatura geralmente varia durante expansão ou compressão.",
    "O que o determinante zero informa sobre uma matriz quadrada?": "Que a matriz é singular e não invertível; suas linhas ou colunas são linearmente dependentes.",
    "Como identificar variáveis livres na forma escalonada?": "São as variáveis correspondentes às colunas sem pivô na forma escalonada.",
    "Qual é a diferença entre conjunto gerador e base?": "Um conjunto gerador apenas precisa gerar o espaço e pode ser redundante; uma base gera o espaço e é linearmente independente.",
    "Qual é o papel da matriz P em A=PDP⁻¹?": "As colunas de P são autovetores de A; P realiza a mudança de base para a base de autovetores, enquanto D contém os autovalores correspondentes.",
    "Diferencie condicionamento e estabilidade.": "Condicionamento mede a sensibilidade do problema a pequenas perturbações nos dados; estabilidade mede como o algoritmo propaga ou amplifica erros numéricos.",
    "Quando Newton-Raphson pode falhar?": "Pode falhar ou divergir com chute inicial inadequado, derivada nula ou muito pequena, descontinuidades ou quando a iteração sai da região de convergência.",
    "Qual é a diferença operacional entre Jacobi e Gauss-Seidel?": "Jacobi calcula todos os novos valores usando apenas a iteração anterior; Gauss-Seidel reutiliza imediatamente os valores recém-atualizados na mesma iteração.",
    "Quando usar o teorema trabalho–energia?": "Quando o trabalho das forças é mais fácil de obter do que a aceleração no tempo e interessam principalmente os estados inicial e final de velocidade/posição.",
    "Explique a diferença entre homonímia e paronímia e dê um exemplo de cada.": "Homonímia: palavras iguais no som ou na grafia, mas com sentidos diferentes, como “manga” (fruta/parte da camisa). Paronímia: palavras parecidas na forma, mas diferentes no sentido, como “ratificar” e “retificar”.",
    "Que evidência transforma uma suposição em inferência válida?": "Pistas e informações do próprio texto que sustentem a conclusão sem contradizer o que está explicitamente afirmado.",
    "Como o contexto elimina uma ambiguidade?": "Ao selecionar, entre os sentidos possíveis, aquele que é compatível com as palavras ao redor, a situação comunicativa e o sentido global do texto.",
    "Como diferenciar derivação de composição?": "Derivação forma palavra nova a partir de uma base, geralmente com afixos ou mudanças morfológicas; composição une dois ou mais radicais ou palavras-base.",
    "Que diferença de sentido existe entre pretérito perfeito e imperfeito?": "O pretérito perfeito apresenta fato passado concluído; o imperfeito apresenta ação habitual, contínua ou em curso no passado.",
    "Como localizar o núcleo do sujeito?": "Localize o sujeito e identifique sua palavra central, normalmente um substantivo ou pronome; determinantes e modificadores não são o núcleo.",
    "Por que ocorre crase em “à sala”?": "Porque o termo anterior exige a preposição “a” e “sala” admite o artigo “a”; a + a = à.",
    "Por que não se usa vírgula entre sujeito e predicado?": "Porque a vírgula não deve separar o sujeito de seu verbo ou predicado, salvo quando há um termo intercalado devidamente isolado.",
    "Por que é necessário um denominador comum na adição?": "Porque as frações precisam representar partes do mesmo tamanho antes de os numeradores serem somados.",
    "Como reconhecer uma relação inversamente proporcional?": "Quando uma grandeza aumenta e a outra diminui na proporção correspondente, mantendo constante o produto entre elas.",
    "Por que aumentos sucessivos não devem ser apenas somados?": "Porque cada percentual incide sobre uma base já atualizada; os efeitos se compõem multiplicativamente.",
    "Como identificar termos semelhantes?": "Eles têm a mesma parte literal: mesmas variáveis elevadas aos mesmos expoentes; apenas os coeficientes podem ser diferentes.",
    "Como verificar a solução de uma equação?": "Substitua o valor encontrado na equação original e confirme que os dois membros ficam iguais e que as restrições do problema são respeitadas.",
    "Por que a conversão de área usa o fator ao quadrado?": "Porque área é bidimensional: se a unidade linear muda por um fator k, a unidade de área muda por k².",
    "Por que a interseção é subtraída na fórmula da união?": "Porque os elementos de A∩B são contados duas vezes em |A|+|B|; subtrair a interseção corrige essa dupla contagem.",
    "Quando se aplica o princípio multiplicativo?": "Quando uma tarefa é formada por etapas sucessivas e o número total de possibilidades é o produto das opções disponíveis em cada etapa.",
    "Qual é a diferença entre coesão e coerência?": "Coesão são os mecanismos linguísticos que conectam partes do texto; coerência é a unidade lógica e semântica que faz as ideias formarem um todo compreensível.",
    "Por que um sinônimo de dicionário pode não substituir uma palavra em todo contexto?": "Porque palavras dependem de contexto, conotação, regência e uso; a substituição só é válida se preservar o sentido naquele trecho.",
    "What is the difference between a threat and a vulnerability?": "A threat is a potential cause, event or agent of harm; a vulnerability is a weakness that a threat can exploit.",
    "Qual propriedade tende a ser mais afetada por uma escuta passiva?": "Confidencialidade, porque a escuta passiva expõe informações sem necessariamente alterar o tráfego.",
    "Por que replay é classificado como ataque ativo?": "Porque o atacante captura e retransmite mensagens válidas para interferir no comportamento do sistema; ele não apenas observa o tráfego.",
    "Qual característica diferencia SYN flood de simples análise passiva?": "O SYN flood envia ativamente muitas solicitações para manter conexões TCP semiabertas e exaurir recursos; análise passiva apenas observa o tráfego.",
    "O que distingue spear-phishing de phishing genérico?": "Spear-phishing é direcionado e personalizado para um alvo; phishing genérico é distribuído de forma ampla, com pouca personalização.",
    "No ATT&CK, o que uma tática representa?": "O objetivo do adversário — o “porquê” de executar uma técnica ou sub-técnica.",
    "Como CAPEC se diferencia de CWE?": "CAPEC cataloga padrões de ataque; CWE cataloga classes de fraquezas de software e hardware que podem dar origem a vulnerabilidades.",
    "Qual é a estratégia segura para estudar ferramentas no edital?": "Estude o reconhecimento: finalidade, categoria, tipo de evidência e uso defensivo/autorizado de cada ferramenta, sem memorizar comandos ofensivos operacionais.",
    "Que associação é clássica para Wireshark?": "Captura de pacotes e análise de protocolos e tráfego de rede.",
    "Qual protocolo é comum entre autenticador e servidor AAA em 802.1X?": "RADIUS. O EAP transporta a autenticação entre o suplicante e o autenticador; o autenticador costuma falar com o servidor AAA via RADIUS.",
    "Como lidar com versões diferentes do OWASP Top 10 em prova?": "Use a versão indicada no enunciado ou na fonte da questão; para o edital atual, conheça a versão corrente sem substituir o contexto de questões históricas.",
    "Qual é a finalidade principal da assinatura digital?": "Garantir integridade e autenticidade da mensagem e sustentar não repúdio; assinatura digital não fornece confidencialidade por si só.",
    "O que caracteriza autenticação multifator?": "O uso de dois ou mais fatores de categorias independentes, como algo que você sabe, algo que você possui e algo que você é.",
    "Por que RAID não é sinônimo de backup?": "Porque RAID fornece redundância e disponibilidade contra certas falhas de disco, mas não cria uma cópia histórica independente; exclusão, corrupção ou ransomware podem afetar o conjunto.",
    "O que caracteriza a etapa de categorização no RMF?": "Classificar o sistema e as informações pelo impacto potencial da perda de confidencialidade, integridade e disponibilidade, orientando o nível de controles necessário.",
    "Qual cuidado é essencial em OSINT?": "Verificar autenticidade, data, contexto e confiabilidade das fontes; informação pública não é automaticamente verdadeira.",
    "Como se relacionam ISO/IEC 27001 e 27002?": "A ISO/IEC 27001 define requisitos auditáveis para o SGSI; a ISO/IEC 27002 fornece orientação e boas práticas para controles de segurança da informação.",
    "O que distingue análise qualitativa de quantitativa?": "A qualitativa usa categorias ou escalas descritivas, como baixo/médio/alto; a quantitativa usa valores numéricos para estimar probabilidade, impacto ou perda.",
    "Por que “lições aprendidas” fazem parte da gestão de incidentes?": "Porque identificam causas e lacunas de controle e orientam melhorias que reduzem recorrência e impacto de incidentes futuros.",
    "Qual é o objetivo de uma PIA?": "Identificar, avaliar e documentar impactos e riscos de privacidade e definir medidas para tratá-los antes e durante uma iniciativa.",
    "Quais são as seis funções do NIST CSF 2.0?": "Govern, Identify, Protect, Detect, Respond e Recover.",
    "O que representa IG1 nos CIS Controls?": "O Implementation Group 1 é o conjunto básico de salvaguardas de higiene cibernética essencial recomendado como ponto de partida para todas as organizações.",
    "Quais são os três papéis de 802.1X e onde entram EAP e RADIUS?": "Suplicante solicita acesso; autenticador controla a porta; servidor de autenticação/AAA valida. EAP leva a troca de autenticação entre suplicante e autenticador, e RADIUS é comum entre autenticador e servidor AAA.",
  });


  // v1.8.5 — segunda passagem editorial: casos em que a heurística ainda respondia
  // com contexto genérico, resposta incompleta ou informação na ordem errada.
  const AUDITED_DIRECT_ANSWERS = Object.freeze({
    "Qual é a regra geral da LAI sobre publicidade e sigilo?": "Publicidade é a regra; sigilo é a exceção, nos casos e prazos previstos em lei.",
    "Por que o COBIT não deve ser aplicado como checklist idêntico em toda organização?": "Porque o COBIT deve ser adaptado ao contexto e aos fatores de desenho da organização; não existe uma configuração única adequada a todos os cenários.",
    "Como regiões e zonas de disponibilidade ajudam na alta disponibilidade?": "Distribuindo recursos entre zonas/domínios de falha independentes e, quando necessário, entre regiões, reduzindo o risco de uma única falha interromper todo o serviço.",
    "What is the difference between skimming and scanning?": "Skimming busca a ideia geral do texto; scanning procura uma informação específica.",
    "Qual é a principal diferença entre uma série de Taylor e uma série de Fourier?": "Taylor aproxima uma função por potências em torno de um ponto usando derivadas; Fourier representa funções, especialmente periódicas, por uma combinação de senos e cossenos.",
    "Qual é a interpretação geométrica do produto vetorial?": "É um vetor perpendicular aos dois vetores; seu módulo corresponde à área do paralelogramo formado por eles e o sentido segue a regra da mão direita.",
    "Por que um indutor se opõe a uma mudança rápida de corrente?": "Porque uma variação de corrente induz no próprio indutor uma tensão que se opõe à variação que a produziu, conforme a lei de Lenz.",
    "Qual é a vantagem da forma de Newton ao incluir novo nó?": "Ela permite acrescentar um novo nó reutilizando os coeficientes já calculados e adicionando apenas um novo termo de diferenças divididas.",
    "Qual condição é usual na regra de Simpson 1/3 composta?": "O número de subintervalos deve ser par e os nós devem estar igualmente espaçados.",
    "Como a imaginação sociológica relaciona experiência individual e estrutura social?": "Ela conecta experiências e problemas pessoais às estruturas sociais, instituições e processos históricos que moldam essas experiências.",
    "Explique, sem consultar, o núcleo de convenções oit 107 e 169 e apresente um exemplo.": "A Convenção 107 tinha orientação integracionista; a Convenção 169 reconhece identidade, participação e consulta dos povos interessados. Exemplo: uma medida que os afete diretamente deve ser precedida de consulta por procedimentos apropriados e instituições representativas.",
    "Explique, sem consultar, o núcleo de adct artigo 68 e comunidades quilombolas e apresente um exemplo.": "O art. 68 do ADCT reconhece a propriedade definitiva das terras ocupadas pelos remanescentes das comunidades dos quilombos e determina ao Estado a emissão dos títulos. Exemplo: relacionar a ocupação tradicional ao processo de reconhecimento e titulação.",
    "Explique, sem consultar, o núcleo de decreto nº 4.887/2003 e apresente um exemplo.": "O Decreto nº 4.887/2003 regulamenta o procedimento de identificação, reconhecimento, delimitação, demarcação e titulação das terras ocupadas por remanescentes das comunidades dos quilombos. Exemplo: usar autoatribuição e relações territoriais específicas no processo de reconhecimento.",
    "Explique, sem consultar, o núcleo de estatuto do índio e estatuto da igualdade racial e apresente um exemplo.": "O Estatuto do Índio (Lei 6.001/1973) deve ser lido à luz da Constituição de 1988, que superou o paradigma integracionista; o Estatuto da Igualdade Racial (Lei 12.288/2010) estabelece instrumentos de promoção da igualdade e combate à discriminação racial. Exemplo: distinguir tutela/integracionismo de autonomia e políticas de igualdade racial.",
    "O que o discriminante informa?": "Pelo sinal de Δ: Δ>0 indica duas raízes reais distintas; Δ=0, uma raiz real dupla; Δ<0, nenhuma raiz real.",
    "O que torna uma inferência textual válida?": "Ela deve decorrer de pistas e evidências do próprio texto, sem contradizer informações explícitas nem acrescentar opinião externa.",
    "What meaning does “must” usually add in technical instructions?": "It usually expresses a strong obligation or requirement.",
    "Por que endpoint security exige mais de uma camada?": "Porque controles diferentes cobrem riscos diferentes: antimalware busca detectar ou impedir código malicioso, enquanto o firewall do host controla conexões e tráfego de rede; uma camada não substitui a outra.",
    "Por que cadeia de custódia é importante?": "Porque documenta a coleta, posse, transferência, análise e preservação da evidência, ajudando a demonstrar sua integridade e rastreabilidade ao longo do processo.",
    "Qual é o papel da análise de impacto nos negócios (BIA)?": "Identificar atividades prioritárias, impactos da interrupção e requisitos de recuperação, subsidiando prioridades e objetivos de continuidade.",
    "Como 22313 complementa 22301?": "A ISO 22301 estabelece requisitos para o sistema de gestão de continuidade; a ISO 22313 fornece orientações para aplicar esses requisitos.",
    "O que significa minimização de dados?": "Tratar apenas os dados adequados, pertinentes e necessários para a finalidade definida, limitando coleta, uso, acesso e retenção ao mínimo necessário.",
    "Qual é a ideia central de um PIMS associado à ISO/IEC 27701?": "Um PIMS é um Sistema de Gestão de Informações de Privacidade que amplia a gestão de segurança para organizar controles, responsabilidades e práticas relacionadas ao tratamento de informações de privacidade.",
    "O que caracteriza ARP spoofing?": "A criação de associações ARP falsas entre endereços IP e MAC, normalmente para desviar ou interceptar tráfego em uma rede local.",
    "Qual propriedade blockchain não oferece automaticamente?": "Blockchain não oferece automaticamente confidencialidade nem garante que os dados inseridos sejam verdadeiros; sua estrutura pode apoiar integridade e rastreabilidade do registro, dependendo do desenho.",
    "Quais propriedades blockchain não oferece automaticamente?": "Blockchain não oferece automaticamente confidencialidade nem garante a correção dos dados de entrada; essas propriedades exigem controles adicionais.",
    "Qual é a diferença entre análise e avaliação de riscos?": "Análise estima a natureza e o nível dos riscos; avaliação compara esses resultados com critérios definidos para decidir prioridades e tratamento.",
    "Diferencie incidente e problema no ITIL.": "Incidente é uma interrupção ou degradação a ser restaurada rapidamente; problema é a causa, ou causa potencial, de um ou mais incidentes e deve ser investigada para reduzir recorrência.",
    "Qual classe de falha é comum em C/C++ por acesso fora dos limites?": "Uma falha de segurança de memória, como buffer overflow ou acesso out-of-bounds.",
    "Cite um controle de segurança para Kafka.": "Exemplo: aplicar ACLs para restringir quais identidades podem produzir ou consumir em cada tópico.",
    "Em qual camada do modelo OSI opera o HTTP e o que isso indica?": "Na camada de Aplicação (camada 7); isso indica que o HTTP fornece serviço diretamente às aplicações, e não funções de transporte ou roteamento.",
    "Qual é a relação entre forward e reverse proxy?": "O forward proxy representa clientes perante servidores externos; o reverse proxy representa servidores/aplicações perante os clientes.",
    "Qual é a relação entre SNMP e RMON?": "SNMP é o protocolo de gerenciamento/consulta; RMON é uma especificação de monitoramento remoto que usa a estrutura de gerenciamento SNMP para ampliar métricas sobre segmentos e tráfego.",
    "O que o sistema deve verificar além da validade do certificado?": "Além do período de validade, deve validar a cadeia de confiança, o nome/identidade esperado e o status de revogação; em autenticação com certificado, também é necessário provar posse da chave privada correspondente.",
    "Qual é a finalidade da ISO/IEC 27001?": "Especificar requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão de Segurança da Informação (SGSI) baseado em risco.",
    "Qual cuidado é essencial em OSINT?": "Verificar autenticidade, data, contexto, origem e confiabilidade das fontes antes de usar a informação; conteúdo público não é automaticamente verdadeiro.",
    "Qual é a finalidade principal da assinatura digital?": "Comprovar integridade e autenticidade da informação e apoiar o não repúdio; ela não fornece confidencialidade por si só.",
    "Diferencie hash, HMAC e função de derivação de senha.": "Hash gera um resumo sem chave; HMAC combina hash com chave secreta para autenticar a mensagem; uma função de derivação de senha transforma senhas com salt e custo elevado para dificultar ataques de força bruta.",
    "Diferencie IOC e TTP e dê um exemplo de cada.": "IOC é um indicador observável, como um hash malicioso ou domínio; TTP descreve comportamento e modo de operação do adversário, como usar spear-phishing para obter credenciais.",
    "Explique a diferença entre inferência e extrapolação.": "Inferência é uma conclusão sustentada por pistas do texto; extrapolação acrescenta uma conclusão que ultrapassa o que o texto autoriza.",
    "Recite as cinco funções na ordem tradicional.": "Identify, Protect, Detect, Respond e Recover — as cinco funções do NIST CSF 1.1; no CSF 2.0 foi acrescentada a função Govern.",
    "Quais categorias a LGPD trata como dados pessoais sensíveis?": "Origem racial ou étnica; convicção religiosa; opinião política; filiação a sindicato ou a organização de caráter religioso, filosófico ou político; dados de saúde ou vida sexual; e dados genéticos ou biométricos vinculados a pessoa natural.",
    "Explique, sem consultar, o núcleo de estado, governo e administração pública e apresente um exemplo.": "Estado é a estrutura político-jurídica permanente; governo é a direção política exercida temporariamente; administração pública é o conjunto de órgãos, agentes e atividades que executa políticas e serviços. Exemplo: uma política pode permanecer como ação estatal mesmo após a mudança de governo e ser executada pela administração.",
    "Explique, sem consultar, o núcleo de federação brasileira e competências e apresente um exemplo.": "A federação distribui competências entre União, estados, Distrito Federal e municípios, combinando autonomia dos entes com cooperação em matérias comuns. Exemplo: uma política social pode ter normas e financiamento compartilhados e execução local.",
    "Explique, sem consultar, o núcleo de ciclo de políticas públicas e apresente um exemplo.": "O ciclo costuma organizar agenda, formulação, decisão, implementação, monitoramento e avaliação, com interação entre atores e possibilidade de revisão. Exemplo: dados censitários ajudam a diagnosticar um problema e depois a avaliar a cobertura da política.",
    "Explique, sem consultar, o núcleo de antropologia política e econômica e apresente um exemplo.": "A antropologia política analisa poder, autoridade e instituições; a econômica examina produção, troca, distribuição e reciprocidade em seus contextos sociais. Exemplo: estudar como autoridade e reciprocidade organizam o uso coletivo de recursos.",
    "Explique, sem consultar, o núcleo de entrevistas, diário de campo e fontes orais e apresente um exemplo.": "Entrevistas produzem relatos orientados por diferentes graus de estrutura; o diário de campo registra cenas, contexto e reflexões; fontes orais preservam narrativas que exigem contextualização e crítica. Exemplo: separar a fala do interlocutor das interpretações analíticas do pesquisador.",
    "Explique, sem consultar, o núcleo de territorialização quilombola e apresente um exemplo.": "Territorialização quilombola é o processo histórico, político e identitário de constituição e reconhecimento de um território coletivo ligado à reprodução social e cultural da comunidade. Exemplo: analisar acordos coletivos de uso e vínculos históricos na identificação territorial.",
    "Explique, sem consultar, o núcleo de pobreza absoluta, relativa e multidimensional e apresente um exemplo.": "Pobreza absoluta usa um limiar de necessidades básicas; relativa compara a posição do indivíduo ou domicílio com o padrão da sociedade; multidimensional combina privações em várias dimensões além da renda. Exemplo: comparar uma linha de renda com um índice de educação, saúde e habitação.",
    "Explique, sem consultar, o núcleo de média, mediana e posição central e apresente um exemplo.": "Média é a soma dos valores dividida pelo número de observações; mediana é o valor central após ordenar os dados. Exemplo: em renda muito assimétrica, a mediana costuma representar melhor o centro sem ser puxada por extremos.",
    "Explique, sem consultar, o núcleo de coeficiente de variação e apresente um exemplo.": "O coeficiente de variação mede dispersão relativa, normalmente CV = desvio padrão ÷ média (×100% quando expresso em percentual). Exemplo: comparar a variabilidade de duas séries com escalas diferentes, evitando uso quando a média é próxima de zero.",
    "Explique, sem consultar, o núcleo de números-índices e medidas de concentração e apresente um exemplo.": "Números-índices resumem variações relativas em relação a uma base; medidas de concentração mostram quanto uma distribuição está concentrada ou desigual. Exemplo: interpretar um índice com base 100 e, separadamente, uma medida de concentração de renda.",
    "Explique, sem consultar, o núcleo de rural e agrário e apresente um exemplo.": "Rural é um conceito mais amplo ligado ao espaço, população e atividades fora dos centros urbanos; agrário enfatiza relações de terra, produção e estrutura fundiária. Exemplo: falta de serviço público pode ser um problema rural, enquanto concentração de terras é um problema agrário.",
    "Como identificar o referente retomado por um pronome?": "Procure o substantivo ou a ideia anterior compatível com o pronome em sentido, pessoa, gênero e número e confirme se essa retomada preserva a coerência da frase."
  });

  const FRONT_OVERRIDES = Object.freeze({
    "Qual elemento o pronome retoma na frase analisada?": "Como identificar o referente retomado por um pronome?"
  });

  const DIRECT_RULES = [
    [/caminhos alternativos/i, 'A topologia em malha, porque oferece múltiplos caminhos entre os nós e maior redundância.'],
    [/must not.*do not have to/i, '“Must not” significa proibição: não pode fazer. “Do not have to” significa ausência de obrigação: não é necessário fazer.'],
    [/ponto crítico e máximo/i, 'Ponto crítico é onde f′(x)=0 ou não existe; máximo é um ponto em que a função assume valor maior que os pontos vizinhos ou, no máximo absoluto, que todo o domínio considerado.'],
    [/teorema trabalho.?energia/i, 'O trabalho resultante realizado sobre um corpo é igual à variação de sua energia cinética: W_resultante = ΔK.'],
    [/campo elétrico e potencial/i, 'Campo elétrico é força por unidade de carga (E=F/q); potencial elétrico é energia potencial por unidade de carga (V=U/q).'],
    [/persistência de escalação de privilégios/i, 'Escalação de privilégios busca obter permissões maiores; persistência busca manter acesso ao ambiente ao longo do tempo.'],
    [/Ponto de acesso e roteador são sempre o mesmo equipamento/i, 'Não. Um ponto de acesso fornece conectividade Wi‑Fi; um roteador encaminha tráfego entre redes. As funções podem existir no mesmo aparelho, mas não são a mesma coisa.'],
    [/quando não existe rota nem rota padrão/i, 'O roteador não consegue encaminhar o pacote; normalmente ele o descarta e pode informar destino inalcançável ao remetente.'],
    [/conector de concessão e um de conclusão/i, 'Concessão: “embora”. Conclusão: “portanto”.'],
    [/diferença entre controlador e operador/i, 'Controlador decide as finalidades e os meios essenciais do tratamento; operador trata dados pessoais em nome do controlador.'],
    [/forward e reverse proxy/i, 'Forward proxy representa o cliente diante dos servidores; reverse proxy representa os servidores diante dos clientes.'],
    [/They inspected the vessel.*question/i, '“Did they inspect the vessel?”'],
    [/They repaired the engine.*passive voice/i, '“The engine was repaired by them.”'],
    [/regularly \/ the officer \/ checks \/ the equipment/i, '“The officer regularly checks the equipment.”'],
    [/primitiva de 3x²/i, 'x³ + C.'],
    [/finalidade de uma série de Taylor/i, 'Aproximar uma função por um polinômio construído a partir de suas derivadas em torno de um ponto.'],
    [/Como você diferencia assunto, tema e tese/i, 'Assunto é o campo geral; tema é o recorte específico; tese é a posição central defendida em um texto argumentativo.'],
    [/adjetivo pode ser substantivado/i, 'Quando passa a exercer função de substantivo, geralmente acompanhado por um determinante. Ex.: “o importante” — “importante” está substantivado.'],
    [/condições permitem aplicar o Teorema de Tales/i, 'Retas paralelas devem ser cortadas por duas ou mais transversais; os segmentos correspondentes formados são proporcionais.'],
    [/gráfico pode ocultar por causa da escala/i, 'Uma escala truncada, muito ampla ou desigual pode exagerar ou minimizar visualmente diferenças entre os valores.'],
    [/meaning does “must” usually add/i, '“Must” normalmente expressa obrigação ou necessidade forte em instruções técnicas.'],
    [/serviço exposto e vulnerabilidade não são sinônimos/i, 'Serviço exposto é um serviço acessível pela rede; vulnerabilidade é uma fraqueza explorável. Um serviço pode estar exposto sem necessariamente ter uma vulnerabilidade conhecida.'],
    [/ferramenta.*testar autenticação em serviços de rede/i, 'Hydra. Ela é conhecida por testes autorizados de autenticação contra diferentes serviços de rede.'],
    [/tabela um switch usa para encaminhar quadros/i, 'A tabela MAC (também chamada CAM table), que relaciona endereços MAC às portas do switch.'],
    [/VLAN exige.*switch físico exclusivo/i, 'Não. VLAN é uma segmentação lógica e várias VLANs podem coexistir no mesmo switch físico, com portas de acesso e trunks.'],
    [/equipamento.*camada de enlace/i, 'O switch é o equipamento mais associado à camada de enlace (camada 2).'],
    [/camada determina caminhos entre redes/i, 'A camada de Rede (camada 3), onde roteadores escolhem caminhos e encaminham pacotes.'],
    [/camada trata controle de diálogo e sincronização/i, 'A camada de Sessão (camada 5).'],
    [/camada.*representação dos dados/i, 'A camada de Apresentação (camada 6).'],
    [/Quantas camadas.*modelo TCP\/IP|Quantas camadas.*TCP\/IP/i, 'Quatro camadas: Aplicação, Transporte, Internet e Acesso à Rede.'],
    [/Quantos bits.*IPv4/i, '32 bits.'],
    [/política não substitui um procedimento/i, 'Porque a política define diretrizes e responsabilidades; o procedimento descreve os passos concretos de execução.'],
    [/etapas.*risco, controle, medição e melhoria/i, 'Identificar e avaliar riscos → selecionar/tratar com controles → medir e monitorar resultados → corrigir e melhorar continuamente.'],
    [/cenário contendo ativo, ameaça, vulnerabilidade e impacto/i, 'Exemplo: servidor de banco de dados (ativo) com software desatualizado (vulnerabilidade), alvo de ransomware (ameaça), causando indisponibilidade e perda financeira (impacto).'],
    [/combinar criptografia simétrica e assimétrica/i, 'Usa-se a assimétrica para autenticação e proteção/negociação da chave; depois a simétrica cifra o volume principal de dados com muito mais eficiência.'],
    [/assinatura digital não é sinônimo de confidencialidade/i, 'Porque assinatura digital prova integridade/autenticidade, mas não esconde o conteúdo. Confidencialidade exige cifragem.'],
    [/vírus, worm e ransomware.*propagação/i, 'Vírus depende de hospedeiro/execução; worm se propaga autonomamente; ransomware cifra ou bloqueia recursos para extorsão.'],
    [/EDR e XDR.*escopo/i, 'EDR foca endpoints; XDR correlaciona telemetria de vários domínios, como endpoint, identidade, e-mail, nuvem e rede.'],
    [/DLP, CASB e WAF/i, 'DLP protege o fluxo de dados sensíveis; CASB aplica visibilidade/políticas sobre serviços em nuvem; WAF filtra tráfego HTTP de aplicações web.'],
    [/IOC e TTP/i, 'IOC é um indicador observável, como hash, IP ou domínio; TTP descreve o comportamento, técnica e modo de operação do adversário.'],
    [/tática e técnica no ATT&CK/i, 'Tática é o objetivo do adversário; técnica é a forma usada para atingir esse objetivo.'],
    [/The analyst reviewed the logs.*passive/i, '“The logs were reviewed by the analyst.”'],
    [/Define breach, patch and mitigation/i, 'Breach: violação/incidente de segurança; patch: correção de software; mitigation: medida que reduz probabilidade ou impacto de um risco.'],
    [/neutralidade de rede busca proteger/i, 'O tratamento isonômico do tráfego, evitando discriminação indevida de pacotes, ressalvadas as exceções legais.'],
    [/decisão de governança.*gestão/i, 'Governança: decidir prioridades e direcionar investimentos; gestão: planejar e executar as ações necessárias para cumprir esse direcionamento.'],
    [/ordem das operações/i, 'Parênteses primeiro; depois potências/raízes quando houver; em seguida multiplicação e divisão; por fim soma e subtração, respeitando a ordem da esquerda para a direita no mesmo nível.'],
    [/diferença entre perímetro e área/i, 'Perímetro mede o contorno; área mede a superfície interna.'],
    [/elemento coesivo referencial/i, 'Um pronome, por exemplo: “Maria chegou. Ela sentou.” — “ela” retoma “Maria”.'],
    [/elemento o pronome retoma/i, 'Ele retoma o referente indicado pelo contexto; identifique o substantivo ou ideia compatível em sentido, gênero e número.'],
    [/relação entre técnica e procedimento no ATT&CK/i, 'A técnica descreve como um objetivo é alcançado; o procedimento é a implementação concreta dessa técnica observada em um adversário ou campanha.'],
    [/Rogue AP e Evil Twin/i, 'Rogue AP é um ponto de acesso não autorizado; Evil Twin é um AP malicioso que imita uma rede legítima para enganar usuários.'],
    [/característica.*worm/i, 'Propagação autônoma, normalmente pela rede, sem depender de um arquivo hospedeiro.'],
    [/keylogger de screenlogger/i, 'Keylogger registra teclas digitadas; screenlogger captura o conteúdo exibido na tela.'],
    [/vulnerabilidade e exploit/i, 'Vulnerabilidade é a fraqueza; exploit é o código ou técnica usada para explorar essa fraqueza.'],
    [/diferença operacional.*IDS e IPS/i, 'IDS detecta e alerta; IPS fica em linha e pode bloquear automaticamente o tráfego malicioso.'],
    [/propriedade.*negar uma ação realizada/i, 'Irretratabilidade (ou não repúdio).'],
    [/identificador CVE fornece/i, 'Um identificador padronizado para referenciar uma vulnerabilidade publicamente divulgada; CVE não é, por si só, a severidade nem a correção.'],
    [/textos consolidados das normas/i, 'Porque o edital inclui alterações posteriores; o texto consolidado reúne a norma vigente com suas modificações e reduz o risco de estudar regra revogada ou incompleta.'],
    [/acrescentado aos dados durante o encapsulamento/i, 'São acrescentados cabeçalhos com informações de controle aos dados em cada etapa do encapsulamento.'],
    [/hub gera mais tráfego desnecessário/i, 'Porque o hub replica o que recebe em uma porta para todas as demais, mesmo quando só um destino precisa do quadro.'],
    [/sete camadas.*7 ao 1/i, 'Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace e Física.'],
    [/unidade de dados da camada física/i, 'Bits. A camada física transmite bits convertidos em sinais elétricos, ópticos ou de rádio.'],
    [/dois protocolos.*camada de transporte/i, 'TCP e UDP.'],
    [/sufixo \/24/i, 'Indica que os primeiros 24 bits do endereço pertencem ao prefixo de rede.'],
    [/IPv6.*substitui.*broadcast/i, 'Multicast substitui muitos usos de broadcast no IPv6.'],
    [/TCP.*orientado à conexão/i, 'Porque o TCP estabelece uma conexão lógica entre as pontas antes da troca principal de dados e controla entrega, ordem e retransmissão.'],
    [/terminal remoto seguro/i, 'SSH. Ele fornece acesso remoto por um canal protegido.'],
    [/quatro ações de hardening/i, 'Desativar serviços/portas desnecessários; revisar contas e privilégios; aplicar uma baseline segura; e manter patches, logs e monitoramento em dia.'],
    [/relógios sincronizados.*investigação/i, 'Porque permitem ordenar corretamente os eventos de fontes diferentes e reconstruir uma linha do tempo confiável.'],
    [/riscos.*automatizar bloqueios/i, 'Bloqueios automáticos podem gerar falsos positivos, interromper serviços legítimos e causar alto impacto; ações críticas devem ter critérios, validação e, quando necessário, aprovação humana.'],
    [/fase cada técnica.*SAST|fase cada técnica oferece/i, 'SAST gera mais valor cedo, sobre código/artefatos; DAST testa a aplicação em execução; IAST combina execução com instrumentação interna.'],
    [/ciclo joiner,? mover e leaver/i, 'Joiner: provisionar acesso na admissão; Mover: ajustar privilégios quando a função muda; Leaver: revogar acessos rapidamente no desligamento.'],
    [/retirar CPF.*anonimização/i, 'Porque outros dados e quase-identificadores ainda podem permitir reidentificar a pessoa.'],
    [/após substituir um conector/i, 'Confira se a relação lógica e o sentido original foram preservados, além de referência, concordância e formalidade.'],
    [/equivalência da condicional p\s*→\s*q/i, 'p → q é logicamente equivalente a ¬p ∨ q.'],
    [/aumento de 20%.*20 pontos percentuais/i, '20% é uma variação relativa sobre uma base; 20 pontos percentuais é a diferença absoluta entre duas taxas percentuais.'],
    [/uso defensivo.*risco ofensivo de IA/i, 'Uso defensivo: classificar alertas ou detectar anomalias. Risco ofensivo: apoiar phishing, fraude, evasão ou geração de conteúdo malicioso.'],
    [/agilidade.*ausência de planejamento/i, 'Porque métodos ágeis planejam em ciclos curtos e reajustam prioridades com feedback; eles reduzem planejamento rígido, não eliminam planejamento.'],
    [/o que significa responsabilidade compartilhada/i, 'O provedor protege a infraestrutura da nuvem; o cliente protege dados, identidades, permissões e configurações conforme o modelo de serviço.'],
    [/template inseguro.*reutilizado/i, 'O erro pode ser replicado automaticamente em muitos ambientes, propagando uma configuração vulnerável em escala.'],
    [/cinco funções.*ordem tradicional/i, 'Identify, Protect, Detect, Respond e Recover.'],
    [/edital cita uma edição anterior/i, 'Use a edição indicada pelo edital como referência para a prova; versões novas servem como atualização apenas quando não contradizem a versão cobrada.'],
    [/diferença central entre criptografia e esteganografia/i, 'Criptografia torna o conteúdo ilegível sem a chave; esteganografia tenta ocultar a própria existência da informação.'],
    [/conector de causa.*concessão/i, 'Exemplo de causa: “porque”. Exemplo de concessão: “embora”.'],
    [/forma popular.*conversa.*documento oficial/i, 'Porque a adequação linguística depende da situação: formas coloquiais podem ser naturais na conversa, enquanto documentos oficiais normalmente exigem norma-padrão e maior formalidade.'],
    [/repetição de palavras.*intertextual/i, 'Repetição apenas reutiliza palavras; intertextualidade retoma, cita, transforma ou alude a outro texto.'],
    [/Classifique “mais”.*não .* mais/i, '“Mais” é advérbio; nesse contexto, indica cessação/tempo: a ação deixou de ocorrer.'],
    [/encontro vocálico em “saúde”/i, 'Há hiato: sa-ú-de. As vogais “a” e “ú” ficam em sílabas diferentes.'],
    [/função de “a prova”.*resolveu a prova/i, '“A prova” é objeto direto do verbo “resolveu”.'],
    [/“Comandante, venha”.*“O comandante veio”/i, 'Em “Comandante, venha”, “Comandante” é vocativo; em “O comandante veio”, “O comandante” é sujeito.'],
    [/assistiu ___ aula/i, '“O candidato assistiu à aula.” No sentido de ver/presenciar, “assistir” rege a preposição “a”; com o artigo “a”, ocorre crase.'],
    [/“a fim de que”.*“desde que”/i, '“A fim de que” expressa finalidade; “desde que” normalmente expressa condição.'],
    [/“desde que”/i, 'Em regra, “desde que” expressa condição no contexto de conectores lógicos.'],
    [/Life jackets must be worn/i, 'O aviso determina obrigação: os coletes salva-vidas devem ser usados.'],
    [/She is owning the vessel/i, 'Porque “own” é normalmente um verbo de estado (stative) e, nesse sentido, não costuma ser usado no present continuous. O natural é “She owns the vessel”.'],
    [/If I had more time, I ___ study more/i, '“would”: If I had more time, I would study more. É o second conditional, usado para hipótese.'],
    [/I repaired it.*I had it repaired/i, '“I repaired it” significa que eu mesmo fiz o reparo; “I had it repaired” significa que providenciei para outra pessoa reparar.'],
    [/Authorized personnel only/i, 'Somente pessoas autorizadas podem entrar ou acessar a área.'],
    [/domínio de √\(x.?3\)/i, 'x ≥ 3, porque o radicando de uma raiz quadrada real deve ser maior ou igual a zero.'],
    [/Derive f\(x\)=sen\(2x\)/i, 'f′(x) = 2cos(2x), pela regra da cadeia.'],
    [/∭V ρ\(x,y,z\)dV/i, 'Representa a massa total no volume V quando ρ(x,y,z) é a densidade volumétrica.'],
    [/informação adicional.*solução geral.*solução particular/i, 'Uma condição inicial ou condição de contorno que permita determinar as constantes da solução geral.'],
    [/determinante não nulo.*sistema quadrado/i, 'Indica que a matriz é invertível e o sistema Ax=b possui solução única.'],
    [/dígrafo e encontro consonantal/i, 'Dígrafo: duas letras representam um único fonema; encontro consonantal: dois ou mais fonemas consonantais aparecem próximos, sem formar um único som.'],
    [/três etapas.*justificar um acento/i, '1) identificar a sílaba tônica; 2) observar a terminação; 3) verificar a regra específica aplicável, como hiato ou ditongo.'],
    [/que relação.*“embora”/i, 'Concessão.'],
    [/antes da decisão sobre o uso de crase/i, 'Verifique primeiro a regência: é preciso saber se o termo anterior exige a preposição “a”.'],
    [/indicativo e subjuntivo/i, 'O indicativo tende a apresentar fatos ou certezas; o subjuntivo expressa hipótese, desejo, dúvida ou possibilidade.'],
    [/main idea without translating every word/i, 'Use the title, topic sentences, repeated ideas and paragraph relationships to identify the central message; do not translate word by word.'],
    [/interpretation of “this” or “they”/i, 'The surrounding context and a compatible antecedent in meaning and number should guide the interpretation.'],
  ];

  const STOPWORDS = new Set('a o as os um uma uns umas de da do das dos e ou em no na nos nas por para com sem que qual quais como quando onde porque se sua seu suas seus entre mais menos central explique consultar'.split(' '));
  const normalize = (value) => clean(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  const stems = (value) => normalize(value).split(/\s+/).filter((token) => token.length > 2 && !STOPWORDS.has(token)).map((token) => token.replace(/(mente|coes|cao|es|s)$/,'')).filter(Boolean);
  const firstSentence = (value) => {
    const text = clean(value);
    if (!text) return '';
    const match = text.match(/^(.+?[.!?])(?:\s|$)/);
    return clean(match ? match[1] : text);
  };
  const joinPoints = (items) => items.map((item) => clean(item).replace(/[.]$/,'')).filter(Boolean).join('; ') + '.';
  const numberAsked = (front) => {
    const q = normalize(front);
    const words = { dois:2, duas:2, tres:3, quatro:4, cinco:5, seis:6, sete:7 };
    for (const [word, count] of Object.entries(words)) if (q.includes(` ${word} `) || q.startsWith(`${word} `) || q.endsWith(` ${word}`)) return count;
    const numeric = q.match(/\b([2-7])\b/);
    return numeric ? Number(numeric[1]) : 0;
  };
  const overlapScore = (question, candidate) => {
    const q = new Set(stems(question));
    const c = new Set(stems(candidate));
    let score = 0;
    q.forEach((token) => { if (c.has(token)) score += 2; });
    return score;
  };

  function directAnswer(front, back, details, topic, isPriority = false, example = '') {
    const q = clean(front);
    if (AUDITED_DIRECT_ANSWERS[q]) return AUDITED_DIRECT_ANSWERS[q];
    if (EXACT_DIRECT_ANSWERS[q]) return EXACT_DIRECT_ANSWERS[q];
    const b = clean(back);
    const list = Array.isArray(details) ? details.map(clean).filter(Boolean) : [];
    for (const [pattern, answer] of DIRECT_RULES) if (pattern.test(q)) return answer;
    if (isPriority) return firstSentence(b) || b;

    if (/núcleo.+apresente um exemplo/i.test(q)) {
      const ex = clean(example) || list[list.length - 1] || '';
      return `${b}${ex ? ` Exemplo: ${ex}` : ''}`.trim();
    }
    if (/(dê|de|cite) um exemplo/i.test(normalize(q)) && clean(example)) {
      return clean(example);
    }

    const asked = numberAsked(q);
    if (asked && /(quais|cite|recite|liste|etapas|ações|acoes|funções|funcoes|protocolos|camadas)/i.test(q) && list.length >= Math.min(asked, 2)) {
      return joinPoints(list.slice(0, Math.min(asked, list.length)));
    }

    if (/(diferença|diferencie|compare)/i.test(q)) {
      const acronyms = [...new Set((q.match(/\b[A-ZÁÉÍÓÚÇ0-9]{2,}\b/g) || []).filter((item) => item.length > 1))];
      if (acronyms.length >= 2) {
        const selected = [];
        acronyms.forEach((term) => {
          const hit = list.find((item) => new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\b`, 'i').test(item));
          if (hit && !selected.includes(hit)) selected.push(hit);
        });
        if (selected.length >= 2) return joinPoints(selected);
      }
      const backScore = overlapScore(q, b);
      if (backScore >= 4 || /;|enquanto|ao passo que|diferente/i.test(b)) return b;
      const ranked = list.map((text, index) => ({ text, index, score: overlapScore(q, text) + (index < 3 ? 1 : 0) }))
        .sort((a,b) => b.score - a.score || a.index - b.index).slice(0, Math.min(3, list.length));
      if (ranked.length) return joinPoints(ranked.map((item) => item.text));
    }

    if (!/^(qual|quais|como|quando|onde|por que|porque|o que|que |explique|cite|dê|de |recite|liste|escreva|descreva|complete|classifique|identifique|negue|what|why|how|which|when|where|give|explain|complete)/i.test(normalize(q))) {
      const negative = list.find((item) => /\bnão\b/i.test(item));
      if (negative) return `Não. ${negative.replace(/^Não\s*/i,'')}`;
    }

    const candidates = [
      ...list.map((text, index) => ({ text, kind:'detail', index })),
      ...b.split(/(?<=[.!?])\s+/).filter(Boolean).map((text, index) => ({ text, kind:'back', index })),
    ].map((item) => ({ ...item, score: overlapScore(q, item.text) + (item.kind === 'detail' ? 1 : 0) - item.index * 0.05 }));
    candidates.sort((a,b) => b.score - a.score || a.index - b.index);
    if (candidates[0] && candidates[0].score >= 2.5) return clean(candidates[0].text);
    return firstSentence(b) || list[0] || clean(topic);
  }

  function buildCourse(course) {
    if (!course || !Array.isArray(course.lessons) || !Array.isArray(course.units)) return [];
    const units = new Map(course.units.map((unit) => [unit.id, unit]));

    const lessons = new Map(course.lessons.map((lesson) => [lesson.id, lesson]));
    const baseCards = course.lessons.map((lesson) => {
      const unit = units.get(lesson.unitId) || {};
      const rawFront = clean(lesson.recall) || `Qual é a ideia central de “${clean(lesson.title)}”?`;
      const front = FRONT_OVERRIDES[rawFront] || rawFront;
      const back = clean(lesson.summary) || clean(lesson.objective);
      const details = Array.isArray(lesson.points)
        ? lesson.points.map(clean).filter(Boolean).slice(0, 8)
        : [];

      return {
        id: `${course.id}-fc-${lesson.id}`,
        courseId: course.id,
        lessonId: lesson.id,
        unitId: lesson.unitId,
        discipline: clean(lesson.discipline || unit.discipline || unit.title || 'Conteúdo'),
        topic: clean(lesson.title),
        front,
        back,
        directAnswer: directAnswer(front, back, details, lesson.title, false, lesson.example),
        details,
        tags: Array.isArray(lesson.tags) ? lesson.tags.map(clean).filter(Boolean) : [],
        difficulty: clean(lesson.difficulty || 'Básico'),
        source: 'microlição'
      };
    });

    const prioritySource = window.VERSA_PRIORITY_FLASHCARDS?.cardsByCourse?.[course.id] || [];
    const priorityCards = prioritySource.map((raw) => {
      const lesson = lessons.get(raw.lessonId);
      if (!lesson) return null;
      const unit = units.get(lesson.unitId) || {};
      return {
        id: clean(raw.id),
        courseId: course.id,
        lessonId: lesson.id,
        unitId: lesson.unitId,
        discipline: clean(lesson.discipline || unit.discipline || unit.title || 'Conteúdo'),
        topic: clean(lesson.title),
        front: clean(raw.front),
        back: clean(raw.back),
        directAnswer: directAnswer(clean(raw.front), clean(raw.back), Array.isArray(raw.details) ? raw.details : [], lesson.title, true),
        details: Array.isArray(raw.details) ? raw.details.map(clean).filter(Boolean) : [],
        tags: [...new Set([...(Array.isArray(lesson.tags) ? lesson.tags : []), 'alta incidência'].map(clean).filter(Boolean))],
        difficulty: 'Estratégico',
        source: 'alta-incidencia',
        priority: raw.priority === 'high' ? 'high' : '',
        incidence: clean(raw.incidence),
        evidence: clean(window.VERSA_PRIORITY_FLASHCARDS?.basisByCourse?.[course.id]?.evidence)
      };
    }).filter(Boolean);

    return [...baseCards, ...priorityCards];
  }

  window.VERSA_FLASHCARDS = Object.freeze({
    version: '1.9.1',
    auditVersion: 'semantic-625-v1',
    curatedAnswerCount: Object.keys(EXACT_DIRECT_ANSWERS).length + Object.keys(AUDITED_DIRECT_ANSWERS).length,
    buildCourse
  });
})();
