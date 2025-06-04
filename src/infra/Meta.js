import Head from 'next/head';

// assets
import img_src from '../../public/images/logos/preview_logo.jpg';

const Meta = ({
    title = 'SSI 2025',
    keywords = 'Semana, semana, Sistemas, sistemas, Informação, Informacao, informação, informacao, USP, usp, EACH, each, SI, si, SSI, ssi, Evento, evento, palestras, tecnologia, Universidade, universidade, universitário, universitario',
    description = 'A Semana de Sistemas de Informação 2025 ocorrerá ao longo dos dias 07 a 11 de Outubro! Acesse para saber mais sobre o evento e sua programação!'
}) => {
    
    return (
        <Head>
            <meta name="google-site-verification" content="bLHZPxjVMwDGRMJCNaurph4fsBskPoBeqd7CG7WJyZU" />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name="theme-color" content="#151023" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />

            <meta property="og:url" content="https://www.semanadesi.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img_src} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="semanadesi.com" />
            <meta property="twitter:url" content="https://www.semanadesi.com/" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img_src}></meta>

            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />

            <title>{title}</title>
        </Head>
    )
}

export default Meta;