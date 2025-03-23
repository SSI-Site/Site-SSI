# Site da Semana de Sistemas de Informação (SSI)

O Site da SSI é uma aplicação web projetada para promover a **Semana de Sistemas de Informação (SSI)**, um evento anual realizado na **Escola de Artes, Ciências e Humanidades da Universidade de São Paulo (EACH-USP)**. Voltado para estudantes, profissionais e entusiastas de tecnologia, o site reúne informações detalhadas sobre **palestras**, **workshops**, e oportunidades de **networking**.

Além de exibir a programação completa de cada dia, a plataforma oferece funcionalidades interativas para **registro e consulta de presenças**, permitindo que os participantes monitorem sua participação. O site também destaca as **parcerias** que apoiam o evento e apresenta os **membros da Comissão Organizadora**, facilitando a integração e a visibilidade entre participantes, parceiros e organizadores.

## Executando o projeto localmente

Para rodar o projeto localmente, certifique-se de ter o **Node.js** e o **Yarn** instalados. Siga os seguintes passos:

* Execute `yarn` para instalar as dependências.
* Execute `yarn dev` para iniciar a aplicação no **localhost:3000**.

#### Variáveis de ambiente
Para que o projeto funcione corretamente com todas as funcionalidades, é necessário configurar o Firebase. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis de ambiente, substituindo `VALOR` pelas suas credenciais do Firebase:
```
NEXT_PUBLIC_FIREBASE_API_KEY=VALOR
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=VALOR
NEXT_PUBLIC_FIREBASE_PROJECT_ID=VALOR
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=VALOR
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=VALOR
NEXT_PUBLIC_FIREBASE_APP_ID=VALOR
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=VALOR
```

## Estrutura do projeto:

Este projeto foi desenvolvido com **Next.js** + **Styled Components**. Abaixo está a estrutura das pastas principais dentro de `/src`: 

1. `/components`: componentes reutilizáveis do site. 
2. `/infra`: arquivos relacionados à infraestrutura e SEO. 
3. `/patterns`: conjuntos de componentes reutilizáveis que combinam múltiplos componentes. 
    - `/patterns/base`: elementos presentes em todas as páginas (Footer, NavBar, Layout). 
4. `/service`: definições de serviços que podem ser chamados nas páginas. 
5. `/public/images`: diretório onde devem ser armazenadas todas as imagens do projeto. 
6. `Meta`: componente responsável por configurações de SEO e meta tags. Deve estar presente em todas as páginas.

### Abordagem de design
- O design do projeto segue a metodologia *mobile-first*, garantindo uma boa experiência em dispositivos móveis antes de adaptar para telas maiores.
- Os *breakpoints* globais definidos no projeto são utilizados para garantir consistência no comportamento responsivo.

## Deploy

O deploy de produção é automaticamente gerado pelo **Netlify** a partir da branch **main**. Além disso, sempre que uma *pull request* (PR) for criada para a branch **main**, o Netlify gerará um *deploy-preview* específico para aquela PR.

Links de produção e pré-visualização:
- **Produção** (branch **main**): https://ssi-atual.netlify.app/
- **Preview** em PRs: `https://deploy-preview-<ID_da_PR>--ssi-atual.netlify.app/`

### Solução de problemas com o deploy

Se as atualizações na branch **main** não refletirem no site ou se um *preview* de PR não for gerado, pode ter ocorrido uma falha na *build* do **Netlify**. Para resolver o problema:
1. Execute `yarn build` localmente para verificar se o erro é reproduzido.
2. Verifique os logs da *build* no **Netlify** para identificar a causa do erro.

Um teste
