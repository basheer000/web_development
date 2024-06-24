document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    form.addEventListener ('Submit', function(event){
        event.preventDefault()


        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const guests = document.getElementById('guest').value.trim();

        if (name === '' || email === '' || guests === ''){
            alert('please fill out all fields');
            return;
        }

        alert('thank you, $(name)! your RVSP has been recieved')

        form.reset();

    });
});

