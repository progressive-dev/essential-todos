import ui from './ui';
import collection from './collection';
import permit from './permitMiddleware';
import ric from './ricMiddleware'

export default [
    ...ui,
    ...collection,
    ...permit,
    ...ric
]