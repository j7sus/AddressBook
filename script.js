// Método que nos permite ejecutar - [1]
$(document).ready(function() {

    // Función on() jquery adjunta una función manejadora de eventos - [2]
    $("#add-contact").on("click", function() {

        // Obtiene los valores a travez de los elementos id.
        var name = $("#name").val();
        var surname = $("#surname").val();
        var phone = $("#phone").val();
        var address = $("#address").val();

        // Comprueba si hay valores, crea el elemento lista.
        // Método $("<tag></tag>") crea el elemento <li> y se le asigna el texto .text() - [3]
        if (name && surname && phone && address) {
            
            
            var contact = $("<li></li>");
            var contactButton = $("<button></button>").text(name + " " + surname).css("backgroundColor", "#8d85a1").css("border", "none").css("color", "#f2f2f7").css("cursor", "pointer");
            
            // Crea un <div> contenedor para la full info que esta hide() oculto inicialmente. 
            var fullName = $("<div></div>").text("|" + " " + phone + " " + "|" + " " + address + " " + " ").hide();
            
            // Da funcionabilidad al botón para mostrar la full info, dando click al contacto.
            contactButton.on("click", function() {
                fullName.toggle();
            });

            // Crea un elemento span que actua como un botón para eliminar.
            // En jquery el metodo .css() aplica estilos en línea (no buena practica, pero no se como hacerlo desde .css).
            // Hay veces que tarda el boton delete en cargar
            var deleteButton = $('<span class="material-symbols-outlined delete-button">delete</span>').css("cursor", "pointer").css("color", "#f2f2f7").css("font-size", "13px").css("padding-left", "5px");
            

            // Manejador de eventos. Crea el botón que elimina al contacto [4]
            deleteButton.on("click", function() {
                contact.remove();
            });

            // Método .append() [5]
            contact.append(contactButton);
            contact.append(fullName);
            contact.append(deleteButton); // Se añade el boton borrar al final, que brorra el elemento <li>


            $('#contact-list').append(contact); // Se añade el nuevo contacto a la lista.

            // Se vacia los valores asignando una cadena vacía.
            $('#name').val('');
            $("#surname").val('');
            $("#phone").val('');
            $("#address").val('');
        }

    });

    // Funcion filtrado / busqueda - [6] 
    $('#search').on('input', function() {
        var contacts = $(this).val().toLowerCase();

        $('#contact-list li').each(function() {
            var text = $(this).text().toLowerCase();
            $(this).toggle(text.includes(contacts));
        });

    });
});

/**
 * SRC:
 * 
 * [1]
 * https://www.w3schools.com/jquery/jquery_syntax.asp
 * 
 * [2]
 * https://www.w3schools.com/jquery/jquery_events.asp
 * https://www.w3schools.com/jquery/event_on.asp
 * 
 * [3]
 * https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_after2
 * https://www.w3schools.com/jquery/jquery_dom_add.asp
 * https://www.w3schools.com/jquery/jquery_examples.asp
 * https://www.geeksforgeeks.org/how-to-add-and-remove-html-attributes-with-jquery/
 * 
 * [4]
 * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events
 * https://www.w3schools.com/jquery/html_remove.asp
 * https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events
 * https://lenguajejs.com/javascript/eventos/addeventlistener/
 * 
 * [5]
 * https://api.jquery.com/append/
 * https://www.w3schools.com/jquery/html_append.asp
 * 
 * [6]
 * https://www.w3schools.com/JQuery/jquery_filters.asp
 * https://www.w3schools.com/JQuery/tryit.asp?filename=tryjquery_filters_list 
 * 
 * + fuentes:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 * https://api.jquery.com/
 * https://developer.mozilla.org/en-US/docs/Web/Events
 * 
 */