
describe('Handling inning tables', () => {
    

    it('invoke the player names using invoke method', () => {
        let sum = 0
        cy.visit('https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-1216494/full-scorecard')
        cy.get('table[class="table batsman"]').last().find('td:nth-child(3)').each(function(el,index){
            if(index!=5){
            cy.log(el.text())
            sum+=Number(el.text())
            }
        }).then(() => {
                         expect(sum).to.equal(85)
                 })
    })
})
// describe('handling web tables',()=>{
    
//     it('Check addition of total runs', () => {
//         var sum = 0;
//         cy.visit('https://www.espncricinfo.com/series/8048/scorecard/1216494/kolkata-knight-riders-vs-royal-challengers-bangalore-39th-match-indian-premier-league-2020-21')
//         cy.get('.table.batsman').eq(0).find('tr td:nth-child(3)').eq(10).as('firstList')
//     //     cy.get('@firstList').each((el,index)=>{
//     //         if(index != 10){
//     //         cy.log(el.text())
//     //         sum += Number(el.text())
//     //         }
//     //          }).then(()=>{
//     //              expect(sum).to.eq(84)
//     //          })
             
//      })
// //})
// it('verify the sum of table using customize functionality',()=>{
//     cy.checktab(85)
    
// })

// it('verify the sum of table using customize functionality',()=>{
//     cy.checksum(84)
// })
