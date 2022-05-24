export default {
  projectLink: 'https://github.com/velodrome-finance/',
  docsRepositoryBase: 'https://github.com/velodrome-finance/docs/blob/master',
  titleSuffix: ' – Velodrome Finance',
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_stork: false,
  darkMode: true,
  font: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Velodrome Finance.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img src="/velodrome.svg" alt="Velodrome Finance" style={{height: '30px', padding: '0 5px'}} />
      <span className="mr-2 font-extrabold md:inline">Velodrome Finance</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The liquidity base-layer of the Optimism ecosystem.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Velodrome Finance: The liquidity base-layer of the Optimism ecosystem." />
      <meta name="theme-color" content="#ffffff" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@VelodromeFi" />
      <meta name="twitter:title" content="Velodrome Finance: The liquidity base-layer of the Optimism ecosystem." />
      <meta name="twitter:description" content="Velodrome Finance is an automated market maker (AMM or simply, decentralized exchange) on Optimism L2 blockchain." />
      <meta name="twitter:image" content="https://velodrome-docs.pages.dev/velodrome_banner.jpg" />

      <meta property="og:title" content="Velodrome Finance: The liquidity base-layer of the Optimism ecosystem." />
      <meta property="og:description" content="Velodrome Finance is an automated market maker (AMM or simply, decentralized exchange) on Optimism L2 blockchain." />
      <meta property="og:image" content="https://velodrome-docs.pages.dev/velodrome_banner.jpg" />

      <meta name="apple-mobile-web-app-title" content="Velodrome Finance" />
      <link rel="stylesheet" href="/fonts.css" />
    </>
  )
}
