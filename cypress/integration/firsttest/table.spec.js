var company=[];
var cont=[];

describe('handling web table',()=>{
    it('invoke the name from the company table',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('table#customers tbody tr').each((row,index)=>{
            if(index!=0){
                cy.get('table#customers tbody tr').eq(index).find('td').eq(0).invoke('text').then(text=>{
                    company.push(text)
                })

            }
        })
    })  
    
    it('invoke the name from the contact table',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('table#customers tbody tr').each((row,index)=>{
            if(index!=0){
                cy.get('table#customers tbody tr').eq(index).find('td').eq(1).invoke('text').then(text=>{
                    cont.push(text)
                })

            }
        })
    }) 
    it('assert respective countires has given companies only',()=>{
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        var country=[' ','Germany','Mexico','Austria','UK','Canada','Italy']
        cy.get('table#customers tbody tr').each((row,index)=>{
            if(index!=0){
                cy.get('table#customers tbody tr').eq(index).find('td').last().then((el,index)=>{
                        if(el.text()==country[index]){
                            cy.get('table#customers tbody tr').eq(index).find('td').eq(0).invoke('text').then(text=>{
                                expect(text).to.eq(company[-1])
                            })

                        }
                    
                })

            }
        })
    }) 
})