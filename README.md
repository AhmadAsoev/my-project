# React + Vite

1. Создаем реакт проект используя Vite как сборщик
2. Устанавливаем фреймфорк Tailwind на наш проект
3. Установили TypeScript, изначально пакет был собран без него, после изменили тип файлов jsx на tsx, поменяли путь в index.html

# 

1. В Аpp.tsx мы импортировали компонент Product
2. Параметр компонента Product написали как product принимающий массив products(ранее был создан на папке data/producs/ts ) по первому индексу.
3. Cоздали  файл models.ts, описиывающий тип для всех данных которые у нас есть в проекте.  Interface IProduct
4. В Product.tsx написали Interface которая будет описывать параметры этого компонента ProductProps

#

1. В компоненте Product пишем состояние которое  показывает description при клике на кнопку "Show details".
2. Description явялется статичным без изменения, для этого мы пишем условие, если details true, то выведи его, если нет то скрой
3. После клика появляется описание, но после второго клика он не пропадает, для этого меняем состояния передавая туда не просто данные а коллбэк, стрелочную функцию которя принимает параметр prev(предыдущее сотояние) и меняем его на противоположное !prev (не), Функцонал Toggle.
4. Изменяем кнопку, выводить динамически текст через тернарный оператор. details ? 'Hide details: Show Details
5. Изменяем класс (стиль) при клике на кнопку. Создаем название класса btnBgClassName также через тернарный оператор прогоняем Details, если он True желтое, а иначе синее.
6. Создаем массив классов btnClasses, передаем стиль которая является общим для каждой кнопки, и меняем динамику 

# Итерация и как работает циклы в рамках REACT 

1. Используем метод map для итерации массива API и передаем его в качестве параметра в компонент Product
2. Каждый ребенок в списке должен иметь уникальный параметр key 
3. Загрузка данных с сервера backend
4. Установка npm i axios для асинхронного запроса
5. Удаляем ненужный нам статичные данные products, заменяя на данные из сервера (3 пункт)
6. Cоздаем state для индикации загрузки, чтобы клиент знал, что данные грузятся из сервера
7. Cоздаем state для выевление ошибки. Приводим переменную "e" к типу AxiosError. для того чтобы TS "узнал" что ошибка связана с Axios и разрешил доступ к своим свойствам AxiosError например error. message

# Делаем код намного чище

1. Слой работы с логикой вынесли в отдельную папку которую назвали hooks и создали файл тайпскрипт products.ts
2. Создаем Кастомный хук (функцию) с префиксом useProducts() после чего добавляем все состояния которые находятся в products.tsx 
3. Возвращаем объект из всех данных которые нам необходимы (loading, error, products)
4. В компоненте мы работаем с состояниями и со шаблоном 
5. Выносим  loading и error выносим как отдельные компоненты

# Модальное окно 

1. Cоздаем новый  "универсальный" компонент modal.tsx
2. Cоздаем затемнение экрана "БэкДроп"
3. Над затемнением мы создаем само модальное окно
4. Создаем форму которую мы добавляем в модальное окно
5. Для добавление компонента CreateProduct в компоент Modal, мы делаем его закрывающим тегом на не самозакрывающим (в App )
6. Внутренний конент в Modal является компонентом и тайпскрипту нужно указать этот тип, а любой внутренний контент это props с типом children 
7. выводим этот {children} в компоненте Modal
8. Форма по умолчанию перезагружается при обновлении страницы, для этого мы отменяем о поведении по умолчанию preventDevault()
9. Параметр value тесно связан с  обработчиком событии onChange, и без него в Input не получится писать, поскольку мы предостовали параметр value и никак не обрабатываем  onChange, смысл - input связан конкрентно с нашим состоянием, а мы его не меняем то поэтому мы не можем менять и интерфейс 

# Отправление запроса на сервер и создание элемента и положить его в наш массив

1. Отправляем запрос через axios
2. poductData.title = value, меняем поле title которое будет совпадать с value
3. Делаем валидацию, ибо value может быть "пустым" 
4. Каждый раз когда мы заходим в sumbitHandler то мы очищаем ошибку.
5. после того как мы вписали данные, продукт создается
6. Надо закрыть модальное окно
7. После того как успшено был создан продукт вызываем функцию onCreate в дочернем компоненте, тот в свою очередь вызывает коллбэк в родительском компоненте где устанвливает Modal как false, и модалка убирается
8. После чего мы должны изменить состояние наших продукотов Products чтобы перерендерил наш добавленный продукт в массив 
9. При клике на бекдроп модалка убирается
10. Создаем кнопку чтобы вернуть модалку 
11. Создаем useContext чтобы можно было пользоваться этим состоянием из любого компонента(Modal)
12. Оборачиваем Компонент App в ModalContext чтобы все его данные можно было использовать везде

# Маршрутизатор

1. Установка пакета npm i react-route-dom
2. Cоздаем навигацию Route/ Routes Добавляя пути

# Навигация

1. Создаем компонент Navigation 
2. Используем Компонент Ling который был импортирован из пакет react-route-dom
3. В App добавляем Navigation 



