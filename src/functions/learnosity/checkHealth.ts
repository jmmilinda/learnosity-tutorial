import { formatJSONResponse } from '@libs/api-gateway';
import ApiErrorResponse from '@libs/ApiErrorRespose';
import { middyfy } from '@libs/lambda';
import LearnosityApiService from '@services/learnosityApiService';
import {StatusCodes} from 'http-status-codes';

const learnosityServiceApi = new LearnosityApiService();

const checkHealth = async () => {

  const response = learnosityServiceApi.checkHealth();

  if(!response){
    throw new ApiErrorResponse('Invalid Response', StatusCodes.BAD_REQUEST);
  }

  return formatJSONResponse({
    message: response,
    status: StatusCodes.OK
  });
};

export const handler = middyfy(checkHealth);
