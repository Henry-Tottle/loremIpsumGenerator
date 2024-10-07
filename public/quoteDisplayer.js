const eventButton = document.getElementById('eventButton')

const x = document.querySelector('#paragraphs')
const ipsumDiv = document.getElementById('ipsumDisplay')


const result = fetch("http://localhost:3024/quotes").then((response) => {
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
            let selectedQuotes = [quotes[1],
                quotes[2],quotes[3],
                quotes[4],quotes[5],
                quotes[6],quotes[7],
                quotes[8],quotes[9],
                quotes[10]]


            let sentence = ''
        selectedQuotes.forEach(function(quote) {
            sentence = sentence + quote + ' '
        })

        const ipsumParagraph = document.createElement('p')

        ipsumParagraph.innerText = sentence.toUpperCase()
        ipsumDiv.appendChild(ipsumParagraph)
        console.log(parseInt(x.value))
        event.preventDefault()
        }
    })


})













