let arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
let arr2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' ,'Leo']
chuoi = prompt('Nhập tên ngôi sao:')
chomsao(chuoi);
function chomsao(chuoi){
    let dem =0;
    for (let a in arr1){
        // for (let a=0;a<arr1.length;a++)
        if (arr1[a] === chuoi){
            document.getElementById('1').innerHTML = arr2[a]
            dem+=1
            break;
        }
    }
    if (dem === 0) document.getElementById('1').innerHTML = 'Không tìm thấy tên chòm sao'
}
