function validateForm(form) {
 if (!form.name.value) {
     alert('El nombre es obligatorio');
     return false;
 }
 return true;
}
