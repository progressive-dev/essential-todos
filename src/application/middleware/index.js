import ui from './ui';
import collection from './collection';
import permit from './permitMiddleware';
export default [
    ...ui,
    ...collection,
    ...permit,
]