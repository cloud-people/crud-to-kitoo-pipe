import {Pipe, ActionExecutorMap} from "zeropipe/dist/src/index";
import {actionToRequest} from "handlers/index";
import * as Actions from 'actions';

export default new Pipe({
    name: 'crud-to-kitoo',
    executorMap: Object.keys(Actions).reduce((acc: ActionExecutorMap, key: string): ActionExecutorMap => {
        acc[Actions[key]] = actionToRequest;
        return acc;
    }, {} as ActionExecutorMap),
});
