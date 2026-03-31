import React from 'react';

const AstrologyForm = () => {
    const [dateOfBirth, setDateOfBirth] = React.useState('');
    const [timezone, setTimezone] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(`Date of Birth: ${dateOfBirth}, Timezone: ${timezone}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date of Birth:
                <input
                    type='date'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                />
            </label>
            <label>
                Timezone:
                <input
                    type='text'
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    required
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
};

const App = () => {
    return (
        <div>
            <h1>Astrology Form</h1>
            <AstrologyForm />
        </div>
    );
};

export default App;