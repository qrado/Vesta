//toggle function
function toggle() {
    $('.keyboardViewSection').toggle();
    $('.touchViewSection').toggle();

        var x = document.getElementById("toggleBtn");
        if (x.innerHTML === "Keyboard View") {
            x.innerHTML = "Touch View";
        } else {
            x.innerHTML = "Keyboard View";
        }
}
//retrieve products from json file
    $(document).ready(function(){

        //retrieve touchView products
            $.getJSON("assets/products/sample_products.json", function(data){
                var product_data = '';
                $.each(data, function (key, value){
                    product_data += '<div class="col-3 productCard">';
                    product_data += '<a href="#" class="productItem">';
                    product_data += '<div class="card">';
                    product_data += '<img src="assets/images/Firecracker.jpg" alt="Avatar" style="width:100%; height: 8vh;">';
                    product_data += '<div class="container">';
                    product_data += '<p>'+ value.name + '</p>';
                    product_data += '</div>';
                    product_data += '</div>';
                    product_data += '</a>';
                    product_data += '</div>';
                });
                $('#touchViewProducts').append(product_data);

//retrieve keyboardView products
            $.getJSON("assets/products/sample_products.json", function(data){
                var product_data = '';
                $.each(data, function (key, value){
                    product_data += '<tr>';
                    product_data += '<td>'+value.article_number+'</td>';
                    product_data += '<td>'+value.name+'</td>';
                    product_data += '<td>'+value.stock+'</td>';
                    product_data += '<td>'+'&euro;'+ value.price+'</td>';
                    product_data += '<td id="keyboardViewButtonTr">'
                        +"<button type=\"button\" class=\"btn addFree\">Add Free</button>"
                        +"<button type=\"button\" class=\"btn addToCart\">Add to Cart</button>"
                        +'</td>';
                    product_data += '</tr>';
                });
                $('#productTable').append(product_data);
            });

        });

        //   <div class="col-3 productCard">
//         <a href="#" class="productItem" data-name="Celebration cracker 90 schots" data-price="50000" data-id="1">
//             <div class="card">
//                 <img src="assets/images/Firecracker.jpg" alt="Avatar" style="width:100%; height: 9vh;">
//                     <div class="container">
//                         <p> Rotje</p>
//                     </div>
//             </div>
//         </a>
//     </div>

    //Search function
//     function searchTable() {
//     var input, filter, found, table, tr, td, i, j;
//     input = document.getElementById("searchBar")[0];
//     filter = input.value.toUpperCase();
//     table = document.getElementById("productTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td");
//     for (j = 0; j < td.length; j++) {
//     if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
//     found = true;
// }
// }
//     if (found) {
//     tr[i].style.display = "";
//     found = false;
// } else {
//     tr[i].style.display = "none";
// }
// }
// }
});


