function creation() {
    var para = document.createElement("input");
    let ae = document.createElement('br');
    para.setAttribute('value', '05')
    document.body.appendChild(ae)
    document.getElementById('tata').appendChild(para)
    document.body.appendChild(ae)

}

function para() {
    let para = document.createElement('p')
    para.innerHTML = `paragraphe`
    para.setAttribute('style', 'color:red')
    document.getElementById('para').appendChild(para)
}

function deletes() {
    document.getElementById('corp').innerHTML = ``
}