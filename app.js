
const connect = require('connect')
const serveStatic = require('serve-static')
const vhost = require('vhost')

const DOMAIN_1 =  process.env.DOMAIN_1 || 'davoroe.com'
const FILES_1 = process.env.FILES_1 || 'public'

const DOMAIN_2 = process.env.DOMAIN_2 || 'vidroe.com'
const FILES_2 = process.env.FILES_2 || 'vidroe/public'

const app = connect()

const setUpSite = (domain, staticFiles) => {
  const staticApp = connect()
  staticApp.use(serveStatic(staticFiles))
  app.use(vhost(domain, staticApp))
  app.use(vhost(domain + '/' + '*', staticApp))
}

setUpSite(DOMAIN_1, FILES_1)
setUpSite(DOMAIN_2, FILES_2)

module.exports = app