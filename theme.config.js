export default {
  projectLink: 'https://github.com/Velocimeter-finance/',
  docsRepositoryBase: 'https://github.com/Velocimeter-finance/docs/blob/master',
  titleSuffix: ' – Velocimeter',
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_stork: false,
  darkMode: true,
  font: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Velocimeter.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img
        src='/Velocimeter.svg'
        alt='Velocimeter'
        style={{ height: '30px', padding: '0 5px' }}
      />
      <span className='mr-2 font-extrabold md:inline'>Velocimeter</span>
      <span className='text-gray-600 font-normal hidden md:inline'>
        The liquidity base-layer of the Optimism ecosystem.
      </span>
    </>
  ),
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Velocimeter: The liquidity base-layer of the Optimism ecosystem.'
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@VelocimeterFi' />
      <meta
        name='twitter:title'
        content='Velocimeter: The liquidity base-layer of the Optimism ecosystem.'
      />
      <meta
        name='twitter:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Optimism L2 blockchain.'
      />
      <meta
        name='twitter:image'
        content='https://Velocimeter-docs.pages.dev/Velocimeter_banner.jpg'
      />

      <meta
        property='og:title'
        content='Velocimeter: The liquidity base-layer of the Optimism ecosystem.'
      />
      <meta
        property='og:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Optimism L2 blockchain.'
      />
      <meta
        property='og:image'
        content='https://Velocimeter-docs.pages.dev/Velocimeter_banner.jpg'
      />

      <meta name='apple-mobile-web-app-title' content='Velocimeter' />
      <link rel='stylesheet' href='/fonts.css' />
    </>
  )
}
