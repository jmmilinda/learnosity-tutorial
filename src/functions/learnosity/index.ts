import { handlerPath } from '@libs/handler-resolver';

const learnosityLambdas = {
  "checkHealth": {
    handler: `${handlerPath(__dirname)}/checkHealth.handler`,
    events: [
      {
        http: {
          method: 'get',
          path: 'learnosity/health'
        }
      }
    ]
  },
  "initQuestionApi": {
    handler: `${handlerPath(__dirname)}/initQuestionApi.handler`,
    events: [
      {
        http: {
          method: 'post',
          path: 'learnosity/initQuestion'
        }
      }
    ]
  },
  "initDataApi": {
    handler: `${handlerPath(__dirname)}/initDataApi.handler`,
    events: [
      {
        http: {
          method: 'post',
          path: 'learnosity/initData'
        }
      }
    ]
  },
  "createActivities": {
    handler: `${handlerPath(__dirname)}/createActivities.handler`,
    events: [
      {
        http: {
          method: 'post',
          path: 'learnosity/activities'
        }
      }
    ]
  },
  "scoringQuestion": {
    handler: `${handlerPath(__dirname)}/scoringQuestion.handler`,
    events: [
      {
        http: {
          method: 'post',
          path: 'learnosity/scoring'
        }
      }
    ]
  }
};
export default learnosityLambdas;
