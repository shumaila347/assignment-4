function removeHtmlTags(str) {
    if (str == null  || str == "") {
    return false;
      }
        else {
        str = str.toString();
        return str.replace( /(<([^>]+)>)/g, '');
        }
 }
 document.write(removeHtmlTags('<p><strong><em>Only print this</em></strong></p>'));