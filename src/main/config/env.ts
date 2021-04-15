import * as dotenv from 'dotenv'

dotenv.config()

/* eslint-disable */
export default {
  httpBodyLimit: process.env.HTTP_BODY_LIMIT || '10kb',
  mode: process.env.NODE_ENV || "development",
  apiVersion: process.env.API_VERSION || '/v1',
  httpPort: process.env.HTTP_PORT || 3001,
  localhostIntegrationUrl: process.env.LOCALHOST_INTEGRATION_URL || 'http://localhost:3003',
  walletApiIntegrationUrl: process.env.WALLET_API_INTEGRATION_URL || 'https://api.dev.phipagamentos.com/v1/wallet',
  customerApiIntegrationUrl: process.env.CUSTOMER_API_INTEGRATION_URL || ''
}
