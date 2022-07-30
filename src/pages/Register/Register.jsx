import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operation";
import { NavLink } from 'react-router-dom';
// import { useRegisterUserMutation } from "redux/contactsSlice";
import s from './Register.module.css';

const Register = () => {
    const dispatch = useDispatch();
    // const [registerUser] = useRegisterUserMutation()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення в імпуті

        // залежно від того яке поле міняється, то я записую в стейт
        switch (name) {
            case "name":
                setName(value)
                break;
            
            case "email":
                setEmail(value)
                break;
            
            case "password":
                setPassword(value);
                break;
        
            default:
                break;
        }
    };

    const handleRegistrationUser = (e) => {
        e.preventDefault();
        dispatch(register({name, email, password}))
        // registerUser({name, email, password})
        reset()
    };


    const reset = () => {
        // очищую імпути
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={`${s.loginContainer} container`}>
            <div className={s.leftPart}>
                <form onSubmit={handleRegistrationUser} className={s.form}>
                    <label className={s.label}>
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className={s.input}
                            placeholder="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={s.label}>
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className={s.input}
                            placeholder="email"
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={s.label}>
                        {/* Password */}
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className={s.input}
                            placeholder="password"
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button type="submit" className={s.btn}>Registration</button>
                </form>
            </div>
            <div className={s.rightPart}>
                <h2 className={s.title}>Already registered?</h2>
                <NavLink
                    to='/login'
                    className={s.navLink}
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Register;