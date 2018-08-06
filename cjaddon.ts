
/*
 * WebControl 6.5 addon library bindings for Typescript
 * To use, import cjaddon.js in a SCRIPT tag.
 */
declare var addonUtility: any;

/*
 * Entry point
 */
export class AddOn {
    static watchValue(location: string, expression: string, callback: RequestValueCallback) {
        addonUtility.requestValue({location: location, expression: expression}).watch(  function(update: RequestValueResult) {
            callback(update);
        });
    }
}


/*
 * Bindings to the useful methods in the result
 */
export interface RequestValueResult {
    getValue(): number | string | boolean;
    getExpression(): string;
    getLocation(): string;
}


/*
 * Definition of a callback
 */
export interface RequestValueCallback {
    (v: RequestValueResult): void;
}
