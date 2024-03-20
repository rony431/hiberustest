require('cypress-plugin-tab');
import {When, Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import petData from "./petData";
import petUpdate from "./petUpdate";

Given('Create new pet', () => {
    cy.request('POST', 'https://petstore.swagger.io/v2/pet', petData).then((response) => {
        expect(response.status).to.equal(200);
      });
  })
When('find a pet by status', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
        expect(response.status).to.equal(200);
      });
})
When('find a pet by id', () => {
  cy.request('GET', 'https://petstore.swagger.io/v2/pet/9981').then((response) => {
      expect(response.status).to.equal(200);
    });
})
And('pet is updated', () => {
  cy.request('POST', 'https://petstore.swagger.io/v2/pet/', petUpdate).then((response) => {
      expect(response.status).to.equal(200);
    });
})
Then('pet is deleted', () => {
  cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/9981').then((response) => {
      expect(response.status).to.equal(200);
    });
})
