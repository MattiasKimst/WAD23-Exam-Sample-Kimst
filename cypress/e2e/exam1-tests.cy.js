/// <reference types = "cypress"/>  

it('Test 1', () => {
    cy.visit('http://localhost:8080/routemanagement')
    cy.get('h1').contains('Routes Management Pannel')
    cy.get('button').should('contain', 'Add')
    cy.get('#dateAdd').should('have.attr', 'placeholder')
})

// cypress/integration/routemanagement.spec.js


it('Test2', () => {
    const newRoute = {
        fromcity: 'CityA',
        tocity: 'CityB',
        cost: '20',
        departuretime: '10:00 AM',
        departuredate: '2022-12-31',
    };

    cy.visit('http://localhost:8080/routemanagement'); // Update the route to the actual route path

    // Type the new route information into the input fields
    cy.get('#fromcityAdd').type(newRoute.fromcity);
    cy.get('#tocityAdd').type(newRoute.tocity);
    cy.get('#costAdd').type(newRoute.cost);
    cy.get('#timeAdd').type(newRoute.departuretime);
    cy.get('#dateAdd').type(newRoute.departuredate);

    // Click the "Add" button
    cy.get('.add').click();

    // Confirm that the new route is added to the table
    cy.contains('td', newRoute.fromcity);
    cy.contains('td', newRoute.tocity);
    cy.contains('td', newRoute.cost);
    cy.contains('td', newRoute.departuretime);
    cy.contains('td', newRoute.departuredate);
});

// Test 3
it('makes a POST request to add a new route', () => {
    const newRoute = {
        fromcity: 'CityA',
        tocity: 'CityB',
        cost: '20',
        departuretime: '10:00 AM',
        departuredate: '2022-12-31',
    };

    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/routes',
        body: newRoute,
    }).then((response) => {
        expect(response.status).to.equal(200); // Assuming a successful response code
        //expect(response.body).to.have.property('id'); // Assuming the response has an 'id' property
        // Add more assertions if needed based on your server's response
    });
});



/* API */
/* it("Test 3 - API - Add route request", function() {
    cy.request('POST', 'http://localhost:3000/api/routes', {
        //to be add by you
            "fromcity": "Parnu",
            "tocity": "Tartu",
            "cost": 12,
            "departuretime": "12:00:00",
            "departuredate": "2022-03-24"
        })
        .then((res) => {
            cy.log(res.body)
            let post = res.body.rows['0'].id
            expect(post).to.not.be.null;
            cy.log('a route is added')
        });
}) */