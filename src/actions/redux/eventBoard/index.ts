import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';
import { ApplicationState } from '../index';
import {
	EventBoardState, TypesNames, ActionCreator, EventBoardAction
} from './interfaces';

// TODO: Do not for get add your reducer to index file

/* ------------- Types and Action Creators ------------- */

const { Creators } = createActions<TypesNames, ActionCreator>({
	setExample: ['exampleData']
});

export const EventBoardTypes = TypesNames;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable<EventBoardState>({
	exampleData: 'Initial Data Example'
});

/* ------------- Selectors ------------- */

export const eventBoardSelector = {
	getExampleData: (state: ApplicationState) => state.eventBoard.exampleData
};

/* ------------- Reducers ------------- */

const setExampleReducer = (state: ImmutableObject<EventBoardState>, action: EventBoardAction) => {
	const { exampleData } = action;
	return state.merge({ exampleData });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer<ImmutableObject<any, any>(INITIAL_STATE, {
	[EventBoardTypes.SET_EXAMPLE]: setExampleReducer
});
