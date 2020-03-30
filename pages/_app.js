import '../styles.css';
import { StaticKitProvider } from '@statickit/react';
function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="8ba6c00df93f">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}
export default App;
