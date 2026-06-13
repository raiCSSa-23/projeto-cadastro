// Declarar um array vazio
const products=[];
//Declarando a função para adicionar o produto
function addProduct() {
    const productName=document.getElementById('product-name').value;
    const productPrice=document.getElementById('product-price').value;
    /*Verificar se os campos estão preenchidos corretamente*/
    if (productName && productPrice) {
        /* Neste bloco vamos criar um objeto product, para receber a chave e o valor */
        const product={
            name: productName,
            price: productPrice            
        };
        // metodo push para incluir os dados do produto na lista
        products.push(product);
        //atualizar o array com a lista de produtos
        displayProducts();
        //Limpar os campos de entrada;
        document.getElementById('product-name').value="";
        document.getElementById('product-price').value="";
    }
} 
//Criar função para adicionar os produtos e organizar na tabela
function displayProducts(){
    const productList=document.getElementById('product-list');
    productList.innerHTML= ""; //exibir no html
    //incluir linha / duas celula na tabela
    products.forEach(function(product){
        const row= productList.insertRow();
        
        const cell1=row.insertCell(0);
        cell1.textContent=product.name; //acessando o objeto nome do produto

        const cell2=row.insertCell(1);
        cell2.textContent=product.price; //acessando o objeto preco do produto
    });
}
//Capturando o formulário de cadastro:
const productForm= document.getElementById('product-form');
//Adicionando um "escutador de evento dinamicamente"
productForm.addEventListener('submit', function(e) {
    e.preventDefault(); //previne o recarregamento automático da página
    addProduct();
});
