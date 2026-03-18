import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col min-h-[calc(100vh-72px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
