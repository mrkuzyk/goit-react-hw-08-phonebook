import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useLogInMutation } from "redux/contactsSlice";
import { logIn } from "redux/auth/auth-operation";
import s from './Login.module.css';

const Login = () => {
    // const [logIn] = useLogInMutation()
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення в імпуті

        // залежно від того яке поле міняється, то я записую в стейт
        switch (name) {
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

    const handleAddContact = (e) => {
        e.preventDefault();
        dispatch(logIn({email, password}))
        // logIn({email, password})
        reset()
    };


    const reset = () => {
        // очищую імпути
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleAddContact} className={s.form}>
            <label className={s.label}> Email
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={s.input}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={s.label}> Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className={s.input}
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className={s.btn}>Login</button>
        </form>
    );
};

export default Login;