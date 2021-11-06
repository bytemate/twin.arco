const isProd = process.env.NODE_ENV === 'production'

const site = isProd ? 'https://windicss.org' : 'http://localhost:3000'

export const metaData = {
  title: 'Twin.Arco',
  description: 'Easily use Arco Theme in tailwindCSS and windiCSS',
  site,
  image: `${site}/assets/og-image.png`,
}
