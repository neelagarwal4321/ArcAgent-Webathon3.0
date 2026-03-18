import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { DemoModalProvider } from "@/context/DemoModalContext";
import Layout from "@/components/layout/Layout";
import DemoModal from "@/components/modals/DemoModal";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DemoModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <DemoModal />
      </DemoModalProvider>
    </SessionProvider>
  );
}
