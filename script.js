// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Search functionality
async function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (!query) return;
    
    try {
        // Enviar pergunta para o n8n
        const response = await fetch("http://localhost:5678/webhook-test/AgentIA", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: query,
                timestamp: new Date().toISOString(),
            }),
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Pergunta: "${query}"\n\nResposta: ${data.response || "Resposta processada com sucesso!"}`);
        } else {
            throw new Error("Erro na resposta do servidor");
        }
    } catch (error) {
        console.error("Erro ao enviar pergunta:", error);
        alert(`Erro ao processar pergunta: "${query}". Tente novamente.`);
    }
    
    // Limpar o campo de pesquisa
    searchInput.value = '';
}


// Read more functionality
function handleReadMore() {
    alert('Artigo completo disponível em breve!');
    console.log('Read more clicked');
}

// Smooth scrolling for navigation links (removed since we now use separate pages)
document.addEventListener('DOMContentLoaded', function() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
        
        if (mobileMenu.style.display === 'block' && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Handle form submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    // Add keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.style.display === 'block') {
                closeMobileMenu();
            }
        }
        
        // Submit search with Enter key
        if (e.key === 'Enter' && document.activeElement === document.getElementById('searchInput')) {
            e.preventDefault();
            handleSearch(e);
        }
    });
});