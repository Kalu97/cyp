describe('verify the API request', () => {
    it('verify the get reqest', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(response.body.data.length)
        })

    })
    it('verify the get reqest', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        })
            .then(function (response) {
                response.body.data.forEach(element => {
                    expect(element).to.have.all.keys('email', 'id', 'first_name', 'last_name', 'avatar')
                });
            })
    })
    it('verify the POST reqest', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "vishal",
                "job": "QA"
            }
        })
            .then(function (response) {
                cy.log(response)
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq('vishal')
            });
    })
    it('verify the DELETE reqest', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(204)
        })

    })


})

