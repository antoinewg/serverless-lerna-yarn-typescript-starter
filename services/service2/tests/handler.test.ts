import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

import { main } from '../handler';

test('main', async () => {
  const response = await main(
    'event' as unknown as APIGatewayProxyEvent,
    'context' as unknown as Context,
    () => null
  ) as APIGatewayProxyResult

  expect(response.statusCode).toEqual(200);
  expect(response.body).toBe("Hello World! Via service2.");
});
