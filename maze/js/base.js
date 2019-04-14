function makeMaze(size = 10) {
  var data = [];
  var domFrag = new DocumentFragment();
  for (var i = 0; i < size; i++) {
    var line1 = [];
    var tr = document.createElement("tr");
    var domFrag1 = new DocumentFragment();
    for (var j = 0; j < size; j++) {
      var td = document.createElement("td");
      var val;
      if (i === 1 && j === 1) {
        val = 0;
      } else if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        val = -1;
      } else {
        val = Math.random() > 0.7 ? 1 : 0;
      }

      switch (val) {
        case 1:
          td.className = "block";
          break;
        case -1:
          td.className = "wall";
          break;
      }

      line1.push({ val: val, dom: td });
      domFrag1.appendChild(td);
    }
    tr.appendChild(domFrag1);
    domFrag.appendChild(tr);
    data.push(line1);
  }
  return { dom: domFrag, data };
}

function checkPath(path) {
  for (var i = 1; i < path.length; i++) {
    if (
      Math.abs(path[i].y - path[i - 1].y) !== 1 &&
      Math.abs(path[i].x - path[i - 1].x) !== 1
    ) {
      return { isOk: false, node: path[i] };
    }
  }
  return { isOk: true };
}

function makeTarget(arr = []) {
  var pos = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j].val === 0 && !(i === 1 && j === 1)) {
        pos.push({ x: j, y: i, val: arr[i][j] });
      }
    }
  }
  var index = Math.floor(Math.random() * pos.length);
  return pos[index];
}
