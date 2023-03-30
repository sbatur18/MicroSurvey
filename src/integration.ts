import axios from 'axios';

import {GetSurveyForUserRequest, GetSurveyForUserResponse, Question, SaveResponseRequest, SaveResponseResponse} from './sba-survey-api-def';

const serverUrl = "https://survey-api-dev.corp.getcentro.com/jsonrpc";

// Basically the input (request) format of calling all our API functions
interface JsonRpcRequest<ReqT> {
    jsonrpc: string;
    method: string;
    params: ReqT;
    id: number;
  }
  
// The output format
interface JsonRpcResponse<ResT> {
    jsonrpc: string;
    id: number;
    result: ResT;
    error?: {
      code: number;
      message: string;
      data?: any;
    };
  }

export async function getQuestions(userID: string): Promise<{surveyId: string | null, questions: Array<Question> | null}> {
  const request: JsonRpcRequest<GetSurveyForUserRequest> = {
    jsonrpc: '2.0',
    method: 'getSurveyForUserHandler', // This is the name of the function you want to use in the API
    params: {'userId': userID}, // This is the input to the function, has to match the type getSurveyForUserRequest
    id: 1,
  };
  const response = await axios.post<JsonRpcResponse<GetSurveyForUserResponse>>(serverUrl, request);

  if (response.data.error){
    console.log(response.data.error.message);
    return {surveyId: null, questions: null};
  } else {
    return {surveyId: response.data.result.surveyId, questions: response.data.result.questions};
  }
}


export async function saveQuestions(surveyID:string, userID:string, answers:Array<string>): Promise<String> {
  const request: JsonRpcRequest<SaveResponseRequest> = {
      jsonrpc: '2.0',
      method: 'saveResponseHandler', 
      params: {'surveyId': surveyID, 'userId': userID, 'answers': answers}, 
      id: 1,
    };
  const response = await axios.post<JsonRpcResponse<SaveResponseResponse>>(serverUrl, request);

  if (response.data.error){
    console.log(response.data.error.message);
    return "Error";
  } else {
    return response.data.result.message;
  }
}