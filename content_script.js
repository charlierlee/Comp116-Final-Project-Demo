/***************************************
 *
 *      content_script.js
 *      by Gregory Pickart
 *      May 3, 2018
 *
 *      Script for Comp116 Final Project demonstration chrome extension
 *      which disguises the real purpose of the extension. Replaces every 
 *      instance of 'Nicolas Cage' with 'God' in order to trick the end user
 *      into thinking the extension is an innocent, silly word replacement
 *      extension.  
 *
 *      CREDIT:
 *      This code is a modified version of the core code of the chrome
 *      extension entitled 'Cloud to Butt Redux'. The original project can 
 *      be found at:
 *               
 *      https://github.com/Techjar/cloud-to-butt
 *      
 *      
 ***************************************/

/*************************
 *
 *      Slightly modified code from: https://github.com/Techjar/cloud-to-butt
 *
 *************************/

walk(document.body);
document.title = replaceText(document.title);

var observer = new MutationObserver(function(mutations) {
        mutations.reduce(function(acc, mutation){
                Array.prototype.push.apply(acc, mutation.addedNodes);
                return acc;
        }, []).forEach(walk);
});
observer.observe(document.body, {childList: true, subtree: true});

function walk(node) 
{
        // I stole this function from here:
        // http://is.gd/mwZp7E
        
        var child, next;

        switch ( node.nodeType )  
        {
                case 1:  // Element
                case 9:  // Document
                case 11: // Document fragment
                        child = node.firstChild;
                        while ( child ) 
                        {
                                next = child.nextSibling;
                                walk(child);
                                child = next;
                        }
                        break;

                case 3: // Text node
                        if(validText(node)) {
                                modifyText(node);
                        }
                        break;
        }
}

function validText(node) {
        return node.parentElement != null 
                && node.parentElement.tagName.toLowerCase() != "script" 
                && node.parentElement.tagName.toLowerCase() != "style" 
                && node.parentElement.tagName.toLowerCase() != "textarea" 
                && node.parentElement.contentEditable != "true";
}

function modifyText(textNode) {
        var text = textNode.nodeValue;
        textNode.nodeValue = replaceText(text);
}

/*************************
 *
 *      Main modification: Replaces instances of 'Nicolas Cage' with 'God'
 *
 *************************/

function replaceText(text) {
        text = text.replace(/\bNicolas Cage\b/g, "God");
        text = text.replace(/\bNicolas cage\b/g, "God");
        text = text.replace(/\bnicolas Cage\b/g, "God");
        text = text.replace(/\bnicolas cage\b/g, "God");
        text = text.replace(/\bnic cage\b/g, "God");
        text = text.replace(/\bNic Cage\b/g, "God");
        text = text.replace(/\bnic Cage\b/g, "God");
        text = text.replace(/\bNic cage\b/g, "God");
        text = text.replace(/\bNicolas Kim Coppola\b/g, "God");
        return text;
}