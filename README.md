# portal-admin-paint-service-node


<<<<<<< HEAD
### BACKLOG

  estrutura CLIENTE:
  
  ```json 
  
    {
      "username":"Arthur Rocha",
      "birhdate":"1995-23-09 12:49:08",
      "email":"arthurnmrocha@gmail.com",
      "cpf":"15931601782",
      "status":"late",
      "created_at":"2021-10-11 21:49:08",
      "updated_at":"2021-11-11 22:49:08",
      "payment_method":"credit card",
      "company":"Zubilei eireli LMTD",
      "photo":"data:image/jpeg;base64, LzlqLzRBQ...",
      "address":{
        "cep":"22710-244",
        "district":"Ibirapuera",
        "additional_infomation":"perto do bar do zé",
        "city":"São paulo"
      },
      "product":[
      "4468146154514354681",
      "4184894336546498498",
      "7788482492882428298",
      "84d48w9819283921929"
      ]
    }
  
  ```
  
  variação do 'status' : late - pending - received ( default: pending ) 
  
  variação do payment_method: credit - debit - money ( select frontend)
  
- [x] criar endpoint de api que lista todos os clientes
  
  <p>GET: {{address}}/client/list</p>

- [x] criar endpoint que mostra somente um cliente
  
  <p>GET: {{address}}/client/list/:id</p>

- [x] criar endpoint que adiciona um novo cliente
  
  <p>POST: {{address}}/client/create</p>

- [x] criar endpoint que edita as infomarções de um cliente
  
  <p>PUT: {{address}}/client/edit/:id</p>
  
- [ ] criar endpoint que lista produtos comprados de um cliente
  
  <p>GET: {{address}}/client/products/:id</p>
  
  

  
- [ ] Utilizar JWT para autenticação



## Produtos

```json 
  
    {
      "name":"Tinta Suvinil #494942",
      "price":4000,
      "created_at":"2021-10-11 21:49:08",
      "updated_at":"2021-11-11 22:49:08",
      "brand":"Suvinil cores",
      "photo":"data:image/jpeg;base64, LzlqLzRBQ...",
      "manufacturer":"Suvinil"
    }
  
  ```

- [x] criar rota de api que insere produtos.
  <p>POST: {{address}}/product/create</p>
  
- [x] criar rota de api que mostra só um produto
  <p>GET: {{address}}/product/:id</p>
  
- [x] criar rota de api que deleta um produto.
  <p>DELETE: {{address}}/product/delete/:id</p>

- [x] criar rota de api que edita um produto.
  <p>PUT: {{address}}/product/edit/:id</p>
  
  
  
  
  ## Usuários
  
  
  
```json 
  
    {
      "name":"Paulo dos santons",
      "email":"paulodossantos@gmail.com",
      "created_at":"2021-10-11 21:49:08",
      "updated_at":"2021-11-11 22:49:08",
      "password":"$2a$12$g0QfdhJQqHq3pgbH5Dsgg.XHUWCjNAbN2rnsFPrrTglIo6hlf1h7G$2a$12$g0QfdhJQqHq3pgbH5Dsgg.XHUWCjNAbN2rnsFPrrTglIo6hlf1h7G",
      "password_hash":"$2a$12$g0QfdhJQqHq3pgbH5Dsgg",
    }
  
  ```
  
  ### register
  
  
- [x] criar rota de api que cadastra um novo USER.
  <p>POST: {{address}}/user/register</p>
  
- [x] VERIFICAR SE OS DADOS ENVIADOS BATEM COM QUE É ESPERADO.
- [x] VERIFICAR SE EMAIL JÁ E CADASTRADO
- [ ] VERIFICAR SE SENHA ATENDE OS REQUISITOS 
  <p>password >= 6</p>
  <p>password >= 1 caracteres especiais</p>
  <p>password >= 1 letra maiscula</p>
  
  ### login:
  
- [x] criar rota de api que edita um produto.
  <p>POST: {{address}}/user/login</p>
  
  validação:
  
- [x] VERIFICAR SE O EMAIL EXISTE
- [x] VERIFICAR SE OS DADOS ENVIADOS BATEM COM QUE É ESPERADO.
- [x] VERIFICAR SE A SENHA E A MESMA DO BD.
  
  
  
  
  
=======
> npm install
> npm start ou npm run dev
>>>>>>> development
