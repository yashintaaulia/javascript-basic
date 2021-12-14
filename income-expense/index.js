/*  
   INCOME & EXPENSE TRACKER
   
   SUMMARY
   =========
   Buatlah sebuah income and expense tracker yang dapat mengatur list pengeluaran dan pemasukan.
   
   TASKS
   =========
   Aplikasikan modular function untuk membuat aplikasi tersebut. Berikut rincian :
   
   1. function getTracks()
   - mengambil variable tracks lalu menghasilkan output seperti berikut :
    Expense :
    1. Bayar cicilan : Rp. 1.000.000
    2. Beli Makan : Rp. 500.000
    Income
    1. Income 1 : Rp. 1.000.000
    2. Jual makan : Rp. 500.000
   
    2. function addTrack(type,name,price)
    - menambahkan track (type : expense dan income), diluar itu error ("Input the right track!!")

    3. function deleteTrack(id)
    - menghapus track (id) jika tidak ada diluar itu error ("Input the right track")

    4. function statusTrack()
    - untuk mengecek balance dengan rumus income - expense
    jika Minus tampilkan message : "Kurangi pengeluaran"
    jika Plus tampilkan message : "Aman gan"

    5. function rupiahFormatter(price)
    - mengubah digit harga menjadi rupiah
  */

    var tracks = [
        {
            id: 1,
            name: "Income 1",
            type: "income",
            total: 1000000
        },{
            id: 2,
            name: "Jual makan",
            type: "income",
            total: 500000
        },{
            id: 1,
            name: "Bayar cicilan",
            type: "expense",
            total: 1000000
        },{
            id: 2,
            name: "Beli makan",
            type: "expense",
            total: 500000
        }
    ]
    // console.log(tracks)

    function getTracks(tracks){
        console.log("Expense: ")
        for (var i = 0; i < tracks.length; i++){
            if(tracks[i].type === "expense"){
                console.log(tracks[i].id + ". " + tracks[i].name + ": Rp " + tracks[i].total);
            }
        } 
        console.log("Income: ")
        for (var i = 0; i < tracks.length; i++){
            if (tracks[i].type === "income"){
                console.log(tracks[i].id + ". " + tracks[i].name + ": Rp " + tracks[i].total);
            }
        }
    }
    // getTracks(tracks)

function addTrack(type, name, total) {
    var id = tracks[tracks.length - 1].id + 1;
    var tempObj = {
        id, name, type, total
    };
}

