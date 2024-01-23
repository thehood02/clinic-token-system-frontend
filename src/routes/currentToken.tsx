import {FC, useEffect, useState} from "react";

import { getCurrentToken } from "../api/api";

const CurrentToken:FC = () => {
    const [currentToken, setCurrentToken] = useState<String>("");
    const [error, setError] = useState<String>("");

    useEffect(() => {
        fetchCurrentToken();
    }, []);

    const fetchCurrentToken = async () => {
        const token = await getCurrentToken();
        if (token.error) {
            setError(token.error);
        } else {
            setCurrentToken(token.data);
        }
    }

    return <div>{currentToken}</div>
}

export default CurrentToken;