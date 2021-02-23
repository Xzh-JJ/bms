import Server from './server'

const SERVICE = process.env.VUE_APP_BASE_API

export default {
  loginIn (params) {
    return Server.post(`${SERVICE}/loginIn`, params)
  },
}