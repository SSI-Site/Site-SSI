# Como contribuir

Antes de colocar a mão no código, precisamos garantir que o nosso quadro Kanban fique organizado. Siga este passo a passo para pegar sua primeira tarefa:

- [ ] Escolha uma task da coluna **Ready** no nosso GitHub Projects.
- [ ] Na página da Task, vá na **coluna da direita** e, em **Assignees**, referencie a task a você (caso estejam fazendo em dupla, adicione todos os envolvidos).
  > ⚠️ **Não está conseguindo se atribuir ou mover o card?** > Isso acontece se você ainda não foi adicionado como Colaborador no repositório ou no GitHub Projects. Mande uma mensagem no grupo pedindo para a diretoria liberar seu acesso (e não esqueça de aceitar o convite que chega no seu e-mail)!
- [ ] Na propriedade **Start Date**, atribua a data do dia em que você está começando a Task.
- [ ] Na propriedade **End Date**, atribua a data correspondente a duas semanas a partir do seu *Start Date*.
- [ ] Em **Development** (também na coluna da direita), crie uma branch para o seu código. Use um nome curto e no padrão **kebab-case** (tudo minúsculo, separado por hífen) ou use a opção sugeridade pelo próprio github. 
  * *Exemplos:* `feat/botoes-home`, `fix/espacamento-footer`, `refactor/contador`.
- [ ] Volte ao painel Kanban do GitHub Projects e arraste o card da Task para a coluna **In Progress**.


# Pull Request (PR)

Após terminar suas alterações e testar o site localmente, é hora de enviar o código para revisão abrindo um *Pull Request*:

1. **Atenção ao destino:** Certifique-se de que o seu PR está apontando para a branch **`develop`** (e NÃO para a `main`). Nós juntamos as tasks na `develop` primeiro para economizar o limite de deploys mensais do servidor!
2. **Link com a Task:** Caso você não tenha criado a branch direto pelo botão do GitHub Projects, não se esqueça de linkar a Issue na aba **Development** do seu Pull Request. Assim, quando aprovarmos o seu código, a task será movida para "Concluída" automaticamente.

# Correção e Code Review

Fiquem de olho no GitHub! A diretoria técnica vai revisar o seu Pull Request. 

Se houver algo para ajustar (como uma medida em `px` que deveria ser `rem`), uma **Request Changes** (Requisição de Alteração) será enviada apontando a linha do código que precisa de carinho. Você só precisa arrumar na sua máquina e fazer um novo `git push` na mesma branch.

Se estiver tudo perfeito e não existir nenhuma dependência pendente, daremos o *merge* do seu código na branch `develop`! 🚀

# Padrão de Commits (Conventional Commits)

Para manter o histórico do nosso repositório organizado, profissional e fácil de ler, nós utilizamos o padrão de mercado chamado **Conventional Commits**. Todo commit deve explicar claramente a intenção da sua alteração.

**A estrutura básica é:** `tipo: descrição curta e direta`

### Tipos de Commit Permitidos:
* **`feat:`** (Feature) Adição de uma nova funcionalidade ou componente.
  * *Exemplo:* `feat: adiciona componente de contagem regressiva`
* **`fix:`** Correção de um bug ou erro no código existente.
  * *Exemplo:* `fix: corrige alinhamento da logo no mobile`
* **`style:`** Alterações puramente visuais (CSS/Styled Components) ou formatação de código que não afetam a lógica.
  * *Exemplo:* `style: atualiza cores do background da seção sobre`
* **`refactor:`** Mudanças no código que não alteram a funcionalidade final, mas melhoram a estrutura ou performance.
  * *Exemplo:* `refactor: move lógica de slugs para arquivo utilitário`
* **`docs:`** Alterações apenas em documentação (arquivos `.md`, `README`, etc).
  * *Exemplo:* `docs: atualiza tutorial de instalação do yarn`
* **`chore:`** Tarefas de manutenção do projeto, atualização de pacotes ou configurações (não afeta o código final do site).
  * *Exemplo:* `chore: atualiza dependências do next e react`

> 💡 **Dica de Ouro:** Escreva a descrição sempre no tempo verbal presente ou imperativo, como se estivesse dando uma ordem ao sistema. Use `adiciona` em vez de `adicionado` ou `adicionando`.