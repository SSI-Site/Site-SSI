import { http, HttpResponse } from 'msw';
import { createMockJwt, mockStudent } from './_db';

const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL || '';

export const authHandlers = [
  http.post(`${BASE_URL}/student/login`, async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({
      id: mockStudent.id,
      access: createMockJwt(),
      refresh: `mock-refresh-${Date.now()}`,
      name: body?.name || mockStudent.name,
      email: body?.email || mockStudent.email,
    });
  }),

  http.post(`${BASE_URL}/api/token/refresh`, () => {
    return HttpResponse.json({
      access: createMockJwt(),
    });
  }),
];
