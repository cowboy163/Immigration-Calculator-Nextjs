const scrollToFirstError = () => {
    const firstErrorElement = document.querySelector('.Mui-error');
    if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'auto', block: 'center' });
    }
}
const handleErrorSubmit = () => {
    setTimeout(() => {
        scrollToFirstError()
    }, 50)
}
export default handleErrorSubmit