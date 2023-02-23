export default {
  project: {
    link: "https://github.com/Velocimeter/",
  },
  docsRepositoryBase: "https://github.com/Velocimeter/docs/blob/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Velocimeter",
    };
  },
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © Velocimeter.`,
  },
  logo: (
    <div style={{ display: "flex", gap: "8px" }}>
      <img src='/velocimeter.png' alt='Velocimeter' height={240} width={240} />
      <span style={{ alignSelf: "end" }}>Liquidity Labs</span>
    </div>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@VelocimeterFi' />
      <meta
        name='twitter:title'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta
        name='twitter:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain.'
      />
      <meta
        name='twitter:image'
        content='https://docs.velocimeter.xyz/dome6.jpg'
      />
      <meta
        property='og:title'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta
        property='og:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain.'
      />
      <meta
        property='og:image'
        content='https://Velocimeter-docs.pages.dev/Velocimeter_banner.jpg'
      />
      <meta name='apple-mobile-web-app-title' content='Velocimeter' />
    </>
  ),
};
