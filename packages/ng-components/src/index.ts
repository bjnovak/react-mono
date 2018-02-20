import { Component, ViewChild, ElementRef } from '@angular/core';
import { CoreMod } from '@react-mono/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

@Component({
  selector: 'ng-core-mod',
  template: `<div #core></div>`
})
export class NgCoreModComponent {
  @ViewChild('core') core: ElementRef;

  ngAfterViewInit() {
    ReactDOM.render(React.createElement(CoreMod), this.core.nativeElement);
  }
}
