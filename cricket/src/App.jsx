import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/utilities/WhatsAppButton'; // Adjust the path as needed
import CallButton from './components/utilities/CallButton'; // Adjust the path as needed

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Add the buttons here */}
      <WhatsAppButton />
      <CallButton />
    </>
  );
};

export default App;
