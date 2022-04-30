import type { APIGatewayProxyHandler } from 'aws-lambda'
import sample from 'sample'
import lib from '../../libs'

export const main: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${lib()}.`,
  }
}
