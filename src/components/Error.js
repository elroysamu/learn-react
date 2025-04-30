import { useRouteError } from "react-router";

export const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
            <h3>{error.message}</h3>
            <h4>{error.stack}</h4>
            <h5>{error.data}</h5>
            <h6>{error.info}</h6>
            {console.log(error)}
            <p>Oops! Something went wrong.</p>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or go back to the homepage.</p>
            <p>If you think this is an error, please contact support.</p>
            <p>We apologize for the inconvenience.</p>
            <p>Thank you for your understanding!</p>
            <p>For more information, please visit our <a href="/">homepage</a></p>
            <p>Or go to our <a href="/contact">contact page</a> for assistance.</p>
            <p>If you have any questions, feel free to reach out to us!</p>
            <p>We are here to help you!</p>
            <p>Thank you for your patience!</p>
            <p>We appreciate your feedback!</p>
            <p>If you have any suggestions, please let us know!</p>
            <p>We value your input!</p>
            <p></p>
        </div>
    );
}