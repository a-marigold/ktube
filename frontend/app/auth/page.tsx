import type { AuthQueryParams } from '@ktube/shared';

import PrimaryLink from '@/UI/PrimaryLink';

import authStyles from './Auth.module.scss';

interface AuthPageProps {
    searchParams: Promise<Partial<AuthQueryParams>>;
}

export default function Auth({ searchParams }: AuthPageProps) {
    return searchParams.then((params) => {
        const message = params.message;
        const status = params.status;

        return (
            <main className={authStyles['auth-page']}>
                <div className={authStyles['message-box']}>
                    {message && (
                        <span className={authStyles['status']}>{message}</span>
                    )}

                    {status && (
                        <h1 className={authStyles['message']}>{status}</h1>
                    )}

                    <PrimaryLink
                        href='/'
                        aria-label='Go to home page'
                        title='Go to home page'
                    />
                </div>
            </main>
        );
    });
}
