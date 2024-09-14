# CommitQuality
This repository contains automated test scripts aimed to validate the core functionalities of CommitQuality. 


## Prerequisites
The following software and tools are required to run the test:
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- npm or yarn package manager

## Installation
To install and setup the project:
1. Clone the repository:
```bash
   git clone https://github.com/MojisolaaaO/CommitQuality.git
```

2. Navigate to the project directory:
```bash
   cd CommitQuality
```

3. Install dependencies:
```bash
   npm install
```


## Running Tests
### Interactive Mode
To run tests in Cypress interactive mode:
1. Run the command:
```bash
npx cypress open
```
2. Select E2E Testing
3. Select a browser (e.g Chrome)
4. Click on the "Select E2E Testing in "browser name" button
5. Select a spec file

### Headless Mode
To run tests in headless mode (without a browser UI):
```bash
npx cypress run
```
