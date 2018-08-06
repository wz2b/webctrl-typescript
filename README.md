# webctrl-typescript

This library provides simple typescript bindings to the Automated Logic WebControl 6.5 addon library,
which in typescript is known as _cjaddon.js_

To use it from a typescript class:

```
import {AddOn, RequestValueResult} from "./cjaddon";

class TestClass {

  start() {
    AddOn.watchValue( 'some_microblock', 'present_value', this.writeValueToConsole );
  }

  writeValueToConsole(value: number | string | boolean) {
    console.log(value);
  }
}

```

