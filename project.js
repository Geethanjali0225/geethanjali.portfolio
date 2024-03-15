// project.js

function enlargeImage(imageUrl) {
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<span class="close" onclick="closeModal()">&times;</span><img src="' + imageUrl + '" class="modal-content">';
    document.body.appendChild(modal);
}

function closeModal() {
    var modal = document.querySelector('.modal');
    modal.parentNode.removeChild(modal);
}
