# Site-SSI-2022

## Para rodar localmente

É preciso ter o **node.js** e o **npm** instalados na máquina e executar os comandos:

* 'npm install' ou 'yarn' para instalar as dependências
* 'npm run dev' ou 'yarn dev' para subir a aplicação no **localhost:3000**

Para executar o projeto por completo localmente, é preciso incluir as variáveis de ambiente para a configuração do Google Firebase.

> NEXT_PUBLIC_FIREBASE_API_KEY=VALOR <br>
> NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=VALOR <br>
> NEXT_PUBLIC_FIREBASE_PROJECT_ID=VALOR <br>
> NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=VALOR <br>
> NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=VALOR <br>
> NEXT_PUBLIC_FIREBASE_APP_ID=VALOR <br>
> NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=VALOR <br>

Basta criar um arquivo .env com as variáveis acima, substituindo os valores pelos relacionados a sua aplicação no firebase.

## Obs da base do projeto:

Criada utilizando **Next.js** + **Styled Components**

1. Dentro da pasta 'src':  <br />
  1.1. A pasta 'components' conterá os componentes reutilizáveis do site.  <br />
  1.2. A pasta 'infra' conterá arquivos relacionados a infraestrutura e SEO.  <br />
  1.3. A pasta 'patterns' terá elementos reutilizáveis que sejam uma combinação de outros componentes ou próximo disso.  <br />
  1.4. Em 'patterns/base' estarão os elementos presentes em todas as páginas do site (Footer, NavBar e Composição do Layout).  <br />  
2. A aplicação foi planejada para ser construída na abordagem mobile-first, seguindo os breakpoints exemplificados no estilo global. 
3. Todas as imagens devem ser posicionadas na pasta 'public/images'. 
4. A pasta service conterá a definição dos serviços que podem vir a ser chamados nas páginas do site. 
5. O componente 'Meta' deve estar presente em todas as páginas do site. 

## Sobre o deploy

A *build* de produção estará sempre ligada a branch **main** e será feita automaticamente pelo **Netlify** sempre que esta receber atualizações, além disso, sempre que uma *pull request* for aberta visando a branch main, um *deploy-preview* ligado aquela PR será feito e o *link* ficará disponível nela. 

Da branch **main**: https://ssi-2022.netlify.app/ <br />
Estrutura do link de *preview* em **PRs**: https://deploy-preview-<ID_da_PR>--ssi-2022.netlify.app/

Caso perceba-se que atualizações na *branch* **main** não refletiram no *deploy* ou o *link* de *preview* não tenha sido gerado, provavelmente algo causou uma falha na *build* do Netlify. Recomenda-se que seja executado o comando "npm run build" ou "yarn build" localmente para verificar se o problema se repete ao mesmo tempo que verifica-se os logs da *build* que falhou na plataforma. 

