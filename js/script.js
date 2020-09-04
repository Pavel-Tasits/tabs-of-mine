'use strict';

window.addEventListener('DOMContentLoaded', () => {

    /* навешиваем на переменные классы */
    const tabs = document.querySelectorAll('.tabs__btn'),
          tabsContent = document.querySelectorAll('.tabs__img'),
          tabsParent = document.querySelector('.tabs__buttons');

    /* функция скрытия контента (картинок) */
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabs__btn_active');
        })
    };

    /* функция показа определенного контента (i) (картинок) */
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabs__btn_active');
    };

    hideTabContent();
    showTabContent();

    /* обработчик события клика по меню */
    tabsParent.addEventListener('click', (event) => {
        const target = event.target; /* event.target в переменную, чтобы постоянно использовать быстро */

        if (target && target.classList.contains('tabs__btn')) { /* проверка, туда ли кликнул пользователь */
            tabs.forEach((item, i) => { /* перебор элементов (item) в меню */
                if (target === item) { /* если клик туда, то скрыть вечь контент показать нужный (i) */
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

});