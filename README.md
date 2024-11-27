# Projeto Mobile BeTalent

Este é um projeto desenvolvido como parte do Teste Técnico Mobile BeTalent. A aplicação foi criada utilizando o Expo, com React Native, para oferecer uma experiência de pesquisa e visualização de dados de funcionários.

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar a API simulada](#como-rodar-a-api-simulada)
- [Como rodar a aplicação](#como-rodar-a-aplicação)
  - [Clonar o repositório](#1-clone-o-repositório)
  - [Navegar para a pasta do projeto](#2-navegar-para-a-pasta-do-projeto)
  - [Instalar as dependências](#3-instalar-as-dependências)
  - [Configurar a URL da API](#4-configurar-a-url-da-api)
  - [Rodar o aplicativo](#5-rodar-o-aplicativo)
  - [Testar no dispositivo](#6-testar-no-dispositivo)
- [Agradecimentos e Contribuição](#agradecimentos-e-contribuição)

## Sobre o projeto

O projeto tem como objetivo fornecer um ambiente onde é possível buscar funcionários cadastrados, por **nome**, **telefone** ou **cargo**. A pesquisa é flexível e permite que o sistema entenda diferentes variações, como:

- Letras minúsculas e maiúsculas.
- Acentos e caracteres especiais, ou a ausência deles.

Para melhorar a experiência do usuário e reduzir a poluição visual, foi implementado o método **Accordion** para ocultar informações, mostrando apenas os dados relevantes quando solicitado.

## Tecnologias utilizadas

- **React Native** com **Expo**
- **TypeScript** para tipagem
- **Styled-components** para estilização
- **Node.js** para gerenciar dependências e executar scripts
- **Git** para controle de versão e clonagem do repositório

## Pré-requisitos

Antes de rodar a aplicação, é necessário ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [json-server](https://github.com/typicode/json-server)

> **Nota** Para o correto funcionamento, recomenda-se iniciar a API simulada antes de inicializar a aplicação

## Como rodar a API simulada

O projeto depende de uma API simulada para obter os dados dos funcionários. Para rodar a API localmente, siga os passos abaixo:

### 1. Instale o pacote json-server:

Se você ainda não tem o json-server instalado, execute o seguinte comando para instalá-lo globalmente:

```bash
npm install -g json-server
```

### 2. Clone o repositório da API:

```bash
git clone https://github.com/BeMobile/desafio-mobile.git
```

### 3. Acesse a pasta do projeto da API:

```bash
cd desafio-mobile
```

### 4. Execute o json-server para simular a API:

```bash
npx json-server database.json
```

Após executar o comando acima, o servidor será iniciado e a API estará disponível localmente.

## Como rodar a aplicação

### 1. Clone o repositório:

```bash
git clone https://github.com/henrique-griepp/be-talent-mobile
```

### 2. Navegar para a pasta do projeto

Depois de clonar o repositório, entre na pasta do projeto:

```bash
cd be-talent-mobile
```

### 3. Instalar as dependências

Instale as dependências do projeto usando o npm:

```bash
npm install
```

### 4. Configurar a URL da API

Antes de rodar a aplicação, é necessário configurar a **url** no arquivo **index**. Siga os passos abaixo:

Localize o arquivo de configuração, que pode ser encontrado em:

```bash
src\components\Table\index.tsx
```

> **Nota:** O uso de localhost pode não funcionar no React Native devido à forma como ele lida com conexões entre o dispositivo/emulador e o servidor local. Recomenda-se utilizar o endereço IP da máquina na rede local (por exemplo, http://192.168.x.x:3000/employees)

### 5. Rodar o aplicativo

Para rodar o aplicativo localmente, execute o comando abaixo:

```bash
npm run start
```

Isso abrirá o Expo Developer Tools no seu terminal. Você verá um QR Code na página.

### 6. Testar no dispositivo

Para testar a aplicação em um dispositivo físico, é necessário instalar o aplicativo **Expo Go**. Você pode baixá-lo nas lojas oficiais:

- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS**: [App Store](https://apps.apple.com/app/expo-go/id982107779)

Com o Expo Go instalado no seu dispositivo, use o aplicativo para escanear o QR Code exibido no navegador. Isso carregará a aplicação diretamente no seu dispositivo.

Caso prefira, você também pode testar a aplicação no emulador ou simulador de sua escolha, como o Android Studio ou o Xcode (para iOS).

> **Nota:** Certifique-se de que seu dispositivo e a máquina de desenvolvimento estejam conectados à mesma rede Wi-Fi para que o **Expo Go** consiga acessar o servidor da aplicação.

## Agradecimentos e Contribuição

Caso tenha alguma dúvida ou queira contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Agradecemos por explorar este repositório e esperamos que este projeto seja útil como base para futuras implementações.
