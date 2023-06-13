import React from "react";
import './form-input.styles.scss';
import EllieAllaz from '../../assets/images/ellie-alvaz.png'

const FormInput: React.FC = () => {

    return (
        <div className="form-input-container">
            <div className="form-input-container__image">
                <img src={EllieAllaz} alt="profile image" />
            </div>
            <input placeholder="Add comment..." className="form-input-container__input"/>
        </div>
    )
}

export default FormInput;