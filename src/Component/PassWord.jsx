import { useState } from "react";
export default function PassWord() {


    const PasswordInput = () => {
        const [password, setPassword] = useState('');
        const [strength, setStrength] = useState('');
        const [color, setColor] = useState('');

        // Function to evaluate password strength
        const evaluateStrength = (password) => {
            // Weak: Password is less than 6 characters or only letters
            const isWeak = password.length < 6 || /^[a-zA-Z]+$/.test(password);
            // Medium: Password has 6-8 characters with a mix of letters and numbers
            const isMedium = password.length >= 6 && password.length <= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
            // Strong: Password has more than 8 characters with letters, numbers, and symbols
            const isStrong = password.length > 8 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

            if (isStrong) {
                setStrength('Strong');
                setColor('green');
            } else if (isMedium) {
                setStrength('Medium');
                setColor('yellow');
            } else if (isWeak) {
                setStrength('Weak');
                setColor('red');
            }
        };

        // Handle input change
        const handleChange = (e) => {
            const value = e.target.value;
            setPassword(value);
            evaluateStrength(value);
        };



        return(
            <>
                <h1 className="text-center">Password</h1>
                <div className="password-input-container" style={{ width: '300px' }}>
                    <input
                        type="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    <div
                        style={{
                            marginTop: '8px',
                            padding: '5px',
                            backgroundColor: color === 'green' ? '#4CAF50' : color === 'yellow' ? '#FFEB3B' : '#F44336',
                            borderRadius: '4px',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        {strength}
                    </div>
                    <div
                        style={{
                            marginTop: '5px',
                            height: '5px',
                            width: '100%',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '3px',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                width: strength === 'Strong' ? '100%' : strength === 'Medium' ? '60%' : '30%',
                                backgroundColor: color === 'green' ? '#4CAF50' : color === 'yellow' ? '#FFEB3B' : '#F44336',
                                borderRadius: '3px',
                            }}
                        />
                    </div>
                </div>




            </>
        );
    }