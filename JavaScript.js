function add_img() {
    var field = document.getElementById('field').value;
    var block = document.createElement('td');
    block.id = 'workimage';
    var image = document.createElement('img');
    image.src = field;
    block.appendChild(image);
    var obj = document.getElementById('img_container_2');
    obj.insertBefore(block, obj.children[0]);
}

function del() {
    document.getElementById('field').value = '';
}
