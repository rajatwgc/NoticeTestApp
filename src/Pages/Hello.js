import React from "react";

function Hello() {
  const currentURL = window.location.href;
  const urlParams = new URLSearchParams(currentURL);
  const shopParam = urlParams.get("shop");

  let extractedShop = "";
  if (shopParam) {
    const matches = shopParam.match(/^([^\.]+)/);
    if (matches && matches.length > 0) {
      extractedShop = matches[0];
    }
  }

  return (
    <div>
      <h2>Hello World!</h2>
      <p>The Current shop is : {extractedShop}</p>
    </div>
  );
}

export default Hello;
