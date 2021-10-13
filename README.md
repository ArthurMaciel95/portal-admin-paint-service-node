# portal-admin-paint-service-node


### BACKLOG

  estrutura CLIENTE:
  
  ```json 
  [
    {
      "uuid":"5594079c-4c21-4522-a578-f3d97da2d1dc",
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
  ]
  ```
  
  variação do 'status' : late - pending - received
  
  variação do payment_method: credit - debit - money
  
- [ ] criar endpoint de api que lista todos os clientes
  GET:
  {{url}}/client/list

- [x] criar endpoint que mostra somente um cliente
  GET:
  {{url}}/client/:uuid/show-user

- [x] criar endpoint que adiciona um novo cliente
  POST:
  {{url}}/client/create-user

- [ ] criar endpoint que edita as infomarções de um cliente
  PUT:
  {{url}}/client/:uuid/edit-user
