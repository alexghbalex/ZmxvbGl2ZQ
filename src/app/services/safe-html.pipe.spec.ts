import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    sanitizer = domSanitizer;
    pipe = new SafeHtmlPipe(sanitizer);
  }));

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should pass the html', () => {
    const html = '<div>test</div>';
    expect(pipe.transform(html)).toEqual(sanitizer.bypassSecurityTrustHtml(html));
  });
});
