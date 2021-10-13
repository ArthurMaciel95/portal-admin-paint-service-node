# portal-admin-paint-service-node


### BACKLOG

  estrutura CLIENTE:
  
  ```json 
  
    {
      "username":"Arthur Rocha",
      "email":"arthurnmrocha@gmail.com",
      "cpf":"15931601782",
      "status":"late",
      "created_at":"2021-10-11 21:49:08",
      "updated_at":"2021-11-11 22:49:08",
      "payment_method":"credit card",
      "company":"Zubilei eireli LMTD",
      "photo":"data:image/jpeg;base64, LzlqLzRBQ...",
      "adress":{
        "cep":"22710-244",
        "district":"Ibirapuera",
        "additional_infomation":"perto do bar do zé",
        "city":"São paulo"
      }
    }
  
  ```
  
  variação do 'status' : late - pending - received ( default: pending ) 
  
  variação do payment_method: credit - debit - money ( select frontend)
  
- [ ] criar endpoint de api que lista todos os clientes
  
  <p>GET: {{address}}/client/list</p>

- [x] criar endpoint que mostra somente um cliente
  
  <p>GET: {{address}}/client/:id/show-user</p>

- [x] criar endpoint que adiciona um novo cliente
  
  <p>POST: {{address}}/client/create</p>

- [ ] criar endpoint que edita as infomarções de um cliente
  
  <p>PUT: {{address}}/client/:id/edit</p>
  
- [ ] criar endpoint que lista produtos comprados de um cliente
  
  <p>GET: {{address}}/client/products</p>
  
  

  
- [ ] Utilizar JWT para autenticação



## Produtos

```json 
  
    {
      "name":"Tinta Suvinil #494942",
      "created_at":"2021-10-11 21:49:08",
      "updated_at":"2021-11-11 22:49:08",
      "brand":"Suvinil cores",
      "photo":"data:image/jpeg;base64, LzlqLzRBQ...",
      "manufacturer":"Suvinil"
    }
  
  ```

- [ ] criar rota de api que insere produtos.
  <p>POST: {{address}}/product</p>
  
- [ ] criar endpoint que mostra só um produto
  <p>GET: {{address}}/product/:id</p>
  
- [ ] criar rota de api que cria um produto.
  <p>PUT: {{address}}/product/:id/create</p>

- [ ] criar rota de api que edita um produto.
  <p>PUT: {{address}}/product/:id/edit</p>
