const eventButton = document.getElementById('eventButton')

const x = document.querySelector('#paragraphs')



const result = fetch("http://localhost:3023/quotes").then((response) => {
    return response.json()
}).then((data) => {

    console.log(data)
    console.log(data.quotes)

    const quotes = data.quotes

    eventButton.addEventListener('click', (event) => {
        let sentence = ''

        quotes.forEach(function(quote) {
            sentence = sentence + quote + ' '
        })

        sentence = sentence.substring(0,sentence.length -1) + '.'
        console.log(sentence)
        const ipsumDiv = document.getElementById('ipsumDisplay')
        const ipsumParagraph = document.createElement('p')
        ipsumParagraph.innerText = sentence
        ipsumDiv.appendChild(ipsumParagraph)
        console.log(parseInt(x.value))
        event.preventDefault()
    })



})











