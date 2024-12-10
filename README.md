# Testing and Continuous Integration

## Manual Testing

- More prone to human error
- Carried out by the QA role
- More costly in the long-term
- Older way

## Automated Testing

- Testing through automated code/scripts
- More up-front cost and time
- Goal is efficiency
- Some manual work to write and update the tests

## TDD (test Drive Development)

- write a test
- it should fail
- write the code that passes the test
- refactor and clean up the code
- run all tests
- repeat

## Types of Tests

- Unit -> tests the functionality of an individual unit of code
  - individual function
  - getUser()
- Integration -> tests that combine multiple units
  - moving mail from the Inbox to Spam folder
- Functional -> testing user scenarios on the browser itself by controlling the browser programatically
  - end to end testing
  - logging in all the way through sending emails and then logging out
- Acceptance -> testing that the application meets specific requirements
  - Alpha and Beta releases of applications or software

## Notes

- test for behavior, not implementation

## Jest

- npm i jest
- change test script in package.json to jest
- create a file that ends in .test.js (math.test.js)
- write a bunch of tests (takes in a description and a function)
  - test('description for the test', () => { expect(1 + 2).toBe(3) })
- run the tests 
- write the code to make the first test pass
  - once that is working, move to second test

## Mocking and Stubbing - simplify tests when writing them

- mimic some parts of your code for a test so that you do not need to set up the actual code in your test (stunt double)


## Continuous Integration && Continuous Deliver (CI/CD)

- Continuous Integration (CI)
  - Automating
    - Building the Code
    - Testing the Code
  - How does it work?
    - developer makes changes
    - CI system will automatically build the code
    - CI system runs the automated tests
    - CI system reports back the results

- Continuous Delivery (CD)
  - Deploying code updates the production code

## GitHub Actions

- Workflow - executes multiple jobs
- Job - set of steps to run
- Event -> specific action within a repo (commit, pull request, etc.)
- Actions -> frequently repeated set of tasks are packaged into actions
- Runner -> machine that runss workflows
- Configuration -> defined in a YAML files in .github/workflows