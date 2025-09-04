# 📌 JJK DLE Frontend

📖 Descripción

Aplicacion construida con **Vite**, **React** y **TypeScript**, que permite medir tus conocimientos sobre la franquicia de Gege Akutami _Jujutsu Kaisen_.  
Tienes distintos modos de poder probar tu conocimiento.

# 🚀 Tecnologías

REACT

Vite

TypeScript

TailwindCSS

[ESLint + Prettier] para estilo y calidad de código

# ⚙️ Instalación

## Clonar repositorio

git clone [https://github.com/tomasosorio18/JJKDLEfront](https://github.com/tomasosorio18/JJKDLEfront)
cd

## Instalar dependencias

npm install

## Compilar TypeScript

npm run build

## Iniciar en desarrollo

npm run dev

## Iniciar en producción

npm start

# 📂 Estructura del Proyecto

📦 src
┣ 📂 api
┃ ┣ characterClue.ts
┃ ┣ gameStart.ts
┃ ┣ gameStartVoice.ts
┃ ┣ getAllCharacters.ts
┃ ┣ getPreviousRecord.ts
┃ ┣ getSecretChar.ts
┃ ┣ guess.ts
┃ ┣ guessPicture.ts
┃ ┗ guessVoice.ts
┣ 📂 components
┃ ┣ 📂 DLE
┃ ┃ ┣ Clue.tsx
┃ ┃ ┗ DLE.tsx
┃ ┣ 📂 Picture
┃ ┃ ┣ Picture.tsx
┃ ┃ ┗ PictureGuesser.tsx
┃ ┣ 📂 Voice
┃ ┃ ┣ VoiceGuesser.tsx
┃ ┃ ┗ Voz.tsx
┃ ┣ FlameButton.tsx
┃ ┣ Header.tsx
┃ ┣ Menu.tsx
┃ ┣ Spinner.tsx
┃ ┣ Winner.tsx
┃ ┗ Buscador.tsx
┣ 📂 context
┃ ┗ startContext.tsx
┣ 📂 hooks
┃ ┣ useCharacters.tsx
┃ ┣ useHandleGuesser.tsx
┃ ┣ usePreviousRecord.tsx
┃ ┗ useScrollDown.tsx
┣ 📂 layouts
┃ ┗ db.ts
┣ 📂 types
┃ ┗ layout.tsx
┣ 📂 shared
┃ ┣ 📂 icon
┃ ┗ 📂 images
┣ 📂 views
┃ ┣ DLEView.ts
┃ ┣ MainMenuView.ts
┃ ┣ PictureGuesserView.ts
┃ ┣ VoiceGuesserView.ts
┃ ┗ WelcomeView.ts
┣ index.css
┣ main.tsx
┣ router.tsx
┗ vite-env.d.ts

## 🛠️ Scripts Disponibles

npm run dev # Iniciar en desarrollo con ts-node-dev
npm run build # Compilar TypeScript a JavaScript
npm start # Iniciar en producción
npm run lint # Ejecutar ESLint
npm run format # Formatear con Prettier

## 🧪 Testing

npm run test

# 📄 Licencia

Tomás Alexis Osorio Salinas - [Github](https://github.com/tomasosorio18) - [LinkedIn](https://www.linkedin.com/in/tomas-alexis-osorio-salinas-504b88198/)
