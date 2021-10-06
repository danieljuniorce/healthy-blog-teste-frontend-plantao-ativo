# Healthy Blog
> A aplicação será construída utilizando o framework React Native para aplicativos de Smartphone híbrida Android/IOS.

>Blog pessoal sobre sua rotina saudável, prática de exercício e dificuldades encontradas no caminho tratando como um diário de sua saúde pessoal  para motivar e ver sua trajetória durante a busca da sua melhor saúde.

## Libs/Ferramentas
1. React Native
2. TypeScript
3. Axios
4. Styled Components
5. Redux
6. LottieFile
7. React Navigation
8. React Native Async Storage
9. Redux, React Redux e React Persist

## Instrução de Instalação
```lua
-- faça o clone dos arquivos.
git clone https://github.com/danieljuniorce/healthy-blog-teste-frontend-plantao-ativo

-- no diretório da aplicação utilizando o prompt de comando.
cd healthy-blog-teste-frontend-plantao-ativo

-- Instale todas as depedências.
yarn install ou npm install

-- após instalar todas as depedências da aplicação.
-- Execute o comando para testa a aplicação com Android.

-- Versão debug
npx react-native run-android
yarn android
npm run android

-- Versão release
-- É necessário gerar a keystroe da versão release

-- Entre no diretório
cd android/app

--Execute no terminal o comando abaixo, insirar as informações que serão pedidas no processo.
keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

--Após gerar a keystore, insirar a senha que foi colocada no processo no arquivo
android/gradle.properties

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

-- Depois de tudo, execute os comandos abaixo na pasta raiz do projeto.
npx react-native run-android --variant=release
yarn release
npm run release

# Obs: todo processo com cabo USB conectado no dispositivo ou utilizando o emulador-avds.

-- Caso queira utilizar o novo formato que a Google disponibilizou para gerar a versão de produção.
-- Entre na pasta
cd android
./gradlew blundeRelease

-- Testes foram feito utilizando o sistema Windows 11 Insider, Android SDK 29, Gradlew 7.0 e Smartphone de teste Samsung J4 Core.

-- Deploy do APK
<https://drive.google.com/file/d/1g6K1QvEJkQuumkntGLiCoKdM7Ys5zoME/view?usp=sharing>

```
## Erros
> Gradle incompatible daemon version 7.0
```lua
cd android
./gradlew wrapper

./gladew clean

-- ao concluir verificar ser a mensagem final 'BUILD SUCCESS'
