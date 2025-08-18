import Head from 'next/head';

// assets
import img_src from '../../public/images/logos/banner_meta_tag.png';

const Meta = ({
    title = 'Semana de Sistemas de Informação',
    keywords = 'semana de sistemas de informação, SSI 2025, evento tecnologia, evento acadêmico tecnologia, inovação, tecnologia da informação, estudantes de TI, palestras tecnologia, evento universitário, semana de si, EACH USP',
    description = 'Participe da Semana de Sistemas de Informação 2025 na USP! Confira a programação completa de palestras com especialistas em tecnologia, organizada pela comissão da SSI. Acesse o site oficial para detalhes sobre o evento, palestrantes e muito mais!'
}) => {
    
    return (
        <Head>
            <meta name="google-site-verification" content="bLHZPxjVMwDGRMJCNaurph4fsBskPoBeqd7CG7WJyZU" />
            <meta name='viewport' content='width=wdevice-width, initial-scale=1' />
            <meta name="theme-color" content="#151023" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />

            <meta property="og:url" content="https://semanadesi.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={img_src} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="semanadesi.com" />
            <meta property="twitter:url" content="https://semanadesi.com/" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img_src}></meta>

            <meta charSet='utf-8' />
            <link rel='icon' type = 'image/x-icon' href='/favicon.ico' />

            <title>{title}</title>
        </Head>
    )
}

export default Meta;