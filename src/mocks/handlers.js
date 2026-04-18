import { speakersHandlers } from './handlers/speakersHandlers';
import { talksHandlers } from './handlers/talksHandlers';
import { authHandlers } from './handlers/authHandlers';
import { studentHandlers } from './handlers/studentHandlers';
import { giftsHandlers } from './handlers/giftsHandlers';

export const handlers = [
  ...speakersHandlers,
  ...talksHandlers,
  ...authHandlers,
  ...studentHandlers,
  ...giftsHandlers,
];