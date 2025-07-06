const guestNameInput = document.getElementById("guestName");
const guestList = document.getElementById("guestList");
const addGuestButton = document.getElementById("addGuest");

function addGuest() {
  const guestName = guestNameInput.value.trim();
  if (guestName === "") {
    alert("Please enter a guest name.");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerText = guestName;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", function () {
    guestList.removeChild(listItem);
  });
  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Confirm";
  confirmButton.addEventListener("click", function () {
    listItem.classList.add("confirmed");
    confirmButton.disabled = true;
    removeButton.disabled = true;
  });
  listItem.appendChild(confirmButton);
  listItem.appendChild(removeButton);
  guestList.appendChild(listItem);

  guestNameInput.value = "";
}

addGuestButton.addEventListener("click", addGuest);
