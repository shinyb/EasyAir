"use strict"



window.addEventListener('DOMContentLoaded', function() {
    function movePriceContainer() {
        const bodyWidth = document.body.clientWidth;
        const items = document.querySelectorAll('.item-container');

        items.forEach(item => {
            const priceContainer = item.querySelector('.price-container');
            const consBox = item.querySelector('.cons-box');

            if (bodyWidth < 700 && priceContainer && consBox) {
                consBox.parentNode.insertBefore(priceContainer, consBox.nextSibling);
            } else return
        });
    }

    movePriceContainer(); // Initial positioning

    window.addEventListener('resize', movePriceContainer); // Re-position on window resize
});