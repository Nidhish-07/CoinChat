import "../styles/globals.css";
import { ChatContext, ChatProvider } from "../context";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChatProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChatProvider>
    </div>
  );
}

export default MyApp;
