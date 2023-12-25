// ==UserScript==
// @name         Download PDF Directly
// @namespace    https://www.yeslu.cn/
// @version      1.1
// @description  Download PDF directly in some publishers' website, such as Wiley, Springer, etc.
// @author       Chandler-Lu
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM7SURBVHic7Zo7aBVBFEBPviIWSWE0Pn9oo4XoUyIq2GujWIiNEDDgt7C10CJoY2uppdgIgkXULlU0SjAxQlCwMDEiKlFIAkIwLz6Lu4ubzX5m35ud2TznwCVvd+dz753/nYDD4XA4HA6HGTYAN4HPntzy3jU8O4A7wC+gGpIF4D6wy5p2OVJGjFtkpeFhWQIGgMNWNNXMUcSYNKPj5DlwAmgyrXg9tAJngXGSjZsErnoymZJ23Cuz1aAdmVkHXAA+kGzMW6AXaAvkbUZaeiQl7xRwDejI25gsdAH9wA/0dGd/2PxJKGsOmUxLWi3JSNKMrmNCU5k4rawcphXL29HKqMzoeXZN3UNNiSJOTvVMtsWqpE5ya5xTpHezQeAYxdigNCG6DJKs8xJwW6XArzEFVICHQI9W9fXSg+hYId6GSJoDv6s5KmibFpVEJ2nMIeCLEo00CdbkgKyVTFHcZbAuBwRZrRshbQ7wKacoUMX8VtiXqK2wdgdEFZq09uZ5GFIxzogD+rFzHC6MA8BOQKRQDvAxGRIrpAOC5B0ULbwDfPIKi68aB/jovhhZdQ7w8a/Gpj2p9WpMmwOyHmrCBdk6FKnooaRrc9TL/wnnANsK2MY5wLYCtsnqgPnQ82ldimTgTOh5zmTlT1m+tlaAu8BWA3VvA+6xMvI7EJM+l43QIaK3tRVPkXPAJl2VIRGmPuAJ0SHvReBgKE8bcDki7UUiosO1bGR6kZZYE/O9CnwExpAj8Cdk1/cN6a6/+ddtO4B272830srbgX3AAWBngo4LwHngQeBdCXgEHInJMwYcB2YS7FOiDLyj9tNevTIB7A3p1AYMK+QdQZxeN34w45VBw98QH46P6vZx0qfDAUH2AzcQZ2SJ5aXJIvASuI70uiSGQnkfI8NqC/As9G3Iz5THYWYtsAdxym5gsycbgU5kIur00s4icYBZ4DvwxZP3SGtPIGNdhRlgfeC52ysTZJWaDnz7GUrbEMyxvJW7A99KoW9G9w6mCN8RDiBOKLEyPDdsScdcuYT63HLFko650gK8Jt34UTQtg0Wki+Q7hlEs/4+hCdqRdX4IubWaB14g3b5hW97hcDgcDkd2/gKhTwWMOjHCBQAAAABJRU5ErkJggg==
// @match        *://*.onlinelibrary.wiley.com/doi/*
// @homepageURL  https://github.com/Chandler-Lu/rabbit-script
// @supportURL   https://github.com/Chandler-Lu/rabbit-script/tree/main/DownloadPdfDirectly
// @updateURL    https://raw.githubusercontent.com/Chandler-Lu/rabbit-script/main/DownloadPdfDirectly/DownloadPdfDirectly.user.js
// @downloadURL  https://raw.githubusercontent.com/Chandler-Lu/rabbit-script/main/DownloadPdfDirectly/DownloadPdfDirectly.user.js
// ==/UserScript==

(function () {
  "use strict";

  var pdf_link = document.evaluate(
    '//*[@id="article__content"]/div[3]/nav/div/div[2]/div[1]/a',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (pdf_link && pdf_link.href) {
    pdf_link.href = pdf_link.href.replace("epdf", "pdfdirect") + "?download=true";
  }
})();
