# mitso-nodejs-task
Скачивание
```
git clone https://github.com/Kinier/mitso-nodejs-task.git
```
Установить необходимые пакеты
```
npm install
```
# how to start
Для того чтобы запустить программу необходимо в командной строке
набрать команду node index.js
```bash
node index.js 
```
При этом для работы программе обязательно необходимо 
передать параметр *--action* или *-a*, всего доступно
две его вариации
```bash
node index.js --action 'equals'
```
или
```bash
node index.js --action 'diff'
```
Программе можно передать аргументы:

*--input* или *-i*

то есть откуда программа будет читать информацию

и

*--output* или *-i*

то есть куда программа будет записывать информацию
```bash
node js index --input 'source.txt' --output 'destination.txt'
```
При отсутствии файлов для записи и/или считывания информация
будет запрашиваться/выводиться в консоль

