import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, type = 'text', children, size = 'medium', onClick, className, leftIcon }) {
    let Comp = 'button';

    let props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', type, size, {
        [className]: className,
    });
    if (size) {
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
