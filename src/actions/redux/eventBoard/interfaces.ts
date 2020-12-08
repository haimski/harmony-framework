import { Action } from 'redux';

export interface EventBoardState {
	exampleData: string;
}

export enum TypesNames {
	SET_EXAMPLE = 'SET_EXAMPLE'
}

export interface ActionCreator {
	setExample: (exampleData: string) => EventBoardAction;
}

export interface EventBoardAction extends Action<TypesNames.SET_EXAMPLE> {
	exampleData: string;
}

export interface EventBoard {
  id: string;
  title: string;
  date: Date;
  fromTime: Date;
  toTime: Date;
  eventType: string;
}
