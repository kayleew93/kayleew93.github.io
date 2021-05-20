const input = document.querySelector('#fav');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    if (input.value != '') {
        let li = document.createElement('li');
        li.textContent = input.value;
        
        let deletebutton = document.createElement('button');
        deletebutton.innerHTML = '&#10060;';
        li.append(deletebutton);

        list.append(li);

        deletebutton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        })

        input.value = '';
        input.focus();
        
    }

});

