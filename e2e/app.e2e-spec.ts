import { QsmMonitoringPage } from './app.po';

describe('qsm-monitoring App', () => {
  let page: QsmMonitoringPage;

  beforeEach(() => {
    page = new QsmMonitoringPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
