import classNames from 'classnames/bind';
import style from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Propper from '../../../Propper';
import AccountItem from '../../../AccountItem';
import Button from '../Button';
import Menu from '../../../Propper/Menu';

const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },{
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'Feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    placement="auto"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Propper>
                                <h4 className={cx('search-title')}>
                                    <span>Account</span>
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Propper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button size="medium" type="text">
                        Upload
                    </Button>
                    <Button size="medium" type="primary">
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS} onChange={(item)=>{
                        console.log(item);
                    }}>
                        <button size="small" className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
