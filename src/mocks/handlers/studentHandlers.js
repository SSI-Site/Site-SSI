import { http, HttpResponse } from 'msw';
import {
  getStudentById,
  getStudentGiftsResponse,
  getStudentPresencesResponse,
  registerPresenceByToken,
} from './_db';

const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL || '';

export const studentHandlers = [
  http.get(`${BASE_URL}/student/:id`, ({ params }) => {
    const student = getStudentById(params.id);

    if (!student) {
      return HttpResponse.json({ error: 'Estudante nao encontrado' }, { status: 404 });
    }

    return HttpResponse.json(student);
  }),

  http.get(`${BASE_URL}/student/:id/presences`, ({ params }) => {
    const data = getStudentPresencesResponse(params.id);

    if (!data) {
      return HttpResponse.json({ error: 'Estudante nao encontrado' }, { status: 404 });
    }

    return HttpResponse.json(data);
  }),

  http.post(`${BASE_URL}/student/:id/presence`, async ({ params, request }) => {
    const body = await request.json();
    const result = registerPresenceByToken(params.id, body?.token_code);

    return HttpResponse.json(result.body, { status: result.status });
  }),

  http.get(`${BASE_URL}/student/:id/gifts`, ({ params }) => {
    const data = getStudentGiftsResponse(params.id);

    if (!data) {
      return HttpResponse.json({ error: 'Estudante nao encontrado' }, { status: 404 });
    }

    return HttpResponse.json(data);
  }),
];
