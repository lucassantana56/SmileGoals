# Smile Goals (React Native)

## Sobre o Projeto
Este projeto é um MVP do que seria melhor solução para as pessoas com ajuda dos serviços da smile façam a grande esperada viagem dos sonhos. 
Por ser um MVP todos as telas são estáticas e não temos nenhuma ligação com serviços para o armazenamento de dados. 

## Feito Com

Abaixo segue o que foi utilizado na criação deste template:

React Native - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
Redux - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
Redux Saga - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
React Navigation - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
React Native Gesture Handler - API declarativa que permite a manipulação de toques e gestos no React Native;
Axios - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
Prop Types - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
Reactotron - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
reactotron-react-native - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
reactotron-redux - Plugin que permite acompanhar todas as Actions que são disparadas na aplicação, mostrando toda a estrutura da Action;
reactotron-redux-saga - Plugin que permite você percorrer uma saga na sua aplicação, poderá ver a saga e os efeitos que ela desencadeia ao longo do caminho;
Babel - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
babel-eslint - Este pacote é um wrapper do parser do Babel para o ESLint;
babel-plugin-root-import - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
Eslint - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
eslint-config-airbnb - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
eslint-plugin-import - Plugin do ESLint com regras para ajudar na validação de imports;
eslint-plugin-jsx-a11y - Verificador estático AST das regras do a11y em elementos JSX;
eslint-plugin-react - Regras de linting do ESLint específicas do React;
eslint-plugin-react-native - Regras de linting do ESLint específicas do React Native;
eslint-import-resolver-babel-plugin-root-import - Um resolver da lib babel-root-import para a lib eslint-plugin-import;
EditorConfig - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

##Pré-requisitos
Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

Ambiente React Native (Android/iOS)
- [Node.js v10+](https://nodejs.org/) + [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://www.npmjs.com/package/react-native-cli) (`npm -g install react-native-cli`)
- Xcode Command Line tools (`xcode-select --install`)
- [CocoaPods](https://cocoapods.org/) (`gem install cocoapods`)
- [xcpretty](https://github.com/supermarin/xcpretty) (`gem install xcpretty`)
- [Bash v4](http://tldp.org/LDP/abs/html/bashver4.html) (default on GNU/Linux, `brew install bash` on macOS)

## Passos

```sh
# instalar dependências 
yarn install

# iniciar o projeto
yarn start
escolher iniciar no emulador (android/ios) ou escanear o QR code a aplicação do expo https://play.google.com/store/apps/details?id=host.exp.exponent
