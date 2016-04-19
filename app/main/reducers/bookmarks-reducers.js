/*
 Copyright 2016 Mozilla

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed
 under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the License for the
 specific language governing permissions and limitations under the License.
 */

import * as profileCommandTypes from '../../shared/constants/profile-command-types';

import Immutable from 'immutable';

export default function bookmarksReducer(state, command) {
  if (typeof state === 'undefined') {
    return Immutable.Set();
  }

  const payload = command.payload;
  switch (command.type) {
    case profileCommandTypes.SET_BOOKMARK_STATE:
      if (payload.isBookmarked) {
        return state.add(payload.url);
      }
      return state.delete(payload.url);
    default:
      return state;
  }
}