# comandos e infos
- node é o ambiente de execução para executar JS fora do navegador. Conta com a engine (v8), módulos, ferramentas e funcionalidades para criar aplicações backend.

## atualizar nodejs com nvm (node versions manager)
- nvm install --lts
- nvm alias default node

## npm
- npm i: instala todas dependencias presentes no package.json
- npm add -D {pacote}: instala pacote especifico como devDepency
- npm add {pacote}: instala pacote especifico como dependency
- npm uninstall {pacote}
- npm cache clean --force
- pra instalar pacotes de registries privados (codeartifact), é necessário o arquivo .npmrc com os devidos apontamentos. Pode ser necessário ter um package-lock.json. Instalar todas dependencias normais antes e depois essas especificas.


## npx
- ferramenta que acompanha o NPM com finalidade de executar algum pacote temporariamente, sem poluir o ambiente global