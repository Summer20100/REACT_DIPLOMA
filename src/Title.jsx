import { useDispatch, useSelector } from "react-redux"
import { inputText } from "./redux/actions"


function Title(props) {
    console.log('inputTex: ', props)
    const text = useSelector(state => {
        const { inputReducer } = state
        return inputReducer.text
    })

    const dispatch = useDispatch()

    const handleChange =(ev) => {
        //console.log(ev.target.value)
        dispatch(inputText(ev.target.value))
    }

    return (
        <div>
            <input onChange={ handleChange } />
            { text }
        </div>
    )
}

export default Title