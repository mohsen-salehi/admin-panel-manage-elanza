let appEnv = process.env.REACT_APP_ENV
const config = {
    development: {
        base_url: 'http://api.griffin.local/',
        paginate: {
             preventCountPage : 2,
             nextCountPage : 2
        }
    }, test: {
        base_url: 'https://api.elanzacom.ir/',
        paginate: {
             preventCountPage : 2,
             nextCountPage : 2
        }
    }, production: {
        base_url: 'https://api.elanza.com/',
        paginate: {
             preventCountPage : 2,
             nextCountPage : 2
        }
    }
}


Object.freeze(config)

export default config[appEnv]