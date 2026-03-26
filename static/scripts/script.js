// Efeito de scroll suave para os links da navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const translations = {
    pt: {
        title: "Portfólio | Victor G. Ramos",

        navSobre: "Sobre",
        navFormExp: "Formação e Experiência",
        navProjetos: "Projetos",
        navContato: "Contato",
        navServicos: "Serviços",

        tagline: "Desenvolvedor Fullstack",

        heroTitle: "Transformando código em ",
        heroTitlePart2: "experiência",
        heroIntro: "Olá, eu sou ",
        heroAge: "anos. Desenvolvedor focado em construir aplicações escaláveis e interfaces modernas",

        btnProjects: "Ver Projetos",
        btnContact: "Entre em contato",

        titleEducation: "Formação",
        titleExperience: "Experiência",

        tecnologiesTitle: "Tecnologias:",

        edu1Time: "2022 - 2024",
        edu1Course: "Análise e Desenvolvimento de Sistemas",
        edu1Degree: "Curso Superior Completo",
        edu1Item1: "Análise e Elicitação de Requisitos",
        edu1Item2: "Arquitetura de Software e Design Patterns",
        edu1Item3: "Modelagem e Gerenciamento de Banco de Dados",
        edu1Tecnologies: "MySQL, RESTful API, JavaScript, HTML, CSS, C, C# e Java.",

        exp1Time: "1 ano e 3 meses",
        exp1Role: " Desenvolvedor BackEnd @ Conselho Reginal de Engenharia e Agronomia do Distrito Federal",
        exp1Desc: "Trabalhei na manutenção de sistemas legados e no desenvolvimento de novas aplicações server side para o conselho, usando principalmente o framework Laravel.",
        exp1Tecnologies: "PHP, Laravel, PostgreSQL, MySQL, Docker, RESTful API, SOAP API e JavaScript. ",

        exp2Time: "7 meses",
        exp2Role: "Estagiário @ Loja Mundi",
        exp2Desc: "Ajudei no desenvolvimento de estratégias de marketing, trabalhei com web design e na tradução de artigos.",
        exp2Tecnologies: "HTML, CSS, Adobe Photoshop e Microsoft 365.",

        exp3Time: "1 ano",
        exp3Role: "Desenvolvedor Freelancer @ Inovitec Contabilidade",
        exp3Desc: "Trabalhei no desenvolvimento de um website para e-commerce usando WordPress, e criei plugins para esse CMS usando PHP.",
        exp3Tecnologies: "PHP, RESTful API, JavaScript, HTML, CSS e WordPress.",

        titleProjects: "Projetos Selecionados",

        projViewBtn: "Ver Projeto",
        projRepoBtn: "Repositório",
        projDocsBtn: "Documentação",

        proj1Type: "Web Site - Freeelance",
        proj1Desc: "Landing page de alta performance desenvolvida para campanhas de conversão. Além da criação do site, sou responsável pela gestão e otimização das campanhas no Google Ads.",
        
        proj2Type: "Web Site - Freeelance",
        proj2Desc: "Criação de landing page otimizada para vendas e gestão estratégica de tráfego pago via Google Ads. O foco do projeto é a captação de leads qualificados e o aumento da rentabilidade através de ajustes contínuos na campanha.",

        proj3Type: "Laravel Package - Projeto Pessoal",
        proj3Desc: "Uma biblioteca para padronizar o tratamento de exceções em múltiplos projetos Laravel.",
        proj3Tecnologies: "PHP, Laravel, Composer e Docker.",

        proj4Type: "Web Site - Freeelance",
        proj4Desc: "Cartão de visitas digital interativo que centraliza redes sociais e demonstrações de serviços. Um projeto focado em design responsivo e conversão rápida.",

        titleServices: "Serviços",

        servWebTitle: "Desenvolvimento Web",
        servWebDesc: "Criação de sites modernos, responsivos e otimizados para conversão (Landing Pages, Portfólios, E-commerce e mais).",

        servAdsTitle: "Gestão de Tráfego Pago",
        servAdsDesc: "Configuração e monitoramento de campanhas no Google Ads para atrair leads qualificados e aumentar o ROI.",

        servDevTitle: "Soluções Backend",
        servDevDesc: "Desenvolvimento de APIs e bibliotecas para padronização de projetos Laravel e manutenção de sistemas.",

        contactTitle: "Entre em Contato",
        contactDesc: "Escolha seu canal preferido para orçamentos ou dúvidas.",
        contactPhone: "Telefone",

        formTitle: "Se preferir, deixe seu e-mail para contato",
        formName: "Seu Nome",
        formEmail: "Seu E-mail",
        formMessage: "Como posso ajudar?",
        formSuccess: "Sucesso! Mensagem enviada.",
        formError: "Ops! Algo deu errado no envio.",
        formNetworkError: "Erro de rede. Verifique sua conexão.",

        footerNav: "Navegação",
        footerSocial: "Redes Sociais",
        footerDesc: "Desenvolvedor Full Stack & Especialista em Google Ads. Transformando códigos em resultados de negócio.",
        footerRights: "Todos os direitos reservados."
    },

    en: {
        title: "Portfolio | Victor G. Ramos",

        navSobre: "About",
        navFormExp: "Education and Experience",
        navProjetos: "Projects",
        navContato: "Contact",
        navServicos: "Services",

        tagline: "Fullstack Developer",

        heroTitle: "Turning code into ",
        heroTitlePart2: "experience",
        heroIntro: "Hi, I am ",
        heroAge: "years old. Developer focused on building scalable applications and modern interfaces",

        btnProjects: "View Projects",
        btnContact: "Contact Me",

        titleExperience: "Experience",
        titleEducation: "Education",

        tecnologiesTitle: "Tecnologies:",

        edu1Time: "2022 - 2024",
        edu1Course: "Analysis and Systems Development",
        edu1Degree: "Bachelor's Degree",
        edu1Item1: "Requirements Analysis and Elicitation",
        edu1Item2: "Software Architecture and Design Patterns",
        edu1Item3: "Database Design and Management",
        edu1Tecnologies: "MySQL, RESTful API, JavaScript, HTML, CSS, C, C# and Java.",

        exp1Time: "1 year and 3 months",
        exp1Role: "BackEnd Developer @ Conselho Reginal de Engenharia e Agronomia do Distrito Federal",
        exp1Desc: "worked on maintaining legacy systems and developing new server-side applications for the council, primarily using the Laravel framework.",
        exp1Tecnologies: "PHP, Laravel, PostgreSQL, MySQL, Docker, RESTful API, SOAP API and JavaScript.",

        exp2Time: "7 months",
        exp2Role: "Intern @ Loja Mundi",
        exp2Desc: "I assisted in developing marketing strategies, worked with web design, and translated articles.",
        exp2Tecnologies: "HTML, CSS, Adobe Photoshop and Microsoft 365.",

        exp3Time: "1 year",
        exp3Role: "Freelance Developer @ Inovitec Contabilidade",
        exp3Desc: "I developed an e-commerce website using WordPress and created custom plugins for the CMS using PHP.",
        exp3Tecnologies: "PHP, RESTful API, JavaScript, HTML, CSS and WordPress.",

        titleProjects: "Selected Projects",

        projViewBtn: "View Project",
        projRepoBtn: "Repository",
        projDocsBtn: "Docs",

        proj1Type: "Web Site - Freeelance",
        proj1Desc: "High-performance landing page developed for conversion-focused advertising. In addition to web development, I manage and optimize Google Ads campaigns.",

        proj2Type: "Web Site - Freeelance",
        proj2Desc: "Sales-optimized landing page creation and strategic paid traffic management via Google Ads. The project focuses on capturing qualified leads and increasing profitability through continuous campaign adjustments.",

        proj3Type: "Laravel Package - Personal Project",
        proj3Desc: "A library to standardize exception handling across multiple Laravel projects.",
        proj3Tecnologies: "PHP, Laravel, Composer and Docker.",

        proj4Type: "Web Site - Freeelance",
        proj4Desc: "Interactive digital business card that centralizes social media and service showcases. A project focused on responsive design and quick conversion.",

        titleServices: "Services",

        servWebTitle: "Web Development",
        servWebDesc: "Creation of modern, responsive, and optimized websites for conversion (Landing Pages, Portfolios, E-commerce and more).",

        servAdsTitle: "Paid Traffic Management",
        servAdsDesc: "Setup and monitoring of campaigns on Google Ads to attract qualified leads and increase ROI.",

        servDevTitle: "Backend Solutions",
        servDevDesc: "Development of APIs and libraries for standardizing Laravel projects and maintaining systems.",

        contactTitle: "Contact Me",
        contactDesc: "Choose your preferred channel for quotes or questions.",
        contactPhone: "Phone Number",

        formTitle: "If you prefer, leave your email for contact",
        formName: "Your Name",
        formEmail: "Your E-mail",
        formMessage: "How can I help?",
        formSuccess: "Success! Message sent.",
        formError: "Ops! Something went wrong with the submission.",
        formNetworkError: "Network error. Please try again later.",

        footerNav: "Navigation",
        footerSocial: "Social Media",
        footerDesc: "Full Stack Developer & Google Ads Specialist. Turning code into business results.",
        footerRights: "All rights reserved."
    }
};

function setLanguage(lang) {
    // Salva a preferência do usuário no navegador
    localStorage.setItem('preferredLang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // NOVA LÓGICA: Traduz os Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', translations[lang][key]);
    });
}

// Ao carregar a página, verifica se já existe uma língua salva ou usa PT
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    setLanguage(savedLang);
});


const form = document.getElementById("my-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    
    const data = new FormData(e.target);
    
    fetch(e.target.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert(translations[savedLang].formSuccess);
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert(translations[savedLang].formError);
                }
            })
        }
    }).catch(error => {
        alert(translations[savedLang].formNetworkError);
    });
});