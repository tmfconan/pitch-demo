import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPitchAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PitchAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pitchID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPitchAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PitchAnswer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pitchID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PitchAnswer = LazyLoading extends LazyLoadingDisabled ? EagerPitchAnswer : LazyPitchAnswer

export declare const PitchAnswer: (new (init: ModelInit<PitchAnswer>) => PitchAnswer) & {
  copyOf(source: PitchAnswer, mutator: (draft: MutableModel<PitchAnswer>) => MutableModel<PitchAnswer> | void): PitchAnswer;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly PitchAnswers?: (PitchAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly PitchAnswers: AsyncCollection<PitchAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPitch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pitch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly answer_one?: string | null;
  readonly answer_two?: string | null;
  readonly answer_three?: string | null;
  readonly answer_four?: string | null;
  readonly answer_five?: string | null;
  readonly go_live?: string | null;
  readonly author?: string | null;
  readonly PitchAnswers?: (PitchAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPitch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pitch, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly answer_one?: string | null;
  readonly answer_two?: string | null;
  readonly answer_three?: string | null;
  readonly answer_four?: string | null;
  readonly answer_five?: string | null;
  readonly go_live?: string | null;
  readonly author?: string | null;
  readonly PitchAnswers: AsyncCollection<PitchAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pitch = LazyLoading extends LazyLoadingDisabled ? EagerPitch : LazyPitch

export declare const Pitch: (new (init: ModelInit<Pitch>) => Pitch) & {
  copyOf(source: Pitch, mutator: (draft: MutableModel<Pitch>) => MutableModel<Pitch> | void): Pitch;
}