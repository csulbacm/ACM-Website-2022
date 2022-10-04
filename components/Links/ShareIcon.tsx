import { Fab } from '@mui/material';
import { useEffect, useState } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';

export function ShareIcon() {
    const [canShare, setCanShare] = useState(false);
    useEffect(() => {
        if (
            typeof window !== 'undefined' &&
            typeof window.navigator.share !== 'undefined'
        ) {
            setCanShare(true);
        }
    }, []);

    return canShare ? (
        <Fab
            sx={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
            }}
            onClick={async () => {
                await navigator
                    .share({
                        title: 'CSULB ACM',
                        text: 'Check out this website!',
                        url: 'https://csulb.acm.org/links',
                    })
                    .catch(() => {});
            }}
            color="primary"
        >
            <IosShareIcon />
        </Fab>
    ) : null;
}
