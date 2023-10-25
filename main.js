const itens = {
    Papel: {
        consumoAguaTexto: "Aproximadamente 3 a 15 litros por quilo."},
    Banana: {
        consumoAguaTexto: "Aproximadamente 160 litros de água."},
    Chocolate: {
        consumoAguaTexto: "Aproximadamente 17.000 litros de água por quilo"},
    Algodão: {
            consumoAguaTexto: "Aproximadamente 10.000 litros de água por quilo."},
     Jeans: {
            consumoAguaTexto: "Aproximadamente 10.000 litros de água por calça jeans."},
     Arroz: {
            consumoAguaTexto: "Aproximadamente 2.500 litros de água por quilo."},
     CarnedeBoi: {
            consumoAguaTexto: "Aproximadamente 15.000 litros de água por quilo."},
    Açúcar: {
            consumoAguaTexto: "Aproximadamente 2.000 litros de água por quilo."},
    Couro: {
            consumoAguaTexto: "Aproximadamente 17.000 litros de água por peça de couro."},
     PastadePapel: {
            consumoAguaTexto: "Aproximadamente 2.500 litros de água por quilo."},
     Alumínio: {
            consumoAguaTexto: "Aproximadamente 165.000 litros de água por quilo."},
    Azeitonas:{
            consumoAguaTexto: "Aproximadamente 3.000 litros de água por quilo de azeitonas."},
    Café:{
            consumoAguaTexto: "Aproximadamente 21.000 litros de água por quilo de café torrado."},
    Tomate: {
                consumoAguaTexto: "Aproximadamente 200 litros de água por quilo."},
    Batata: {
                consumoAguaTexto: "Aproximadamente 100 litros de água por quilo."},
    Pão: {
                consumoAguaTexto: "Aproximadamente 160 litros de água por pão de 500g."},
    Cerveja: {
                consumoAguaTexto: "Aproximadamente 300 litros de água por litro de cerveja."},
    Maçã: {
                consumoAguaTexto: "Aproximadamente 125 litros de água por quilo."},
     papelhigiênico: {
                consumoAguaTexto: "Aproximadamente 140 litros de água por rolo." },
    Papelao: {
                consumoAguaTexto: "Aproximadamente 2.000 a 3.000 litros de água por tonelada de papelão."},   
            
        };
       

function calcularConsumo() {
    const itemSelecionado = document.getElementById("itemSelecionado").value;
    const item = itens[itemSelecionado];

    if (item) {
        document.getElementById("consumoAguaTexto").textContent = item.consumoAguaTexto;
    }

    document.getElementById('consumoAguaTexto').style.fontSize = '25px';
}
