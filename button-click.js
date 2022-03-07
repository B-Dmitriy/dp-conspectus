const onClickHandler = () => {

    const button = document.querySelector('#card-button');

    button.addEventListener('click', () => {
        alert('click');
    });
}

window.onload = onClickHandler;