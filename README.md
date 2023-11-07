# ParaBank UI Automation Framework

## SETUP
### Environment Requirements
- install Node.js
- VS Code

### Runing Tests
- open repo in vs code, open new terminal
    ```commandline
    npm install
    ```
- after npm install all packages including playwrght, you   can run all tests
    ```commandline
    npx playwright test --reporter=html
    ```


## Project Structure

- Tests will not run in parallel due to the demo website limitation for not having full control to revert back created accounts/balances which makes it hard to clean up the system except for removing the created accounts
- Tests are designed according to the given test cases (other approaches could have been applied when testing those modules but we're implemented according to the task)
- Tests will run on both Chrome and firefox(other browsers could be supported as well).

- **Pages**:
  * Following the POM design pattern, elements are split based on their relevance and actions.
- **test_data**
  * includes any json files that are used in the tests to enable using data driven approach when running the tests and also avoid hardcoding any values in the tests
- **utils**:
  * Setups: includes setups files that include beforeAll and afterAll hooks that will be used in different test files
- **workflows**:
  * divided into modules to group workflows that are commonly used in tests along with their data to increase readability and maintainability 
- **tests**:
  * Include tests divided based on the different modules they test
- **test-results**:
  * Should be part of the .gitignore file but included as part of the task solution, it includes generated reports or tests related artifacts.
#
## Limitations with Parabank Demo Web app
- usually a cleanup should be followed for each test to reset account to their original state.
- to overcome the cleanup point above, we could register an account for each test which will introduce an overhead that even running the tests in parallel wouldn't make up for.
- deployed app on the web is buggy and unstable so to overcome this issue I've tried to find a workaround and I ended up finding a docker image for that app so I used it to run my tests until the online system is stable enough.
    * docker image : https://hub.docker.com/r/parasoft/parabank/
