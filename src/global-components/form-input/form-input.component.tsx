import React, {useState} from "react";
import './form-input.styles.scss';
import ellieAlvaz from '../../assets/images/ellie-alvaz.png'
import kyleethompson from '../../assets/images/kylee-thomson.png';
import laurelfisher from '../../assets/images/laurel-fisher.png';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "@/store/selector";

type FormInputProps =  {
    submitHandler: (param: string) => void;
    initialVal?: string;
    hasCancelButton?: boolean;
    handleCancel?: () => void;
}
const FormInput: React.FC<FormInputProps> = ({submitHandler, initialVal = '', hasCancelButton, handleCancel}) => {
    const name = useSelector(selectCurrentUser);

    const [comment, setComment] = useState(initialVal);


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setComment(e.target.value)
    } 

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitHandler(comment);
        setComment('');
    }

    return (
        <div className="form-input-container">
            <div className="form-input-container__image">
            <img src={(name === 'Ellie Alvaz')? ellieAlvaz: (name === 'Kylee Thomson')? kyleethompson: laurelfisher}/>
            </div>
            <form onSubmit={onSubmitHandler} className="form-input-container__form">
                <input placeholder="Add comment..." className="form-input-container__input" name="commentText" value={comment} onChange={onChangeHandler}/>
                {/* <button>post</button> */}
                {/* {hasCancelButton && <button type="button" onClick={handleCancel}>cancel</button>} */}
            </form>
        </div>
    )
}

export default FormInput;