
(function () {
    const API_URL = `https://api.adviceslip.com/advice/`;
    const adviceId = document.querySelector('#advice-id')
    const adviceBody = document.querySelector('.advice-body')

    async function getData() {
        const res = await fetch(`${API_URL}${(Math.floor(Math.random() * 200) + 1)}`)
        const data = await res.json()
        return data
    }

    document.querySelector('.get-advice')?.addEventListener('click', async e => {
        const { slip } = await getData()
        const { id, advice } = slip
        adviceId.textContent = id
        adviceBody.textContent = `"${advice}"`
    })
})()

