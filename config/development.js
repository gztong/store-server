import path from 'path';

export default {
    app: {
        host: '0.0.0.0',
        port: 8000,
        jwtKey: 'WY4Zzn2gellZhrxIEU1O8hY08g/GGp4/VU+OLXAnDO0=',
        defaultCurrency: 'EUR'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'localhost:8000/uploads'
    },
    emails: {
        from: {
            name: 'Nicistore.com',
            email: 'vendas@nicistore.com'
        }
    },
    storefront: {
        label: 'nicistore.com',
        baseUrl: 'http://localhost:3000',
        defaultLocale: 'pt'
    },
    switchPayments: {
        enabled: true,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    mailgun: {
        domain:'sandbox5885ad35118940249d7782398b2e68c3.mailgun.org',
        apiKey: 'key-32f4ba82ba40a28be4153e7864868f39'
    }
}
