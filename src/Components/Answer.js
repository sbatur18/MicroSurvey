import { StyledMultipleAnswer } from "./MultipleOptions-style";
import { StyledShortAnswer } from "./ShortText-style";

const Answer = ( {className, type, options, qNum, formik, updated, updater} ) => {

    const getDropdownOptions = (num) => {
        const array = []
        for(var i = 0; i < num; i++){
          let a = i;
          array.push(
            <option key={a}>{options[a]}</option>)
        }
        return array
    }

    const getMultipleOptions = (num) => {
        let optionsArray = null
        if (formik.values[qNum] === "") {optionsArray= new Array(num).fill("0");
        } else {optionsArray = formik.values[qNum]}
        const array = []
        for(var i = 0; i < num; i++){
          let a = i;
          array.push(<div key={a}>
                <input onChange={
                            (event) => {
                                    if (event.target.checked) {
                                    optionsArray[a] = "1"
                                    } else {
                                    optionsArray[a] = "0"
                                    }
                                    formik.values[qNum] = optionsArray
                                    updater(updated+1)
                            }
                        }
                        type="checkbox"
                        id={a}
                        defaultChecked={(optionsArray[a]==="1")}
                />
                    <p>{options[a]}</p>
                </div>
          )
        }
        return array
    }

    const findCorrectArea = (type) => {
        if (type === "LONG_ANSWER") {
            return <textarea 
                        name="" 
                        id={qNum} 
                        cols="30" rows="10" 
                        onChange={formik.handleChange} 
                        value={formik.values[qNum]}>
                    </textarea>
        } else if (type === "SINGLE_SELECTION") {
            const numberOptions = Object.keys(options).length
            return <select 
                        name="" 
                        id={qNum} 
                        onChange={formik.handleChange}
                        value={formik.values[qNum]}
                    >
                {getDropdownOptions(numberOptions)}
            </select>
        } else if (type === "SHORT_ANSWER") {
            return <StyledShortAnswer>
                        <input type="text" 
                            onChange={formik.handleChange}
                            id = {qNum} 
                            value={formik.values[qNum]}  
                        ></input>
                    </StyledShortAnswer>
        } else if (type === "MULTIPLE_SELECTION") {
            const numberOptions = Object.keys(options).length
            return <StyledMultipleAnswer>
                {getMultipleOptions(numberOptions)}
            </StyledMultipleAnswer>
        }
    }

    return ( 
        <div className={className}>
            {findCorrectArea(type)}
        </div>
     );
}
 
export default Answer;