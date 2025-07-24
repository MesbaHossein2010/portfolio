document.getElementById('ContactUs').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target
    const errorsDiv = document.getElementById('form-errors')

    let errors = [];

    if (!form['name'].value) errors.push("Name is required.");
    if (!form['email'].value || !form['email'].value.includes('@')) errors.push("Valid email is required.");
    if (!form['message'].value) errors.push("Message cannot be empty.");

    if (errors.length > 0) {
        errorsDiv.innerText = errors.join('\n');
        errorsDiv.style.display = 'block';
    } else {
        errorsDiv.style.display = 'none';

        const message = {
            name: form['name'].value,
            email: form['email'].value,
            message: form['message'].value,
        }
        sentMessages.push(message)
        console.log(sentMessages)

        form['name'].value = null
        form['email'].value = null
        form['message'].value = null
    }

});
