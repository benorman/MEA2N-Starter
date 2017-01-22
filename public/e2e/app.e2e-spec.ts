import { MEA2NStarterPage } from './app.po';

describe('mea2-n-starter App', function() {
  let page: MEA2NStarterPage;

  beforeEach(() => {
    page = new MEA2NStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
