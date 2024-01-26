// step-definitions.ts

import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld  } from '../support/custom-world';
import {config} from "../support/config"; // Import the custom world interface

Given('I am a user on "review" page with following search params', async function (this: ICustomWorld , dataTable) {
    const page = this.page!;
    await page.goto(config.BASE_URL);
});

When('I can not click on {string} button when the field is empty', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Here!")
});


Then('I enter a valid coupon code {string} and the coupon is applied', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    console.log("Here!")
});
