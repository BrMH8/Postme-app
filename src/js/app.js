/* Declaracion de variables globales */
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let Btn_CANCEL_POST;

const showPostModal = () => {
    MODAL_POST.style.display = 'none';
    MODAL_POST.style.display = 'block';

    setTimeout(() => {
        MODAL_POST.style.transform = 'translateY(0)';});       
}

const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)';
}