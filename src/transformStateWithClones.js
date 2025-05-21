'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];

  for (const doing of actions) {
    if (doing.type === `addProperties`) {
      Object.assign(state, doing.extraData);
      result.push({ ...state });
    }

    if (doing.type === `removeProperties`) {
      for (const remove of doing.keysToRemove) {
        delete state[remove];
      }
      result.push({ ...state });
    }

    if (doing.type === `clear`) {
      for (const key in state) {
        delete state[key];
      }
      result.push({ ...state });
    }
  }

  return result;
}

module.exports = transformStateWithClones;
