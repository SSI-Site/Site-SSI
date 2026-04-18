import { http, HttpResponse } from 'msw'
import { talks, toTalkResponse } from './_db'

const BASE_URL = process.env.NEXT_PUBLIC_SAPHIRA_URL || '';

export const talksHandlers = [
	http.get(`${BASE_URL}/talks/`, () => {
		return HttpResponse.json(talks.map((talk) => toTalkResponse(talk)));
	}),

	http.get(`${BASE_URL}/talks`, () => {
		return HttpResponse.json(talks.map((talk) => toTalkResponse(talk)));
	}),
];