import "@/styles/globals.css";
import Header from "@/components/Header";  // Header/index.jsx
import Footer from "@/components/Footer";  // Footer/index.jsx

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
