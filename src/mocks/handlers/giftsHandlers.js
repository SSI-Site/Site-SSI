import { http, HttpResponse } from 'msw';
import { gifts } from './_db';

const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL || '';

export const giftsHandlers = [
  http.get(`${BASE_URL}/gifts/`, () => {
    return HttpResponse.json(gifts);
  }),

  http.get(`${BASE_URL}/gifts`, () => {
    return HttpResponse.json(gifts);
  }),
];
