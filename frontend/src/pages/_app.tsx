import { AppProps } from "next/app";
import "bulma/css/bulma.css";
import "app/models/common/loader/loader.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { SessionProvider } from "next-auth/react";
import { UserInfo } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  const { session, ...restProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <UserInfo />
      <Component {...restProps} />
    </SessionProvider>
  );
}

export default MyApp;
