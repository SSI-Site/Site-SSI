import { AuthProvider } from '../contexts/AuthContext';
import Layout from '../src/patterns/base/Layout';
import Head from 'next/head';
// barra de carregamento
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => { NProgress.start() });
Router.events.on('routeChangeComplete', () => { NProgress.done() });
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {

    return (
        <AuthProvider>
            <Layout>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp;