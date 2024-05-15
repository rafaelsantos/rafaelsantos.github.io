const apiUrl = 'https://api.github.com/users/rafaelsantos/repos';

// Variáveis globais para controle da paginação e quantidade de itens por página
let currentPage = 1;
const itemsPerPage = 10;
const projectsContainer = document.getElementById('projectsContainer');
const paginationContainer = document.querySelector('.pagination');

// Função para carregar os cards de projetos a partir dos dados da API do GitHub
function loadProjects(page) {
  currentPage = page;

  // Construir a URL com parâmetros de paginação
  const url = `${apiUrl}?page=${page}&per_page=${itemsPerPage}`;

  // Fazer requisição para a API do GitHub
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let projectsHTML = '';
      data.forEach(project => {
        projectsHTML += `<div class="col mb-4">
                            <div class="card h-100 shadow-sm">
                              <div class="card-body">
                                <h5 class="card-title">${project.name}</h5>
                                <p class="card-text">${project.description}</p>
                                <a href="${project.html_url}" class="btn btn-primary">Ver Repositório</a>
                              </div>
                            </div>
                          </div>`;
      });

      projectsContainer.innerHTML = projectsHTML;
    })
    .catch(error => console.error('Erro ao carregar os projetos:', error));
}

// Função para criar os botões de paginação
function createPaginationButtons() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const totalProjects = data.length;
      const totalPages = Math.ceil(totalProjects / itemsPerPage);

      let paginationHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li class="page-item ${currentPage === i ? 'active' : ''}">
                              <a class="page-link" href="#" onclick="loadProjects(${i})">${i}</a>
                            </li>`;
      }

      paginationContainer.innerHTML = paginationHTML;
    })
    .catch(error => console.error('Erro ao criar os botões de paginação:', error));
}

// Inicialização para carregar os projetos na página 1 e criar os botões de paginação
loadProjects(currentPage);
createPaginationButtons();
