// Set up listener to listen for messages from background
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //console.log("request " + request.exec + " received");
    if (request.exec == "onepagify")
    {
      onepagify();
      sendResponse({done: "done"});
    }
  });

// Iframe
function onepagify() {
  var elemDiv = document.createElement('iframe');
  elemDiv.src = "/";
  //elemDiv.innerHTML = "<iframe SRC='/'> If you can see this, your browser doesn't understand IFRAME. However, we'll still <A HREF='hello.html'>link</A> the file. </iframe>";
  elemDiv.style.cssText = 'border:none; padding: 0; margin: 0; width: 100%; height: 100%;';
  document.body.appendChild(elemDiv);
  //setIframeHeight(elemDiv);
}

function setIframeHeight(ifrm) {
  var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
  ifrm.style.visibility = 'hidden';
  ifrm.style.height = "10px"; // reset to minimal height ...
  // IE opt. for bing/msn needs a bit added or scrollbar appears
  ifrm.style.height = getDocHeight( doc ) + 4 + "px";
  ifrm.style.visibility = 'visible';
}

function getDocHeight(doc) {
  doc = doc || document;
  // stackoverflow.com/questions/1145850/
  var body = doc.body, html = doc.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight );
  return height;
}