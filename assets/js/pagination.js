document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.getElementById("cardsContainer");
    const paginationContainer = document.getElementById("paginationContainer");
  
    const itemsPerPage = 10; // Quantidade de cards por página
    let currentPage = 1; // Página inicial
    let repositoriesData = []; // Array para armazenar os dados dos repositórios
  
    // Função para carregar a lista de repositórios do GitHub
    async function fetchRepositories() {
      const response = await fetch("https://api.github.com/users/rafaelsantos/repos");
      repositoriesData = await response.json();
      loadPage(currentPage);
    }
  
    // Função para carregar os cards da página especificada
    function loadPage(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, repositoriesData.length);
  
      const cardsHTML = generateCards(startIndex, endIndex);
      cardsContainer.innerHTML = cardsHTML;
  
      currentPage = page;
      updatePagination();
    }
  
    // Função para gerar o HTML dos cards com base nos dados dos repositórios
    function generateCards(start, end) {
      let cardsHTML = "";
      for (let i = start; i < end; i++) {
        const repo = repositoriesData[i];
        cardsHTML += `<div class="col mb-4">
                        <div class="card h-100 shadow-sm">
                          <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <a href="${repo.html_url}" class="btn btn-primary">Ver Repositório</a>
                          </div>
                        </div>
                      </div>`;
      }
      return cardsHTML;
    }
  
    // Função para atualizar os links de paginação
    function updatePagination() {
      const totalPages = Math.ceil(repositoriesData.length / itemsPerPage);
      let paginationHTML = `<ul class="pagination">`;
    
      for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                              <a class="page-link" href="#" onclick="loadPage(${i})">${i}</a>
                            </li>`;
      }
    
      paginationHTML += `</ul>`;
      paginationContainer.innerHTML = paginationHTML;
    }
  
    // Inicializar a lista de repositórios e a primeira página
    fetchRepositories();
});
  