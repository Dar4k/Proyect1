
//This funtions is general for validate the form HTML
function validateForm() {
    /**This is the variable declarations*/
        var objForm=document.getElementById("form_login");
        var elements=objForm.querySelectorAll("input");
        for(let i=0;i<elements.length;i++){
            console.log(elements[i].value);
            if(elements[i].value == ""){
                alert("Valide los datos ingresados");
                elements[i].focus();
            
                return false;
            }
    
        }
    
    }
   // This functions is for get form object and validate

    function getData(id,e) {
    
            var objForm=document.getElementById(id);
            var elements=objForm.querySelectorAll("input");
            var elementsLeng=elements.length;
    
            for(let i=0;i<elementsLeng;i++){
                let element=elements[i];
                if(element.value=="" || element.length==0){
                    alert("Error: Validate Element");
                    element.classList.add('errorInput');
                    e.preventDefault();
                    return false;
                }else{
                    element.classList.remove('errorInput');
                }
            }
            //getDataJson();
            e.preventDefault();
            return  false;
        
        }

    //This functions is for get form object and validate

    
    function clearData(id) {
    
        var objForm=document.getElementById(id);
    
        var elements=objForm.querySelectorAll("input");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.value = "";
        }
    }
    
    
    function formDisabled(id) {
    
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll("input");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.disabled = true;
    
        }
    }
        //funcion para 

    function formEnable(id) {
    
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll("input");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.disabled = false;
    
        }
    }
        //funcion para 
    
    function formEnableEdit(id) {
    
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll(".input_disabled");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.disabled = true;
        }
    }
    
        //funcion para limpiar datos y habilitar campos

    function createUser (id) {
        clearData(id);
        formEnable(id);
        selectEnabled(id)
        showModal();
    }
      //Funcion para editar usuario
    
    function editUser(id) {
        clearData(id);
        formEnable(id);
        formEnableEdit(id);
        selectDisabled(id);
        showModal();
    }
        //Mensaje de confirmacion "borrar"

    function deleteUser(id) {
    let getConfirm=window.confirm("Seguro desea Eliminar?");
       //console.log(getConfirm);
    if(getConfirm){
    alert("OK DELETE");
    }else{
        alert("ERROR DELETE");
    }
    }
    
    function viewUser(id) {
        clearData(id);
        formDisabled(id);
        selectDisabled(id);
        showModal();
    }
    
    function showModal() {
        var myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
        myModal.show();
    }
    
    function hiddenModal() {
        var myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
        myModal.hidden();
    }
        //Bloquear select
    function selectDisabled(id) {
    
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll("select");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.disabled = true;
    
        }
    }
        //Desbloquear select
    function selectEnabled(id) {
    
        var objForm=document.getElementById(id);
        var elements=objForm.querySelectorAll("select");
        var elementsLeng=elements.length;
        
        for(let i=0;i<elementsLeng;i++){
            let element=elements[i];
            element.disabled = false;
    
        }
    }
        //Mostrar datos en consola

        var objForm=document.getElementById("form_login");
        var elements=objForm.querySelectorAll("input");

        
    
