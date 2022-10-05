// create a page that redirects to the hacktoberfest page at: https://csulbacm.github.io/hacktoberfest
import { useEffect } from 'react';

export default function Hacktoberfest() {
    useEffect(() => {
        window.location.href = 'https://csulbacm.github.io/hacktoberfest';
    }, []);

    return <div>Redirecting...</div>;
}
