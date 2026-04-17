import { speakersMock } from '../data/speakersData';
import { sponsorsMock } from '../data/sponsorsData';
import { talksMock } from '../data/talksData';
import { talksSpeakersMock } from '../data/talksSpeakersData';

const clone = (value) => JSON.parse(JSON.stringify(value));

const normalizeDateTime = (value) =>
  String(value || '')
    .replace(' ', 'T')
    .replace(/\+\d{2}:?\d{0,2}$/, '');

export const speakers = clone(speakersMock);
export const sponsors = clone(sponsorsMock);

export const talks = clone(talksMock).map((talk) => ({
  ...talk,
  start_time: normalizeDateTime(talk.start_time),
  end_time: normalizeDateTime(talk.end_time),
  sponsor_id: talk.sponsor_id ?? null,
}));

export const talkSpeakers = clone(talksSpeakersMock).map((item) => ({
  id: Number(item.id),
  talk_id: Number(item.talk_id),
  speaker_id: String(item.speaker_id),
}));

export const mockStudent = {
  id: 'student-1',
  name: 'Usuario Mock SSI',
  email: 'mock@ssi.dev',
  usp_number: '1122334',
  code: 'MOCK25',
};

export const gifts = [
  { id: '1', name: 'Camiseta SSI', min_presence: 3, total_amount: 80 },
  { id: '2', name: 'Caneca SSI', min_presence: 5, total_amount: 60 },
  { id: '3', name: 'Adesivos SSI', min_presence: 1, total_amount: 400 },
];

export const studentGifts = [
  { id: 'sg-1', student_id: mockStudent.id, gift_id: '3', received: true },
  { id: 'sg-2', student_id: mockStudent.id, gift_id: '1', received: false },
];

const validPresenceTokens = [
  { code: 'ABCDE', talk_id: 29, online: true },
  { code: 'FGHIJ', talk_id: 33, online: false },
  { code: 'KLMNO', talk_id: 34, online: true },
];

export const presences = [
  { id: 'p-1', student_id: mockStudent.id, talk_id: 29, online: true },
];

export const findTalk = (talkId) => talks.find((talk) => Number(talk.id) === Number(talkId));

export const getTalkSpeakerIds = (talkId) =>
  talkSpeakers
    .filter((item) => Number(item.talk_id) === Number(talkId))
    .map((item) => item.speaker_id);

export const toTalkResponse = (talk) => {
  const sponsor = sponsors.find((item) => Number(item.id) === Number(talk.sponsor_id)) || null;

  return {
    ...talk,
    sponsor,
    speakers: getTalkSpeakerIds(talk.id),
  };
};

export const getStudentById = (studentId) =>
  String(studentId) === String(mockStudent.id) ? mockStudent : null;

export const getStudentPresencesResponse = (studentId) => {
  if (!getStudentById(studentId)) {
    return null;
  }

  return presences
    .filter((item) => String(item.student_id) === String(studentId))
    .map((item) => {
      const talk = findTalk(item.talk_id);

      if (!talk) {
        return null;
      }

      return {
        id: item.id,
        talk_id: talk.id,
        talk_title: talk.title,
        start_time: talk.start_time,
        end_time: talk.end_time,
        online: Boolean(item.online),
      };
    })
    .filter(Boolean);
};

export const registerPresenceByToken = (studentId, tokenCode) => {
  const student = getStudentById(studentId);

  if (!student) {
    return { status: 404, body: { error: 'Estudante nao encontrado' } };
  }

  const token = validPresenceTokens.find((item) => item.code === String(tokenCode || '').toUpperCase());

  if (!token) {
    return { status: 400, body: { error: 'Token invalido' } };
  }

  const hasPresence = presences.some(
    (item) => String(item.student_id) === String(studentId) && Number(item.talk_id) === Number(token.talk_id)
  );

  if (hasPresence) {
    return { status: 400, body: { error: 'Presenca ja registrada para esta palestra' } };
  }

  const newPresence = {
    id: `p-${presences.length + 1}`,
    student_id: studentId,
    talk_id: token.talk_id,
    online: token.online,
  };

  presences.push(newPresence);
  return { status: 201, body: newPresence };
};

export const getStudentGiftsResponse = (studentId) => {
  if (!getStudentById(studentId)) {
    return null;
  }

  return studentGifts
    .filter((item) => String(item.student_id) === String(studentId))
    .map((item) => ({
      id: item.id,
      received: item.received,
      gift: gifts.find((gift) => String(gift.id) === String(item.gift_id)) || null,
    }));
};

const base64Encode = (value) => btoa(unescape(encodeURIComponent(value)));

export const createMockJwt = (expiresInSeconds = 3600) => {
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const header = base64Encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = base64Encode(
    JSON.stringify({
      sub: mockStudent.id,
      exp: nowInSeconds + expiresInSeconds,
    })
  );

  return `${header}.${payload}.mock-signature`;
};
