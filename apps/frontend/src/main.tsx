import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Modal from 'react-modal'
import App from './app/app';
import { UserProvider } from './app/context/UserContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Modal.setAppElement('#root');
root.render(
  <GoogleOAuthProvider clientId="57133514135-p0p1h51fp8ra6dn2hmom7kd6t6pjqt0v.apps.googleusercontent.com">
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>
  </GoogleOAuthProvider>
);
