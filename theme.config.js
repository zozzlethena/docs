export default {
  projectLink: 'https://github.com/velodrome-finance/docs/',
  docsRepositoryBase: 'https://github.com/velodrome-finance/docs/blob/master',
  titleSuffix: ' – Velodrome Finance',
  nextLinks: true,
  prevLinks: true,
  search: false,
  unstable_stork: false,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Velodrome Finance.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img src="/velodrome.svg" alt="Velodrome Finance" style={{height: '30px', padding: '0 5px'}} />
      <span className="mr-2 font-extrabold md:inline">Velodrome Finance</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Next-gen AMM on Optimism. Built on the revolutionary vision of Solidly.
      </span>
    </>
  ),
  head: (
    <>
    </>
  )
}
