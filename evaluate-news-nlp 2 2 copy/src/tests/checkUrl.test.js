import { checkUrl } from '../client/js/checkUrl';

describe('check url functionality', () => {
    test('check url', () => {
        expect(checkUrl('https://www.techlearning.com/news/15-awesome-article-sites-for-students')) === true;
        expect(checkUrl('httb://www.techlearning.com/news/15-awesome-article-sites-for-students')) === false;
    });
})