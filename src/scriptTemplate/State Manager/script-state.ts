import type { State } from '../../../imports/types.js';
import { SCRIPT_NAME, DEFAULT_STATE } from './constants.js';

export enum MainStates {
	IDLE = 'IDLE',
}

export type TemplateScriptState = State & {
	mainState: MainStates;
	lastLoggedMainState: MainStates | null;
};

export const state: TemplateScriptState = {
	debugEnabled: true,
	debugFullState: false,
	failureCounts: {},
	failureOrigin: '',
	lastFailureKey: '',
	mainState: MainStates.IDLE,
	scriptInitalized: false,
	scriptName: SCRIPT_NAME,
	uiCompleted: true,
	timeout: 0,
	gameTick: 0,
	subState: DEFAULT_STATE,
	lastLoggedMainState: null,
};
