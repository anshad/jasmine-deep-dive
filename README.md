# Jasmine - a deep dive
Jasmine BDD

#### Setup

- Initialize project `npm init`
- Install jasmine as local package `npm install jasmine --save-dev` or global `npm install -g jasmine`
- Initialize jasmine `node_modules/jasmine/bin/jasmine.js init` or `jasmine init`


#### Jasmine Config 

- Path for config `spec/support/jasmine.json`
- `spec_dir` - The directory for spec files 
- `spec_files` - Actual spec files 
- `helpers` - Helper code 
- `stopSpecOnExpectationFailure` - Stop the test after first failure 
- `random` - Run the tests randomly

#### Suite/Test case 

A suite can be nested.

    describe('a test case', () => {
       // test here
    });

#### Test/Spec 
A spec can have one or more expectations.

    it('should return true', () => {
        // expect match here
    });

#### Expectations 

    expect(true).toBe(true);


#### Matchers
Used to verify expectations.

- `toBe()` - expect the actual value to be `===` to the expected value
- `toBeCloseTo()` - expect the actual value to be within a specified precision of the expected value.
- `toBeDefined()` - expect the actual value to be defined.
- `toBeUndefined()` - expect the actual value to be undefined.
- `toBeTruthy()` - expect the actual value to be truthy.
- `toBeFalsy()` - expect the actual value to be falsy
- `toBeGreaterThan()` - expect the actual value to be greater than the expected value.
- `toBeGreaterThanOrEqual()` - expect the actual value to be greater than or equal to the expected value.
- `toBeLessThan()` - expect the actual value to be less than the expected value.
- `toBeLessThanOrEqual()` - expect the actual value to be less than or equal to the expected value. 
- `toBeNaN()` - expect the actual value to be NaN
- `toBeNull()` - expect the actual value to be null
- `toBeNegativeInfinity()` - expect the actual value to be -Infinity
- `toBePositiveInfinity()` - expect the actual value to be Infinity
- `toContain()` - expect the actual value to contain a specific value.
- `toEqual()` - expect the actual value to be equal to the expected, using deep equality comparison.
- `toHaveBeenCalled()` - expect the actual (a Spy) to have been called.
- `toHaveBeenCalledBefore()` - expect the actual value (a Spy) to have been called before another Spy.
- `toHaveBeenCalledTimes()` - expect the actual (a Spy) to have been called the specified number of times.
- `toHaveBeenCalledWith()` - expect the actual (a Spy) to have been called with particular arguments at least once.
- `toMatch()` - expect the actual value to match a regular expression 
- `toThrow()` - expect a function to throw something.
- `toThrowError()` - expect a function to throw an Error.

#### A complete suite 

    describe('a test case', () => {
        it('should return true', () => {
            expect(true).toBe(true);
        });
    });

#### beforeEach/afterEach
- Runs before or after each test.
- Helps to define variables

      describe('a test case', () => {
         let x;
         beforeEach(() => {
             x = true;
         });
         afterEach(() => {
             x = false;
         });
         it('should return true', () => {
             expect(x).toBe(true);
         });
      });


#### Negate?

    expect(true).not.toBe(false);

#### Spy 
A spy can intercept function calls.
- verify if the function was called.
- Call function with specific parameters 
- Can return a pre-defined result.
- Call a fake function 
- Throw an Error 

`spyOn(someObj, 'func').withArgs(1, 2, 3).and.returnValue(42);`

#### Links
- https://jasmine.github.io/index.html
- https://github.com/velesin/jasmine-jquery
- https://github.com/onury/jasmine-console-reporter