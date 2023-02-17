import { HelloWorld } from '@/application/controllers/hello-world';

describe('HelloWorld', () => {
  it('should print "Hello World!"', () => {
    const logSpy = jest.spyOn(console, 'log');
    const sut = new HelloWorld();

    sut.exec();

    expect(logSpy).toHaveBeenCalledWith('Hello World!');
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
