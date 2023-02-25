// create a page that redirects to the beachhacks page at: https://beachhacks.com

import { useEffect } from 'react';

export default function Beachhacks() {
    useEffect(() => {
        window.location.href = 'https://beachhacks.com';
    }, []);

    return <div>Redirecting...</div>;
}
