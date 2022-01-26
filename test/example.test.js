// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createStatsString } from '../utils.js';

const test = QUnit.test;


test('Testing my string', (expect) => {
    const string = `You have changed the head duck times, the body Fancy times, and the pants white times. And nobody can forget your character's classic catchphrases:`;

    const actual = createStatsString('duck', 'Fancy', 'white');

    expect.equal(actual, string);
});



test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
