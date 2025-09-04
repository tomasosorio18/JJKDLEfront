import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { WelcomeView } from './views/WelcomeView';
import { MainMenuView } from './views/MainMenuView';
import { Layout } from './layouts/layout';
import { DleView } from './views/DLEView';
import { VoiceGuesserView } from './views/VoiceGuesserView';
import { StartProvider } from './context/startContext';
import { PictureGuesserView } from './views/PictureGuesserView';

const protectedChildren = [
  {
    path: 'inicio',
    element: <MainMenuView />
  },
  {
    path: 'dle',
    element: <DleView />
  },
   {
    path: 'voice',
    element: <VoiceGuesserView />
  },
  {
    path: 'picture',
    element: <PictureGuesserView />
  }

]
const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeView />
  },
  {
    path: '/app',
    element: (
      <StartProvider>
        <Layout />
      </StartProvider>
      
    ),
    children: protectedChildren
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
