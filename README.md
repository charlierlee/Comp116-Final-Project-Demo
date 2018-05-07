# Comp116 Final Project Demonstation - Autofill Sniffing Chrome Extension

This chrome extension is a demonstration of autofill sniffing for the Comp116 final project. The extension hides itself as a silly word replacement utility, but in the background injects a hidden autofill form into every webpage and checks for autofilled content.

## Getting Started

### Prerequisites

Updated Chrome or Firefox browser.

Clone the repository or simply download the zip. Then follow the instructions below for the browser you are using. WARNING: This will temporarily install the extension in developer mode for each browser. It is recommended to disable the extension after using the demo.

### Chrome
 * Navigate to chrome://extensions.
 * Enable Developer Mode with the switch in the top right corner.
 * Click the LOAD UNPACKED button, navigate to where you downloaded the project directory, and select the 'extension' folder.

### Firefox
 * Navigate to about:debugging.
 * Click "Load Temporary Add-on"
 * Open the project directory and select any file inside the 'extension' folder.

## Testing

The extension on the surface will replace any instance of 'Nicolas Cage' with 'God'. Underneath the surface however it injects a hidden form which looks for autofilled content. To begin, make sure either autofill is enabled on your browser of choice or you are using a password manager with autofill.

### Getting Autofilled content

Navigate to any webpage for which you have saved credentials, and open the developer tools on your browser (e.g. Ctrl-Shift-i on Chrome). Navigate to the console view. If you are using Chrome's built in autofill, you must interact with the page, otherwise the autofill feature on your password manager should trigger the extension's script. In the console, you should see: 

 ```
 Field: autofill_email Value: [email]
 Field: autofill_email Value: [password]
 ```

With the autofilled email and password. 

For a dummy site to test this functionality, visit my [demo page](https://gregpickart.xyz/security.html)

## Authors

* **Gregory Pickart**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Techjar's [Cloud-to-Butt Redux](https://github.com/Techjar/cloud-to-butt) served as a base for the text replacement code