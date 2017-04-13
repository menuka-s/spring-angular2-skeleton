import { SpringAngular2SkeletonPage } from './app.po';

describe('spring-angular2-skeleton App', () => {
  let page: SpringAngular2SkeletonPage;

  beforeEach(() => {
    page = new SpringAngular2SkeletonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
