import { KriegstudiosPage } from './app.po';

describe('kriegstudios App', function() {
  let page: KriegstudiosPage;

  beforeEach(() => {
    page = new KriegstudiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
