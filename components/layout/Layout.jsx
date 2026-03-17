import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import DemoModal from '@/components/modals/DemoModal';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <DemoModal />
    </>
  );
}
