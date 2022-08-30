import { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';

export default function Test() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="#about" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="#officers" className="flex items-center">
                    Team
                </Link>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="#events" className="flex items-center">
                    Events
                </Link>
            </Typography>
            <Typography as="li" variant="small" className="p-1 font-normal">
                <Link href="#sponsors" className="flex items-center">
                    Sponsors
                </Link>
            </Typography>
        </ul>
    );

    return (
        // <div className="navContainer w-full">
        <Navbar className="sticky top-2.5 z-50 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 ">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="csulb.acm.org"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span>CSULB ACM</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                >
                    <a
                        href="https://csulb.campuslabs.com/engage/submitter/form/start/545578"
                        target="blank"
                    >
                        APPLY NOW!
                    </a>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <a
                        href="https://csulb.campuslabs.com/engage/submitter/form/start/545578"
                        target="blank"
                    >
                        APPLY NOW!
                    </a>
                </Button>
            </MobileNav>
        </Navbar>
        // </div>
    );
}
