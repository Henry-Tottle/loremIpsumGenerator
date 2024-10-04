const result = fetch("http://localhost:3023/quotes").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(data.quotes)
})









//
//
// const testString = 'This is a test string'
// const testDisplay = document.getElementById("ipsumDisplay")
// const testElement = document.createElement('p')
// testElement.textContent = testString
// testDisplay.appendChild(testElement)

