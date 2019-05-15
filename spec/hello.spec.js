require('../src/hello.js');

describe('A test suite', () => {
    it('reverseString should be defined', () => {
        expect(reverseString).toBeDefined();
    });
    it('should reverse a string', () => {
        expect(reverseString('admin')).toEqual('nimda');
    });
});