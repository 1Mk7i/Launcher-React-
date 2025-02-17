<div class="video-grid scroll">
    <div class="preview">
        <div class="Button">
            <a class="btn btn-primary whiteb" onclick="loadContent('./index.html', 'content1')" href="./index.html">Home</a>
        </div>
    </div>
    <div class="panel">
        <div id="section1" class="sections"></div>
        <div class="descriptionPanel" id="text1">
            <h2>Практикум №1</h2>
            <h2>Завдання 1</h2>
            <h4>07.02.2024</h4>
            <p>Розробити програму, використовуючи функції, розмішені всередині структури, що описує відповідний об’єкт.
                Описати структуру з іменем  TRIANGLE, яка містить координати вершин трикутника. Всередині структури реалізувати функції, що знаходять периметр, площу трикутника; радіус вписаного/описаного кола.</p>
        </div>
        <pre><code id="Prak1OOPnum1" data-code="./src/pages/hometaskPages/OOP-res/tasks/task1.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <div class="imageContainer">
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/task1.png" alt="triangle">
        </div>
    </div>

    <div class="panel">
        <div id="section2" class="sections"></div>
        <div class="descriptionPanel" id="text2">
            <h2>Завдання 2</h2>
            <h4>08.02.2024</h4>
            <p>Розробити програму, використовуючи функції, що реалізують заданий функціонал.</p>
            <p>Описати структуру з іменем  NOTE, яка містить поля:  NAME – прізвище, ім'я; TEL – номер телефону; BDAY – день народження (масив із трьох чисел). 
                Написати програму, що окремими функціями виконує наступні дії:</p>
            <ul style="list-style-type: disc;">
                <li>введення з клавіатури даних в масив BLOCKNOTE, що складається з N змінних типу NOTE;</li>
                <li>виведення на екран інформації про людей, чиї дні народження припадають на місяць, значення якого введено з клавіатури; якщо таких людей немає, то вивести відповідне повідомлення.</li>
            </ul>
        </div>
        <pre><code id="Prak1OOPnum2" data-code="./src/pages/hometaskPages/OOP-res/tasks/task2.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <div class="imageContainer">
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/task2.png">
        </div>
    </div>

    <div class="panel">
        <div id="section3" class="sections"></div>
        <div class="descriptionPanel" id="text3">
        <h2>Лабораторна робота 1</h2>
        <h4>09.02.2024</h4>
            <p>Варіант 5</p>
            <ol>
                <li>Створити структуру, що містить інформацію про Кут (градуси, мінути). Реалізувати власний метод виведення на екран у форматі: ggmm'.  Реалізувати функцію додавання двох кутів.</li>
                <li>Відомості  про видачу екземпляра журналу читачу складаються з назви журналу, номера та прізвища читача. Ввести набір з 10 таких відомостей. Знайти:
                    <ul>
                        <li>по даній назві журналу номера, що видавались та прізвища читачів, що їх брали;</li>
                        <li>для кожного номера заданого журналу кількість його видач.</li>
                    </ul>
                </li>
                <li>визначити, чи є Сидоров читачем, перерахувати видані йому журнали.</li>
            </ol>
        </div>
        <pre><code id="Lab1OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab1.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h4>Завдання 1</h4>
        <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab11.png">
        <h4>Завдання 2</h4>
        <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab12.png">
    </div>

    <div class="panel">
        <div id="section4" class="sections"></div>
        <div class="descriptionPanel" id="text4">
            <h2>Практикум №2</h2>
            <h2>Завдання</h2>
            <h4>15.02.2024</h4>
            <p>Комплексні числа представляють парою дійсних чисел (a,b), де а - дійсна частина, а b - уявна. Реалізувати клас Complex для роботи з комплексними числами. Обов’язково повинні бути присутніми операції:</p>
            <li>додавання add, 		(a,b) + (c,d) = (a+b, c+d);</li>
            <li>віднімання sub, 		(a,b) - (c,d) = (a-b, c-d);</li>
            <li>множення mul, 		(a,b) * (c,d) = (ac-bd, ad+bc);</li>
            <li>ділення div, 			(a,b) / (c,d) = (ac+bd, bc-ad) / (c2+d2);</li>
            <li>порівняння equ, 		(a,b) = (c,d), якщо  (a=c)  та (b=d) ;</li>
            <li>спряжене число conj, 	conj(a,b) = (a, -b).</li>
            </div>
            <h4 style="text-align: center;">Перший спосіб</h4>
            <li>тип даних представити структурою з необхідними полями, а операції реалізуються як зовнішні функції, які отримують об’єкти даного типу в якості аргументів;</li>
            <pre><code id="Prak2OOPnum1" data-code="./src/pages/hometaskPages/OOP-res/tasks/Prak2OOPS1.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P2_Main.png">

            <h4 style="text-align: center;">Другий спосіб</h4>
            <li>як клас із закритими полями, де операції реалізуються як методи класу;</li>
            <pre><code id="Prak2OOPnum2" data-code="./src/pages/hometaskPages/OOP-res/tasks//Prak2OOPMain.cpp" data-function="fetchAndDisplayContent" class="language-c"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P2_Main.png">

            <h4 style="text-align: center;">Третій спосіб</h4>
            <li>інкапсулювати поля класу в незалежній структурі і в ній реалізувати методи Init(), Read(), Display(), toString(); в основному класі повинно бути одне поле даних, представлене об’єктом-структурою.</li>
            <pre><code id="Prak2OOPnum3" data-code="./src/pages/hometaskPages/OOP-res/tasks/Prak2OOPS3.cpp" data-function="fetchAndDisplayContent" class="language-c"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P2_Main.png">
    </div>

    <div class="panel">
        <div id="section7" class="sections"></div>
        <div class="descriptionPanel" id="text5">
            <h2>Лабораторна робота 2</h2>
            <h4>16.02.2024</h4>
            <p>Варіант 5</p>
            <p>1. Реалізувати клас TParser для обчислення арифметичного виразу, заданого текстовим рядком та назвами й значеннями змінних. 
            Клас повинен включати поле з текстовим представленням виразу та масив назв функцій і метод обчислення значення конкретної функції для заданого параметру, кількість значущих цифр після десяткової крапки. 
            Вираз може містити константи, змінні, арифметичні операції, та математичні функції (не менше 5). 
            Методи ініціалізації та зміни властивостей повинні виконувати перевірку на коректність вхідного параметру. 
            Метод обчислення значення виразу присвоює відповідь за вказаною адресою і повертає 0 при успішному обчисленні, або код помилки.</p>
            <p>2. Реалізувати масив виразів, ініціалізувати вказану кількість елементів та порахувати суму значень виразів.</p>
            <pre><code id="Lab2OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab2.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <h4>1 випадок</h4>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab21.png">
            <h4>2 випадок</h4>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab22.png">
            <h4>3 випадок</h4>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab23.png">
        </div>
    </div>

    <div class="panel">
        <div id="section8" class="sections"></div>
        <div class="descriptionPanel" id="text6">
            <h2>Практикум №3</h2>
            <h4>21.02.2024</h4>
            <p><h4>Завдання 1</h4> Реалізувати клас ЧЕРГА, що містить інформацію про надходження на сервер запитів. Інформаційними полями кожного елемента є код користувача та сума оплати. Черга має обмеження на максимальну кількість запитів (статичний масив). Реалізувати додавання запиту в чергу, виконання запиту (вилучення) та проглядання всіх запитів черги. В якості інформаційної моделі черги використати масив (STL не застосовувати).</p>
            <li>В програмі створити декілька екземплярів черг та продемонструвати реалізацію їх обробки.</li>
            <li>Реалізувати сторонню функцію, що здійснює виведення на екран всіх запитів заданої черги.</li>
            <li>Створити масив черг, ініцалізувати їх та відсортувати масив у порядку зростання кількостей запитів в елементах масиву.</li>
            <pre><code id="Prak3OOPnum1" data-code="./src/pages/hometaskPages/OOP-res/tasks/Prak3OOPS1.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P3_1.png">
        </div>
    </div>

    <div class="panel">
        <div id="section9" class="sections"></div>
        <div class="descriptionPanel" id="text7">
            <p><h4>Завдання 2</h4>Реалізувати клас ІСТОРІЯ_ДІЙ, що моделює історію дій в редакторі Photoshop. Інформаційними полями кожного елемента є код графічного шару та назва операції. В якості інформаційної моделі історії_дій використати динамічний масив (STL не застосовувати).  Реалізувати додавання в масив нової операції, відміну(вилучення) та проглядання всіх операції за принципом стеку.</p>
            <li>В програмі створити декілька екземплярів історій дій та продемонструвати реалізацію їх обробки.</li>
            <li>Реалізувати сторонню функцію, що здійснює виведення на екран списку всіх дій в порядку відмінни заданої черги.</li>
            <li>Створити масив історій, ініцалізувати їх та відсортувати масив у порядку зрозстання кількостей записів в елементах масиву.</li>
            <pre><code id="Prak3OOPnum2" data-code="./src/pages/hometaskPages/OOP-res/tasks/Prak3OOPS2.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P3_2.png">
        </div>
    </div>

    <div class="panel">
        <div id="section10" class="sections"></div>
        <div class="descriptionPanel" id="text8">
            <h2>Лабораторна робота 3</h2>
            <h4>25.02.2024</h4>
            <p>Вимоги до реалізації завдання:
            <li>Клас повинен містити конструктор без параметрів;</li>
            <li>Клас повинен містити конструктор, який приймає один параметр для ініціалізації змінної класу;</li>
            <li>Реалізувати конструктор з двома параметрами, що викликає конструктор з одним параметром;</li>
            <li>Реалізувати деструктор класу;</li>
            <li>Реалізація конструкторів та методів повинна здійснюватись поза класом.</li></p>

            <p>Музичний програвач</p>
            <pre><code id="Lab3OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab3.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <div id="section10p"></div>
            <h2>(Лабораторна 5) Файл lab3.h</h2>
            <pre><code id="Lab3OOPh" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab3.h" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        </div>
    </div>

    <div class="panel">
        <div id="section11" class="sections"></div>
        <div class="descriptionPanel" id="text9">
            <h2>Практикум №4</h2>
            <h4>28.02.2024</h4>
            <h4>Завдання:</h4>
            <ol>Спроектуйте клас Product, серед властивостей якого є унікальний 6-значний номер-ідентифікатор. Всі властивості товару в закритій частині.</ol>
            <ol>Додати до класу властивість Keywords, що є динамічним масивом ключових слів для індексації товару при пошуку.  </ol>
            <ol>Створіть порожній конструктор та два конструктори з параметрами,  один з яких є конструктором копіювання.</ol>
            <ol>Для генерації ідентифікатора товару використати статичну змінну та статичний метод.</ol>
            <ol>Реалізувати деструктор класу.</ol>
            <ol>Включити в опис класу сеттери й геттери та інші методи.</ol>

            <h4>В програмі:</h4>
            <ol>Створити динамічний масив товарів.</ol>
            <ol>Реалізувати функції для додавання, редагування та вилучення визначеного товару.</ol>
            <ol>Реалізувати функції для додавання, редагування та вилучення ключових слів товару.</ol>
            <ol>Спроектувати інтерфейс користувача для проведення операцій з масивом товарів.</ol>
            <ol>Реалізувати функцію виведення списку товарів, параметром якої є вказівник на масив.</ol>
            <ol>Реалізувати функцію пошуку товару, параметрами якої є адреса масиву та ідентифікатор товару. Функція повертає об’єкт товару.</ol>
            <ol>Створити функцію фільтрації товарів, параметрами якої є адреса масиву та пошукове слово. Функція повертає масив відібраних товарів за частковим співпаданням назв, або ключових слів для пошуку.</ol>

            <pre><code id="Prak4OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/Prak4OOP.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P41.png">
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/P42.png">
        </div>
    </div>

    
    <div class="panel">
        <div id="section12" class="sections"></div>
        <div class="descriptionPanel" id="text10">
            <h2>Лабораторна №4</h2>
            <h4>03.03.2024</h4>
            <h4>Програвач 2.0</h4>
            <pre><code id="Lab4OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab4.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
            <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab4.png">
            <div id="section12p"></div>
            <h2>(Лабораторна 5) Файл lab4.h</h2>
            <pre><code id="Lab4OOPh" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab4.h" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        </div>
    </div>

    <div class="panel">
        <div id="section13" class="sections"></div>
        <div class="descriptionPanel">
            <h2>Практикум 6</h2>
        </div>
        <h3>Main</h3>
        <pre><code id="Prak5OOPmain" data-code="./src/pages/hometaskPages/OOP-res/tasks/prak5/Prak5OOP.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h3>Point.cpp</h3>
        <pre><code id="Pointcpp" data-code="./src/pages/hometaskPages/OOP-res/tasks/prak5/Point.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h3>Point.h</h3>
        <pre><code id="Pointh" data-code="./src/pages/hometaskPages/OOP-res/tasks/prak5/Point.h" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h3>Vector.cpp</h3>
        <pre><code id="Vectorcpp" data-code="./src/pages/hometaskPages/OOP-res/tasks/prak5/Vector.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h3>Vector.h</h3>
        <pre><code id="Vectorh" data-code="./src/pages/hometaskPages/OOP-res/tasks/prak5/Vector.h" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <h3>Результат</h3>
        <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/prak5.png">
    </div>

    <div class="panel">
        <div id="section14" class="sections"></div>
        <div class="descriptionPanel">
            <h2>Лабораторна 6</h2>
            <h4>15.03.2024</h4>
            <h4>Варіант №5</h4>

            <h5>Порядок виконання.
                <div>
                    <ol>
                        <li>Опрацювати теоретичний матеріал з теми.</li>
                        <li>Виконати завдання, яке складається з двох частин:
                            <ul>
                                <li>дружнього класу;</li>
                                <li>створення дружньої функції.</li>
                            </ul>
                        </li>
                        <li>Скласти програму для розв'язання задачі відповідно до варіанту, реалізувати її на ПК.</li>
                        <li>В головній програмі передавати параметри у вигляді анонімного об’єкту.</li>
                        <li>Завдання, текст програми і результат роботи відобразити у звіті.</li>
                    </ol>
                </div>
            </h5>

            <h4>Завдання</h4>
            <h5><ol></ol>Створити клас Rectangle, який зберігає Декартові координати чотирьох вершин прямокутника, конструктор для ініціалізації закритих змінних класу і відкритий метод класу для обчислення довжини відрізка. Реалізувати: </ol>
            <ol>клас Rectangle1, дружній для класу Rectangle, для обчислення периметра та площі прямокутника, використовуючи закриті дані класу  Rectangle;</ol>
            <ol>функцію, дружню до класу Rectangle, для знаходження координати перетину діагоналей прямокутника.</ol></h4>
        </div>
        <pre><code id="Lab6OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab6.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab6.png">
    </div>

    <div class="panel">
        <div id="section15" class="sections"></div>
        <div class="descriptionPanel">
            <h2>Лабораторна 7</h2>
            <h4>21.03.2024</h4>
            <h4>Завдання</h4>
            <h5>Порядок виконання роботи</h5>
            <ul>
                <li>Для реалізації програмного коду створити два класи: матриця і вектор. У кожному з класів задати конструктори і деструктори. </li>
                <li>Як закриті елементи класів створити динамічні масиви, що зберігають відповідно матрицю або вектор та їх розмірність. Динамічний масив матриці має бути двовимірним, вектора — одновимірним.</li>
                <li>Додати дружні функції множення вектора на матрицю і навпаки для цих двох класів. Як параметри передати об’єкти створених класів.</li>
                <li>Перевантажити створену функцію для множення вектора на число і навпаки з параметром по замовчуванню 1 у першому випадку.</li>
                <li>Перевантажити створену функцію для множення матриці на число і навпаки. </li>
                <li>Перевантажити створену функцію для множення двох матриць (як об’єктів класу матриця).</li>
                <li>Перевантажити створену функцію для множення двох векторів (як об’єктів класу вектор).</li>
                <li>Під час реалізації перевантажених функцій перевірити можливість такого множення (не всі вектори і матриці можна перемножати).</li>
                <li>В основній частині програми продемонструвати роботу переванта- жених функцій.</li>
            </ul>
        </div>
        <pre><code id="Lab7OOP" data-code="./src/pages/hometaskPages/OOP-res/tasks/lab7.cpp" data-function="fetchAndDisplayContent" class="language-cpp"><!-- Код буде вставлено тут --></code></pre>
        <img class="TaskImg" src="./src/pages/hometaskPages/OOP-res/images/lab7.jpg">
    </div>
</div>