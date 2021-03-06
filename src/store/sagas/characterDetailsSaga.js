import { select, put, call, takeLatest, all } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';

const getCharacterId = state => state.details.characterId;

export function* handleDetailsLoad() {
	try {
		const characterId = yield select(getCharacterId);
		yield put(apiCallStatusActions.beginApiCall());
		const data = yield call(characters.fetchesCharactersById, characterId);
		const details = data.results[0];
		yield put(charactersActions.setDetails(details));
	} catch (error) {
		yield all([
			put(apiCallStatusActions.apiCallError()),
			put(charactersActions.setDetailsError(error))
		]);
	}
}

export default function * () {
	yield takeLatest(types.DETAILS_CHARACTER.LOAD, handleDetailsLoad);
}
