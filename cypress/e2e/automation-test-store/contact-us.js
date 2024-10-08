///<reference types = "Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get("a[href$='contact']").click()
             .then(function(linkText) {
                 console.log("Clicked on link using text: " + linkText.text())
             })        
        // //cy.xpath("//a[contains(@href, 'contact')]").click();
          cy.get('#ContactUsFrm_first_name').type("Joe");
          cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
         cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
         cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
         //cy.get('.col-md-6 > .btn').click(); 
         cy.get("button[title='Submit']").click(); 
         cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
         cy.log("Test has completed!")
    });  
    
})



