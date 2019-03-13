/**
 * Logger of store actions
 * @param store
 * @returns {function(*): function(*=)}
 */
export const logger = store => next => action => {
    action.payload ?
        console.log(`Type event: ${action.type} with payload: `, action.payload)
        :
        console.log(`Type event: ${action.type}`);
    return next(action);
}