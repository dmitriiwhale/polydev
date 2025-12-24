// CLOB_CONFIG это дефолты
import dotenv from 'dotenv'; 

export const CLOB_CONFIG = {
    host: process.env.CLOB_HOST || 'https://clob.polymarket.com',
    chainId: parseInt(process.env.CLOB_CHAIN_ID || '137'),
    signatureType: parseInt(process.env.CLOB_SIGNATURE_TYPE || '0'),
    defaultTickSize: process.env.DEFAULT_TICK_SIZE || '0.001',
    defaultNegRisk: process.env.DEFAULT_NEG_RISK === 'true' || false,
    defaultOrderType: process.env.DEFAULT_ORDER_TYPE || 'GTC'


  };
  

  