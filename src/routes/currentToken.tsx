import {useState, useEffect} from "react";

import { getCurrentToken } from "../api/api";

const CurrentToken = () => {
    const [currentToken, setCurrentToken] = useState<String>("T-102");
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

    return (
      <main>
        <div className="card">
            <p className="card__title">Current Token</p>
            <p className="card__body">{currentToken}</p>
        </div>
      </main>
    );
}

export default CurrentToken;