
require('cypress-plugin-tab');
import {When, Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import dateGenerator from "../../support/dateGenerator";
const url = 'https://www.iberia.com/es/'
var dateDeparture = dateGenerator('departure');
var dateReturn = dateGenerator('return');
let userEmail
const destination = 'Barcelona'

Given('Test on iberia website', () => {
  // clean up process for cookies and local storage
  Cypress.on('uncaught:exception', (err, runnable) => {

    return false
    });
    
  cy.clearCookies();
  cy.clearLocalStorage();
   cy.visit((url), {
    headers: {
      "User-Agent": "axios/0.18.0"
    }
   })
   cy.wait(2000)
   cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
  })
  When ('flight from Madrid to Barcelona', () => {
   cy.get('#flight_origin1').click({force: true});
   cy.get('#tab1form>fieldset>div>div>div:nth-child(1)>div>input')
   .type('Madrid')
   cy.get('#tab-flights>form>fieldset>div>div>div>div>ul>li').click()
   cy.get('#flight_destiny1').click({force: true})
   cy.get('#tab1form>fieldset>div>div>div:nth-child(2)>div>input')
   .type(destination)
   cy.get('#tab-flights>form>fieldset>div>div>div:nth-child(2)>div>ul>li').click()
  });
  Then ('select departure in 4 days', () => {
    cy.get('#tab1form>fieldset>div>div>div>div>div:nth-child(1)>div>input')
    .should('be.visible')
    .click({force: true})
    .type(`${dateDeparture}`)
   });
  And('select return after 3 days', () => {
    cy.get('#tab1form>fieldset>div>div>div>div>div:nth-child(2)>div>input')
    .should('be.visible')
    .click({force: true})
    .type(`${dateReturn}`)
   });
   Then ('select 2 adults and 1 children', () => {
    cy.get('#ticketops-seeker-button > span.ui-selectmenu-text')
    .click({force: true})
    cy.get('#ticketops-seeker-menu>li:nth-child(1)>div')
    .click();
    cy.get('#tab1form>fieldset>div>div>div:nth-child(2)>div:nth-child(1)>button')
    .click({force: true});
    cy.get('#people-counter-1>ul>li:nth-child(2)>div>button:nth-child(2)')
    .click()
    cy.get('#people-counter-1>ul>li:nth-child(5)>div>button:nth-child(2)')
    .click()
    cy.wait(2000)
   });
   Then ('search flights', () => {
    //cy.get('#buttonSubmit1 > span.ibe-button__icon.icon-buscar')
    //.click({force: true}); 
    cy.get('#buttonSubmit1 > span.ibe-button__icon.icon-buscar')
    .click({force: true});
    var urlToVisit = 'https://www.iberia.com/flights/?market=ES&language=es&appliesOMB=false&splitEndCity=false&initializedOMB=true&flexible=true&TRIP_TYPE=2&BEGIN_CITY_01=MAD&END_CITY_01=BCN&nombreOrigen=Madrid&nombreDestino=Barcelona&BEGIN_DAY_01=09&BEGIN_MONTH_01=202210&BEGIN_YEAR_01=2022&END_DAY_01=12&END_MONTH_01=202210&END_YEAR_01=2022&FARE_TYPE=R&quadrigam=IBHMPA&ADT=2&CHD=1&INF=0&BNN=0&YTH=0&YCD=0&residentCode=&familianumerosa=&BV_UseBVCookie=no&boton=Buscar&bookingMarket=ES#!/availability';
    cy.on("url:changed", (newUrl) => {
      urlToVisit = newUrl;
    });
    cy.forceVisit(urlToVisit,{ failOnStatusCode: false})

   });
   Then ('select randomly the flight', () => {
    let randomNumber = (Math.floor(Math.random() * 5))+1
    cy.wait(30000)
    cy.get(`#bbki-slice-info-details-link > div > div:nth-child(${randomNumber})`)
   });
   
