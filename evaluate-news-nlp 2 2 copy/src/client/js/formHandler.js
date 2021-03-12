export function submitHandler(e) {
    e.preventDefault()
    const url = document.getElementById('url').value
    Client.checkUrl(url)
    if (Client.checkUrl(url) === true) {

        fetch('https://localhost:8080/meaningcloud-api', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })

            })
            .then(res => {
                return res.json()

            })
            .then((res) => {
                console.log(res)

                document.getElementById('polarity').innerHTML = `Polarity: ${allData.polarity}`;
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${allData.polarity}`;
            })

    } else {
        alert('Not a valid url! Please Re-try!')
    }


}