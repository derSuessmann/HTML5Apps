document.addEventListener("DOMContentLoaded", function() {

  var
    data = [
      ['Zustand', 'Ereignis 1', '', 'Ereignis 2', ''],
      ['', 'Folgezustand', 'Aktion', 'Folgezustand', 'Aktion'],
      ['start', 'start', 'nichts', 'start', 'nichts']
    ],
    container1 = document.getElementById('table');

  hot1 = new Handsontable(container1, {
    data: data,
    startRows: 5,
    startCols: 5,
    minSpareRows: 1,
    mergeCells: [
      {row: 0, col: 0, rowspan: 2, colspan: 1},
      {row: 0, col: 1, rowspan: 1, colspan: 2},
      {row: 0, col: 3, rowspan: 1, colspan: 2}
    ]
  });

  function addNewState(event) {
    var newStateText = document.getElementById("newState").value;

    if (newStateText === "test") {
      alert("Zustand gibt es bereits");
    }

    hot1.alter("insert_row");

  }
  var addNewStateButton = document.getElementById("addNewState");
  addNewStateButton.addEventListener("click", addNewState);

  function addNewEvent(event) {
    var newEventText = document.getElementById("newEvent").value;

    if (newEventText === "test") {
      alert("Ereignis gibt es bereits");
    }

    hot1.alter("insert_col", null, 2);
    var l = hot1.mergeCells.length;
    hot1.mergeCells.push({row: 0,
      col: hot1.mergeCells[hot1.mergeCells.length-1].col + 2,
      rowspan: 1,
      colspan: 2});
  }
  var addNewEventButton = document.getElementById("addNewEvent");
  addNewEventButton.addEventListener("click", addNewEvent);


});
