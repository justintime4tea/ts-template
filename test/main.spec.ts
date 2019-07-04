// TODO: Migrate this test boilerplate to somewhere else
import * as chai from 'chai';
import 'mocha';
import 'sinon';
import {default as sinonChai} from 'sinon-chai';
import {Main} from '../src/main';

chai.use(sinonChai);
chai.should();
chai.config.includeStack = true;

describe('Main', () => {
  let main: Main;

  beforeEach(() => (main = new Main()));

  describe('greet', () => {
    it('should greet person', () => {
      const result = main.greet('John Doe');
      result.should.equal('Hello John Doe!');
    });
  });
});
