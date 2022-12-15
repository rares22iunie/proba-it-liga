
# Proba Tehnica LSAC IT
Made by Rares Doroftei



## Features

- Frontend built using React.js
    - Technologies used: HTML, CSS, JavaScript, React.js, Bootstrap
- Backend built using Node.js
    - Technologies used: Node.js, MongoDB

## Tasks
* Frontend
    - Implementat un Navbar interactiv
    - Creat un Landing Page, cred eu foarte similar cu mockul
    - Login/Register
        - Se face prin rest api al lui firebase
        - Se retin in localStorage token de logare si o proprietate isLoggedIn
        - Afisarea butoanelor de login, logout, signup, este conditionata de proprietatile din locaStorage
    - Formular Upload Imagini
        - Implementat partea de upload imagini printr un dropzone, conditionat sa nu accepte alte fisiere decat cele din cerinta
        - Creat un mic preview sub dropzone a fiserelor ce urmeaza sa fie uploadate
    - Footer create foarte similar cu mockul
    - Responsivitate
        - Toata pagina este facuta cu responsivitate in cap, astfel toate elementele sunt fie resizable fie conditionate de elemente media
        - Navbar pe mobil dispar butoanele si apare un buton pentru un dropdown cu butoanele
* Backend
    - Creat o schema atat pentru memeuri cat si pentru useri
    - Creat toate operatiile CRUD din enunt pentr ruta de memeuri
    - Implementat partea de login a rutei de useri
        - Parola este hashuita
        - Elementele sunt verificate daca exista duplicate
        - Se verifica datele date prin ruta daca nu sunt goale
        - Se verifica emailul
        - Ruta de responsuri cu statusuri de eroare
## Running
- To start Frontend simply type npm i and after npm start
- Pentru logare in Frontend exista un user creat,
    - Username: rares@rares.com
    - Parola: abc123
    - Se pot crea conturi si functioneaza
- To start Backend
    - Backend might also need nodemon to start, run command npm i -g nodemon from backend folder to install nodemon
    - Simply type npm i and after npm start
## Challengeuri
- Frontend
    - Nu imi iesea navbarul pe mobil, asa ca am folosit bootstrap si navbarul din bootstrap
    - Nu mergeau cum trebuie partea de pop up uri ale login si register, asa ca am folosit functia Modal
- Backend
    - Nu stiam de ce nu merge functia de findbyid, asa ca dupa putin research am aflat ca trebuie sa ii pun await, sa o fac asincroana
    - Pentru erori nu stiam sa afisez simultan mai multe, ulterior, dupa proba, am aflat ca trebuie sa creez un obiect in care sa l pun, pe care sa l trimit in response la final
