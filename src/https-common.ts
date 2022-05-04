import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default axios.create({
  baseURL: 'https://api.cognitive.microsofttranslator.com/',
  headers: {
    'Content-type': 'application/json',
    'Ocp-Apim-Subscription-Key': '*****',
    'Ocp-Apim-Subscription-Region': 'japaneast',
    // 'X-ClientTraceId': uuidv4().toString()
  }
});
