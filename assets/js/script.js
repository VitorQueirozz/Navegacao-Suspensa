//Pegar o click do link Features e Company pra aparecer a Modal.
const linkFeatures = document.querySelector('#linkFeatures')
const linkCompany = document.querySelector('#linkCompany')

//Pegar o botao de Abrir e Fechar meu Mobile
const botaoMenu = document.querySelector('.icon-menu') 
const botaoClose = document.querySelector('.icon-close')

function ativarPopFeatures() {
    let featuresModal = document.querySelector('.features-modal')
    let iconBaixoUm = document.querySelector('.iconBaixoUm')
    featuresModal.classList.toggle('ativo')
    iconBaixoUm.classList.toggle('ativo')

    let linksMenuMobileFeature = document.querySelector('.links-Menu-Mobile-Feature')
    linksMenuMobileFeature.classList.toggle('ativo')
}

function ativarPopCompany() {
    let companyModal = document.querySelector('.company-modal')
    let iconBaixoDois = document.querySelector('.iconBaixoDois')
    companyModal.classList.toggle('ativo')
    iconBaixoDois.classList.toggle('ativo')

    let linksMenuMobileCompany = document.querySelector('.links-Menu-Mobile-Company')
    linksMenuMobileCompany.classList.toggle('ativo')
}

//Ativa o menu mobile e a fade
function aitvarMenuMobile() {
    let navegacao = document.querySelector('.navegacao')
    let fade = document.querySelector('.fade')
    navegacao.classList.add('ativo')
    fade.classList.add('ativo')

    //Fechar os links que foram abertos no modo desktop dentro do menu mobile
    let linksMenuMobileFeature = document.querySelector('.links-Menu-Mobile-Feature')
    linksMenuMobileFeature.classList.remove('ativo')

    let linksMenuMobileCompany = document.querySelector('.links-Menu-Mobile-Company')
    linksMenuMobileCompany.classList.remove('ativo')
}

//Desativa o menu mobile e a fade
function desativarMenuMobile() {
    let navegacao = document.querySelector('.navegacao')
    let fade = document.querySelector('.fade')
    navegacao.classList.remove('ativo')
    fade.classList.remove('ativo')

    //Fechar os links que estivem abertos quando apertar o botao de close e sair do menu mobile, quando entrar de novo no menu os links vao estar fechados de novo
    let linksMenuMobileFeature = document.querySelector('.links-Menu-Mobile-Feature')
    linksMenuMobileFeature.classList.remove('ativo')

    let linksMenuMobileCompany = document.querySelector('.links-Menu-Mobile-Company')
    linksMenuMobileCompany.classList.remove('ativo')
}

//Botoes de ativar Modal no modo Desktop
linkCompany.addEventListener('click', ativarPopCompany)
linkFeatures.addEventListener('click', ativarPopFeatures)

//Botoes de abrir e fechar menu mobile
botaoMenu.addEventListener('click', aitvarMenuMobile)
botaoClose.addEventListener('click', desativarMenuMobile)
