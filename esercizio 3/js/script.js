document.addEventListener("DOMContentLoaded", () => {});

/**
 * se uno tra nome, cognome, email, telefono è vuoto oppure la matricola non è un numero non inviare il form
 */
const validateForm = () => {
    if (validateName() ||
        validateLastName() ||
        validateM ||
        validateEmailPhone())
        event.stopPropagation();
}

/**
 * 
 * @returns true se name == "" false elsewhere
 */
const validateName = () => {
    let name = document.getElementById("name").value;
    const bool = (name == "");
    if (bool)
        alert("riempi il campo nome")

    return bool;
}

/**
 * 
 * @returns true if lastname == "" false elsewhere
 */
const validateLastName = () => {
    let lastName = document.getElementById("surname").value;
    const bool = (lastName == "");
    if (bool)
        alert("riempi il campo cognome")

    return bool;
}

/**
 * 
 * @returns true if m is NaN false elsewhere
 */

const validateM = () => {
    const m = document.getElementById("matricola");
    const bool = (parseInt(m) == NaN);

    if (bool)
        alert("la matricola deve essere un numero");

    return bool;
}

/**
 * 
 * @returns true if email == "" or tel == "" false elsewhere
 */

const validateEmailPhone = () => {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("tel").value;

    const ve = (email == "");
    const vp = (phone == "");

    (ve) ? alert("compila il campo email"): "";
    (vp) ? alert("compila il campo tel"): "";


    return ve || vp;
}