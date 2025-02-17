import { AddCircleOutlineRounded } from "@mui/icons-material"
import { FormEventHandler } from "react"

interface FormPropTypes {
    createTodo: FormEventHandler
    input: string
    setInput: (input: string) => void
}

const Form = ( {createTodo, input, setInput} : FormPropTypes) => {
  return (
    <form onSubmit={createTodo} className="flex justify-between bg-teal-300 p-4 rounded-lg items-center">
        <input onChange={(e) => setInput(e.target.value)} value={input} className="w-full text-xl bg-white rounded-lg p-[3px] shadow-gray-950"/>
        <button className="ml-2 rounded-lg text-gray-800 cursor-pointer">
            <AddCircleOutlineRounded />
        </button>
    </form>
  )
}

export default Form