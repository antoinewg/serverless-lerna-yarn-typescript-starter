import type { APIGatewayProxyHandler } from "aws-lambda";
import sample from "sample";
import lib from "../../libs";

export const main: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${lib()}.`,
  };
}
