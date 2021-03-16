import { createSelector, createFeatureSelector } from '@ngrx/store';

import { UserFeatureKey } from './';
import { UserState } from './user.reducers';

export const selectFeature = createFeatureSelector<UserState>(UserFeatureKey);

export const getSignUpResult = createSelector(selectFeature, state => state);
