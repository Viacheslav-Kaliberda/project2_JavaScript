const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');


for (const item of items )
{
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);
}



for (const placeholder of placeholders) {

    placeholder.addEventListener('dragover',dragover);
    placeholder.addEventListener('dragenter',dragenter);
    placeholder.addEventListener('dragleave',dragleave);
    placeholder.addEventListener('drop',dragdrop);

}

let ItemDrag;

function dragstart(event) {

    event.target.classList.add('drag-now');
    ItemDrag = event.target;

}

function dragend(event) {

    event.target.className.remove('drag-now');

}

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
        event.target.classList.add('drag-now');
event.target.classList.add('drag-now');

}
function dragleave(event) {
    event.target.classList.remove('drag-now');

}
function dragdrop() {

    const placeholder = this;

placeholder.prepend(ItemDrag);
placeholder.classList.remove('drag-now');

}