# React + Vite

1. Создаем реакт проект используя Vite как сборщик
2. Устанавливаем фреймфорк Tailwind на наш проект
3. Установили TypeScript, изначально пакет был собран без него, после изменили тип файлов jsx на tsx, поменяли путь в index.html

# 

1. В Аpp.tsx мы импортировали компонент Product
2. Параметр компонента Product написали как product принимающий массив products(ранее был создан на папке data/producs/ts ) по первому индексу.
3. Cоздали  файл models.ts, описиывающий тип для всех данных которые у нас есть в проекте.  Interface IProduct
4. В Product.tsx написали Interface которая будет описывать параметры этого компонента ProductProps