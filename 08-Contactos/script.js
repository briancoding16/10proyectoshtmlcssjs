document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const tel = document.getElementById("contactTel").value;

  const listItem = document.createElement("li");
  listItem.textContent = `${name} - ${tel} `;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(deleteBtn);

  document.getElementById("contactList").appendChild(listItem);
});

document.getElementById("searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const contacts = document.querySelectorAll("#contactList li");

  contacts.forEach((contact) => {
    if (contact.textContent.toLocaleLowerCase().includes(searchTerm)) {
      contact.style.display = "";
    } else {
      contact.style.display = "none";
    }
  });
});
