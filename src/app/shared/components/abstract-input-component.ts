import { FormControl } from '@angular/forms';

export abstract class AbstractInputComponent {

    private parseError: boolean;
    public data: any;

    // this is the initial value set to the component
  public writeValue(obj: any) {
    if (obj) {
      this.data = obj;
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  // validates the form, returns null when valid else the validation object
  // in this case we're checking if the json parsing has passed or failed from the onChange method
  public validate(c: FormControl) {
    return (!this.parseError) ? null : {
      jsonParseError: {
        valid: false,
      },
    };
  }

  // not used, used for touch input
  public registerOnTouched() { }

  // change events from the textarea
  public onChange(event) {
    // get value
    try {
      // parse it to json
      this.data = event.target ? event.target.value : event;
      this.parseError = false;
    } catch (ex) {
      // set parse error if it fails
      this.parseError = true;
    }

    // update the form
    this.propagateChange(this.data);
  }

  // the method set in registerOnChange to emit changes back to the form
  public propagateChange = (_: any) => { };

}
