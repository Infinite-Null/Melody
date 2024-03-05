import BottomSheetMusic from "../Component/BottomMusic/BottomSheetMusic";
import Context from "./Context";



const ContextState = (props)=>{
    return <Context.Provider value={{}}>
        {props.children}
    </Context.Provider>
}

export default  ContextState
