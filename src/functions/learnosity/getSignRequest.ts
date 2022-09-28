import { formatJSONResponse } from '@libs/api-gateway';
import ApiErrorResponse from '@libs/ApiErrorRespose';
import { middyfy } from '@libs/lambda';
import LearnosityApiService from '@services/learnosityApiService';
import {StatusCodes} from 'http-status-codes';

const learnosityServiceApi = new LearnosityApiService();

const getSignRequest = async (event: any) => {
  const {apiName, security, consumer_secret, request} = event.body;
  const response = learnosityServiceApi.getSignRequest(apiName, security, consumer_secret, request);

  if(!response){
    throw new ApiErrorResponse('Invalid Response', StatusCodes.BAD_REQUEST);
  }

  return formatJSONResponse({...response});
};

export const handler = middyfy(getSignRequest);
