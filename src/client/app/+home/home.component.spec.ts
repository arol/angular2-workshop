import { Component, provide } from '@angular/core';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
  HTTP_PROVIDERS
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { NameListService } from '../shared/index';
import { HomeComponent } from './home.component';

export function main() {
  describe('Home component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should work',
      inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((rootTC: any) => {
            rootTC.detectChanges();

            let homeInstance = rootTC.debugElement.children[0].componentInstance;
            let listItems = rootTC.debugElement.query(By.css('md-list-item'));

            expect(homeInstance.nameListService).toEqual(jasmine.any(NameListService));
            //expect(listItems[0].nativeElement.className).toEqual(0);
            expect(listItems.nativeElement.className).toBe('');

            homeInstance.newName = 'Minko';
            homeInstance.addName();
            rootTC.detectChanges();

            expect(listItems[0].nativeElement.className).toEqual(0);

            expect(listItems[0].nativeElement.className).toMatch('Minko');
          });
      }));
  });
}

@Component({
  providers: [
    HTTP_PROVIDERS,
    NameListService,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
  ],
  selector: 'test-cmp',
  template: '<sd-home></sd-home>',
  directives: [HomeComponent]
})
class TestComponent {}
