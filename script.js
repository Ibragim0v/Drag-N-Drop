const elEmpties = document.querySelectorAll(".empty");
const elFill = document.querySelector(".fill");

elFill.addEventListener("dragstart", dragStart);
elFill.addEventListener("dragend", dragEnd);

for (const empty of elEmpties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = " empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(elFill);
}
