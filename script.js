const API_URL = "http://localhost:3000/alunos";
const form = document.getElementById("form");
const tableBody = document.getElementById("table-body");
const idField = document.getElementById("id");
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");

async function loadAlunos() {
  const res = await fetch(API_URL);
  const data = await res.json();

  tableBody.innerHTML = data
    .map(
      (student) => `
      <tr>
        <td>${aluno.id}</td>
        <td>${aluno.name}</td>
        <td>${aluno.age}</td>
        <td>
          <button onclick="editAluno(${aluno.id}, '${aluno.name}', ${aluno.age})">✏️</button>
          <button onclick="deleteAluno(${aluno.id})">🗑️</button>
        </td>
      </tr>`
    )
    .join("");
}

// ➕ Criar ou atualizar
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = idField.value;
  const student = {
    name: nameField.value,
    age: Number(ageField.value),
  };

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  }

  form.reset();
  idField.value = "";
  loadAlunos();
});

function editAluno(id, name, age) {
  idField.value = id;
  nameField.value = name;
  ageField.value = age;
}

async function deleteAluno(id) {
  if (confirm("Tem certeza que deseja excluir?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadAlunos();
  }
}

loadAlunos();
