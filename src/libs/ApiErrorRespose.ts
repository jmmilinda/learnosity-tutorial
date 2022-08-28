import { integer } from "aws-sdk/clients/cloudfront";

 export default class ApiErrorResponse extends Error {
  constructor(message:string, status:integer){
    super(message, status);
  }
 }
