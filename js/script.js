'use strict'

let message = [];

function addMessage(text) {
    const chat = { 
        text,
        id: Date.now()
    }

    message.push(chat);
    console.log(message);

    //Render message to the screen
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`

    );

    
};


    
    

const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('.typedMessage');

    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();

    }
});

    let i = 0;
    let timer = setInterval(() => {
        

        if (message[i].text !== 'deleted') {
            document.querySelector('.message_show_p').textContent = ' ';

            document.querySelector('.message_show_p').textContent = message[i].text;
        }       
        

        document.querySelector('.message_show-btn').addEventListener('click',function() {
            message[i-1].text = 'deleted';
            
        });
    
        
        i++;
        if (i == message.length) {
            i = 0;
        }
    }, 2000);


    