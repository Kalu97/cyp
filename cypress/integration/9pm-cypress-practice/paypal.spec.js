let AccessToken="A21AALw3zQPiNtznK9AwV4VHSR3_1giq75aZ1q5TP_fqfCijrWF3YeV53vneRH7vNWK0y_Dw3_Q4Xj-cXn1ZbWHlWN4Kg_DVw"
describe('validate the gorest post API',()=>{
    it('Verify the gorest post API',()=>{
        let id=''
        cy.request({
            failOnStatusCode: false,
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: `Bearer ${AccessToken}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": "AherMahesh45@gmail.com",
                "status": "active"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            
        })
    })

})