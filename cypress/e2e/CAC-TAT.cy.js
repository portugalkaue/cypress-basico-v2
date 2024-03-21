// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })
//Aula 1
  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

//Aula 2
//Exercicio 1
  it('preenche os campos obrigatórios', function() {

    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="email-checkbox"]').check() //por questões de semantica, é melhor usar .check do que .click em checkboxes e radios
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    //.type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ipsum ante. Proin varius euismod malesuada. Ut eu augue eu justo maximus cursus ut ornare nunc. Praesent egestas molestie hendrerit. Quisque et ex sit amet lacus ultricies imperdiet. Etiam dui massa, auctor condimentum varius id, tincidunt vel diam. In pharetra.', {delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
   
  })

//Exercicio 2
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('blablabla')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="email-checkbox"]').check()
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  //Exerciocio 3
  it('verificação de valor não-numérico no campo de telefone', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[id="phone"]').type('abc').should('have.value', '')
  })

   //Exerciocio 4
   it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="phone-checkbox"]').check()
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

   //Exerciocio 5
   it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
  
    cy.get('input[id="firstName"]').type('Kaue').should('have.value', 'Kaue').clear().should('have.value', '')
    cy.get('input[id="lastName"]').type('Portugal').should('have.value', 'Portugal').clear().should('have.value', '')
    cy.get('input[id="email"]').type('portugalkaue@example.com').should('have.value', 'portugalkaue@example.com').clear().should('have.value', '')
    cy.get('input[id="phone"]').type('11987654321').should('have.value', '11987654321').clear().should('have.value', '')
  })

   //Exerciocio 6
   it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
  
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

   //Exerciocio 7
   it('envia o formuário com sucesso usando um comando customizado', function() {
  
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  //Exerciocio 8
  it('funcionalidade cy contains', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="email-checkbox"]').check()
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  //Aula 3
  //Exercicio 1
  it('seleciona um produto (YouTube) por seu texto', function() {
  
    cy.get('select').select('YouTube')
  })

   //Exercicio 2
  it('seleciona um produto (Mentoria) por seu valor (value)', function() {
  
    cy.get('select').select('mentoria').should('have.value', 'mentoria')
  })

   //Exercicio 3
   it('seleciona um produto (Mentoria) por seu valor (value)', function() {
  
    cy.get('select').select(1).should('have.value', 'blog')
  })

   //Aula 4
  //Exercicio 1
  it('marca o tipo de atendimento "Feedback"', function() {
  
    cy.get('input[value="feedback"]').check().should('have.value', 'feedback')
  })

  //Exercicio 2
  it('marca cada tipo de atendimento', function() {
  
    cy.get('input[value="ajuda"]').check().should('be.checked')
    cy.get('input[value="elogio"]').check().should('be.checked')
    cy.get('input[value="feedback"]').check().should('be.checked')
  })

 //Aula 5
  //Exercicio 1
  it('marca ambos checkboxes, depois desmarca o último', function() {
  
    cy.get('input[type="checkbox"]').first().check().should('be.checked')
    cy.get('input[type="checkbox"]').last().check().should('be.checked').uncheck().should('not.checked')
  })

  //Exercicio 2
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
  
    cy.get('input[id="firstName"]').type('Kaue')
    cy.get('input[id="lastName"]').type('Portugal')
    cy.get('input[id="email"]').type('portugalkaue@example.com')
    cy.get('input[value="elogio"]').check()
    cy.get('input[id="phone-checkbox"]').check()
    cy.get('textarea[name="open-text-area"]').type('Teste Cypress')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

//Aula 6
//Exercicio 1
it('seleciona um arquivo da pasta fixtures', function() {
  
  cy.get('input[id="file-upload"]').selectFile('cypress/fixtures/example.json')
  .should(function($input) {
  expect($input[0].files[0].name).to.equal('example.json')
  })
})

//Exercicio 2
it('seleciona um arquivo simulando um drag-and-drop', function() {
  
  cy.get('input[id="file-upload"]').selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
  .should(function($input) {
  expect($input[0].files[0].name).to.equal('example.json')
  })
})

//Exercicio 3
it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
  
  cy.fixture('example.json').as('sampleFile')
  cy.get('input[id="file-upload"]').selectFile('@sampleFile')
})

//Aula 7
//Exercicio 1
it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
  
  cy.get('#privacy a').should('have.attr', 'target', '_blank')
})

//Exercicio 2
it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
  
  cy.get('#privacy a').invoke('removeAttr', 'target').click()
})

//Aula 8
//Exercicio 1
//Rodar os testes anteriores com 410 pixels de largura e 860 pixels de altura

//Exercicio 2
//Rodar os testes anteriores Headless com 410 pixels de largura e 860 pixels de altura


})

