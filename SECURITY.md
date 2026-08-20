# Política de segurança

## Versão suportada

A versão mantida é a **1.8.x**. Versões anteriores não contêm todas as proteções e validações descritas na auditoria atual.

## Como relatar uma vulnerabilidade

Comunique o responsável pelo repositório por um canal privado. Não publique credenciais, dados pessoais, prova de conceito explorável ou detalhes que permitam ataque em uma issue pública. Inclua, quando possível:

- versão e endereço afetados;
- descrição do comportamento;
- passos mínimos para reprodução sem dados reais;
- impacto esperado;
- sugestão de correção.

Se um segredo já tiver sido publicado, removê-lo do arquivo não é suficiente: revogue ou rotacione a credencial imediatamente e depois limpe o histórico conforme o procedimento do provedor.

## Regras de manutenção

- executar `npm run test:static`; quando `jsdom` estiver disponível, executar também `npm test`; executar `npm audit --package-lock-only` antes de cada publicação;
- revisar mudanças em `index.html`, `app.js`, `adaptive-engine.js`, `security-bootstrap.js` e na política CSP;
- não adicionar analytics, formulários, login, API, iframe ou script externo sem nova avaliação de risco e privacidade;
- manter imagens externas restritas a `i.ytimg.com` e aplicar `no-referrer` às thumbnails;
- nunca armazenar segredos no repositório;
- habilitar 2FA, HTTPS obrigatório, alertas do Dependabot e varredura de segredos no GitHub;
- verificar o SHA-256 do pacote recebido antes da publicação.


## v1.8.3 — Cobertura Visual Completa

- Adiciona `dataprev-visuals-extra.js` como arquivo estático local, sem rede, APIs ou execução dinâmica.
- Mantém CSP restritiva e política `no-referrer`.
- O catálogo complementar contém apenas dados de apresentação derivados das microlições existentes; não coleta nem persiste cliques.
- Validação global confirma 405/405 visuais no runtime.

## v1.8.2 — Visual Learning Multitrilhas

A expansão visual utiliza exclusivamente dados estáticos locais em `dataprev-visuals.js` e `course-visuals.js`, renderizados pelas rotinas existentes do `app.js`. Não foram adicionados iframes, bibliotecas de terceiros, APIs, analytics ou novos hosts externos. Todo texto do catálogo continua passando pelo escape de saída da aplicação. A auditoria estática também verifica que os dois catálogos carregam antes do `app.js`.

## v1.8.1 — Visual Learning DATAPREV

Os demonstrativos visuais são renderizados exclusivamente com dados estáticos locais em `dataprev-visuals.js` e HTML/CSS. Não foram adicionadas bibliotecas, iframes, APIs, pixels, analytics ou requisições externas. Os textos do catálogo passam pela função de escape da aplicação antes de serem inseridos na interface.

## v1.8.4 — Flashcards com resposta direta

A alteração é local, sem novas dependências, APIs, iframes ou permissões de rede. As respostas diretas são derivadas do catálogo estático e continuam escapadas pelo renderer antes de entrar no HTML.


## v1.8.5 — Cache e auditoria dos flashcards

Os assets locais passaram a usar a chave de cache `?v=185`, evitando reutilização acidental do JavaScript da v1.8.4 após atualização. A política CSP e a arquitetura sem backend permanecem inalteradas.
