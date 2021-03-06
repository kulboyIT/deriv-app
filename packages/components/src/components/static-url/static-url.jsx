import React from 'react';
import { getStaticUrl, PlatformContext } from '@deriv/shared';

const StaticUrl = ({ href, is_document, children, ...props }) => {
    const { is_appstore } = React.useContext(PlatformContext);

    return (
        <a href={getStaticUrl(href, { is_appstore }, is_document)} rel='noopener noreferrer' target='_blank' {...props}>
            {children}
        </a>
    );
};

export default StaticUrl;
