import { formatJSONResponse } from '@libs/api-gateway';
import ApiErrorResponse from '@libs/ApiErrorRespose';
import { middyfy } from '@libs/lambda';
import LearnosityApiService from '@services/learnosityApiService';
import {StatusCodes} from 'http-status-codes';

const learnosityServiceApi = new LearnosityApiService();

const createActivities = async () => {

  const response = await learnosityServiceApi.createActivities();

  console.log(response);

  if(!response){
    throw new ApiErrorResponse('Invalid Response', StatusCodes.BAD_REQUEST);
  }

  return formatJSONResponse({
    message: response,
    status: StatusCodes.CREATED
  });
};

export const handler = middyfy(createActivities);
