require('cypress-plugin-tab');
import {When, Given, Then, And } from "cypress-cucumber-preprocessor/steps";

const bodyUser = {
  id: 1,
  username: 'testHiberus',
  firstName: `firstName`,
  lastName: `lastname`,
  email: `testhiberus@email.com`,
  password: '12345',
  phone: '12345',
  userStatus: 1,
};
Given('Create new user', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/user', bodyUser).then((response) => {
        expect(response.status).to.equal(200);
      });
  })
Then('validate the user created', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/user/test', bodyUser).then((response) => {
        expect(response.status).to.equal(200);
      });
})
