### Ceci est un exercice pour un système de gestion des étudiants construit avec React, l'exercice vise à se familiariser avec react-router

### This is an exercise for a student management system built with React, the exercise is intended to familiarize with react-router

#### 这是一个使用 React 构建的学生管理系统的练习，目的是熟悉 react-router

Info： 

- Les données fournies au frontend par le serveur sont mises en œuvre par JSON Server.

- The data provided to the frontend by the server is implemented by JSON Server.

- 服务器端提供给前端的数据由 JSON Server 实现.

PS: Comment utiliser json-server ?

1. Initialiser le répertoire d'un serveur
   
   ```shell
   npm init -y 
   ```

2. Installer la dépendance json-server localement
   
   ```shell
   npm install json-server 
   ```

3. Créer le fichier de données db.json, par exemple:
   
   ```json
   {
     "students": [
       {
         "name": "Vincent",
         "age": "26",
         "phone": "333-444-555",
         "email": "vincent@gmail.com",
         "education": "master",
         "graduationschool": "Paris I",
         "profession": "commercial",
         "profile": "brillant",
         "id": 1
       },
       {
         "name": "Marie",
         "age": "34",
         "phone": "123-345-678",
         "email": "marie@hotmail.com",
         "education": "licence",
         "graduationschool": "Paris I",
         "profession": "fleuriste",
         "profile": "gentille",
         "id": 3
       },
       {
         "name": "Bruno",
         "age": "42",
         "phone": "131-654-889",
         "email": "bruno@yahoo.com",
         "education": "master",
         "graduationschool": "Paris I",
         "profession": "developpeur",
         "profile": "professionnel",
         "id": 2
       }
     ],
     "classes": [
       {
         "id": 1,
         "name": "class technique",
         "description": "c'est une groupe dynamique"
       },
       {
         "id": 2,
         "name": "class normale",
         "description": "c'est aussi une groupe dynamique"
       }
     ]
   }
   ```

4. Ajoutez la commande suivante dans le fichier package.json
   
   ```shell
   "scripts": {
       "json:server":"json-server --watch db.json"
     }

    Or:

    "scripts": {
       "server":"json-server --watch db.json"
     }
   ```

5. Démarrer le serveur 
   
   Attention: veuillez noter la version de json-server et la version de Node.js requise
   
   ```shell
   npm run json:server

   Or:

   npm run server
   ```
PS:
- 如果某个组件是通过切换路由来进行展示的，那么该组件就是路由组件
- 如果某个组件原本就存在，那么该组件就是一般/普通组件
- 约定俗成：在开发项目里，通常在名为components的文件夹里放置一般/普通组件, 路由组件统一放在名为pages或views的文件夹里
- 该练习是网页端，不用安装整个React Router, 只需使用 react-router-dom (包括`<BrowserRouter>`, `<HashRouter>` 和 `<Link>`)

```shell
 npm install react-router-dom 
```