// TODO: Migrate this test boilerplate to somewhere else
import * as chai from 'chai';
import 'mocha';
import 'sinon';
import {default as sinonChai} from 'sinon-chai';
import {HelloWorld} from '../src/main';

chai.use(sinonChai);
chai.should();
chai.config.includeStack = true;

describe('HelloWorld', () => {
  let helloWorld: HelloWorld;

  beforeEach(() => (helloWorld = new HelloWorld()));

  describe('Say hi', () => {
    it('should greet person', () => {
      const result = helloWorld.greet('John Doe');
      result.should.equal('Hello John Doe!');
    });
  });
});
