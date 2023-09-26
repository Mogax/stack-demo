import './styles/App.css'
import {CardAnim} from "./components/Anim/CardAnim/CardAnim.tsx";

function App() {

    return (
        <CardAnim title={"Défault"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate enim\n" +
            "                    eveniet, expedita facere fuga illum iste."} status={"correct"}/>
    )
}

export default App
