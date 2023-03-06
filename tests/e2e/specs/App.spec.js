describe("App Todo", () => {
  it("Должен переходить по ссылке ", () => {
    cy.visit("/")
  });


  it("header должен содержать заголовок h1", () => {
    cy.get("header > h1").should("have.text", "to do list")
  });

  it("должен изменять задачи", () => {
    cy.contains("edit").click()
    cy.get("[placeholder = 'Task 1']").type("закончить писать E2E тесты").should("have.value", "закончить писать E2E тесты")
    cy.contains("save")
  });


  it("должен cохранять измененную задачу", () => {
    cy.contains("save").click()
    cy.get("[placeholder = 'закончить писать E2E тесты']").should("not.have.checked")
  });


  it("должен завершать задачу", () => {
    cy.get("input[id = '1']").click({ force: true })
    cy.get("input[id = '1']").should('have.checked')
  });

  it("должен добавлять задачу", () => {
    cy.get("[placeholder = 'Add a new task']").type("новая задача").type('{enter}').should('have.value', '')
    cy.get("[placeholder = 'новая задача']")
  });

  it("должен удалять задачу", () => {
    cy.get(".RemoveTask_remove_1DC6P").eq(1).click()
    cy.get(".RemoveTask_remove_1DC6P").eq(6).click()
    cy.get(".RemoveTask_remove_1DC6P").should("have.length", 6)
  });


  it("должен фильтровать задачи", () => {
    cy.contains("All").click()
    cy.get(".Main_tasks_3yJMj > div:not(:last-child)").should("have.length", 6)
    cy.contains("Completed").click()
    cy.get(".Main_tasks_3yJMj > div:not(:last-child)").should("have.length", 1)
    cy.contains("Active").click()
    cy.get(".Main_tasks_3yJMj > div:not(:last-child)").should("have.length", 5)
    cy.contains("All").click()
  });

  it("должен изменять progress bar", () => {
    cy.get("footer div").eq(0).contains('1/6 left')
    cy.get("button[class = 'RemoveTask_remove_1DC6P']").eq(3).click({ force: true })
    cy.get("footer div").eq(0).contains('1/5 left')
    cy.get("label[class = 'DoneTask_chbEmptyLabel_PMPcw']").eq(4).click({ force: true })
    cy.get("footer div").eq(0).contains('2/5 left')
  });

});
