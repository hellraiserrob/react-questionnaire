export const loadAnswers = () => {
    try {
        const answers = localStorage.getItem('answers')
        if(answers === null){
            return []
        }
        return JSON.parse(answers)
    } catch (err) {
        return []
    }
}

export const setAnswers = (answers) => {
    try {
        const data = JSON.stringify(answers)
        localStorage.setItem('answers', data)
    } catch (err) {
        console.log(err)
    }
}