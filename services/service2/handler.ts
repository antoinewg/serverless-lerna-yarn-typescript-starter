import type { APIGatewayProxyHandler } from 'aws-lambda'

export const main: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: `Hello World! Via service2.`,
  }
}
