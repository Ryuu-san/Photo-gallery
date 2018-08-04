function add_img() {
    var field = document.getElementById('field').value;
    var block = document.createElement('div');
    block.id = 'workimage';
    var image = document.createElement('img');
    image.src = field;
    block.appendChild(image);
    var obj = document.getElementById('img_container');
    obj.insertBefore(block, obj.children[0]);
}

function del() {
    document.getElementById('field').value = '';
}