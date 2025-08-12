import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            })

            const initialProps = await Document.getInitialProps(ctx);
            
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='pt-br'>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                    <link rel="preload" href="/fonts/at_aero-regular.ttf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/at_aero-bold.ttf" as="font" crossOrigin="" />
                </Head>
                <body id="modal-root">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}