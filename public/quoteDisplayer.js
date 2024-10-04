


const eventButton = document.getElementById('eventButton')

const x = document.querySelector('#paragraphs')
const ipsumDiv = document.getElementById('ipsumDisplay')


const result = fetch("http://localhost:3023/quotes").then((response) => {
    return response.json()
}).then((data) => {

    console.log(data)
    console.log(data.quotes)

    const quotes = data.quotes

    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }




    eventButton.addEventListener('click', (event) => {
        let child = ipsumDiv.lastElementChild
        while (child) {
            ipsumDiv.removeChild(child)
            child = ipsumDiv.lastElementChild
        }
        for (let count=1; count<=parseInt(x.value); count++) {
            shuffleArray(quotes)
            let sentence = ''
        quotes.forEach(function(quote) {
            sentence = sentence + quote + ' '
        })

        sentence = sentence.substring(0,sentence.length -1) + '.'
        const ipsumParagraph = document.createElement('p')

        ipsumParagraph.innerText = sentence
        ipsumDiv.appendChild(ipsumParagraph)
        console.log(parseInt(x.value))
        event.preventDefault()
        }
    })


})













