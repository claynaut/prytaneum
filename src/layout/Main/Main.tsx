/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import {
    Container as MUIContainer,
    ContainerProps,
    Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

type Props = {
    children?: React.ReactNodeArray | React.ReactNode;
    spacing?: number;
} & Omit<ContainerProps, 'children'>;

const useStyles = makeStyles<Theme, Props>((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        flex: '1 1 100%',
        display: 'flex',
    },
    main: {
        flex: '1 1 100%',
    },
    spacing: ({ spacing }) => ({
        padding: spacing ? theme.spacing(spacing) : 0,
    }),
}));

const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { children, ...passThroughProps } = props;
    const classes = useStyles(props);
    return (
        <MUIContainer
            disableGutters
            maxWidth='md'
            ref={ref}
            className={classes.root}
            {...passThroughProps}
        >
            <main className={clsx([classes.main, classes.spacing])}>
                {children}
            </main>
        </MUIContainer>
    );
});

Container.defaultProps = {
    children: undefined,
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

export default Container;
