import React, { useState } from "react";
import { TextField, Button } from '@mui/material';

function MyForm() {
    const [state, setState] = useState({
        youtubeUrl: ""
    });

    const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <TextField
                        color={"primary"}
                        type="text"
                        name="email"
                        value={state.youtubeUrl}
                        onChange={handleInputChange}
                        variant="outlined"
                        placeholder="Enter the Youtube Url"
                    />
                <Button type="submit" variant="contained" color="primary">
                    Download
                </Button>
            </form>
        </div>
    );
}

export default MyForm