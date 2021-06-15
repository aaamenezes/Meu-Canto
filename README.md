# Meu Canto

## Descrição

Este projeto foi desenvolvido para fins de experiência para uma startup de São Paulo.  
A parte que me coube foi apenas o front-end, então a plataforma não está totalmente funcional.  
O site Meu Canto é um portal de compra e venda de imóveis.

## Publicação

Você pode conferir como ficou através da [página do projeto](https://aaamenezes.github.io/Meu-Canto/).

## Linguagens utilizadas

### HTML e CSS

Foi utilizado HTML e CSS para construção de todas as páginas.  

### JavaScript

Alguns recursos de interação para exibir/ocultar informações foram feitos com JavaScript.  
Tudo isso contruído de forma pura, sem nenhuma biblioteca adicional (com exceção do Chart.js).

## Principais recursos

### Home

Aqui temos uma caixa de busca como função principal do site, o propósito da empresa e anúncio de alguns imóveis de acordo com as preferências do usuário que estiver logado.

### Entrar

[Página](https://aaamenezes.github.io/Meu-Canto/entrar.html) para fazer login no site.

### Resultados de busca

Essa página é um modelo exibido após o usuário realizar uma [busca por imóveis](https://aaamenezes.github.io/Meu-Canto/resultados.html).

### Criar cadastro

Nessa tela, é possível [criar sua conta](https://aaamenezes.github.io/Meu-Canto/cadastro.html), tanto de vendedor, quanto de comprador.

### Home (vendedor)

Após fazer login, o [vendedor tem sua página inicial](https://aaamenezes.github.io/Meu-Canto/home-vendedor.html) com:

- Anúncios cadastrados
- Visitas agendadas
- Propostas recebidas
- Análises da quantidade de anúncios/visitas/propostas recebidas em formato de gráfico (Chart.js não disponível aqui no Github Pages)
- Serviços prestados pela Meu Canto aos vendedores (fotos profissionais, consultoria de vendas, laudo de avaliação)

### Serviços (vendedor)

Modelo de página com a explicação de cada um dos [serviços oferecidos aos vendedores](https://aaamenezes.github.io/Meu-Canto/servico.html).

### Vender imóvel

Aqui, o formulário pede informações relevantes do [imóvel](https://aaamenezes.github.io/Meu-Canto/cadastrar-imovel.html) para ser cadastrado na plataforma.

### Anúncio

A [página de anúncio](https://aaamenezes.github.io/Meu-Canto/anuncio.html) é um modelo de como os imóveis são apresentados.  
Na parte superior, há uma galeria de imagens (feita apenas com CSS), na direita uma caixa para fazer contato, proposta ou agendar visita com o dono do imóvel.  
A caixa com título "Cadastrar horários de visitação" está disponível apenas para o dono do anúncio cadastrar em quais horários estará disponível para receber visitas.

### Como rodar o projeto no seu computador

1. Faça um clone do projeto em seu computador:

```
git clone https://github.com/aaamenezes/Meu-Canto.git
```

2. Instale as dependências:

```
npm i
```

Ou:

```
yarn
```

3. Inicie o projeto executando o arquivo `index.html`, de preferência com um servidor local. O plugin **Live Server** para o VS Code já é o suficiente.

## Licença

Não se aplica.

## Inspirações

Consultei constantemente o sites do Zap Imóveis e Quinto Andar para obter referências.
