// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PitchAnswer, User, Pitch } = initSchema(schema);

export {
  PitchAnswer,
  User,
  Pitch
};