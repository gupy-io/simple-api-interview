# Simple API Interview
Uma API simples de exemplo que será enviada para pessoas que optarem por realizar nosso projeto de entrevista _front-end_ em casa.

## Dados da API
Todas as requisições serão prefixadas com o seguinte endereço: `http://localhost:8080/api/v1`.

### Pessoa candidata
Operações realizadas pela pessoa candidata.

| Descrição | Verbo | Endereço | Body |
| --------- | ----- | -------- | ---- |
| Criar uma nova conta | `POST` | `/accounts/create-account` | `{ name: String, email: String, password: String }` |
| Se aplica para uma vaga existente | `POST` | `/jobs/apply/{jobId}` | `{ accountId: Number }` |


### Pessoa entrevistadora
Operações realizadas pela pessoa entrevistadora.

| Descrição | Verbo | Endereço | Body |
| --------- | ----- | -------- | ---- |
| Visualiza aplicações nas vagas | `GET` | `/jobs/view-applications/{jobId}` |

### Pessoa recrutadora
Operações realizadas pela pessoa recrutadora.

| Descrição | Verbo | Endereço | Body |
| --------- | ----- | -------- | ---- |
| Publicar uma vaga existente | `PATCH` | `/jobs/publish-job/{jobId}` |
| Criar uma vaga nova | `POST` | `/jobs/create-job` | `{ name: String }` |
| Lista todas as vagas | `GET` | `/jobs/list-all-jobs` |

Caso a pessoa utilize o _software_ Insomnia, ela pode utilizar [esse arquivo](/insomnia.json) para importar as requisições já montadas e definidas.

## Instalação
Siga esses passos para ter a API configurada e executando em sua máquina local:

1. Instalação de dependências

```
npm ci
```

2. Execução do projeto

```
npm start
```
