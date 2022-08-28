import { HEALTH_STATUS } from '@libs/constant';
import Learnosity from 'learnosity-sdk-nodejs';
import { CONSUMER_KEY, CONSUMER_DOMAIN, CONSUMER_SECRET, LEARNOSITY_BASE_URL_URL, API_VERSION } from '@libs/constant';
import { v4 as uuid } from 'uuid';
import { questionRequest, dataRequest, dataScoreRequest } from '../models/request';
import FormData from 'form-data';
import axios from 'axios';

export default class LearnosityApiService {
  private learnositySdk: any;
  private securityParams: any;

  private initSecurityParams(): object {
    return {
      'consumer_key': CONSUMER_KEY,
      'domain': CONSUMER_DOMAIN,
      'user_id': uuid()
    };
  }

  constructor() {
    this.learnositySdk = new Learnosity();
    this.securityParams = this.initSecurityParams();
  }

  public checkHealth(): string {
    return HEALTH_STATUS;
  }

  public initQuestionApi(): object {
    const request = this.learnositySdk.init('questions', this.securityParams, CONSUMER_SECRET, questionRequest);
    return request;
  }

  public initDataApi(): object {
    const request = this.learnositySdk.init('data', this.securityParams, CONSUMER_SECRET, dataRequest, 'get');
    return request;
  }

  public async createActivities(): Promise<object> {
    const apiRequest = this.learnositySdk.init('data', this.securityParams, CONSUMER_SECRET, dataRequest, 'get');
    const formData = new FormData();
    formData.append("security", apiRequest.security);
    formData.append("request", apiRequest.request);
    formData.append("action", apiRequest.action);

    const response = await axios.post(`${LEARNOSITY_BASE_URL_URL}/${API_VERSION}/itembank/activities`, formData,
      {headers: formData.getHeaders()});

    return response.data;
  }

  public async getScoreValueByQuestion(): Promise<object> {
    const apiRequest = this.learnositySdk.init('data', this.securityParams, CONSUMER_SECRET, dataScoreRequest, 'get');
    const formData = new FormData();
    formData.append("security", apiRequest.security);
    formData.append("request", apiRequest.request);
    formData.append("action", apiRequest.action);

    const response = await axios.post(`${LEARNOSITY_BASE_URL_URL}/${API_VERSION}/scoring`, formData,
      {headers: formData.getHeaders()});

    return response.data;
  }

}
