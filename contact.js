function seterror(id, error) {
    let elem = document.getElementById(id);
    elem.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearerrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function validateform() {
    var return_val = true;
    clearerrors();

    var fname = document.forms['myform']['fname'].value;
    if (fname.length < 3) {
        seterror('fname', '*First Name is too short');
        return_val = false;
    }

   

    var email = document.forms['myform']['femail'].value;
    if (email.length == 0) {
        seterror('iemail', '*Email cannot be empty');
        return_val = false;
    } else {
        var atpos = email.indexOf('@');
        var dotpos = email.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            seterror('iemail', '*Email format is invalid');
            return_val = false;
        }
    }

    var phone = document.forms['myform']['fphone'].value;
    if (phone.length != 10) {
        seterror('iphone', '*Phone number should be 10 digits');
        return_val = false;
    }

    var address = document.forms['myform']['faddress'].value;
    if (address.length < 10) {
        seterror('iaddress', '*Address should be at least 10 characters long');
        return_val = false;
    }

    return return_val;
}
