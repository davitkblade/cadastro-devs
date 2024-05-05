


const addBtn = document.getElementById('addBtn')
const form = document.getElementById('for')

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

    addBtn.addEventListener('click', (ev) =>{
        ev.preventDefault()

        let number_input = 0
        number_input++

        const button_cadastrar = document.getElementById('cadastrar')
        const div = document.getElementById('eventt')

        const eventt = document.createElement('div')
        const br = document.createElement('br')
        const br_1 = document.createElement('br')
        const br_2 = document.createElement('br')
        const br_3 = document.createElement('br')

        const label_Tec = document.createElement('label')
        label_Tec.innerText = 'Nome da tecnologia'
        label_Tec.setAttribute('for','tecnologias') 

        const input_tecnologic = document.createElement('input')
        input_tecnologic.type = 'text'
        input_tecnologic.name = 'tecnologias'
        input_tecnologic.id = 'tecnologias'
        input_tecnologic.placeholder = 'Nome da tecnologia'
        input_tecnologic.className = 'input_text_tecnologias'

        const tempo_expience = document.createElement('label')
        tempo_expience.innerText = 'Tempo de experiência:'
        tempo_expience.setAttribute('for','input_time' + number_input) 

        const inputOne = document.createElement('input')
        inputOne.type = 'radio'
        inputOne.name = 'input_time' + number_input
        inputOne.id ='input_time1-' + number_input
        inputOne.value = '0-2 anos'

        const labelOne = document.createElement('label')
        labelOne.innerText = '0-2 anos'
        labelOne.setAttribute('for', 'input_time1-' + number_input)

        const inputTwo = document.createElement('input')
        inputTwo.type = 'radio'
        inputTwo.name = 'input_time' + number_input
        inputTwo.id ='input_time2-' + number_input
        inputTwo.value = '3-4 anos'

        const labelTwo = document.createElement('label')
        labelTwo.innerText = '3-4 anos'
        labelTwo.setAttribute('for', 'input_time2-' + number_input)

        const inputThree = document.createElement('input')
        inputThree.type = 'radio'
        inputThree.name = 'input_time' + number_input
        inputThree.id ='input_time3-' + number_input
        inputThree.value = '5+ anos'

        const labelThree = document.createElement('label')
        labelThree.innerText = '5+ anos'
        labelThree.setAttribute('for', 'input_time3-' + number_input)

        const remove = document.createElement('button')
        remove.innerText = 'Remover'

        eventt.append(label_Tec,br,input_tecnologic,br_1,tempo_expience,br_2,inputOne,labelOne,inputTwo,labelTwo,inputThree,labelThree,br_3,remove)
        div.appendChild(eventt)
        form.appendChild(div)

        remove.addEventListener('click', (ev) =>{
            ev.preventDefault()
            div.removeChild(eventt)
        })

        button_cadastrar.addEventListener('click', (ev) => {
            ev.preventDefault()

            const name = document.getElementById('name').value
            const tecnologia_name = input_tecnologic.value
            let time_tecnologias = ''

            document.querySelectorAll("input[type= 'radio']:checked").forEach(function (item){
                time_tecnologias += ' - ' + item.value + '\n'
            })

            console.log({name, tecnologia_name, time_tecnologias})

            alert(
                "Cadastro do desenvolvedor concluído" +
            "\nNome do desenvolvedor: " + name +
            "\nNome da tecnologia: " + tecnologia_name +
            "\nTempo de experiência: " + time_tecnologias 
            )
        })
    })
})