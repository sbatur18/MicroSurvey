export enum QuestionType {
  SINGLE_SELECTION = 'SINGLE_SELECTION',
  MULTIPLE_SELECTION = 'MULTIPLE_SELECTION',
  SHORT_ANSWER = 'SHORT_ANSWER',
  LONG_ANSWER = 'LONG_ANSWER',
}

/**
 * Survey question data type with fields:
 * type, title, selections, and whether it's required.
 */
export type Question = {
  /** The type of the question */
  questionType: QuestionType;
  /** The title of the question */
  questionTitle: string;
  /** Options of the question for single and multiple selection */
  selections: Array<string>;
  /** Whether the question is required */
  required: boolean;
};

/** createSurvey method */
export type CreateSurveyRequest = {
  questions: Array<Question>;
};

export type CreateSurveyResponse = {
  surveyId: string;
};

/** getSurveyForUser method */
export type GetSurveyForUserRequest = {
  userId: string;
};

export type GetSurveyForUserResponse = {
  surveyId: string | null;
  questions: Array<Question> | null;
};

/** saveResponse method */
export type SaveResponseRequest = {
  surveyId: string;
  userId: string;
  answers: Array<string>;
};

export type SaveResponseResponse = {
  message: string;
};

/** assignSurveyToUsers method */
export type AssignSurveyToUsersRequest = {
  surveyId: string;
  users: Array<Array<string>>;
};

export type AssignSurveyToUsersResponse = {
  message: string;
};