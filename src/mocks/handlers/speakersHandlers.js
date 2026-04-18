import { http, HttpResponse } from 'msw'
import { speakers } from './_db'

const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL || '';

export const speakersHandlers = [
  http.get(`${BASE_URL}/speakers/`, () => {
    return HttpResponse.json(speakers);
  }),

  http.get(`${BASE_URL}/admin/speakers/:id`, ({ params }) => {
    const { id } = params;
    const speaker = speakers.find((item) => String(item.id) === String(id));

    if (!speaker) {
      return HttpResponse.json({ error: 'Palestrante não encontrado' }, { status: 404 });
    }

    return HttpResponse.json(speaker);
  }),
];