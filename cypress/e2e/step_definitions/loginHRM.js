import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

import {myinfoPage} from '@pages/MyinfoHRMPage'

let userdata;
    before(function(){

        cy.fixture('orangehrm').then(function (data) {
            userdata=data;
        })
    })
 

 Given('The web browser is at orange HRM login page', function () { 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    myinfoPage.setUserName(userdata.username)
    myinfoPage.setPassword(userdata.password)
    myinfoPage.clickLogin()
    myinfoPage.verifyOpenDashboard(userdata.expected1)
  });

When('The user open my info page to change nickname', function () {
   myinfoPage.verifyOpenMyInfo(userdata.expected2)
    
  });

Then('The nickname will be changed on my info page', function () { 
    
    myinfoPage.setNickname(userdata.nickname)
  });


