import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Propper from '..';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    let current = history[history.length - 1];

    function renderItems() {
        return current.data.map((item) => (
            <MenuItem
                key={item.title}
                data={item}
                onClick={() => {
                    if (!!item.children) {
                        setHistory((oldvalue) => [...oldvalue, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        ));
    }

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Propper>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </Propper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
